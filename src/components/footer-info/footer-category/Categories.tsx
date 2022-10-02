import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { footerCategory } from '../../../assets/fake-data/footer';
import Section, { SectionBody, SectionTitle } from '../../common/Section';

const Categories = () => {
    return (
        <Section className='category-info'>
            <SectionTitle>
                <h1>Danh mục</h1>
            </SectionTitle>
            <SectionBody>
                {footerCategory.map((category) => {
                    return (
                        <div key={category.id} className='category-wrapper'>
                            {category.colItem.map((item) => {
                                return (
                                    <div
                                        key={item.id}
                                        className='category-list'
                                    >
                                        <div className='category-title'>
                                            <Link to=''>{item.category}</Link>
                                        </div>
                                        <div className='category-item-wrapper'>
                                            {item.list.map((list) => {
                                                return (
                                                    <Fragment key={list.id}>
                                                        <div className='category-item'>
                                                            <Link to=''>
                                                                {list.title}
                                                                <span>
                                                                    &nbsp;|&nbsp;
                                                                </span>
                                                            </Link>
                                                        </div>
                                                    </Fragment>
                                                );
                                            })}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </SectionBody>
        </Section>
    );
};

export default Categories;
