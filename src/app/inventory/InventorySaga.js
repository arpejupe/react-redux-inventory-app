import { call, takeLatest, all, put } from 'redux-saga/effects'
import InventoryTypes from './InventoryTypes';
import API from '../../services/api';

export function* fetchInventory() {
  const inventory = yield call(API.fetchInventory);
  yield put({ type: InventoryTypes.READ_INVENTORY_SUCCEEDED, inventory });
  return;
}

export function* actionWatcher() {
    yield takeLatest(InventoryTypes.READ_INVENTORY_PENDING, fetchInventory);
}

export default function* InventorySaga() {
  yield all([
    actionWatcher(),
  ]);
}