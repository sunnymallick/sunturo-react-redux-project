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
           <h2>Individual page</h2>
       </div>
    )
}

export default OneVehiclePage;
