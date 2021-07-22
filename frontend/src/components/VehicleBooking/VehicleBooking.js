import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneVehicle, reviewVehicle } from '../../store/vehicle';
import { useHistory } from 'react-router-dom';

const VehicleBooking = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const history = useHistory();
    const vehicle = useSelector((state) => state.vehicles[id])
    const sessionUser = useSelector(state => state.session.user);
    const [review, setReview] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            review
        }
        let createdReview = await dispatch(reviewVehicle(id, payload))

        if (createdReview) {
            history.pushState(`/vehicles/${id}`)
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
                        <button type='submit'>Continue</button>
                    </form>

                    <div className='reviews'>
                    <form onSubmit={handleSubmit}>
                        <input
                            type='text'
                            placeholder='leave a review'
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                            />
                    </form>
                    <button type='submit'>Submit Review</button>
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
            <textarea>
                <p>{review.review}</p>
            </textarea>
        </div>
    </>
    )
}

export default VehicleBooking;
