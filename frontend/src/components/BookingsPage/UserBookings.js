import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getBookings } from '../../store/booking';

const UserBookings = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    const bookings = useSelector((state) => ((Object.values(state.bookings))));
    console.log(bookings)
    const listingBookings = bookings.filter(booking => booking.userId === +id)
    console.log(listingBookings)
    const sessionUser = useSelector(state => state.session.user);

    useEffect(() => {
        dispatch(getBookings())
    }, [dispatch])

    return (
        <>
            <p>This is the user bookings page</p>
            <div className='userBookings'>
                <h5>Bookings</h5>
                    {listingBookings.map((booking) => {
                        return (
                            <>
                                <div>
                                    <p>{booking?.Vehicle?.year} {booking?.Vehicle?.make} {booking?.Vehicle?.model}</p>
                                    <p>Start Date: {new Date (booking.startDate).toLocaleDateString()} End Date: {new Date (booking.endDate).toLocaleDateString()}</p>
                                </div>
                            </>
                        )
                    })}
            </div>
        </>
    )

}

export default UserBookings
