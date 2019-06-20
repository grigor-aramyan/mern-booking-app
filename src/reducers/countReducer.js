import { INCREMENT_COUNT, DECREMENT_COUNT, GET_COUNT } from '../actions/types';

const initialState = {
    count: 11
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_COUNT:
            return state;
        case INCREMENT_COUNT:
            return state;
        default:
            return state;
    }
}