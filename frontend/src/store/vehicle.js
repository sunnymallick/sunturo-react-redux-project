import { csrfFetch } from "./csrf";

const LOAD = 'vehicles/LOAD';
const LOAD_ONE = 'vehicles/LOAD_ONE'
const SET_REVIEW = 'vehicles/SET_REVIEW'

//action creator
const loadVehicles = (vehicles) => ({
    type: LOAD,
    vehicles
})

const loadOne = (vehicle) => ({
    type: LOAD_ONE,
    vehicle
})

const setReview = (vehicle) => ({
    type: SET_REVIEW,
    vehicle
})

export const getVehicles = () => async (dispatch) => {
    const res = await csrfFetch(`/api/vehicles`);

    if (res.ok) {
        const vehicles = await res.json();
        dispatch(loadVehicles(vehicles))
        return res;
    }
}

export const getOneVehicle = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/vehicles/${id}`)

    if (res.ok) {
        const oneVehicle = await res.json();
        dispatch(loadOne(oneVehicle))
    }
}

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

const vehiclesReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD: {
            const allVehicles = {
                ...state,
            };
            action.vehicles.forEach((vehicle) => {
                allVehicles[vehicle.id] = vehicle;
            });
            return allVehicles;
        }

        case SET_REVIEW: {
                const newState = {
                    ...state,
                    [action.vehicles.id]: action.vehicles
                }
                return newState
        }
        default:
            return state;
    }
}

export default vehiclesReducer;
