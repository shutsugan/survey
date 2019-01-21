import axios from 'axios';

import { FETCH_USER } from './types';

export const fetchUser = _ => async dispatch => {
	const {data} = await axios.get('/api/current_user');
	dispatch({type: FETCH_USER, payload: data});
};