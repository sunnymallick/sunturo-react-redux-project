import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getOneVehicle } from '../../store/vehicle';
import { useHistory } from 'react-router-dom';
import { reviewVehicle, getReviews, removeReview } from '../../store/review';
import './VehicleDetail.css';


const VehicleDetail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    const vehicle = useSelector((state) => state.vehicles[id])
    const sessionUser = useSelector(state => state.session.user);
    const reviews = useSelector((state) => ((Object.values(state.reviews))))
    const listingReviews = reviews.filter(review => review?.Vehicle?.id === +id);
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(5);
    const history = useHistory();
    // const [showEditForm, setShowEditForm] = useState(false);

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

    // const handleEdit = async (e) => {
    //     e.preventDefault();
    //     const payload = {
    //         review,
    //         rating
    //     }
    //     let editedReview = await dispatch(editReview(id, payload))

    //     if (editedReview) {
    //         history.push(`/vehicles/${reviews.Vehicle.id}`)
    //     }
    // }

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
                    <div className='bookingLabel'>
                        <Link to={`/vehicles/${id}/bookings`}>
                            <button className='bookingButton' type='submit'>Book This Vehicle</button>
                        </Link>
                    </div>
                    <div className='placeComment'>
                        <form onSubmit={handleSubmit} className='reviewForm'>
                            <textarea
                                type='text'
                                placeholder='Leave a Comment and a Rating!'
                                value={review}
                                onChange={(e) => setReview(e.target.value)}
                                className='reviewTextArea'
                                />
                            <select value={rating} onChange={(e) => setRating(e.target.value)} className='reviewRating'>
                                <option value='5'>5 stars</option>
                                <option value='4'>4 stars</option>
                                <option value='3'>3 stars</option>
                                <option value='2'>2 stars</option>
                                <option value='1'>1 stars</option>
                            </select>
                            <button className='reviewSubmitButton' type='submit'>Submit Review</button>
                        </form>
                    </div>
                </>
                )
        } else {
            sessionLinks = (
            <p className='ageRestrictionNotice'>This vehicle has an age restriction.</p>
        )
    }
}

    useEffect(() => {
        dispatch(getOneVehicle(id))
        dispatch(getReviews(id))
    }, [dispatch, id])

    return (
        <>
            <div className='individualVehicleInfo'>
                <div className='individualVehicleContainer'>
                    <img src={vehicle?.vehicleImg} alt='vehiclepic' className='individualVehiclePic'/>
                    <div className='vehicleInfoContainer'>
                        <p className='individualVehicleInfo'>The car: {vehicle?.year} {vehicle?.make} {vehicle?.model}</p>

                        <p className='individualVehicleInfo'>Hosted by: {vehicle?.User.username} </p>

                        <p className='individualVehicleInfo'>Price: ${vehicle?.price} / day</p>

                        <p className='individualVehicleInfo'>Description: {vehicle?.description}</p>
                    </div>
                </div>



                <div className='booking'>
                    {sessionLinks}
                </div>

                <h5 className='commentsLabel'>Comments</h5>
                <div className='commentsArea'>
                    {listingReviews.map((review) => {
                        return (
                            <>
                                <div className='commentsInfo'>
                                    <p>{review.User.username} rated this vehicle a {review.rating} out of 5 stars:</p>
                                </div>
                                <div className='commentsInfo'>
                                    {review.review}
                                </div>
                                <div>
                                    {sessionUser && sessionUser.id === review.User.id &&
                                        <>
                                        {/* <button type='button' onClick={() => handleEdit(review.id)}>Edit</button> */}
                                        <button className='reviewDelete' onClick={() => handleDelete(review.id)}>Delete Comment</button>
                                    </>
                                    }
                                </div>
                            </>
                        )
                    })}
                </div>
        </div>
    </>
    )
}

export default VehicleDetail;
