import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';
import {
    mallBannerList,
    mallCarouselList,
} from '../../assets/fake-data/slider';
import Grid from '../common/Grid';
import SliderImage from '../slider/SliderImage';
import SliderProduct from '../slider/SliderProduct';

const HomePageMall = () => {
    return (
        <>
            <Grid col={6}>
                <SliderImage
                    data={mallBannerList}
                    className='home-mall__swiper-left'
                />
                <div className='image-carousel-wrapper'>
                    <ul className='image-carousel__item-list'>
                        <SliderProduct
                            perView={4}
                            center={false}
                            pagination={false}
                            speed={600}
                            perGroup={4}
                            perGroupAuto={true}
                            className='home-mall__swiper-right twoCols-swiper'
                            autoplay={false}
                        >
                            {mallCarouselList.map((item) => {
                                return (
                                    <li key={item.id}>
                                        <SwiperSlide>
                                            {item.list.map((i) => {
                                                return (
                                                    <Fragment key={i.id}>
                                                        {i.status !==
                                                        'view-all' ? (
                                                            <Link to='#'>
                                                                <div className='carousel-column'>
                                                                    <div className='carousel-column-image'>
                                                                        <img
                                                                            src={
                                                                                i.thumbnail
                                                                            }
                                                                            alt=''
                                                                        />
                                                                    </div>
                                                                    <div className='carousel-column-title'>
                                                                        {
                                                                            i.title
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        ) : (
                                                            <div className='view-all txt-red'>
                                                                <a href='/#'>
                                                                    Xem tất cả
                                                                    <div>
                                                                        <i className='bi bi-chevron-right'></i>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        )}
                                                    </Fragment>
                                                );
                                            })}
                                        </SwiperSlide>
                                    </li>
                                );
                            })}
                        </SliderProduct>
                    </ul>
                </div>
            </Grid>
        </>
    );
};

export default HomePageMall;
