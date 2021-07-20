import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getOneVehicle } from '../../store/vehicle';

const OneVehiclePage = () => {
    const dispatch = useDispatch();
    const { vehicleId } = useParams();

    useDispatch(() => {
        dispatch(getOneVehicle(vehicleId))
    }, [dispatch])

    return (
        <p>this is the one vehicle page</p>
    )
}

export default OneVehiclePage;
