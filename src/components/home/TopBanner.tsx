import React from 'react';
import { Link } from 'react-router-dom';
import { underSliderList } from '../../assets/fake-data/slider';
import Grid from '../common/Grid';
import Slider from '../slider/Slider';

const TopBanner = () => {
    return (
        <>
            <Grid col={3} gap={6}>
                <Slider />
                <div className='top-banner-right'>
                    <Link to='#'>
                        <img
                            src='https://cf.shopee.vn/file/ed43a8153502766924f634259967dcef'
                            alt=''
                        />
                    </Link>
                    <Link to='#'>
                        <img
                            src='https://cf.shopee.vn/file/ed43a8153502766924f634259967dcef'
                            alt=''
                        />
                    </Link>
                </div>
            </Grid>
            <div className='top-banner-list flex'>
                {underSliderList.map((item) => {
                    return (
                        <Link to='#'>
                            <div className='top-banner-list__main'>
                                <div className='banner-icon'>
                                    <img src={item.thumbnail} alt='' />
                                </div>
                                <div className='banner-title'>{item.title}</div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </>
    );
};

export default TopBanner;
