import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
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
      <View>

        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {

  }
});

export default DetailsTemplate;
