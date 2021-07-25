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
        <p>This is the user bookings page</p>
    )

}

export default UserBookings
