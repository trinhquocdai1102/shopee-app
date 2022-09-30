import React from 'react';
import { Link } from 'react-router-dom';
import { todaySuggestList } from '../../../assets/fake-data/suggest-today';
import TodaySuggestItems from './TodaySuggestItems';

const TodaySuggest = () => {
    return (
        <ul>
            {todaySuggestList.map((item) => {
                return <TodaySuggestItems data={item} />;
            })}
            <li className='btn-show-more w-100 btn-gray'>
                <Link to='#' className='btn--l button-hover'>
                    Xem thêm
                </Link>
            </li>
        </ul>
    );
};

export default TodaySuggest;
