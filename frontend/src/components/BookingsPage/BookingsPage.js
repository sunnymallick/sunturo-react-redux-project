import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setupBooking } from '../../store/booking';
import { useHistory } from 'react-router-dom';
import './BookingsPage.css';


const BookingsPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const sessionUser = useSelector(state => state.session.user);
    const userId = sessionUser.id
    console.log(userId)
    const vehicle = useSelector((state) => state.vehicles[id])
    const history = useHistory();
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = {
            startDate,
            endDate
        }
        let createdBooking = await dispatch(setupBooking(id, payload))

        if (createdBooking) {
            history.push(`/${userId}/bookings`)
        }
    }

    return (
        <>
        <div className='bookingForm'>
            <p className='bookingHeading'>Booking for the {vehicle?.year} {vehicle?.make} {vehicle?.model}</p>
            <form className='dateSelect' onSubmit={handleSubmit}>
                <label className='bookingDate'>Trip Start: </label>
                    <input
                        type='datetime-local'
                        placeholder='From'
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className='dateInput'
                        required/>
                <label className='bookingDate'>Trip End:</label>
                    <input
                        type='datetime-local'
                        placeholder='To'
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className='dateInput'
                        required/>
                    <button type='submit'>Place Booking</button>
                </form>
            </div>
        </>
        )
    }

export default BookingsPage
