import React, { Component } from 'react';
import { View } from 'react-native';
import { Title } from 'native-base';

class TransactionsBody extends Component {
  render() {
    return (
      <View style={{alignSelf: 'stretch', padding: 10}}>
        <Title style={{color: 'black'}}>
          No messages yet!
        </Title>
      </View>
    );
  }
}

export default TransactionsBody;
