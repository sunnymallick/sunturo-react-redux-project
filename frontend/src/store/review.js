import { csrfFetch } from "./csrf";

const LOAD = 'reviews/LOAD_REVIEWS'
const CREATE_REVIEW = 'reviews/CREATE_REVIEW'
const DESTROY = 'review/DESTROY_REVIEW'


const loadReviews = (reviews) => ({
    type: LOAD,
    reviews
})

const placeReview = (review) => ({
    type: CREATE_REVIEW,
    review
})


const destroyReview = (reviewId) => ({
    type: DESTROY_REVIEW,
    reviewId
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
        dispatch(placeReview(newReview))
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
    const res = await csrfFetch(`/api/reviews/${id}`, {
        method: 'DELETE',
    })
    if (res.ok) {
        await res.json()
        dispatch(destroyReview(id))
    }
    return res
}

let initialState = {}

const reviewReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD: {
            const allReviews = {
                ...state,
            };
            action.reviews.forEach((review) => {
                allReviews[review.id] = review
            });
            return allReviews
        }
        case SET_REVIEW: {
            const newState = {
                ...state,
                [action.review.id]: action.review
            }
            return newState
        }

        case DESTROY: {
            const newState = {...state};
                delete newState[action.reviewId];
            return newState;
        }

        default:
            return state;
    }
}

export default reviewReducer
