import React from 'react';
import { Link } from 'react-router-dom';
import { ITodaySuggest } from '../../../interfaces/home';
import Loading from '../../common/Loading';
import TodaySuggestItems from './TodaySuggestItems';

interface Props {
    todaySuggestList: ITodaySuggest[];
}

const TodaySuggest = (props: Props) => {
    const { todaySuggestList } = props;
    const PAGE_SIZE = 48;

    if (!todaySuggestList) {
        return <Loading />;
    }

    return (
        <ul>
            {todaySuggestList.slice(0, PAGE_SIZE).map((item) => {
                return (
                    <li key={`today-suggest-${item._id}`}>
                        <TodaySuggestItems data={item} />
                    </li>
                );
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
