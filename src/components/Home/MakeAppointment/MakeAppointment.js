import React from 'react';
import trainer from '../../../image/trainer.png';
import './MakeAppointment.css';

const MakeAppointment = () => {
    return (
        <section className="make-appointment">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img style={{height:'300px'}} src={trainer} alt=""/>
                    </div>
                    <div className="col-md-7 text-white py-5">
                        <h5 className="text-primary text-uppercase">Appointment</h5>
                        <h1 className="my-4">Make an Appointment <br/>Today</h1>
                        <p>Schema Therapy Training Online is the hub for all things schema therapy. Our online courses involve workshop-style presentations, skills demonstrations, live group meetings, podcast recordings as well as thoughtful reflection exercises and skills handouts.</p>
                        <button className="btn btn-grad mt-3">learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;