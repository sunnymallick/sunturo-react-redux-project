import { csrfFetch } from "./csrf";

const SET_VEHICLES = 'vehicles/SET_VEHICLES';

const setVehicles = (vehicles) => ({
    type: SET_VEHICLES,
    vehicles
})

export const getVehicles = () => async (dispatch) => {
    const res = await csrfFetch('/api/vehicles');

    if (res.ok) {
        const vehicles = await res.json();
        console.log('test')
        dispatch(setVehicles(vehicles))
        return vehicles;
    }
}


const vehiclesReducer = (state = {}, action) => {
    let obj = {};
    switch (action.type) {
        case SET_VEHICLES:
            action.vehicles.forEach(vehicleObj => {
                obj[vehicleObj.id] = vehicleObj;
            })
                return {...state, ...obj};
        default:
            return state;
    }
}

export default vehiclesReducer;
