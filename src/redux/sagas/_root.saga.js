import {all} from 'redux-saga/effects';
import  listPetsSaga from './listpets.saga';
import deletePetSaga from './deletepet.saga';
import addOwnerSaga from './addOwner.saga';


export default function* rootSaga() {
    yield all([
        listPetsSaga(),
        deletePetSaga(),
        addOwnerSaga(),
    ]);
}