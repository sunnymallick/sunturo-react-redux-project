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
    
    const oneVehicle = await res.json();
    if (res.ok) {
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
        case LOAD_ONE: {
            const newState = {
                ...state,
                [action.vehicle?.id]: action.vehicle
            }
            return newState
        }
        default:
            return state;
    }
}

export default vehiclesReducer;
