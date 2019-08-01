import initialState from '../State'
import InventoryTypes from './InventoryTypes';

const InventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case InventoryTypes.READ_INVENTORY_PENDING:
      return { 
        ...state, 
        loading: true
      };
    case InventoryTypes.READ_INVENTORY_SUCCEEDED:
      return Object.assign({}, state, {
        loading: false,
        inventory: action.inventory
      });
    default:
      return state
  }
}

export default InventoryReducer