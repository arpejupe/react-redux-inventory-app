import { ActionCreator } from '../../utils/ActionCreator';
import InventoryTypes from './InventoryTypes';

export const getItems = ActionCreator(InventoryTypes.READ_ITEMS_PENDING);
export const fetchInventory = ActionCreator(InventoryTypes.READ_INVENTORY_PENDING);