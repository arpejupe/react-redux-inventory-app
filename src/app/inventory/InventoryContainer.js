import { bindActionCreators, } from 'redux';
import { connect } from 'react-redux'
import { getItems, fetchInventory } from './InventoryActions';
import InventoryList from './InventoryList';

const mapStateToProps = (state) => {
    console.log('state', state);
    return {
        loading: state.InventoryReducer.loading,
        items: state.InventoryReducer.items,
        inventory: state.InventoryReducer.inventory
    };
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ 
        getItems: getItems,
        fetchInventory: fetchInventory
    }, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InventoryList);