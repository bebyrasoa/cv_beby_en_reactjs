import React from 'react';
import CTA from './CTA';
import './header.scss';
import ME from '../../assets/me1.jpg'
import HeaderSocial from './HeaderSocial';

const Header = () => {
    return (
        <header>
            <div className="container header_container">
                <HeaderSocial />
                <div className="beby">
                    <h5>Hello I'm</h5>
                    <h1>Rasoanirina Beby </h1>
                    <h5 className='text-light'>Fullstack Developer</h5>
                    <CTA />
                </div>


                <div className="me">
                    <img src={ME} alt="" />
                </div>

                <a href="#contact" className='scroll_down'>Scroll Down</a>
            </div>
        </header>
    );
};

export default Header;