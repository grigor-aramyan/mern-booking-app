import { INCREMENT_COUNT, DECREMENT_COUNT, GET_COUNT, INCREMENT_COUNT_BY_NUM } from './types';
import axios from 'axios';

const baseUri = 'http://localhost:4242';

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

export const getCount = () => dispatch => {
    axios
        .get(`${baseUri}/api/get_number`)
        .then(res => {
            dispatch({
                type: GET_COUNT,
                payload: res.data.number
            });
        });
};