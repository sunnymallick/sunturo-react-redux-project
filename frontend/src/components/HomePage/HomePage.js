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

    </>
    )
}

export default HomePage
