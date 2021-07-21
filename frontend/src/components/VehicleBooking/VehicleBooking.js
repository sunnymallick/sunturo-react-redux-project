import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneVehicle } from '../../store/vehicle';

const VehicleBooking = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    // console.log(id)
    const vehicle = useSelector((state) => state.vehicles[id])
    console.log(vehicle)

    useEffect(() => {
        dispatch(getOneVehicle(id))
    }, [dispatch, id])

    return (
        <>
       <div>
        <p>The car: {vehicle.year} {vehicle.make} {vehicle.model}</p>

        <p>Hosted by</p>

        <p>Price: ${vehicle.price} per day</p>

        <p>{vehicle.description}</p>
       </div>

        <div className='booking'>
            <form>
                <input
                    type='date' />
            </form>
        </div>
    </>
    )
}

export default VehicleBooking;
