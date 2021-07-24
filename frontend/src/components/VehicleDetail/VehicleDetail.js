import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getOneVehicle } from '../../store/vehicle';
import { useHistory } from 'react-router-dom';
import { reviewVehicle, getReviews, editReview, removeReview } from '../../store/review';

const VehicleDetail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const history = useHistory();
    const vehicle = useSelector((state) => state.vehicles[id])
    const sessionUser = useSelector(state => state.session.user);
    const reviews = useSelector((state) => ((Object.values(state.reviews))))
    const listingReviews = reviews.filter(review => review?.Vehicle?.id === +id);
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(1);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            review,
            rating
        }
        let createdReview = await dispatch(reviewVehicle(id, payload))

        if (createdReview) {
            history.push(`/vehicles`)
        }
    }

    const handleDelete = (id) => {
        dispatch(removeReview(id))
        history.push(`/vehicles`)
        // if(deletedComment) {
        //     history.push(`/vehicles`)
        // }
    }

    let sessionLinks;
    if (sessionUser) {
            if (!(vehicle?.ageRestriction && sessionUser?.age < 25)) {
                sessionLinks = (
                    <>
                    <form>
                        <label>Trip Start: </label>
                        <input
                            type='date'
                            placeholder='From'
                            required/>
                        <input
                            type='time'
                            required />
                            <br></br>
                        <label>Trip End:</label>
                        <input
                            type='date'
                            placeholder='To'
                            required/>
                        <input
                            type='time'
                            required />
                            <br></br>
                        <Link to={`/vehicles/${id}/bookings`}>
                            <button type='submit'>Continue</button>
                        </Link>
                    </form>

                    <div className='reviews'>
                    <form onSubmit={handleSubmit}>
                        <textarea
                            type='text'
                            placeholder='leave a comment'
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                            />
                        <select value={rating} onChange={(e) => setRating(e.target.value)}>
                            <option value='5'>5</option>
                            <option value='4'>4</option>
                            <option value='3'>3</option>
                            <option value='2'>2</option>
                            <option value='1'>1</option>
                        </select>
                    </form>
                    <button type='submit' onClick={handleSubmit}>Submit Review</button>
                </div>
                </>
                )
        } else {
            sessionLinks = (
            <p>This vehicle has an age restriction.</p>
        )
    }
}

    // console.log(sessionUser.id)
    // console.log(listingReviews.User.id)
    // let sessionButtons;
    // if (sessionUser.id === listingReviews.User.id) {
    //     sessionButtons = (
    //         <button type='button'>Delete</button>
    //     )
    // }
    useEffect(() => {
        dispatch(getOneVehicle(id))
        dispatch(getReviews(id))
    }, [dispatch, id])

    return (
        <>
       <div>
            <p>The car: {vehicle?.year} {vehicle?.make} {vehicle?.model}</p>

            <p>Hosted by {vehicle?.User.username} </p>

            <p>Price: ${vehicle?.price} per day</p>

            <p>{vehicle?.description}</p>

       </div>


        <div className='booking'>
            {sessionLinks}
        </div>

        <h5>Comments</h5>
        <div className='reviews'>
               {listingReviews.map((review) => {
                   return (
                       <>
                        <div>
                        <p>{review.User.username} rated this vehicle a {review.rating} out of 5:</p>
                        </div>
                        <div>
                        {review.review}
                        </div>
                        <div>
                        {sessionUser && sessionUser.id === review.User.id &&
                            <>
                            <button type='button'>Edit</button>
                            <button onClick={() => handleDelete(review.id)}>Delete</button>
                            </>
                        }
                        </div>
                       </>
                   )
               })}
        </div>
    </>
    )
}

export default VehicleDetail;
