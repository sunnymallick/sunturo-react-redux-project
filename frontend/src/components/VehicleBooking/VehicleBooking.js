import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneVehicle } from '../../store/vehicle';

const VehicleBooking = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    // console.log(id)
    const vehicle = useSelector((state) => state.vehicles[id])

    useEffect(() => {
        dispatch(getOneVehicle(id))
    }, [dispatch, id])

    return (
        <>
       <div>
        <p>The car: {vehicle?.year} {vehicle?.make} {vehicle?.model}</p>

        <p>Hosted by </p>

        <p>Price: ${vehicle?.price} per day</p>

        <p>{vehicle?.description}</p>
       </div>

        <div className='booking'>
            <form>
                <label>Trip Start: </label>
                <input
                    type='date'
                    placeholder='From'
                    required/>
                <input
                    type='time'
                    required />
                    <br></br>
                <label>Trip End:</label>
                <input
                    type='date'
                    placeholder='To'
                    required/>
                <input
                    type='time'
                    required />
                    <br></br>
                <button type='submit'>Continue</button>
            </form>
        </div>
    </>
    )
}

export default VehicleBooking;
