import {combineReducers} from 'redux';
import listpets from './listpets.reducer';


const rootReducer = combineReducers({
listpets,

});

export default rootReducer;