import {HOUR_MINUTES} from "../constants/constants";

export const minDiff = (a, b) => Math.floor(Math.abs(b - a) / 1000 / 60);
export const daysDiff = (a, b) => Math.floor(Math.abs(b - a) / 1000 / 60 / 60 / 24) || 0;

export const getDayMinutes = date => {
    let dateToConvert = new Date(date);
    return (dateToConvert.getHours() * HOUR_MINUTES) + dateToConvert.getMinutes();
};

export const dateRangesOverlap = (aStart, aEnd, bStart, bEnd) => {
    if (aStart <= bStart && bStart <= aEnd)
        return true; // b starts in a
    if (aStart <= bEnd && bEnd <= aEnd)
        return true; // b ends in a
    if (bStart <= aStart && aEnd <= bEnd)
        return true; // a in b
    return false;
};

export const validateRange = ({date, range}) => {
    for (const [key, value] of Object.entries({date, from: range?.from, till: range?.till})) {
        if (value && typeof value !== 'string' && !(value instanceof Date))
            console.error(`Invalid type of property ${key}. Expected nothing, instance of Date or ISO string, got ${value}`);
    }
};

export const normalizeTime = (date, hours = 0, min = 0, sec = 0, ms = 0) => {
    let selectedDate = new Date(date);
    let preparedDate = selectedDate.setHours(hours, min, sec, ms);

    return new Date(preparedDate).toISOString();
};
