import React, { Component } from 'react';
import Switch from 'react-native-flip-toggle-button';
import { StyleSheet, View, Animated } from 'react-native';

const sliderColor = 'blue';

class CustomSwitch extends Component {

  state = {
    switchWidth: null,
    toggled: false,
    opacity: new Animated.Value(0)
  }

  onToggle = () => {
    const {
      opacity
    } = this.state;
    Animated.timing(opacity, {
      toValue: 1,
      duration: 150,
      useNativeDriver: true
    }).start(() => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true
      }).start();
    });
  }


  renderSwitch() {
    const {
      switchWidth,
      toggled,
      opacity
    } = this.state;

    const {
      onToggle
    } = this.props;

    if(switchWidth)
      return (
        <View>
          <Animated.View style={{opacity, position: 'absolute', left: 5, right: 5, bottom: 5, top: 5, backgroundColor: 'black'}} />
          <Switch
            buttonOnColor={'transparent'}
            buttonOffColor={'transparent'}
            sliderOnColor={sliderColor}
            sliderOffColor={sliderColor}
            value={toggled}
            onToggle={
              (e) => {
                this.setState({toggled: e}, () => {
                  setTimeout(this.onToggle, 0);
                  if(onToggle) onToggle(e);
                });
              }
            }
            buttonHeight={20}
            buttonWidth={switchWidth}
            onAnimationStart={this.onAnimationStart}
          />
        </View>

      );
    else
      return (
        <View
          style={{flex: 1, height: 10}}
          onLayout={(e) => this.setState({switchWidth: e.nativeEvent.layout.width})}
        />
      );
  }

  render() {
    return this.renderSwitch();
  }
}

export default CustomSwitch;
