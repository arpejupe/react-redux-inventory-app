import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';

import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import inventoryTheme from '../styles/InventoryTheme.js';

import Header from './common/Header';
import Footer from './common/Footer';
import Home from './home/Home';
import InventoryList from './inventory/InventoryContainer';

export default class Root extends Component {
  
  render() {
    const { store, history } = this.props;
    const theme = createMuiTheme(inventoryTheme);
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Header></Header>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/inventory" component={InventoryList} />
            </Switch>
            <Footer></Footer>
          </MuiThemeProvider>
        </ConnectedRouter>
      </Provider>
    );
  }
}