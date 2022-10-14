import React from 'react';
import { Link } from 'react-router-dom';
import { ITopSearch } from '../../../interfaces/home';

interface Props {
    data: ITopSearch;
}

const TopSearchItems = (props: Props) => {
    const { data } = props;
    return (
        <Link to='#'>
            <div className='carousel-column'>
                <div className='carousel-column-image'>
                    <div className='carousel__top-thumb'></div>
                    <img src={data?.thumbnail} alt='' />
                    <div className='carousel-column__bottom-banner'>
                        <div>Bán {data?.soldAmount}+ / tháng</div>
                    </div>
                </div>
                <div className='carousel-column-title'>
                    <div>
                        <span>{data?.title}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default TopSearchItems;
