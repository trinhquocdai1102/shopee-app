import React from 'react';

interface Props {
    data: any;
}

const SaleBannerUnderImage = (props: Props) => {
    return (
        <>
            <div className='sale-bottom-banner'>
                <img src={props.data.bannerSale} alt='' />
            </div>
            {props.data.video && (
                <div className='play-button-onBanner'>
                    <i className='bi bi-play-circle'></i>
                </div>
            )}
        </>
    );
};

export default SaleBannerUnderImage;
