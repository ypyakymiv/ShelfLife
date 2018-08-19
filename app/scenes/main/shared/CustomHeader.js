import React, { Component } from 'react';
import { Animated, StyleSheet, StatusBar } from 'react-native';
import { Header } from 'native-base';
import Collapsible from 'react-native-collapsible';

const headerColor = '#F7F7F7';

class CustomHeader extends Component {

  render() {

    const { collapsed } = this.props;

    if(collapsed == null) var noCollapse = true;

    return (
      <Collapsible collapsed={noCollapse ? false : collapsed}>
        <Header style={[styles.header, this.props.style]}>
          <StatusBar backgroundColor={headerColor} barStyle={'dark-content'} />
          {this.props.children}
        </Header>
      </Collapsible>
    );
  }

}

const styles = StyleSheet.create({
  header: {
    backgroundColor: headerColor,
    // elevation: 0,
    // backgroundColor: 'red',
    height: 45,
    borderBottomColor: 'rgba(0, 0, 0, .3)',
    borderBottomWidth: 1/3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

export default CustomHeader;
