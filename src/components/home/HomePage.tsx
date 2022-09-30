import React from 'react';
import { pageTitle } from '../../ultis/pageTitle';
import Helmet from '../common/Helmet';
import CooldownClock from '../cooldown/CooldownClock';
import Categories from './category/Categories';
import FlashSale from './flash-sale/FlashSale';
import Section, { SectionBody, SectionTitle } from '../common/Section';
import TopBanner from './top-banner/TopBanner';
import { add } from 'date-fns';
import StackBanner from './stack-banner/StackBanner';
import HomeMall from './home-mall/HomeMall';
import CategoryTitle from './category/CategoryTitle';
import TopSearch from './top-search/TopSearch';
import TopSearchTitle from './top-search/TopSearchTitle';
import TodaySuggest from './today-suggest/TodaySuggest';

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
                            <CategoryTitle />
                        </SectionTitle>
                        <SectionBody>
                            <HomeMall />
                        </SectionBody>
                    </div>
                </Section>
                <Section className='top-search-wrapper'>
                    <div className='container-wrapper'>
                        <SectionTitle>
                            <TopSearchTitle />
                        </SectionTitle>
                        <SectionBody>
                            <TopSearch />
                        </SectionBody>
                    </div>
                </Section>
                <Section className='today-suggest-wrapper'>
                    <div className='container-wrapper'>
                        <SectionTitle>
                            <h1 className='txt-orange'>Gợi ý hôm nay</h1>
                            <div className='separator separator-4 bg-orange'></div>
                        </SectionTitle>
                        <SectionBody>
                            <TodaySuggest />
                        </SectionBody>
                    </div>
                </Section>
            </Helmet>
        </>
    );
};

export default HomePage;
