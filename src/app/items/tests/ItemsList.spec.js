import React from "react";
import { Provider } from 'react-redux';

import configureMockStore from "redux-mock-store";

import ItemsContainer from "./../ItemsContainer";
import ItemsList from "./../ItemsList";

import ListItem from '@material-ui/core/ListItem';
import CircularProgress from '@material-ui/core/CircularProgress';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import inventoryTheme from '../../../styles/InventoryTheme.js';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { createShallow, createMount } from '@material-ui/core/test-utils';

Enzyme.configure({ adapter: new Adapter() });

function createTestProps(props) {
    return {
      items: [
        {
          "id": "A429",
          "name": "Inventory A429",
          "stock": 145,
          "total": 200
        },
        {
          "id": "A342",
          "name": "Inventory A342",
          "stock": 293,
          "total": 490
        },
      ],
      loading: false,
      fetchItems: jest.fn(),
      match: {
        params: {
          id: 'A342'
        }
      },
      ...props,
    };
}

describe('<ItemsList /> rendering', () => {

  let shallow, mount, wrapper, minProps;

  beforeEach(() => {
    minProps = createTestProps();
    shallow = createShallow();
    mount = createMount();
    wrapper = shallow(<ItemsList {...minProps} />);
  });  

  afterEach(() => {
    wrapper.unmount();
  });

  it("should match snapshot", () => {

    const state = {
      ItemsReducer: {
        loading: true,
        items: [],
      }
    };

    const theme = createMuiTheme(inventoryTheme);
    const store = configureMockStore()(state);
    const component = mount(
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <ItemsContainer 
            match={{
              params: {
                id: 'A342'
              }
            }}
          />
        </MuiThemeProvider>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });

  it('should fetch items on component mount', () => {
    const itemsListInstance = wrapper.dive().instance();
    const fetchItemsMock = jest.spyOn(itemsListInstance.props, 'fetchItems');
    expect(fetchItemsMock).toHaveBeenCalledTimes(1);
  })

  it('should render two <ListItems /> child components in <ItemsList />', () => {
    expect(wrapper.dive().find(ListItem)).toHaveLength(2);
  });

  it('should render CircularProgress when loading is set true', () => {
    wrapper.setProps({ loading: true });
    expect(wrapper.props().loading).toEqual(true);
    expect(wrapper.dive().find(CircularProgress)).toHaveLength(1);
  });

});
