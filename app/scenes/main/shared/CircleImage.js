import React, { Component } from 'react';
import { Image } from 'react-native';

class CircleImage extends Component {
  render() {
    const { size, style } = this.props;

    return (
      <Image {...this.props} style={Style.circleImage(size, style)} />
    );
  }
}

class Style {
  static circleImage(size, add = {}) {
    return {
      height: size,
      width: size,
      borderRadius: size / 2,
      ...add
    }
  }
}

export default CircleImage;
