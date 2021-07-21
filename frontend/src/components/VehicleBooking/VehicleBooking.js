import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneVehicle } from '../../store/vehicle';

const VehicleBooking = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    // console.log(id)
    const vehicle = useSelector((state) => state.vehicles[id])
    const sessionUser = useSelector(state => state.session.user);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    let sessionLinks;
    console.log(sessionUser)
    if (sessionUser.age >= 25) {
        sessionLinks = (
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
        )
    } else {
        sessionLinks = (
        <p>This vehicle has an age restriction.</p>
        )
    }

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

        <div className='reviews'>
            {/* insert reviews here pulled from database */}
        </div>
        <div className='booking'>
            {sessionLinks}
            {/* <form>
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
            </form> */}
        </div>
    </>
    )
}

export default VehicleBooking;
