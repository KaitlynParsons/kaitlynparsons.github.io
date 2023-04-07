import {DateTime} from 'luxon';

export const blogDateFormatter = (date: string): string => {
    return DateTime.fromISO(date, {zone: 'Australia/Brisbane', setZone: true}).toFormat('d LLL yyyy');
}