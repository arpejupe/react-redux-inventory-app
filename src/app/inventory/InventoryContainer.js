import { bindActionCreators, } from 'redux';
import { connect } from 'react-redux'
import { fetchInventory } from './InventoryActions';
import InventoryList from './InventoryList';

const mapStateToProps = (state) => {
    return {
        loading: state.InventoryReducer.loading,
        inventory: state.InventoryReducer.inventory
    };
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ 
        fetchInventory: fetchInventory
    }, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InventoryList);