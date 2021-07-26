import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import LoginFormModal from "../LoginFormModal"
import "./HomePage.css"

const HomePage = () => {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <>
            <h3>Find your next adventure here. Click the link below to browse our selection.</h3>
            <Link to='/vehicles'>
                <button className='browseButton' type='button'>Browse Listings</button>
            </Link>
            </>
        )
    } else {
        sessionLinks = (
            <>
            <h3>Please login or signup to view our listings.</h3>
                {/* <Link to='/login'>
                    <button className='browseButton' type='button'>Login</button>
                </Link> */}
                <LoginFormModal />
                <Link to='/signup'>
                    <button className='browseButton' type='button'>Signup</button>
                </Link>
            </>
        )
    }

    return (
        <>
            <div className='home'>
                <div className='homeContainer'>
                    <div className='homeInfo'>
                        <h3>The World's Smallest Car Sharing Marketplace </h3>
                    </div>
                    <div className='homeLinks'>
                        <div className='sessionLinks'>
                        {sessionLinks}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage
