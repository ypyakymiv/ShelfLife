import React, { Component } from 'react';
import { Animated, View } from 'react-native';

class ScaleAway extends Component {

  state = {
    yFactor: new Animated.Value(1)
  }

  _flyBack = () => {
    this._scaleBack();
  }

  _flyAway = () => {
    this._scaleAway();
  }
  _scaleAway = () => {
    this._scaleTo(0);
  }

  _scaleBack = () => {
    this._scaleTo(1);
  }

  _scaleTo = (val, callback = null) => {
    const { yFactor } = this.state;

    if(callback)
      Animated.spring(yFactor, {
        toValue: val,
        duration: 200,
        useNativeDriver: true
      }).start(callback);
    else
      Animated.spring(yFactor, {
        toValue: val,
        duration: 200,
        useNativeDriver: true
      }).start();
  }


  render() {

    const { yFactor } = this.state;

    return (
      <Animated.View style={{transform: [{scaleY: yFactor }]}}>
        {this.props.children}
      </Animated.View>

    );
  }
}

export default ScaleAway;
