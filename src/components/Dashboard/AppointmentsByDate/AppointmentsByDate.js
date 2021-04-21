import React from 'react';
import AppointmentShortList from '../../Appointment/AppointmentShortList/AppointmentShortList';
import AppointmentDataTable from '../AppointmentDataTable/AppointmentDataTable';

const AppointmentsByDate = ({ appointments }) => {
    return (
        <div>
            <h1 className="text-center">Appointments</h1>
            {
                appointments.length ?  
                <AppointmentShortList appointments={appointments}></AppointmentShortList>
                :
                <div className="P-5">
                    <h4 className="lead text-center">No Appointments for this Date</h4>
                </div>
            }
            {/* {
                appointments.map(app => <li key={app._id}>{app.name}</li>)
            } */}
        </div>
    );
};

export default AppointmentsByDate;