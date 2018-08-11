import React, { Component } from 'react';
import { Transactions } from '../../../scenes/main';
import { Icon } from 'native-base';

const icon = ({focused, tintColor}) => {
  return (
    <Icon type="FontAwesome" name="handshake-o" style={{color: tintColor, fontSize: 24}} />
  );
}

class TransactionsNav extends Component {

  static navigationOptions = {
    tabBarIcon: icon
  }

  render() {
    return (
      <Transactions />
    );
  }
}

export default TransactionsNav;
