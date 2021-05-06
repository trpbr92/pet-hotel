import {all} from 'redux-saga/effects';
import  listPetsSaga from './listpets.saga';
import deletePetSaga from './deletepet.saga';


export default function* rootSaga() {
    yield all([
        listPetsSaga(),
        deletePetSaga(),
    ]);
}