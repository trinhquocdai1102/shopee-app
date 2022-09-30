import React from 'react';
import { Link } from 'react-router-dom';
import { ITodaySuggest } from '../../../interfaces/home';
import SaleBannerUnderImage from '../../common/SaleBannerUnderImage';
import SalePercentBanner from '../../common/SalePercentBanner';

interface Props {
    data: ITodaySuggest;
}

const TodaySuggestItems = (props: Props) => {
    const { data } = props;
    return (
        <li>
            <Link to='#'>
                <div>
                    <img src={data.thumbnail} alt='' />
                    {data.favorite === true && (
                        <div className='item-favorite'>
                            <div>
                                <span>Yêu thích</span>
                            </div>
                        </div>
                    )}
                    <SalePercentBanner data={data} />
                    <SaleBannerUnderImage data={data} />
                </div>
                <div>
                    <div>{data.title}</div>
                    <div>
                        <div>
                            {data.salePercent}% Giảm
                            <div>
                                <i className='bi bi-three-dots-vertical'></i>
                            </div>
                            <div>
                                <i className='bi bi-three-dots-vertical'></i>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <span>&#8363;</span>
                            <span>{data.price}</span>
                        </div>
                        {data.soldAmount > 1000 ? (
                            <div>
                                Đã bán {(data.soldAmount / 1000).toFixed(1)}k
                            </div>
                        ) : (
                            <div>Đã bán {data.soldAmount} </div>
                        )}
                    </div>
                </div>
            </Link>
        </li>
    );
};

export default TodaySuggestItems;
