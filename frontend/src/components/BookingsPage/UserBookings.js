import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { getBookings, deleteBooking } from '../../store/booking';

const UserBookings = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    // const sessionUser = useSelector(state => state.session.user);
    // const userId = sessionUser.id
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
        history.push(`/`)

    }

    let content;
    if (!listingBookings.length) {
        content = (
            <p>You currently do not have any bookings.</p>
        )
    } else {
        content = (
            <div className='userBookings'>
            <h5>Bookings</h5>
                {listingBookings.map((booking) => {
                    return (
                        <>
                            <div>
                                <p>{booking?.Vehicle?.year} {booking?.Vehicle?.make} {booking?.Vehicle?.model}</p>
                                <p>Start Date: {new Date (booking.startDate).toLocaleDateString()} End Date: {new Date (booking.endDate).toLocaleDateString()}</p>
                                <button type='button' onClick={() => handleDelete(booking.id)}>Delete Booking</button>
                            </div>
                        </>
                    )
                })}
        </div>
        )
    }

    return (
        <>
            {/* <div className='userBookings'>
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
            </div> */}
            {content}
        </>
    )

}

export default UserBookings