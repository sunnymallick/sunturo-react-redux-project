import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import "./HomePage.css"

const HomePage = () => {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <>
            <h3>Find your adventure here. Click the link below to browse our selection.</h3>
            <Link to='/vehicles'>
                <button type='button'>Browse Listings</button>
            </Link>
            </>
        )
    } else {
        sessionLinks = (
            <Link to='/login'>
                <button type='button'>Please login or signup to see our selection of vehicles</button>
            </Link>
        )
    }

    return (
        <>
            <div className='homeContainer'>
                <div className='homeInfo'>
                    <h3>The World's Smallest Car Sharing Marketplace </h3>
                </div>
                <div className='homeLinks'>
                    {sessionLinks}
                </div>
            </div>
        </>
    )
}

export default HomePage
