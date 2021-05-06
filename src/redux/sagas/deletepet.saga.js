import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

function* deletePet (action) {

    try{
        yield axios.delete('/' + action.payload);
        yield put ({type: 'FETCH_LIST'});
    } catch (error) {
        console.log('ERROR in deletePet', error);
    }
}

function* deletePetSaga(){
    yield takeLatest('DELETE_PET', deletePet);
}

export default deletePetSaga;