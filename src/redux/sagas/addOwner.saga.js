import axios from 'axios';
import {put, takeEvery, takeLatest} from 'redux-saga/effects';

function* addOwner(action) {
    try{
        console.log('My payload', action.payload)
        yield axios.post('/owner', action.payload);
        console.log('in addOwner POST');
        yield put({ type: 'SET_OWNER', payload: action.payload})
    } catch (error) {
        console.log('addPet saga POST ERROR', error);
    }
}

function* addOwnerSaga() {
    yield takeEvery('ADD_OWNER', addOwner);
}

export default addOwnerSaga;