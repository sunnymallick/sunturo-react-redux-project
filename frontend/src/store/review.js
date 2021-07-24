import { csrfFetch } from "./csrf";

const LOAD = 'reviews/LOAD'
const SET_REVIEW = 'reviews/SET_REVIEW'
const UPDATE = 'review/UPDATE'
const DELETE = 'review/DELETE'


const loadReviews = (reviews) => ({
    type: LOAD,
    reviews
})

const setReview = (reviews) => ({
    type: SET_REVIEW,
    reviews
})

const updateReview = (review) => ({
    type: UPDATE,
    review
})

const deleteReview = () => ({
    type: DELETE
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

export const editReview = (id, payload) => async (dispatch) => {
    const res = await csrfFetch(`/api/reviews/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    if (res.ok) {
        const updated = await res.json();
        dispatch(updateReview(updated))
        return updated;
    }
}

export const removeReview = (id) => async (dispatch) => {
    const deleted = await csrfFetch(`/api/reviews/${id}`, {
        method: 'DELETE',
    })
        dispatch(deleteReview())
        return deleted;
}

const initialState = {}

const reviewReducer = (state = initialState, action) => {
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
                [action.reviews.id]: action.reviews
            }
            return newState
        }
        case UPDATE: {
            return {
                ...state,
                [action.review.id]: action.reviews
            }
        }

        case DELETE: {
            const newState = {...state};
            delete newState[action.reviewId];
            return newState;
        }

        default:
            return state;
    }
}

export default reviewReducer
