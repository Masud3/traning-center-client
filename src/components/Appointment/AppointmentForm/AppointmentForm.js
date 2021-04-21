import React from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {

        data.service = appointmentOn;
        data.date = date;
        data.created = new Date();

        fetch('http://localhost:5000/addAppointment',{
            method: 'POST',
            headers:{'content-type' : 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success =>{
            if(success){
                closeModal();
                alert('Appointment created successfully.');
            }
        })
        
    };


    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <h2 className="text-center" style={{ color: '#1cc7c1' }}>{appointmentOn}</h2>
                <p className="text-secondary text-center"><small>ON {date.toDateString()}</small></p>
                <form className="p-5" onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-group">
                        <input type="text" ref={register({required: true})} name="name" placeholder="Your Name" className="form-control" /><br />
                        {errors.name && <span className="text-danger">This is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({required: true})} name="phone" placeholder="Phone Number" className="form-control" /><br />
                        {errors.name && <span className="text-danger">This is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({required: true})} name="email" placeholder="Your Email" className="form-control" /><br />
                        {errors.name && <span className="text-danger">This is required</span>}
                    </div>
                    <div className="form-group">
                        <div className="d-flex">
                            <div className="col-4">
                                <select className="form-control" name="gender" id="">
                                    <option disabled={true} value="Not set">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Not set">Other</option>
                                </select>
                            </div>
                            <div className="col-4">
                                <input type="number" ref={register({required: true})} name="Age" placeholder="You Age" className="form-control" />
                                {errors.name && <span className="text-danger">This is required</span>}
                            </div>
                            <div className="col-4">
                                <input type="number" ref={register({required: true})} name="weight" placeholder="Weight" className="form-control" />
                                {errors.name && <span className="text-danger">This is required</span>}
                            </div>
                        </div>
                        <div className="form-group  mt-4">
                            <button type="submit" className="btn btn-grad m-auto">Send</button>
                        </div>
                    </div>
                </form>
            </Modal>

        </div>
    );
};

export default AppointmentForm;