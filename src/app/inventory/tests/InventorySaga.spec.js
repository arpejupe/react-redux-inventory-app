import { expectSaga } from 'redux-saga-test-plan';

import { call } from 'redux-saga/effects'
import * as InventorySaga from '../InventorySaga';
import InventoryTypes from '../InventoryTypes';

import API from '../../../services/api';

describe('InventorySaga', () => {

  it('should fetch inventory',  async () => {

    const payload = {
      inventory: [
        {
          id: "A429",
          name: "Inventory A429",
          stock: 145,
          total: 200
        },
        {
          id: "A342",
          name: "Inventory A342",
          stock: 293,
          total: 490
        }
      ]
    };

    return expectSaga(InventorySaga.actionWatcher)
      .provide([[call(API.fetchInventory), payload.inventory]])
      .put({
        type: InventoryTypes.READ_INVENTORY_SUCCEEDED ,
        ...payload,
      })
      .dispatch({ type: InventoryTypes.READ_INVENTORY_PENDING })
      .silentRun();

  });

});