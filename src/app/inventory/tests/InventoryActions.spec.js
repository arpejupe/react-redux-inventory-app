import InventoryTypes from '../InventoryTypes';
import * as actions from '../InventoryActions';

import { apiMiddleware } from 'redux-api-middleware';
import configureMockStore from 'redux-mock-store';
import initialState from '../../State';

describe('InventoryActions', () => {

  const createStore = configureMockStore([apiMiddleware])
  const store = createStore(initialState)

  afterEach(() => {
    store.clearActions();
  });

  it('Dispatches READ_INVENTORY_SUCCESS after fetching inventory', () => {
    const expectedActions = [
      { type: InventoryTypes.READ_INVENTORY_PENDING}
    ]
    store.dispatch(actions.fetchInventory());
    expect(store.getActions()).toEqual(expectedActions);
  });

});
