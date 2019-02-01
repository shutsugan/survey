import { FETCH_SERVYS } from '../actions/types';

export default (state = [], {type, payload}) => {
	switch (type) {
		case FETCH_SERVYS:
			return payload;
		default: return state;
	}
};
