import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon } from 'native-base';

const icon = ({focused, tintColor}) => {
  return (
    <Icon type="FontAwesome" name="handshake-o" style={{color: tintColor, fontSize: 24}} />
  );
}

class Transactions extends Component {

  static navigationOptions = {
    tabBarIcon: icon
  }

  render() {
    return (
      <View />
    );
  }
}

export default Transactions;
