import { takeLatest, all, put } from 'redux-saga/effects'
import fetch from 'isomorphic-fetch';
import InventoryTypes from './InventoryTypes';

function* fetchItems(id) {
    const response = yield fetch(`http://localhost:8081/inventory/${id}`);
    const items = yield response.json();
    yield put({ type: InventoryTypes.READ_ITEMS_SUCCEEDED, items });
    return;
}

function* fetchInventory() {
  const response = yield fetch(`http://localhost:8081/inventory`);
  const inventory = yield response.json();
  yield put({ type: InventoryTypes.READ_INVENTORY_SUCCEEDED, inventory });
  return;
}

export function* actionWatcher() {
    yield takeLatest(InventoryTypes.READ_INVENTORY_PENDING, fetchInventory);
    yield takeLatest(InventoryTypes.READ_ITEMS_PENDING, fetchItems);
}

export default function* InventorySaga() {
  yield all([
    actionWatcher(),
  ]);
}