import { takeLatest, all, call, put } from 'redux-saga/effects';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import {
fetchCollectionsSuccess,
fetchColectionsFailure
} from './shop.actions';

import ShopActionTypes from './shop.types';


export function* fetchCollectionsAsync() {
  yield  console.log('I am fired');

try {
const collectionRef = firestore.collection('collections');
const snapshot = yield collectionRef.get();
const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
yield put(fetchCollectionsSuccess(collectionsMap));
} catch (error) {
  yield put(fetchColectionsFailure(error.message));
}
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}