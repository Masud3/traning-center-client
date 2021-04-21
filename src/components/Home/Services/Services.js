import React from 'react';
import webDesign from '../../../image/webDesign.png';
import programming from '../../../image/programming.png';
import graphic from '../../../image/graphic.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        name: 'Web Design',
        description:'This is web designing center. we will teach here web design perfectly. If you want to learn web design then you can admission here',
        img: webDesign
    },
    {
        name: 'Programming',
        description:'This is Programming center. we will teach programming perfectly. If you want to learn programming. you can admission here',
        img: programming
    },
    {
        name: 'Graphic Design ',
        description:'This is Graphic Design center. we will teach Graphic Design perfectly. If you want to learn this Design. then you can admission here',
        img: graphic
    }

]

const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{ color: '#1cc7c1' }}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>

            <div className="d-flex justify-content-center mt-5">
                <div className="row w-75 mt-5">
                    {
                        serviceData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                    }
                </div>
            </div>
        </section >
    );
};

export default Services;