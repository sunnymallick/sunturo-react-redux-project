import { csrfFetch } from "./csrf";

const SET_REVIEW = 'vehicles/SET_REVIEW'


const setReview = (vehicle) => ({
    type: SET_REVIEW,
    vehicle
})


export const reviewVehicle = (id, payload) => async (dispatch) => {
    const res = await csrfFetch(`/api/vehicles/${id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    if (res.ok) {
        const newReview = await res.json();
        dispatch(setReview(newReview))
    }
}


const reviewReducer = (state = {}, action) => {
    switch(action.type) {
        case SET_REVIEW: {
            const newState = {
                ...state,
                [action?.vehicles?.id]: action.vehicles
            }
            return newState
        }
        default:
            return state;
    }
}

export default reviewReducer
