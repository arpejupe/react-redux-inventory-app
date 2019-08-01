import InventorySaga from './inventory/InventorySaga';

const sagas = {
  InventorySaga,
};

export function registerWithMiddleware(sagaMiddleware) {
  Object.values(sagas).forEach(sagaMiddleware.run.bind(sagaMiddleware));
};