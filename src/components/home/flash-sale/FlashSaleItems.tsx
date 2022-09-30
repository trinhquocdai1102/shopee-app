import React from 'react';
import { Link } from 'react-router-dom';
import { IFlashSale } from '../../../interfaces/home';
import SaleBannerUnderImage from '../../common/SaleBannerUnderImage';
import SalePercentBanner from '../../common/SalePercentBanner';

interface Props {
    data: IFlashSale;
}

const FlashSaleItems = (props: Props) => {
    const { data } = props;
    return (
        <Link to='#'>
            <div className='carousel-column'>
                <div className='carousel-column-image'>
                    <img src={data.thumbnail} alt='' />
                    <SaleBannerUnderImage data={data} />
                    <SalePercentBanner data={data} />
                </div>
                <div className='carousel-column-price'>
                    <div>
                        <span>
                            &#8363;
                            {data.price
                                .toFixed()
                                .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}
                        </span>
                    </div>
                    <div className='progress'>
                        <div
                            className='progress-bar'
                            role='progressbar'
                            style={{
                                width: `${data.amountSale}%`,
                            }}
                            aria-valuenow={data.amountSale}
                            aria-valuemin={0}
                            aria-valuemax={100}
                        >
                            <div className='sale-amount'>
                                Đã bán {data.amountSale}
                            </div>
                            {data.amountSale >= 50 && (
                                <div className='fire-streak'></div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default FlashSaleItems;
