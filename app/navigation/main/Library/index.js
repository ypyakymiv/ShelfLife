import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon } from 'native-base';

const icon = ({focused, tintColor}) => {
  return (
    <Icon type="FontAwesome" name="book" style={{color: tintColor, fontSize: 20}} />
  );
}

class Library extends Component {

  static navigationOptions = {
    tabBarIcon: icon
  }

  render() {
    return (
      <View />
    );
  }
}

export default Library;
