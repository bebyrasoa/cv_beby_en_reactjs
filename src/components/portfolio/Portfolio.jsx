import React from 'react';
import './portfolio.scss';
import IMG1 from '../../assets/showCase1.png'
import IMG2 from '../../assets/showCase2.png'
import IMG3 from '../../assets/showCase3.png'

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'crypto currency Dashbord & Financial Visualization',
        github: 'https://github.com',
        demo: 'https://dribbble.com'
    },
    {
        id: 2,
        image: IMG2,
        title: 'crypto currency Dashbord & Financial Visualization',
        github: 'https://github.com',
        demo: 'https://dribbble.com'
    },
    {
        id: 3,
        image: IMG3,
        title: 'crypto currency Dashbord & Financial Visualization',
        github: 'https://github.com',
        demo: 'https://dribbble.com'
    },
]

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Word</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio_container">
                {
                    data.map(({id, image, title, github, demo}) =>{
                        return (
                            <article key={id} className="portfolio_item">
                                <div className="portfolio_item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio_item-cta">
                                    <a href={github} className="btn">GitHub</a>
                                    <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default Portfolio;