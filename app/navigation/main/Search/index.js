import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon } from 'native-base';

const icon = ({focused, tintColor}) => {
  return (
    <Icon type="FontAwesome" name="search" style={{color: tintColor, fontSize: 22}} />
  );
}

class Search extends Component {

  static navigationOptions = {
    tabBarIcon: icon
  }

  render() {
    return (
      <View />
    );
  }
}

export default Search;
