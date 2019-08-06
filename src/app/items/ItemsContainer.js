import { bindActionCreators, } from 'redux';
import { connect } from 'react-redux'
import { fetchItems } from './ItemsActions';
import ItemsList from './ItemsList';

const mapStateToProps = (state) => {
    return {
        loading: state.ItemsReducer.loading,
        items: state.ItemsReducer.items,
    };
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ 
        fetchItems: fetchItems,
    }, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemsList);