import React, { Component } from 'react';
import DetailsTemplate from './DetailsTemplate';
import DetailsBody from './DetailsBody';
import { StyleSheet } from 'react-native';

class Details extends Component {
  render() {
    return (
      <DetailsTemplate>
        <DetailsBody {...this.props} />
      </DetailsTemplate>
    );
  }
}

export default Details;
