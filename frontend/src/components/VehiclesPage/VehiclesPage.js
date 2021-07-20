/* eslint-disable no-unused-vars */
import React, { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getVehicles } from "../../store/vehicle"


const VehiclesPage = () => {
    const dispatch = useDispatch();
    const vehicles = useSelector((state) => (Object.values(state.vehicles)))
    useEffect(() => {
        dispatch(getVehicles());
    }, [dispatch])

    return (

        <div>
            {vehicles.map(vehicle => {
                if (vehicle.id) {
                    return (
                        <Link key={vehicle.id} to={`/vehicles/${vehicle.id}`}>
                            <h5>{vehicle.year} {vehicle.make} {vehicle.model}</h5>
                        </Link>
                    )
                }
            })}
            <p></p>
        </div>

    )
}

export default VehiclesPage
