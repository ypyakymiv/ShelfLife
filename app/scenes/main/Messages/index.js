import React, { Component } from 'react';
import MessagesTemplate from './MessagesTemplate';
import MessagesBody from './MessagesBody';

class Messages extends Component {
  render() {
    return (
      <MessagesTemplate>
        <MessagesBody />
      </MessagesTemplate>
    );
  }
}

export default Messages;
