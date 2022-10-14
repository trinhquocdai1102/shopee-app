import React from 'react';
import { ITopBannerCategories } from '../../../interfaces/home';

interface Props {
    data: ITopBannerCategories;
}

const TopBannerCategories = (props: Props) => {
    const { data } = props;
    return (
        <div className='top-banner-list__main'>
            <div className='banner-icon'>
                <img src={data.thumbnail} alt='' />
            </div>
            <div className='banner-title'>{data.title}</div>
        </div>
    );
};

export default TopBannerCategories;
