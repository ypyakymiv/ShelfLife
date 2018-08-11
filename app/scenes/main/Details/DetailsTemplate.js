import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Left, Body, Right, Title } from 'native-base';
import { CustomIcon, CustomHeader, BookImage } from '../shared';

class DetailsTemplate extends Component {
  render() {

    // <CustomHeader style={header}>
    //   <Body style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
    //     <BookImage resizeMode={'cover'} />
    //   </Body>
    // </CustomHeader>

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

export default DetailsTemplate;
