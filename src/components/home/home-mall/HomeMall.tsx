import React, { Fragment } from 'react';
import { SwiperSlide } from 'swiper/react';
import {
    mallBannerList,
    mallCarouselList,
} from '../../../assets/fake-data/slider';
import Grid from '../../common/Grid';
import SliderImage from '../../slider/SliderImage';
import SliderProduct from '../../slider/SliderProduct';
import HomeMallItems from './HomeMallItems';

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
                            className='home-mall__swiper-right multi-swiper'
                            autoplay={false}
                        >
                            {mallCarouselList.map((item) => {
                                return (
                                    <li key={item.id}>
                                        <SwiperSlide>
                                            {item.list.map((i) => {
                                                return (
                                                    <Fragment key={i.id}>
                                                        <HomeMallItems
                                                            data={i}
                                                        />
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
