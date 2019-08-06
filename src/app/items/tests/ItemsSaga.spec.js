import { expectSaga } from 'redux-saga-test-plan';

import { call } from 'redux-saga/effects'
import * as ItemsSaga from '../ItemsSaga';
import ItemsTypes from '../ItemsTypes';

import API from '../../../services/api';

describe('ItemsSaga', () => {

  it('should fetch items', async () => {

    const payload = {
      items: [
        {
          "id": "II06343",
          "inventory": "A429",
          "name": "Foo",
          "status": "in-progress",
          "price": 23,
          "stock": 4,
          "total": 10
        },
        {
          "id": "II22130",
          "inventory": "A429",
          "name": "Bar",
          "status": "on-hold",
          "price": 60,
          "stock": 2,
          "total": 10
        },
      ]
    };

    const id = 'A429'

    return expectSaga(ItemsSaga.actionWatcher)
      .provide([[call(API.fetchItems, id), payload.items]])
      .put({
        type: ItemsTypes.READ_ITEMS_SUCCEEDED,
        ...payload,
      })
      .dispatch({ type: ItemsTypes.READ_ITEMS_PENDING, id: id })
      .silentRun();
      
  });

});