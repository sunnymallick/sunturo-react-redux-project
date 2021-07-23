import { csrfFetch } from "./csrf";

const LOAD = 'reviews/LOAD'
const SET_REVIEW = 'reviews/SET_REVIEW'


const loadReviews = (reviews) => ({
    type: LOAD,
    reviews
})

const setReview = (reviews) => ({
    type: SET_REVIEW,
    reviews
})

export const getReviews = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/reviews/${id}`)

    if (res.ok) {
        const reviews = await res.json();
        dispatch(loadReviews(reviews));
    }
}


export const reviewVehicle = (id, payload) => async (dispatch) => {
    const res = await csrfFetch(`/api/reviews/${id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    if (res.ok) {
        const newReview = await res.json();
        dispatch(setReview(newReview))
        return newReview;
    }
}


const reviewReducer = (state = {}, action) => {
    switch(action.type) {
        case LOAD: {
            const allReviews = {};
            action.reviews.forEach((review) => {
                allReviews[review.id] = review
            });
            return allReviews
        }
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
