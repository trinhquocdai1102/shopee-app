import React from 'react';

const Section = (props: any) => {
    return <div className={`section ${props.className}`}>{props.children}</div>;
};
export const SectionTitle = (props: any) => {
    return <div className='section__title'>{props.children}</div>;
};
export const SectionBody = (props: any) => {
    return <div className='section__body'>{props.children}</div>;
};

export default Section;
