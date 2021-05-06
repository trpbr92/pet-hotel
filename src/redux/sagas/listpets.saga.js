import {put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';

function* fetchPets() {
    try {
        const list = yield axios.get('/api/pets');
        console.log('get all', list.data);
        yield put ({type: 'SET_LIST', payload: list.data});
    } catch {
        console.log('ERROR in get listpets');
    }
}

function* listPetsSaga() {
    yield takeLatest ('FETCH_LIST', fetchPets);
}

export default listPetsSaga;