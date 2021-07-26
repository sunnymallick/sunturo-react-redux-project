import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { getBookings, deleteBooking } from '../../store/booking';
import './UserBookings.css';


const UserBookings = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const bookings = useSelector((state) => ((Object.values(state.bookings))));
    const listingBookings = bookings.filter(booking => booking.userId === +id)
    console.log(listingBookings)
    const history = useHistory();

    useEffect(() => {
        dispatch(getBookings())
        dispatch(deleteBooking(id))
    }, [dispatch, id])

    const handleDelete = (id) => {
        dispatch(deleteBooking(id))
        history.push(`/vehicles`)
    }

    let content;
    if (!listingBookings.length) {
        content = (
            <p className='noBookingsMessage'>You currently do not have any bookings. Check out our listings!</p>
        )
    } else {
        content = (
            <div className='userBookingsContainer'>
                <h5 className='userBookingsTitle'>Your Bookings</h5>
                {listingBookings.map((booking) => {
                    return (
                        <>
                            <div className='userBookingsInfo'>
                                <p className='userBookingCarInfo'>{booking?.Vehicle?.year} {booking?.Vehicle?.make} {booking?.Vehicle?.model}</p>
                                <p className='userBookingCarInfo'>Start Date: {new Date (booking.startDate).toLocaleDateString()} End Date: {new Date (booking.endDate).toLocaleDateString()}</p>
                                <div className='deleteUserBooking'>
                                <button className='deleteUserBooking' type='button' onClick={() => handleDelete(booking.id)}>Cancel Booking</button>
                                </div>
                            </div>
                        </>
                    )
                })}
        </div>
        )
    }

    return (
        <>
            {content}
        </>
    )

}

export default UserBookings
