import React, { Component } from 'react';
import { Animated, View } from 'react-native';
import { IconButton } from '../shared';

class RotateIcon extends Component {

  state = {
    rotation: new Animated.Value(0),
    opened: false,
    animating: false
  }

  _spring = () => {

    const { opened, rotation, animating } = this.state;
    const { onAnimationStart, onAnimationEnd } = this.props;


    if(animating) return;

    this.setState({animating: true}, () => {
      if(onAnimationStart) onAnimationStart({opening: !opened});
      Animated.spring(rotation, {
        toValue: opened ? 0 : 180,
        duration: 500
        // useNativeDriver: true
      }).start(() => {
        this.setState({animating: false, opened: !opened},
          () => {
            if(onAnimationEnd) onAnimationEnd({opened});
          });
      });
    });
  }

  render() {
    const { rotation } = this.state;

    return (
      <Animated.View
        style={
          {
            transform: [
              {
                rotateZ: rotation.interpolate({
                  inputRange: [0, 180], outputRange: ['0deg', '180deg']
                })
              },
              {perspective: 1000}
            ]
          }
        }
      >
        <IconButton onPressIn={null} {...this.props} onPress={this._spring}  />
      </Animated.View>
    );
  }
}

export default RotateIcon;
