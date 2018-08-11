import React, { Component } from 'react';
import { View } from 'react-native';
import { CustomHeader } from '../shared';
import { Container, Content, Left, Body, Right, Title } from 'native-base';
import { CustomIcon } from '../shared';

class FeedTemplate extends Component {

  render() {

    const { headerVisible } = this.props;

    // console.log("2HeaderVisible: " + headerVisible);

    return (
      <Container>
        <CustomHeader headerVisible={headerVisible}>
          <Body style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
            <CustomIcon name="ShelfLife" style={{fontSize: 30, color: 'black'}} />
          </Body>
        </CustomHeader>

        <Container>
          {this.props.children}
        </Container>
      </Container>
    );
  }
}

export default FeedTemplate;
