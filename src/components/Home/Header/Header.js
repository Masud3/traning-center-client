import React from 'react';
import ContactInfo from '../ContactInfo/ContactInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../../Shared/Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
        <div className="header-container">
            <Navbar/>
            <HeaderMain/>
            <ContactInfo/>
        </div>
    );
};

export default Header;