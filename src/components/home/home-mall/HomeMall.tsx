import React, { Fragment, useState, useEffect } from 'react';
import { SwiperSlide } from 'swiper/react';
import {
    IHomeMall,
    IHomeMallBanner,
    IHomeMallItem,
} from '../../../interfaces/home';
import Grid from '../../common/Grid';
import Loading from '../../common/Loading';
import SliderImage from '../../slider/SliderImage';
import SliderProduct from '../../slider/SliderProduct';
import HomeMallItems from './HomeMallItems';

interface Props {
    mallBannerList: IHomeMallBanner[];
    mallColumnList: IHomeMall[];
    mallItemList: IHomeMallItem[];
}

const HomePageMall = (props: Props) => {
    const { mallBannerList, mallColumnList, mallItemList } = props;
    const [mallItemData, setMallItemData] = useState([] as any);

    useEffect(() => {
        const mallItem = mallColumnList.map(
            (item: IHomeMall, index: number) => {
                for (let i = 0; i < mallColumnList.length + 1; i++) {
                    item.list.push(mallItemList[index + i]);
                }
                return {
                    ...item,
                    list: [item.list[index], item.list[index + 1]],
                };
            }
        );
        setMallItemData(mallItem);
    }, [mallItemList, mallColumnList]);

    if (!mallBannerList || !mallItemList || !mallColumnList) {
        return <Loading />;
    }
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
                            {mallItemData.map((item: IHomeMall) => {
                                return (
                                    <li key={`home-mall-${item._id}`}>
                                        <SwiperSlide>
                                            {item?.list.map((i) => {
                                                return (
                                                    <Fragment
                                                        key={`mall-item-list-${i?._id}`}
                                                    >
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
