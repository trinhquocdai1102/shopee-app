import React from 'react';
import { Link } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';
import { carouselImageList } from '../../assets/fake-data/slider';
import SliderProduct from '../slider/SliderProduct';

const Categories = () => {
    return (
        <div className='image-carousel-wrapper'>
            <ul className='image-carousel__item-list'>
                <SliderProduct
                    perView={10}
                    center={false}
                    pagination={false}
                    speed={600}
                    perGroupAuto={true}
                    className='categories-swiper twoCols-swiper'
                    autoplay={false}
                >
                    {carouselImageList.map((item) => {
                        return (
                            <li key={item.id}>
                                <SwiperSlide>
                                    {item.categories.map((c) => {
                                        return (
                                            <Link to='#' key={c.id}>
                                                <div className='carousel-column'>
                                                    <div className='carousel-column-image'>
                                                        <img
                                                            src={c.thumbnail}
                                                            alt=''
                                                        />
                                                    </div>
                                                    <div className='carousel-column-title'>
                                                        {c.title}
                                                    </div>
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </SwiperSlide>
                            </li>
                        );
                    })}
                </SliderProduct>
            </ul>
        </div>
    );
};

export default Categories;
