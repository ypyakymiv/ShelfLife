import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon } from 'native-base';

const icon = ({focused, tintColor}) => {
  return (
    <Icon type="MaterialIcons" name="fiber-new" style={{color: tintColor, fontSize: 30}} />
  );
}

class Feed extends Component {
  static navigationOptions = {
    tabBarIcon: icon
  }

  render() {
    return (
      <View />
    );
  }
}

export default Feed;
