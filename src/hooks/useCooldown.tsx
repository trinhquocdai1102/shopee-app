import { useEffect, useState } from 'react';
import { intervalToDuration, isBefore } from 'date-fns';

export const useTicker = (time: any) => {
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setNow(new Date());
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [time]);

    const isTimeUp = isBefore(time, now);

    if (isTimeUp) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0, isTimeUp };
    }

    let { days, hours, minutes, seconds } = intervalToDuration({
        start: now,
        end: time,
    });

    return { days, hours, minutes, seconds, isTimeUp };
};
