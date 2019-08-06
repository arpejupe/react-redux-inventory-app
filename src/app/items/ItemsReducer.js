import initialState from '../State'
import ItemsTypes from './ItemsTypes';

const ItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ItemsTypes.READ_ITEMS_PENDING:
      return { 
        ...state,
        loading: true,
      };
    case ItemsTypes.READ_ITEMS_SUCCEEDED:
      return Object.assign({}, state, {
        items: action.items,
        loading: false
      });
    default:
      return state
  }
}

export default ItemsReducer