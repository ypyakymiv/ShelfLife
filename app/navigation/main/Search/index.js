import React, { Component } from 'react';
import { Icon } from 'native-base';

import Search from './Search';

const icon = ({focused, tintColor}) => {
  return (
    <Icon type="FontAwesome" name="search" style={{color: tintColor, fontSize: 22}} />
  );
}

class SearchNav extends Component {

  static navigationOptions = {
    tabBarIcon: icon
  }

  render() {
    return (
      <Search />
    );
  }
}

export default SearchNav;
