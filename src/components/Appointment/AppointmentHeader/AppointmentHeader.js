import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import laptop from '../../../image/laptop.jpg';

const AppointmentHeader = ({handleDateChange}) => {
  
    return (
        <main className="header-container d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{ color: 'yellow' }}>Appointment</h1>
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                />
            </div>
            <div className="col-md-6">
                <img src={laptop} className="img-fluid" alt="" />
            </div>
        </main>
    );
};

export default AppointmentHeader;