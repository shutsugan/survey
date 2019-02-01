import axios from 'axios';

import { FETCH_USER, FETCH_SERVYS } from './types';

export const fetchUser = _ => async dispatch => {
	const {data} = await axios.get('/api/current_user');
	dispatch({type: FETCH_USER, payload: data});
};

export const handleToken = token => async dispatch => {
	const {data} = await axios.post('/api/stripe', token);
	dispatch({type: FETCH_USER, payload: data});
};

export const submitServy = (values, history) => async dispatch => {
	const {data} = await axios.post('/api/servys', values);

	history.push('/servys');
	dispatch({type: FETCH_USER, payload: data});
}

export const fetchServys = _ => async dispatch => {
	const {data} = await axios.get('/api/servys');
	dispatch({type: FETCH_SERVYS, payload: data});
}
