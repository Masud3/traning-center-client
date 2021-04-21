import React from 'react';
import featured from '../../../image/featured.jpg';

const FeaturedService = () => {
    return (
        <section className="features-service pb-0 pb-md-5 my-5">
            <div className="container mb-5">
                <div className="row">
                    <div className="col-md-5 mb-4 m-md-0">
                        <img src={featured} alt="" className="img-fluid"/>
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1>Exceptional Dental</h1>
                        <p className="text-secondary">Learn about the roles of a speech and language therapist or gear up your career by adding more skills and knowledge as well as an accredited certificate to your resume. This self-paced course is designed by expert professionals and contains effective teaching methods and up-to-date information.. Starting from the basics, this Speech and Language Therapy course will guide learners on how speech ...</p>
                        <button className="btn btn-grad">learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;