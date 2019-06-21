import { INCREMENT_COUNT, DECREMENT_COUNT, GET_COUNT, INCREMENT_COUNT_BY_NUM } from './types';

export const incrementCount = () => {
    return {
        type: INCREMENT_COUNT
    };
};

export const incrementCountByNum = (num) => {
    return {
        type: INCREMENT_COUNT_BY_NUM,
        payload: num
    };
};

export const decrementCount = () => {
    return {
        type: DECREMENT_COUNT
    };
};

export const getCount = () => {
    return {
        type: GET_COUNT
    };
};