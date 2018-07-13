import React, { Component } from 'react';
import { CustomHeader } from '../shared';
import { Container, Content, Left, Body, Right, Title } from 'native-base';

class FeedTemplate extends Component {
  render() {
    return (
      <Container>
        <CustomHeader>
          <Left />
          <Body>
            <Title>
              {"Just to hit the studio"}
            </Title>
          </Body>
          <Right />
        </CustomHeader>

        <Content>
          {this.props.children}
        </Content>
      </Container>
    );
  }
}

export default FeedTemplate;
