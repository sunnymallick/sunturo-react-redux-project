import { csrfFetch } from "./csrf";

const LOAD = 'vehicles/LOAD';
const LOAD_ONE = 'vehicles/LOAD_ONE'

//action creator
const loadVehicles = (vehicles) => ({
    type: LOAD,
    vehicles
})

const loadOne = (vehicle) => ({
    type: LOAD_ONE,
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
        default:
            return state;
    }
}

export default vehiclesReducer;
