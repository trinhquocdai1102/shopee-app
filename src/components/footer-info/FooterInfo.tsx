import React from 'react';
import ContentInfo from './content-info/ContentInfo';
import Categories from './footer-category/Categories';

const FooterInfo = () => {
    return (
        <div className='footer'>
            <div className='footer-wrapper'>
                <div className='container container-wrapper'>
                    <ContentInfo />
                </div>
                <div className='footer-category'>
                    <div className='container container-wrapper'>
                        <Categories />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterInfo;
