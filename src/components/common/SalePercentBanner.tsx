import React from 'react';

interface Props {
    data: any;
}

const SalePercentBanner = (props: Props) => {
    return (
        <div className='sale-percent-banner'>
            <span>{props.data.salePercent}%</span>
            <span>giảm</span>
        </div>
    );
};

export default SalePercentBanner;
