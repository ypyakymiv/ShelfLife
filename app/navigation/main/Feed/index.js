import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon } from 'native-base';

class Feed extends Component {
  static navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => <Icon name="basketball" color={tintColor} />
  }

  render() {
    return (
      <View />
    );
  }
}

export default Feed;
