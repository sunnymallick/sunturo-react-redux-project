import { csrfFetch } from "./csrf";

const LOAD = 'bookings/LOAD';
const SET_BOOKING = 'bookings/SET_BOOKING';
const UPDATE = 'bookings/UPDATE'
const DELETE = 'bookings/DELETE';

const loadBookings = (bookings) => ({
    type: LOAD,
    bookings
})

const setBooking = (bookings) => ({
    type: SET_BOOKING,
    bookings
})

const updateBooking = (booking) => ({
    type: UPDATE,
    booking
})

const removeBooking = () => ({
    type: DELETE,
})

export const getIndividualBookings = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/bookings/${id}`);

    if (res.ok) {
        const individualBooking = await res.json();
        dispatch(loadBookings(individualBooking))
    }
}

export const setupBooking = (id, payload) => async (dispatch) => {
    const res = await csrfFetch(`/api/bookings/${id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })

    if (res.ok) {
        const newBooking = await res.json()
        dispatch(setBooking(newBooking))
        return newBooking;
    }
}

export const editBooking = (id, payload) => async (dispatch) => {
    const res = await csrfFetch(`/api/bookings/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    if (res.ok) {
        const updated = await res.json();
        dispatch(updateBooking(updated))
        return updated;
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
        case SET_BOOKING: {
            const newState = {
                ...state,
                [action.bookings.id]: action.bookings
            }
            return newState
        }
        case UPDATE: {
            return {
                ...state,
                [action.booking.id]: action.bookings
            }
        }
        case DELETE: {
            const newState = {...state};
            delete newState[action.bookingId];
            return newState;
        }
        
        default:
            return state;
    }
}

export default bookingsReducer
