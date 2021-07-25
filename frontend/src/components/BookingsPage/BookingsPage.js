import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setupBooking } from '../../store/booking';
import { useHistory } from 'react-router-dom';


const BookingsPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const vehicle = useSelector((state) => state.vehicles[id])
    const history = useHistory();
    // const sessionUser = useSelector(state => state.session.user);
    // const [booking, setBooking] = useState('');
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = {
            startDate,
            endDate
        }
        let createdBooking = await dispatch(setupBooking(id, payload))

        if (createdBooking) {
            history.push('/')
        }
    }

    return (
        <>
        <p>Booking for {vehicle?.year} {vehicle?.make} {vehicle?.model}</p>
        <form onSubmit={handleSubmit}>
            <label>Trip Start: </label>
                <input
                    type='datetime-local'
                    placeholder='From'
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    required/>
                {/* <select name="time" id="time" value={startDate} onChange={(e) => setStartDate(e.target.value)}>
                    <option value="12:00am">12:00am</option>
                        <option value="12:30am">12:30am</option>
                        <option value="1:00am">1:00am</option>
                        <option value="1:30am">1:30am</option>
                        <option value="2:00am">2:00am</option>
                        <option value="2:30am">2:30am</option>
                        <option value="3:00am">3:00am</option>
                        <option value="3:30am">3:30am</option>
                        <option value="4:00am">4:00am</option>
                        <option value="4:30am">4:30am</option>
                        <option value="5:00am">5:00am</option>
                        <option value="5:30am">5:30am</option>
                        <option value="6:00am">6:00am</option>
                        <option value="6:30am">6:30am</option>
                        <option value="7:00am">7:00am</option>
                        <option value="7:30am">7:30am</option>
                        <option value="8:00am">8:00am</option>
                        <option value="8:30am">8:30am</option>
                        <option value="9:00am">9:00am</option>
                        <option value="9:30am">9:30am</option>
                        <option value="10:00am">10:00am</option>
                        <option value="10:30am">10:30am</option>
                        <option value="11:00am">11:00am</option>
                        <option value="11:30am">11:30am</option>
                        <option value="12:00pm">12:00pm</option>
                        <option value="12:30pm">12:30pm</option>
                        <option value="1:00pm">1:00pm</option>
                        <option value="1:30pm">1:30pm</option>
                        <option value="2:00pm">2:00pm</option>
                        <option value="2:30pm">2:30pm</option>
                        <option value="3:00pm">3:00pm</option>
                        <option value="3:30pm">3:30pm</option>
                        <option value="4:00pm">4:00pm</option>
                        <option value="4:30pm">4:30pm</option>
                        <option value="5:00pm">5:00pm</option>
                        <option value="5:30pm">5:30pm</option>
                        <option value="6:00pm">6:00pm</option>
                        <option value="6:30pm">6:30pm</option>
                        <option value="7:00pm">7:00pm</option>
                        <option value="7:30pm">7:30pm</option>
                        <option value="8:00pm">8:00pm</option>
                        <option value="8:30pm">8:30pm</option>
                        <option value="9:00pm">9:00pm</option>
                        <option value="9:30pm">9:30pm</option>
                        <option value="10:00pm">10:00pm</option>
                        <option value="10:30pm">10:30pm</option>
                        <option value="11:00pm">11:00pm</option>
                        <option value="11:30pm">11:30pm</option>
                    </select> */}
                    <br></br>
            <label>Trip End:</label>
                <input
                    type='datetime-local'
                    placeholder='To'
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    required/>
                {/* <select name="time" id="time" value={endDate} onChange={(e) => setEndDate(e.target.value)}>
                    <option value="12:00am">12:00am</option>
                        <option value="12:30am">12:30am</option>
                        <option value="1:00am">1:00am</option>
                        <option value="1:30am">1:30am</option>
                        <option value="2:00am">2:00am</option>
                        <option value="2:30am">2:30am</option>
                        <option value="3:00am">3:00am</option>
                        <option value="3:30am">3:30am</option>
                        <option value="4:00am">4:00am</option>
                        <option value="4:30am">4:30am</option>
                        <option value="5:00am">5:00am</option>
                        <option value="5:30am">5:30am</option>
                        <option value="6:00am">6:00am</option>
                        <option value="6:30am">6:30am</option>
                        <option value="7:00am">7:00am</option>
                        <option value="7:30am">7:30am</option>
                        <option value="8:00am">8:00am</option>
                        <option value="8:30am">8:30am</option>
                        <option value="9:00am">9:00am</option>
                        <option value="9:30am">9:30am</option>
                        <option value="10:00am">10:00am</option>
                        <option value="10:30am">10:30am</option>
                        <option value="11:00am">11:00am</option>
                        <option value="11:30am">11:30am</option>
                        <option value="12:00pm">12:00pm</option>
                        <option value="12:30pm">12:30pm</option>
                        <option value="1:00pm">1:00pm</option>
                        <option value="1:30pm">1:30pm</option>
                        <option value="2:00pm">2:00pm</option>
                        <option value="2:30pm">2:30pm</option>
                        <option value="3:00pm">3:00pm</option>
                        <option value="3:30pm">3:30pm</option>
                        <option value="4:00pm">4:00pm</option>
                        <option value="4:30pm">4:30pm</option>
                        <option value="5:00pm">5:00pm</option>
                        <option value="5:30pm">5:30pm</option>
                        <option value="6:00pm">6:00pm</option>
                        <option value="6:30pm">6:30pm</option>
                        <option value="7:00pm">7:00pm</option>
                        <option value="7:30pm">7:30pm</option>
                        <option value="8:00pm">8:00pm</option>
                        <option value="8:30pm">8:30pm</option>
                        <option value="9:00pm">9:00pm</option>
                        <option value="9:30pm">9:30pm</option>
                        <option value="10:00pm">10:00pm</option>
                        <option value="10:30pm">10:30pm</option>
                        <option value="11:00pm">11:00pm</option>
                        <option value="11:30pm">11:30pm</option>
                    </select> */}
                    <br></br>
                <button type='submit'>Place Booking</button>
            </form>
        </>
        )
    }

export default BookingsPage
