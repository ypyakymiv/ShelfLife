import React, { Component } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { Header } from 'native-base';

const headerColor = '#F7F7F7';

class CustomHeader extends Component {
  render() {
    return (
      <Header style={styles.header}>
        <StatusBar backgroundColor={headerColor} barStyle={'dark-content'} />
        {this.props.children}
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: headerColor,
    height: 45,
    borderBottomColor: 'rgba(0, 0, 0, .3)',
    borderBottomWidth: 1/3,

  }
});

export default CustomHeader;
