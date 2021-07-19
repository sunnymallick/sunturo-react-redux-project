import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getVehicles } from "../../store/vehiclebrowser"


const BrowsePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getVehicles());
    }, [dispatch])

    return (
        <p> This is the browse page</p>
        
    )
}

export default BrowsePage
