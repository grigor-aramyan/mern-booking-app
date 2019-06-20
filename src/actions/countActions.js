import { INCREMENT_COUNT, DECREMENT_COUNT, GET_COUNT } from './types';

export const incrementCount = () => {
    return {
        type: INCREMENT_COUNT
    };
};

export const getCount = () => {
    return {
        type: GET_COUNT
    };
};