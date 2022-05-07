import { combineReducers } from 'redux';
import converterReducer from './converterReducer';

const reducer = combineReducers({
  converter: converterReducer,
});

export default reducer;
