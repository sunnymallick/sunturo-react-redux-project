import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneVehicle } from '../../store/vehicle';

const OneVehiclePage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    // console.log(id)
    const vehicle = useSelector((state) => state.vehicles[id])
    console.log(vehicle)

    useEffect(() => {
        dispatch(getOneVehicle(id))
    }, [dispatch, id])

    return (
       <div>
        <p>{vehicle.year} {vehicle.make} {vehicle.model}</p>
       </div>
    )
}

export default OneVehiclePage;
