import React from 'react';

const Testimonial = (props) => {
    const {quote, name, from, img} = props.testimonial;
    const container={
        shadow:'10px 10px 10px 20px',
        border:'2px solid #fafafa',
        margin:'10px',
        padding:'15px'
    }
    return (
        <div style={container}>
            <div className="card-body">
                <p style={{fontStyle: 'oblique'}} className="card-text text-center">{quote}</p>
            </div>
            <div className="ms-5 ps-3 d-flex align-items-center">
                <img style={{borderRadius:'50%'}} className="mx-3" src={img} alt="" width="60"/>
                <div>
                    <h6 className="text-primary">{name}</h6>
                    <p className="m-0">{from}</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;