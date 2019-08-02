import { ActionCreator } from '../../utils/ActionCreator';
import InventoryTypes from './InventoryTypes';

export const fetchItems = ActionCreator(InventoryTypes.READ_ITEMS_PENDING, "id", "loading");
export const fetchInventory = ActionCreator(InventoryTypes.READ_INVENTORY_PENDING);