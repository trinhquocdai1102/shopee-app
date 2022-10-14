import React, { useEffect, useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import { ICategory, ICategoryColumn } from '../../interfaces/home';
import Loading from '../common/Loading';
import SliderProduct from '../slider/SliderProduct';
import CategoryItems from './CategoryItems';

interface Props {
    categoryList: ICategory[];
    categoryColumnList: ICategoryColumn[];
}

const Categories = (props: Props) => {
    const { categoryList, categoryColumnList } = props;
    const [categoryData, setCategoryData] = useState([] as any);

    useEffect(() => {
        const category = categoryColumnList.map(
            (item: ICategoryColumn, index: number) => {
                for (let i = 0; i < categoryColumnList.length + 1; i++) {
                    item.categories.push(categoryList[index + i]);
                }
                return {
                    ...item,
                    categories: [
                        item.categories[index],
                        item.categories[index + 1],
                    ],
                };
            }
        );
        setCategoryData(category);
    }, [categoryColumnList, categoryList]);

    if (!categoryList || !categoryColumnList) {
        return <Loading />;
    }

    return (
        <div className='image-carousel-wrapper'>
            <ul className='image-carousel__item-list'>
                <SliderProduct
                    perView={10}
                    center={false}
                    pagination={false}
                    speed={600}
                    perGroupAuto={true}
                    className='categories-swiper multi-swiper'
                    autoplay={false}
                >
                    {categoryData.map((item: ICategoryColumn) => {
                        return (
                            <li key={`category-${item._id}`}>
                                <SwiperSlide>
                                    {item.categories.map((c) => {
                                        return <CategoryItems data={c} />;
                                    })}
                                </SwiperSlide>
                            </li>
                        );
                    })}
                </SliderProduct>
            </ul>
        </div>
    );
};

export default Categories;
