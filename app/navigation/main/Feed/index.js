import React, { Component } from 'react';
import { Icon } from 'native-base';

import FeedWithDetails from './FeedWithDetails';

const icon = ({focused, tintColor}) => {
  return (
    <Icon type="MaterialIcons" name="fiber-new" style={{color: tintColor, fontSize: 30}} />
  );
}

class FeedNav extends Component {
  static navigationOptions = {
    tabBarIcon: icon
  }

  render() {
    return (
      <FeedWithDetails />
    );
  }
}

export default FeedNav;
