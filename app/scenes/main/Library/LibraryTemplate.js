import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Left, Body, Right, Title } from 'native-base';
import { CustomIcon, CustomHeader, BookImage } from '../shared';

class LibraryTemplate extends Component {
  render() {

    const { header } = styles;

    return (
      <Container>

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

export default LibraryTemplate;
