import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Nav from './app/navigation';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './app/state/store';
import { Provider } from 'react-redux';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Nav />
        </PersistGate>
      </Provider>
    );
  }
}
