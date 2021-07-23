import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getOneVehicle, reviewVehicle } from '../../store/vehicle';
import { useHistory } from 'react-router-dom';

const VehicleDetail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const history = useHistory();
    const vehicle = useSelector((state) => state.vehicles[id])
    const sessionUser = useSelector(state => state.session.user);
    const reviews = vehicle?.Review
    console.log(reviews)
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(1);
    // const [startDate, setStartDate] = useState('');
    // const [endDate, setEndDate] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            review,
            rating
        }
        let createdReview = await dispatch(reviewVehicle(id, payload))

        if (createdReview) {
            history.push(`/vehicles/${id}`)
        }
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
                        <input
                            type='text'
                            placeholder='leave a review'
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

    useEffect(() => {
        dispatch(getOneVehicle(id))
    }, [dispatch, id])

    return (
        <>
       <div>
        <p>The car: {vehicle?.year} {vehicle?.make} {vehicle?.model}</p>

        <p>Hosted by </p>

        <p>Price: ${vehicle?.price} per day</p>

        <p>{vehicle?.description}</p>

       </div>


        <div className='booking'>
            {sessionLinks}
        </div>

        <div className='reviews'>
                <p>{reviews?.review}</p>
                <p>{reviews?.rating}</p>
        </div>
    </>
    )
}

export default VehicleDetail;
