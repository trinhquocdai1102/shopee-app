import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { carouselImageList } from '../../../assets/fake-data/slider';
import SliderProduct from '../../slider/SliderProduct';
import CategoryItems from './CategoryItems';

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
                    className='categories-swiper multi-swiper'
                    autoplay={false}
                >
                    {carouselImageList.map((item) => {
                        return (
                            <li key={item.id}>
                                <SwiperSlide>
                                    {item.categories.map((c) => {
                                        return <CategoryItems data={c} />;
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
