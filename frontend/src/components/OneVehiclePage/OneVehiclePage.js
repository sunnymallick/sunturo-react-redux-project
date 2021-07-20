import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOneVehicle } from '../../store/vehicle';

const OneVehiclePage = () => {
    const { vehicleId } = useParams();
    console.log(vehicleId)
    const dispatch = useDispatch();
    const vehicle = useSelector(state => state.vehicles[vehicleId])


    useEffect(() => {
        dispatch(getOneVehicle(vehicleId))
    }, [dispatch, vehicleId])

    return (
       <p>Individual Page </p>
    )
}

export default OneVehiclePage;
