import InventorySaga from './inventory/InventorySaga';
import ItemsSaga from './items/ItemsSaga';

const sagas = {
  InventorySaga,
  ItemsSaga
};

export function registerWithMiddleware(sagaMiddleware) {
  Object.values(sagas).forEach(sagaMiddleware.run.bind(sagaMiddleware));
};