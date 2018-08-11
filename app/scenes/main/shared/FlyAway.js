import React, { Component } from 'react';
import { Animated, View } from 'react-native';

class FlyAway extends Component {

  state = {
    yOffset: new Animated.Value(0)
  }

  _flyAway = () => {
    const { distance } = this.props;

    this._flyTo(distance || -100);
  }

  _flyBack = () => {
    this._flyTo(0);
  }

  _flyTo = (val, callback = null) => {
    const { yOffset } = this.state;

    if(callback)
      Animated.spring(yOffset, {
        toValue: val,
        duration: 200,
        useNativeDriver: true
      }).start(callback);
    else
      Animated.spring(yOffset, {
        toValue: val,
        duration: 200,
        useNativeDriver: true
      }).start();
  }


  render() {

    const { yOffset } = this.state;

    return (
      <Animated.View style={{transform: [{translateY: yOffset }]}}>
        {this.props.children}
      </Animated.View>

    );
  }
}

export default FlyAway;
