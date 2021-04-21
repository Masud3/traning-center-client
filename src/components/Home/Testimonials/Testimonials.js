import React from 'react';
import shakil from '../../../image/shakil.jpg';
import shamim from '../../../image/shamim.jpg';
import shumon from '../../../image/shumon.jpg';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';

const testimonialData =[
    {
        quote : 'Our short courses are a fantastic introduction to music therapy and the Nordoff Robbins approach. Most need no prior experience. Our internationally-renowned Master of Music Therapy programme is a two year course – successful completion of which gives graduates eligibility to apply to the Health and Care Professions Council for registration as a music therapist.',
        name:'Shakil',
        from:'California',
        img: shakil
    },
    {
        quote : 'Our short courses are a fantastic introduction to music therapy and the Nordoff Robbins approach. Most need no prior experience. Our internationally-renowned Master of Music Therapy programme is a two year course – successful completion of which gives graduates eligibility to apply to the Health and Care Professions Council for registration as a music therapist.',
        name:'Shamim',
        from:'Australia',
        img: shamim
    },
    {
        quote : 'Our short courses are a fantastic introduction to music therapy and the Nordoff Robbins approach. Most need no prior experience. Our internationally-renowned Master of Music Therapy programme is a two year course – successful completion of which gives graduates eligibility to apply to the Health and Care Professions Council for registration as a music therapist.',
        name:'Shumon',
        from:'America',
        img: shumon
    }
]

const Testimonials = () => {
    return (
        <section className="testimonials my-5 py-5">
            <div className="container">
                <div className="section-header">
                    <h5 className="text-primary">Testimonials</h5>
                    <h1>What Our Trainer <br/>Says</h1>
                </div>
                <div className="card-deck d-flex align-items-center mt-5">
                    {
                       testimonialData.map(testimonial => <Testimonial testimonial={testimonial}></Testimonial>) 
                    }
                </div>
            </div>
            
        </section>
    );
};

export default Testimonials;