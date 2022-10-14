import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { ITopSearch } from '../../../interfaces/home';
import SliderProduct from '../../slider/SliderProduct';
import TopSearchItems from './TopSearchItems';

interface Props {
    topSearchList: ITopSearch[];
}

const TopSearch = (props: Props) => {
    const { topSearchList } = props;
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
                    className='top-search-swiper single-swiper'
                    autoplay={false}
                >
                    {topSearchList.map((item) => {
                        return (
                            <li key={`top-search-${item._id}`}>
                                <SwiperSlide>
                                    <TopSearchItems data={item} />
                                </SwiperSlide>
                            </li>
                        );
                    })}
                </SliderProduct>
            </ul>
        </div>
    );
};

export default TopSearch;
