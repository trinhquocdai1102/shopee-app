import React from 'react';
import { Link } from 'react-router-dom';

const TopSearchTitle = () => {
    return (
        <div className='top-search__title-wrapper'>
            <div className='top-search-title'>
                <h1>Tìm kiếm hàng đầu</h1>
            </div>
            <div className='view-all txt-red'>
                <Link to='#'>
                    Xem tất cả
                    <div>
                        <i className='bi bi-chevron-right'></i>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default TopSearchTitle;
