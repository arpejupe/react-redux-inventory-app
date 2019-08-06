import ItemsTypes from '../ItemsTypes';
import * as actions from '../ItemsActions';

import { apiMiddleware } from 'redux-api-middleware';
import configureMockStore from 'redux-mock-store';
import initialState from '../../State';

describe('ItemsActions', () => {

  const createStore = configureMockStore([apiMiddleware])
  const store = createStore(initialState)

  afterEach(() => {
    store.clearActions();
  });

  it('Dispatches READ_ITEMS_SUCCESS after fetching items', () => {
    const expectedActions = [
      { type: ItemsTypes.READ_ITEMS_PENDING}
    ]
    store.dispatch(actions.fetchItems());
    expect(store.getActions()).toEqual(expectedActions);
  });

});
