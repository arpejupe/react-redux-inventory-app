import { ActionCreator } from '../../utils/ActionCreator';
import InventoryTypes from './InventoryTypes';

export const fetchInventory = () => ({ 
  type: InventoryTypes.READ_INVENTORY_PENDING
});