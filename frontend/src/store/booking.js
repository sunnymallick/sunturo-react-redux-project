import { csrfFetch } from "./csrf";

const LOAD = 'bookings/LOAD';

const loadBookings = (bookings) => ({
    type: LOAD,
    bookings
})

export const getIndividualBookings = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/bookings/${id}`);

    if (res.ok) {
        const individualBooking = await res.json();
        dispatch(loadBookings(individualBooking))
    }
}

const bookingsReducer = (state = {}, action) => {
    switch(action.type) {
        case LOAD: {
            const allBookings = {
                ...state,
            };
            action.bookings.forEach((booking) => {
                allBookings[booking.id] = booking;
            });
            return allBookings;
        }
        default:
            return state;
    }
}

export default bookingsReducer
