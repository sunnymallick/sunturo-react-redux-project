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
                <button type='button'>Browse our selection</button>
            </Link>
        )
    } else {
        sessionLinks = (
            <Link to='/login'>
                <button type='button'>Please login to see our selection of vehicles</button>
            </Link>
        )
    }

    return (
    <>
        <div>
        <p>Welcome to SunTuro!</p>
        </div>
{/*
        <div className='form'>
            <form className='formInput'>
                    <input type='text' name='location' placeholder='Location' />
                    <input type='datetime-local' name='from' placeholder='From'/>
                    <input type='datetime-local' name='to' placeholder='To' />
            </form>
        </div> */}

        <div className='bio'>
            <h3>The World's Smallest Car Sharing Marketplace </h3>
            {sessionLinks}
        </div>

        {/* <div className='browse'>
            <Link to='/vehicles'>
            <button type='button' className='browseButton'>Browse our selection</button>
            </Link>
        </div> */}
    </>
    )
}

export default HomePage
