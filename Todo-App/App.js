/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Provider } from 'react-redux';
import AppContainer from './components/appstack';

import configureStore from './config/store';

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store = {store} >
        <AppContainer />
      </Provider>
    );
  }
}

