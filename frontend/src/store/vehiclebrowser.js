import { csrfFetch } from "./csrf";

const LOAD = 'vehicles/LOAD';

//action creator
const load = (vehicles) => ({
    type: LOAD,
    vehicles
})

export const getVehicles = () => async (dispatch) => {
    const res = await csrfFetch(`/api/vehicles`);

    if (res.ok) {
        const vehicles = await res.json();
        dispatch(load(vehicles))
    }
}


const vehiclesReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD:
            const allVehicles = {
                ...state,
            };
            action.vehicles.forEach((vehicle) => {
                allVehicles[vehicle.id] = vehicle;
            });
            return allVehicles;
        default:
            return state;
    }
}

export default vehiclesReducer;
