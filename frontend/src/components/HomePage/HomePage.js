import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import "./HomePage.css"

const HomePage = () => {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <Link to='/vehicles'>
                <button type='button'>Click here to browse our selection</button>
            </Link>
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
                <div className='homeTitle'>
                    <p>Welcome to SunTuro!</p>

                    <h3>The World's Smallest Car Sharing Marketplace </h3>
                    {sessionLinks}
                </div>
                <div className='homeImage'>
                    <img src='https://sunny-website-clone.s3.us-west-1.amazonaws.com/images/shelby-homepage.jpg' alt='shelby' />
                </div>


            </div>
        </>
    )
}

export default HomePage
