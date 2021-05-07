import axios from 'axios';
import {put, takeEvery, takeLatest} from 'redux-saga/effects';

function* addPet(action) {
    try{
       yield axios.post('/api/pets', action.payload);
        console.log('in addPet POST');
        yield put({type: "FETCH_LIST"})
    } catch (error) {
        console.log('addPet saga POST ERROR', error);
    }
}

function* addPetSaga() {
    yield takeEvery ('ADD_PET', addPet);
}

export default addPetSaga;