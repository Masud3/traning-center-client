import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
import './BookingCard.css';
const BookingCard = ({booking, date}) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className="col-md-4 mb-5">
            <div className="box p-3">
                <div className="card-body text-center">
                    <h5 style={{color:'#1cc7c1'}} className="card-title">{booking.subject}</h5>
                    <h6>{booking.visitingHour}</h6>
                    <p>{booking.totalSpace}SPACES AVAILABLE</p>
                    <button onClick={openModal} id="bookBtn" className="btn btn-grad text-uppercase">Book App</button>
                    <AppointmentForm modalIsOpen={modalIsOpen} appointmentOn={booking.subject} closeModal={closeModal} date={date}/>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;