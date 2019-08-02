import initialState from '../State'
import InventoryTypes from './InventoryTypes';

const ItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case InventoryTypes.READ_ITEMS_PENDING:
      return { 
        ...state,
        loading: true,
      };
    case InventoryTypes.READ_ITEMS_SUCCEEDED:
      return Object.assign({}, state, {
        items: action.items,
        loading: false
      });
    default:
      return state
  }
}

export default ItemsReducer