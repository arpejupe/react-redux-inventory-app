import { ActionCreator } from '../../utils/ActionCreator';
import InventoryTypes from './InventoryTypes';

export const fetchInventory = ActionCreator(InventoryTypes.READ_INVENTORY_PENDING);