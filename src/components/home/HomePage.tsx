import React from 'react';
import { pageTitle } from '../../ultis/pageTitle';
import Helmet from '../common/Helmet';
import CooldownClock from '../cooldown/CooldownClock';
import Categories from './Categories';
import FlashSale from './FlashSale';
import Section, { SectionBody, SectionTitle } from './Section';
import TopBanner from './TopBanner';
import { add } from 'date-fns';
import StackBanner from './StackBanner';
import HomeMall from './HomeMall';

const HomePage = () => {
    const cooldownTime = add(new Date(), {
        days: 0,
        hours: 0,
        minutes: 30,
    });
    return (
        <>
            <Section className='home-top__banner-wrapper'>
                <div className='container'>
                    <SectionBody>
                        <TopBanner />
                    </SectionBody>
                </div>
            </Section>
            <Helmet title={pageTitle.homepage} className='home'>
                <Section className='categories-wrapper'>
                    <div className='container-wrapper'>
                        <SectionTitle>
                            <h1>Danh Mục</h1>
                        </SectionTitle>
                        <SectionBody>
                            <Categories />
                        </SectionBody>
                    </div>
                </Section>
                <Section className='flash-sale-wrapper'>
                    <div className='container-wrapper'>
                        <SectionTitle>
                            <div className='flash-sale-title'></div>
                            <CooldownClock cooldownTime={cooldownTime} />
                        </SectionTitle>
                        <SectionBody>
                            <FlashSale />
                        </SectionBody>
                    </div>
                </Section>
                <Section className='stack-banner-wrapper'>
                    <div className='container-wrapper'>
                        <SectionBody>
                            <StackBanner />
                        </SectionBody>
                    </div>
                </Section>
                <Section className='homepage-mall-wrapper'>
                    <div className='container-wrapper'>
                        <SectionTitle>
                            <div className='title-wrapper'>
                                <div className='title-container'>
                                    <a href='https://shopee.vn/mall'>
                                        Shopee mall
                                    </a>
                                    <div className='title-list'>
                                        <div>
                                            <img
                                                src='https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/homepage/6c502a2641457578b0d5f5153b53dd5d.png'
                                                alt=''
                                            />
                                            <span>
                                                7 ngày miễn phí trả hàng
                                            </span>
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
                                <div className='view-all'>
                                    <a href='https://shopee.vn/mall'>
                                        Xem tất cả
                                        <div>
                                            <i className='bi bi-chevron-right'></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </SectionTitle>
                        <SectionBody>
                            <HomeMall />
                        </SectionBody>
                    </div>
                </Section>
            </Helmet>
        </>
    );
};

export default HomePage;
