import React from 'react';
import { Link } from 'react-router-dom';
import { ICategoryList } from '../../../interfaces/home';

interface Props {
    data: ICategoryList;
}
const CategoryItems = (props: Props) => {
    const { data } = props;
    return (
        <Link to='#' key={data.id}>
            <div className='carousel-column'>
                <div className='carousel-column-image'>
                    <img src={data.thumbnail} alt='' />
                </div>
                <div className='carousel-column-title'>{data.title}</div>
            </div>
        </Link>
    );
};

export default CategoryItems;
