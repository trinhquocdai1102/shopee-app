import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { IHomeMallList } from '../../../interfaces/home';

interface Props {
    data: IHomeMallList;
}

const HomeMallItems = (props: Props) => {
    const { data } = props;
    return (
        <Fragment key={data.id}>
            {data.status !== 'view-all' ? (
                <Link to='#'>
                    <div className='carousel-column'>
                        <div className='carousel-column-image'>
                            <img src={data.thumbnail} alt='' />
                        </div>
                        <div className='carousel-column-title'>
                            {data.title}
                        </div>
                    </div>
                </Link>
            ) : (
                <div className='view-all txt-red'>
                    <a href='/#'>
                        Xem tất cả
                        <div>
                            <i className='bi bi-chevron-right'></i>
                        </div>
                    </a>
                </div>
            )}
        </Fragment>
    );
};

export default HomeMallItems;
