import { combineReducers } from 'redux';
import ItemsReducer from './items/ItemsReducer';
import InventoryReducer from './inventory/InventoryReducer';
import { connectRouter } from 'connected-react-router'

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  ItemsReducer,
  InventoryReducer,
});

export default rootReducer;