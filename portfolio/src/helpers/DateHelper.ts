import {DateTime} from 'luxon';

export const blogDateFormatter = (date: string): string => {
    return DateTime.fromISO(date, {zone: 'Australia/Brisbane', setZone: true}).toFormat('d LLL yyyy');
}

export const currentTimeFormatter = (): string | null => {
    return DateTime.now().toFormat('hh:mm:ss a ZZZZ');
}

export const yearsSinceFormatter = (date: string): string => {
    const yearDiff = DateTime.fromISO(date, {zone: 'Australia/Brisbane', setZone: true}).diffNow('years').years;
    return Math.abs(yearDiff).toFixed(1);
}