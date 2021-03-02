import breedsReducer from './breeds-reducer';
import factReducer from './fact-reducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  breeds: breedsReducer,
  fact: factReducer
});

export default rootReducer;