import { INCREMENT_COUNT, INCREMENT_COUNT_BY_NUM, DECREMENT_COUNT, GET_COUNT } from '../actions/types';

const initialState = {
    count: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_COUNT:
            return {
                ...state,
                count: action.payload
            };
        case INCREMENT_COUNT:
            return {
                ...state,
                count: state.count + 1
            };
        case INCREMENT_COUNT_BY_NUM:
                return {
                    ...state,
                    count: state.count + (action.payload + 2)
                };
        case DECREMENT_COUNT:
            return {
                ...state,
                count: (((state.count - 1) < 0) ? 0 : state.count - 1)
            };
        default:
            return state;
    }
}