import React, { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getVehicles } from "../../store/vehiclebrowser"


const BrowsePage = () => {
    // const { vehicleId } = useParams();
    const dispatch = useDispatch();
    const vehicles = useSelector((state) => (Object.values(state.vehicles)))
    
    useEffect(() => {
        dispatch(getVehicles());
    }, [dispatch])

    return (
        <div>
            <p>browse</p>
        </div>
    )
}

export default BrowsePage
