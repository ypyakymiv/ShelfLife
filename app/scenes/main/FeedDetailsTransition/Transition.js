import React, { Component } from 'react';
import { View, Animated } from 'react-native';
import { withNavigation } from 'react-navigation';

class Transition extends Component {

  state = {
    animation: new Animated.Value(0)
  }

  constructor(props) {
    super(props);
    this.props.navigation.addListener('didFocus', () => {
      this.start();
    })
  }

  _getProp = name => {
    return this.props.navigation.getParam(name)
  }

  opened = () => {
    const { animation } = this.state;
    return animation._value == 1;
  }

  start = () => {
    const { opened } = this;
    const { animation, origin, end } = this.state;

    Animated.spring(animation, {
      toValue: opened() ? 0 : 1,
      duration: 50,
      useNativeDriver: true
    }).start(() => {
      this.props.navigation.push("Details")
    });
  }

  render() {
    const { animation } = this.state;
    const { _getProp } = this;

    const origin = _getProp('origin');
    const end = _getProp('end');
    const source = _getProp('source');


    return (
      <View style={{flex: 1, alignSelf: 'stretch', backgroundColor: 'transparent'}}>
        <Animated.Image style={Style.animatedImage({origin, end, animation})} source={source}/>
      </View>
    );
  }
}

class Style {
  static animatedImage = ({origin, end, animation}) => {

    const offset = end.height - origin.height;
    const factor = origin.height / end.height;

    console.log({origin, end})

    const transform = [
      {
        scale: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [factor, 1]
        })
      },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [origin.y - offset / 2, 0]
        })
      }
    ];

    return {
      position: 'absolute',
      height: end.height,
      width: end.width,
      left: end.x,
      top: end.y,
      transform
    };
  }
}

export default withNavigation(Transition);
