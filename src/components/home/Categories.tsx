import React from 'react';
import { carouselImageList } from '../../assets/fake-data/slider';

const Categories = () => {
    return (
        <div className='image-carousel-wrapper'>
            <ul className='image-carousel__item-list'>
                {carouselImageList.map((item) => {
                    return (
                        <li>
                            <div>
                                <img src={item.thumbnail} alt='' />
                            </div>
                            <div>{item.title}</div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Categories;
