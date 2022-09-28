import React from 'react';
import { pageTitle } from '../../ultis/pageTitle';
import Helmet from '../common/Helmet';
import Categories from './Categories';
import Section, { SectionBody, SectionTitle } from './Section';
import TopBanner from './TopBanner';

const HomePage = () => {
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
                <Section className='main-wrapper'>
                    <div className='container-wrapper'>
                        <SectionTitle>Danh Mục</SectionTitle>
                        <SectionBody>
                            <Categories />
                        </SectionBody>
                    </div>
                </Section>
            </Helmet>
        </>
    );
};

export default HomePage;
