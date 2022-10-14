import React, { useEffect, useState } from 'react';
import { pageTitle } from '../../ultis/pageTitle';
import Helmet from '../common/Helmet';
import CooldownClock from '../cooldown/CooldownClock';
import Categories from '../category/Categories';
import FlashSale from './flash-sale/FlashSale';
import Section, { SectionBody, SectionTitle } from '../common/Section';
import TopBanner from './top-banner/TopBanner';
import { add } from 'date-fns';
import StackBanner from './stack-banner/StackBanner';
import HomeMall from './home-mall/HomeMall';
import CategoryTitle from '../category/CategoryTitle';
import TopSearch from './top-search/TopSearch';
import TopSearchTitle from './top-search/TopSearchTitle';
import TodaySuggest from './today-suggest/TodaySuggest';
import {
    ICategory,
    ICategoryColumn,
    IFlashSale,
    IHomeMall,
    IHomeMallBanner,
    IHomeMallItem,
    ITodaySuggest,
    ITopBannerCategories,
    ITopBannerLeft,
    ITopSearch,
} from '../../interfaces/home';
import {
    getCategoryColumnList,
    getCategoryList,
    getFlashSaleList,
    getMallBannerList,
    getMallColumnList,
    getMallItemList,
    getTodaySuggestList,
    getTopAdsList,
    getTopSearchList,
    getUnderTopAdsList,
} from '../../services/home';
import Loading from '../common/Loading';

const HomePage = () => {
    const [topBannerList, setTopBannerList] = useState([] as any);
    const [underTopBannerList, setUnderTopBannerList] = useState([] as any);
    const [flashSaleList, setFlashSaleList] = useState([] as any);
    const [categoryList, setCategoryList] = useState([] as any);
    const [categoryColumnList, setCategoryColumnList] = useState([] as any);
    const [mallBannerList, setMallBannerList] = useState([] as any);
    const [mallColumnList, setMallColumnList] = useState([] as any);
    const [mallItemList, setMallItemList] = useState([] as any);
    const [topSearchList, setTopSearchList] = useState([] as any);
    const [todaySuggestList, setTodaySuggestList] = useState([] as any);

    const [loading, setLoading] = useState(false);
    const cooldownTime = add(new Date(), {
        days: 0,
        hours: 0,
        minutes: 30,
    });

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                const banner: ITopBannerLeft[] = await getTopAdsList();
                const underBanner: ITopBannerCategories[] =
                    await getUnderTopAdsList();
                const flashSale: IFlashSale[] = await getFlashSaleList();
                const category: ICategory[] = await getCategoryList();
                const categoryColumn: ICategoryColumn[] =
                    await getCategoryColumnList();
                const mallBanner: IHomeMallBanner[] = await getMallBannerList();
                const mallColumn: IHomeMall[] = await getMallColumnList();
                const mallItem: IHomeMallItem[] = await getMallItemList();
                const topSearch: ITopSearch[] = await getTopSearchList();
                const todaySuggest: ITodaySuggest[] =
                    await getTodaySuggestList();

                setTopBannerList(banner);
                setUnderTopBannerList(underBanner);
                setCategoryList(category);
                setCategoryColumnList(categoryColumn);
                setFlashSaleList(flashSale);
                setMallBannerList(mallBanner);
                setMallColumnList(mallColumn);
                setMallItemList(mallItem);
                setTopSearchList(topSearch);
                setTodaySuggestList(todaySuggest);
                setLoading(false);
            } catch (err) {
                throw err;
            }
        };
        getData();
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <Section className='home-top__banner-wrapper'>
                <div className='container'>
                    <SectionBody>
                        <TopBanner
                            topBannerList={topBannerList}
                            underTopBannerList={underTopBannerList}
                        />
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
                            <Categories
                                categoryList={categoryList}
                                categoryColumnList={categoryColumnList}
                            />
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
                            <FlashSale flashSaleList={flashSaleList} />
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
                            <HomeMall
                                mallBannerList={mallBannerList}
                                mallColumnList={mallColumnList}
                                mallItemList={mallItemList}
                            />
                        </SectionBody>
                    </div>
                </Section>
                <Section className='top-search-wrapper'>
                    <div className='container-wrapper'>
                        <SectionTitle>
                            <TopSearchTitle />
                        </SectionTitle>
                        <SectionBody>
                            <TopSearch topSearchList={topSearchList} />
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
                            <TodaySuggest todaySuggestList={todaySuggestList} />
                        </SectionBody>
                    </div>
                </Section>
            </Helmet>
        </>
    );
};

export default HomePage;
