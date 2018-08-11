import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Left, Body, Right, Title } from 'native-base';
import { CustomIcon, CustomHeader, BookImage } from '../shared';

class TransactionsTemplate extends Component {
  render() {
    const { header } = styles;

    return (
      <Container>

        <CustomHeader style={header}>
          <Body style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Title style={{color: 'black'}}>
              Transactions
            </Title>
          </Body>
        </CustomHeader>

        <Content>
          {this.props.children}
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {

  }
});

export default TransactionsTemplate;
