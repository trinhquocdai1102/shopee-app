import React from 'react';
import { useTicker } from '../../hooks/useCooldown';
import ClockCell from './ClockCell';

interface Props {
    cooldownTime: Date;
}

const CooldownClock = (props: Props) => {
    const { hours, minutes, seconds, isTimeUp } = useTicker(props.cooldownTime);
    const tickerContents = isTimeUp ? (
        <>
            <ClockCell value={0} />
            <ClockCell value={0} />
            <ClockCell value={0} />
        </>
    ) : (
        <>
            <ClockCell value={hours} />
            <ClockCell value={minutes} />
            <ClockCell value={seconds} />
        </>
    );
    return <div className='cooldown-clock'>{tickerContents}</div>;
};

export default CooldownClock;
