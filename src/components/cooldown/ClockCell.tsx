import React from 'react';
interface Props {
    value: any;
    label?: string;
}

const ClockCell = (props: Props) => {
    const formattedValue =
        props.value < 10 ? `0${props.value}` : props.value.toString();
    return (
        <div className='clock-cell'>
            <span>{formattedValue}</span>
            <span>{props.label}</span>
        </div>
    );
};

export default ClockCell;
