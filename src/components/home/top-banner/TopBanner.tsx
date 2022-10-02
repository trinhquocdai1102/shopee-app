import React from 'react';
import { Link } from 'react-router-dom';
import { sliderData, underSliderList } from '../../../assets/fake-data/slider';
import Grid from '../../common/Grid';
import Slider from '../../slider/SliderImage';
import TopBannerCategories from './TopBannerCategories';

const TopBanner = () => {
    return (
        <>
            <Grid col={3} gap={6}>
                <Slider className='home-swiper' data={sliderData} />
                <div className='top-banner-right'>
                    <Link to='#'>
                        <img
                            src='https://cf.shopee.vn/file/940d962648208f479817e72b0cdb6688_xhdpi'
                            alt=''
                        />
                    </Link>
                    <Link to='#'>
                        <img
                            src='https://cf.shopee.vn/file/fefc420dc359ec447ec376c40ac53458_xhdpi'
                            alt=''
                        />
                    </Link>
                </div>
            </Grid>
            <div className='top-banner-list flex'>
                {underSliderList.map((item) => {
                    return <TopBannerCategories data={item} />;
                })}
            </div>
        </>
    );
};

export default TopBanner;
