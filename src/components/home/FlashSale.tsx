import React from 'react';
import { Link } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';
import { flashSaleList } from '../../assets/fake-data/slider';
import SliderProduct from '../slider/SliderProduct';

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
                    className='flash-sale-swiper'
                    autoplay={false}
                >
                    {flashSaleList.map((item) => {
                        return (
                            <li key={item.id}>
                                <SwiperSlide>
                                    <Link to='#'>
                                        <div className='carousel-column'>
                                            <div className='carousel-column-image'>
                                                <img
                                                    src={item.thumbnail}
                                                    alt=''
                                                />
                                                <div className='carousel-column-banner'>
                                                    <img
                                                        src={item.bannerSale}
                                                        alt=''
                                                    />
                                                </div>
                                                <div className='carousel-column-salePercent'>
                                                    <span>
                                                        {item.salePercent}%
                                                    </span>
                                                    <span>giảm</span>
                                                </div>
                                            </div>
                                            <div className='carousel-column-price'>
                                                <div>
                                                    <span>
                                                        &#8363;
                                                        {item.price.toFixed(3)}
                                                    </span>
                                                </div>
                                                <div className='progress'>
                                                    <div
                                                        className='progress-bar'
                                                        role='progressbar'
                                                        style={{
                                                            width: `${item.amountSale}%`,
                                                        }}
                                                        aria-valuenow={
                                                            item.amountSale
                                                        }
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    >
                                                        <div className='sale-amount'>
                                                            Đã bán{' '}
                                                            {item.amountSale}
                                                        </div>
                                                        {item.amountSale >=
                                                            50 && (
                                                            <div className='fire-streak'></div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
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
