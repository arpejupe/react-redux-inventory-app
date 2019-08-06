import { ActionCreator } from '../../utils/ActionCreator';
import InventoryTypes from './ItemsTypes';

export const fetchItems = ActionCreator(InventoryTypes.READ_ITEMS_PENDING, "id", "loading");