import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon } from 'native-base';

import { Library } from '../../../scenes/main';


const icon = ({focused, tintColor}) => {
  return (
    <Icon type="FontAwesome" name="book" style={{color: tintColor, fontSize: 24}} />
  );
}

class LibraryNav extends Component {

  static navigationOptions = {
    tabBarIcon: icon
  }

  render() {
    return (
      <Library />
    );
  }
}

export default LibraryNav;
