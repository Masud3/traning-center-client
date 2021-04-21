import React from 'react';
import BookingCard from '../BookingCard/BookingCard';
const bookingData = [
    {
        _id:'2545dg586g55656532569f',
        id:1,
        subject:'Web Design',
        visitingHour:'8:00 AM - 9:00 AM',
        totalSpace:10
    },
    {
        _id:'2545dg586g55656532528df5',
        id:2,
        subject:'Web Development',
        visitingHour:'8:30 AM - 9:30 AM',
        totalSpace:10
    },
    {
        _id:'2545dg5865895656532569f',
        id:3,
        subject:'Graphic Design',
        visitingHour:'10:00 AM - 11:00 AM',
        totalSpace:10
    },
    {
        _id:'254ddg586g55656532569f',
        id:4,
        subject:'Web Design',
        visitingHour:'8:00 AM - 9:00 AM',
        totalSpace:10
    },
    {
        _id:'254ddg586g55656532528df5',
        id:5,
        subject:'Web Development',
        visitingHour:'8:30 AM - 9:30 AM',
        totalSpace:10
    },
    {
        _id:'2545dg5865f95656532569f',
        id:6,
        subject:'Graphic Design',
        visitingHour:'10:00 AM - 11:00 AM',
        totalSpace:10
    },
]

const BookAppointment = ({date}) => {
    return (
        <section>
            <h2 style={{color:'#1cc7c1'}} className="text-center mb-5 mt-3">Available Appointment on {date.toDateString()}</h2>
            <div className="row">
                {
                    bookingData.map(booking => <BookingCard booking={booking} date={date} key={booking.id}></BookingCard>)
                }
            </div>
        </section>
    );
};

export default BookAppointment;