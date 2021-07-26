/* eslint-disable no-unused-vars */
import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getVehicles } from "../../store/vehicle"
import './VehiclesPage.css';


const VehiclesPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const vehicles = useSelector((state) => (Object.values(state.vehicles)))
    useEffect(() => {
        dispatch(getVehicles());
    }, [dispatch])

    let ageWarning;
       if (sessionUser?.age < 25) {
           ageWarning = (
           <p>***Some vehicles are unavailable due to your age restriction.</p>
           )
       }

    return (
    <>
        <div className='vehiclePage'>
        {ageWarning}
            <div className='vehicleContainer'>
            {vehicles.map(vehicle => {
            if (vehicle?.id) {
                    return (
                    <div className='vehicleListing'>
                        <Link key={vehicle.id} to={`/vehicles/${vehicle.id}`}>
                            <img className='vehicleImg' src={vehicle.vehicleImg} alt='vehiclepic' />
                            <h5>{vehicle.year} {vehicle.make} {vehicle.model}</h5>
                        </Link>
                    </div>
                    )
                }
            })}
            </div>
        </div>
    </>
    )
}

export default VehiclesPage
