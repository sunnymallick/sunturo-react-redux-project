import { Link } from "react-router-dom"
import "./HomePage.css"

const HomePage = () => {
    return (
    <>
        <div>
        <p>Welcome to SunTuro!</p>
        </div>

        <div className='form'>
            <form className='formInput'>
                    <input type='text' name='location' placeholder='Location' />
                    <input type='datetime-local' name='from' placeholder='From'/>
                    <input type='datetime-local' name='to' placeholder='To' />
            </form>
        </div>

        <div className='bio'>
            <h3>The World's Smallest Car Sharing Marketplace </h3>
        </div>

        <div className='browse'>
            <h5>Browse By Make</h5>
            <Link to='/vehicles'>
            <button type='button' className='browseButton'>Browse Cars</button>
            </Link>
        </div>
    </>
    )
}

export default HomePage
