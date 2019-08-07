import * as ItemsTypes from '../ItemsTypes';
import reducer from '../ItemsReducer';

describe('ItemsReducer', () => {
  const getInitialState = () => {
    return {
      items: [],
      loading: false,
      inventory: [],
    };
  };

  const getAppState = () => {
    return {
      inventory: [],
      loading: false,
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
      ],
    };
  };

  it('should set initial state by default', () => {
    const action = { type: 'unknown' };
    const expected = getInitialState();

    expect(reducer(undefined, action)).toEqual(expected);
  });

  it('should handle items actions', () => {
    const action = { type: ItemsTypes.READ_ITEMS_PENDING, state: getAppState() };
    const expected = Object.assign(getAppState());

    expect(reducer(getAppState(), action)).toEqual(expected);
  });

});