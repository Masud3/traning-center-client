import React from 'react';
import { Link } from 'react-router-dom';

const HeaderMain = () => {
    return (
        <main>
            <div className="headermain">
                <h3>You only have to know one thing</h3>
                <h1>You can learn anything</h1>
                <h5>For free. For everyone</h5>
                <Link to="/appointment"><button className="btn btn-grad mt-4">Get Appointment</button></Link>
            </div>
        </main>
    );
};

export default HeaderMain;