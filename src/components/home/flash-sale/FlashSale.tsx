import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { IFlashSale } from '../../../interfaces/home';
import Loading from '../../common/Loading';
import SliderProduct from '../../slider/SliderProduct';
import FlashSaleItems from './FlashSaleItems';

interface Props {
    flashSaleList: IFlashSale[];
}

const FlashSale = (props: Props) => {
    const { flashSaleList } = props;

    if (!flashSaleList) {
        return <Loading />;
    }

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
                            <li key={`flash-sale-${item._id}`}>
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
