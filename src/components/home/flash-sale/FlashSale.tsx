import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { flashSaleList } from '../../../assets/fake-data/slider';
import SliderProduct from '../../slider/SliderProduct';
import FlashSaleItems from './FlashSaleItems';

const FlashSale = () => {
    return (
        <div className='image-carousel-wrapper'>
            <ul className='image-carousel__item-list'>
                <SliderProduct
                    perView={6}
                    center={false}
                    pagination={false}
                    speed={400}
                    perGroup={5}
                    perGroupAuto={true}
                    className='flash-sale-swiper single-swiper'
                    autoplay={false}
                >
                    {flashSaleList.map((item) => {
                        return (
                            <li key={item.id}>
                                <SwiperSlide>
                                    <FlashSaleItems data={item} />
                                </SwiperSlide>
                            </li>
                        );
                    })}
                </SliderProduct>
            </ul>
        </div>
    );
};

export default FlashSale;
