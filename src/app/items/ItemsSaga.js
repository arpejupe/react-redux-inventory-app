import { call, takeLatest, all, put } from 'redux-saga/effects'
import ItemsTypes from './ItemsTypes';
import API from '../../services/api';

export function* fetchItems({id}) {
  const items = yield call(API.fetchItems, id);
  yield put({ type: ItemsTypes.READ_ITEMS_SUCCEEDED, items });
  return;
}

export function* actionWatcher() {
    yield takeLatest(ItemsTypes.READ_ITEMS_PENDING, fetchItems);
}

export default function* ItemsSaga() {
  yield all([
    actionWatcher(),
  ]);
}