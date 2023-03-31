import React from 'react';
import './testimonials.scss';
import AVTR1 from '../../assets/people1.png'
import AVTR2 from '../../assets/people2.png'
import AVTR3 from '../../assets/people2.png'
import AVTR4 from '../../assets/person.png'

import { Pagination } from 'swiper';
import {Swiper , SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
const data =[
    {
        avatar: AVTR1,
        name: 'Tina Snow',
        review: 'Modi Alias anili dolorem Aliquam ea eum beatea naiores, consectetur praesentium quibusdam, comodi velit parra blanditils consequatur qui modelesttiae. Dolorem, perspiciatis aspernatur labore distinction ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?',
    },
    {
        avatar: AVTR2,
        name: 'Tina Snow',
        review: 'Modi Alias anili dolorem Aliquam ea eum beatea naiores, consectetur praesentium quibusdam, comodi velit parra blanditils consequatur qui modelesttiae. Dolorem, perspiciatis aspernatur labore distinction ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?',
    },
    {
        avatar: AVTR3,
        name: 'Tina Snow',
        review: 'Modi Alias anili dolorem Aliquam ea eum beatea naiores, consectetur praesentium quibusdam, comodi velit parra blanditils consequatur qui modelesttiae. Dolorem, perspiciatis aspernatur labore distinction ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?',
    },
    {      
        avatar: AVTR4,
        name: 'Tina Snow',
        review: 'Modi Alias anili dolorem Aliquam ea eum beatea naiores, consectetur praesentium quibusdam, comodi velit parra blanditils consequatur qui modelesttiae. Dolorem, perspiciatis aspernatur labore distinction ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?',
    },
]

const Testimonials = () => {
    return (
        <section className='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials_container"
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerview={1}
                pagination={{clickable: true}}
            >
                {
                    data.map(({avatar, name, review}, index) => {
                        return (
                            <SwiperSlide key={index} className="testimonial">
                                <div className="client_avatar">
                                    <img src={avatar}/>
                                </div>
                                <h5 className=''>{name}</h5>client_name
                                <small className='client_review'>
                                   {review}
                                </small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;