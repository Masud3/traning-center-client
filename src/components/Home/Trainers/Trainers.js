import { faVestPatches } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import Trainer from '../Trainer/Trainer';

const Trainers = () => {
    const [trainers, setTrainers] = useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/trainers')
        .then(res => res.json())
        .then(data => setTrainers(data))
    }, [])
    return (
        <section className="doctors">
            <div className="container">
                <h5 className="text-center text-primary mb-5">Our Trainer</h5>
                <div className="row">
                    {
                        trainers.map( trainer => <Trainer trainer={trainer}></Trainer>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Trainers;