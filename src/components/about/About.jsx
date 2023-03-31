import React from 'react';
import './about.scss';
import ME from '../../assets/me.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>Apropos</h2>

            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me_img">
                        <img src={ME} alt="" />
                    </div>
                </div>
                <div className="about_content">
                    <div className="display-flex">
                        <div className="about_cards">
                            <article className='about_card'>
                                <FaAward className='about_icon' />
                                <h5>Clients</h5>
                                <small>200+ Worldwide</small>
                            </article>
                        </div>

                        <div className="about_cards">
                            <article className='about_card'>
                                <FiUsers className='about_icon' />
                                <h5>Projets</h5>
                                <small>3+ ans travaillée</small>
                            </article>
                        </div>

                        <div className="about_cards">
                            <article className='about_card'>
                                <VscFolderLibrary className='about_icon' />
                                <h5>Experience</h5>
                                <small> 80+ de complet</small>
                            </article>
                        </div>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Sit, perspiciatis quae corporis, non iure alias repudiandae officiis fuga, placeat adipisci cumque beatae temporibus cupiditate 
                        facilis autem nostrum nobis sint repellendus!
                    </p>
                    
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    );
};

export default About;