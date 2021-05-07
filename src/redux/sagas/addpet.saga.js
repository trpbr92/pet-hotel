import axios from 'axios';
import {takeLatest} from 'redux-saga/effects';

function* addPet(action) {
    try{
       yield axios.post('/api/pets', action.payload);
        console.log('in addPet POST');
    } catch (error) {
        console.log('addPet saga POST ERROR', error);
    }
}

function* addPetSaga() {
    yield takeLatest ('ADD_PET', addPet);
}

export default addPetSaga;