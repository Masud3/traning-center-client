import React from 'react';
import img from '../../../image/trainer.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

const Trainer = ({trainer}) => {
    return (
        <div className="col-md-4 text-center">
           {
               trainer.image ? <img style={{height:'200px'}} src={`data:image/png;base64,${trainer.image.img}`}/> :
                <img style={{height:'200px'}} src={`http://localhost:5000/${trainer.img}`} alt="" className="img-fluid mb-3"/>
           }
            <h4>{trainer.name}</h4>
            <p><FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/>+880-188-934789</p>
        </div>
    );
};

export default Trainer;