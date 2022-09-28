import React from 'react';

interface Prop {
    title?: string;
    children?: React.ReactNode | JSX.Element[];
    className?: string;
}
const Helmet = (props: Prop) => {
    document.title = '' + props.title;
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={`container ${props.className}`}>{props.children}</div>
    );
};

export default Helmet;
