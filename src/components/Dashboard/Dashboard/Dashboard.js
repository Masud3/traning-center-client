import React, { useContext, useEffect, useState } from 'react';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../../../App';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%",
    border:'1px solid red'
}

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);
    const handleDateChange = date => {
        setSelectedDate(date);
    }

    useEffect(() => {
        fetch('http://localhost:5000/appointmentByDate', {
            method:'POST',
            headers:{'content-type' : 'application/json'},
            body: JSON.stringify({date: selectedDate, email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => setAppointments(data))
    }, [selectedDate])
    return (
        <section className="">
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-5">
                    <Calendar className="p-3"
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>
                <div className="col-md-5">
                    <AppointmentsByDate  appointments={appointments}/>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;