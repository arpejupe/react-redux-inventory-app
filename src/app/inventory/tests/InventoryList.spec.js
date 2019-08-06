import React from "react";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import { create } from "react-test-renderer";

import InventoryContainer from "./../InventoryContainer";
import InventoryList from "./../InventoryList";

import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { createShallow } from '@material-ui/core/test-utils';

Enzyme.configure({ adapter: new Adapter() });

function createTestProps(props) {
    return {
      inventory: [
        {
          id: "A429",
          name: "Inventory A429",
          stock: 145,
          total: 200
        },
        {
          id: "A342",
          name: "Inventory A342",
          stock: 293,
          total: 490
        }
      ],
      loading: false,
      actions: {
        fetchInventory: jest.fn(),
      },
      ...props,
    };
}

describe('<InventoryList /> rendering', () => {

  let shallow, wrapper, minProps;

  beforeEach(() => {
    minProps = createTestProps();
    shallow = createShallow();
    wrapper = shallow(<InventoryList {...minProps} />);
  });  

  afterEach(() => {
    wrapper.unmount();
  });

  it("should match snapshot", () => {
    const state = {
      InventoryReducer: {
        loading: true,
        inventory: []
      }
    };
    const store = configureMockStore()(state);
    const component = create(
      <Provider store={store}>
        <InventoryContainer />
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should fetch inventory on component mount', () => {
    const inventoryListInstance = wrapper.dive().instance();
    const fetchInventoryMock = jest.spyOn(inventoryListInstance.props.actions, 'fetchInventory');
    expect(fetchInventoryMock).toHaveBeenCalledTimes(1);
  })

  it('should render two <Box /> child components in <InventoryList />', () => {
    expect(wrapper.contains(<div className="inventoryList" />));
    expect(wrapper.dive().find(Box)).toHaveLength(2);
  });

  it('should render CircularProgress when loading is set true', () => {
    wrapper.setProps({ loading: true });
    expect(wrapper.props().loading).toEqual(true);
    expect(wrapper.dive().find(CircularProgress)).toHaveLength(1);
  });

});
