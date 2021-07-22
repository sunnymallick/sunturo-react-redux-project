/* eslint-disable no-unused-vars */
import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getVehicles } from "../../store/vehicle"


const VehiclesPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const vehicles = useSelector((state) => (Object.values(state.vehicles)))
    useEffect(() => {
        dispatch(getVehicles());
    }, [dispatch])

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
        vehicles.map(vehicle => {
            if (vehicle.id) {
                    return (
                    <div>
                        <Link key={vehicle.id} to={`/vehicles/${vehicle.id}`}>
                            <h5>{vehicle.year} {vehicle.make} {vehicle.model}</h5>
                        </Link>
                    </div>
                    )
                }
            })
        )
    } else {
        sessionLinks = (
            <>
            <p>Please login to see our selection of vehicles</p>
            <Link to='/login'>
                <button type='button'>Login</button>
            </Link>
            <Link to='/signup'>
                <button type='button'>Signup</button>
            </Link>
            </>
        )
    }

    let ageWarning;
       if (sessionUser?.age < 25) {
           ageWarning = (
           <p>***Some vehicles are unavailable due to your age restriction.</p>
           )
       }

       return (

        <div>
            {ageWarning}
            {sessionLinks}
            <p></p>
        </div>

    )
}

export default VehiclesPage
