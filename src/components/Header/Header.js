import React from 'react';
import './Header.css';
const Header = () => {
    let budget = 400000;
    return (
        <div className="headerStyle">
            <div className="headLine">
                <h1 className="logo">Dev's Zone.</h1>
                <h3>We're Hiring Developers.</h3>
                <h2>Monthly Salary Budget : $ {budget}</h2>
            </div>
        </div>
    );
};

export default Header;