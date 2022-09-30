import React from 'react';
import { Link } from 'react-router-dom';
import { ITopBannerCategories } from '../../../interfaces/home';

interface Props {
    data: ITopBannerCategories;
}

const TopBannerCategories = (props: Props) => {
    const { data } = props;
    return (
        <Link to='#' key={data.id}>
            <div className='top-banner-list__main'>
                <div className='banner-icon'>
                    <img src={data.thumbnail} alt='' />
                </div>
                <div className='banner-title'>{data.title}</div>
            </div>
        </Link>
    );
};

export default TopBannerCategories;
