import React from 'react';

const CategoryTitle = () => {
    return (
        <div className='title-wrapper'>
            <div className='title-container'>
                <a href='https://shopee.vn/mall'>Shopee mall</a>
                <div className='title-list'>
                    <div>
                        <img
                            src='https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/homepage/6c502a2641457578b0d5f5153b53dd5d.png'
                            alt=''
                        />
                        <span>7 ngày miễn phí trả hàng</span>
                    </div>
                    <div>
                        <img
                            src='https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/homepage/511aca04cc3ba9234ab0e4fcf20768a2.png'
                            alt=''
                        />
                        <span>Hàng Chính Hãng 100%</span>
                    </div>
                    <div>
                        <img
                            src='https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/homepage/16ead7e0a68c3cff9f32910e4be08122.png'
                            alt=''
                        />
                        <span>Miễn Phí Vận Chuyển</span>
                    </div>
                </div>
            </div>
            <div className='view-all txt-red'>
                <a href='https://shopee.vn/mall'>
                    Xem tất cả
                    <div>
                        <i className='bi bi-chevron-right'></i>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default CategoryTitle;
