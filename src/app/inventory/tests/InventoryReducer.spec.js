import * as InventoryTypes from '../InventoryTypes';
import reducer from '../InventoryReducer';

describe('InventoryReducer', () => {
  const getInitialState = () => {
    return {
      items: [],
      loading: false,
      inventory: [],
    };
  };

  const getAppState = () => {
    return {
      items: [],
      loading: false,
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
      ],
    };
  };

  it('should set initial state by default', () => {
    const action = { type: 'unknown' };
    const expected = getInitialState();

    expect(reducer(undefined, action)).toEqual(expected);
  });

  it('should handle inventory actions', () => {
    const action = { type: InventoryTypes.READ_INVENTORY_PENDING, state: getAppState() };
    const expected = Object.assign(getAppState());

    expect(reducer(getAppState(), action)).toEqual(expected);
  });

});