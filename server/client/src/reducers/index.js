import { combineReducers } from 'redux';
import { reducer as reduxFrom } from 'redux-form';
import authReducer from './authReducer';
import servysReducer from './servysReducer';

export default combineReducers({
	auth: authReducer,
	servys: servysReducer,
	form: reduxFrom
});
