import React, { Component } from 'react';
import { Messages } from '../../../scenes/main';
import { Icon } from 'native-base';

const icon = ({focused, tintColor}) => {
  return (
    <Icon type="Feather" name="message-circle" style={{color: tintColor, fontSize: 24}} />
  );
}

class MessagesNav extends Component {

  static navigationOptions = {
    tabBarIcon: icon
  }

  render() {
    return (
      <Messages />
    );
  }
}

export default MessagesNav;
