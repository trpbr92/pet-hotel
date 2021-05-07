import {combineReducers} from 'redux';
import listpets from './listpets.reducer';
import addOwner from './addOwner.reducer';


const rootReducer = combineReducers({
listpets,
addOwner,
});

export default rootReducer;