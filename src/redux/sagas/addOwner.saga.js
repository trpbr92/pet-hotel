import axios from 'axios';
import {takeLatest} from 'redux-saga/effects';

function* addOwner(action) {
    try{
       yield axios.post('/api/owners', action.payload);
        console.log('in addOwner POST');
        yield put({ type: 'SET_OWNER', payload: action.payload})
    } catch (error) {
        console.log('addPet saga POST ERROR', error);
    }
}

function* addOwnerSaga() {
    yield takeLatest ('ADD_OWNER', addOwner);
}

export default addOwnerSaga;