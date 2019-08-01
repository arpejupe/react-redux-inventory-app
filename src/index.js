import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore, { history } from './app/Store';
import App from './app/App';
import './styles/styles.scss';

const store = configureStore();

render(
  <AppContainer>
    <App store={store} history={history} />
  </AppContainer>,
  document.getElementById('AppContainer')
);

if (module.hot) {
  module.hot.accept('./app/App', () => {
    const NewApp = require('./app/App').default;
    render(
      <AppContainer>
        <NewApp store={store} history={history} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}