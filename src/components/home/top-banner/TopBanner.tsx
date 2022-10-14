import React from 'react';
import { Link } from 'react-router-dom';
import { ITopBannerCategories, ITopBannerLeft } from '../../../interfaces/home';
import Grid from '../../common/Grid';
import Loading from '../../common/Loading';
import SliderImage from '../../slider/SliderImage';
import TopBannerCategories from './TopBannerCategories';

interface Props {
    topBannerList: ITopBannerLeft[];
    underTopBannerList: ITopBannerCategories[];
}

const TopBanner = (props: Props) => {
    const { topBannerList, underTopBannerList } = props;

    if (!topBannerList || !underTopBannerList) {
        return <Loading />;
    }
    console.log('topBannerList', topBannerList);
    console.log('underTopBannerList', underTopBannerList);

    return (
        <>
            <Grid col={3} gap={6}>
                <SliderImage className='home-swiper' data={topBannerList} />
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
                {underTopBannerList.map((item: ITopBannerCategories) => {
                    return (
                        <Link to='#' key={`under-top-banner-${item._id}`}>
                            <TopBannerCategories data={item} />
                        </Link>
                    );
                })}
            </div>
        </>
    );
};

export default TopBanner;
