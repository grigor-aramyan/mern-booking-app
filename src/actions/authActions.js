import axios from 'axios';
import { returnErrors } from './errorActions';
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    LOGOUT_SUCCESS,
    LOAD_LOCAL_TOKEN
} from '../actions/types';

export const loadLocalToken = () => dispatch => {
    try {
        const token = localStorage.getItem('token');

        dispatch({
            type: LOAD_LOCAL_TOKEN,
            payload: token
        });
    } catch(e) {
        
    }
}

export const loadUser = () => (dispatch, getState) => {
    dispatch({ type: USER_LOADING });

    axios.get('http://localhost:4242/api/auth/user', tokenConfig(getState))
        .then(res => dispatch({
            type: USER_LOADED,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR
            });
        });
}

export const tokenConfig = getState => {
    const token = getState().auth.token;

    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    if (token) {
        config.headers['x-auth-token'] = token;
    }

    return config;
}