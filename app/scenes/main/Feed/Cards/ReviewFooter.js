import React, { Component } from 'react';
import { Animated, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Text } from 'native-base';
import { CircleImage } from '../../shared';

class ReviewFooter extends Component {

  state = {
    containerHeight: null,
    footerOffset: null,
    hoodFolded: true
  }

  _popTheHood = (callback = null) => {
    const { footerOffset, containerHeight } = this.state;

    const toValue = containerHeight - 120;

    if(callback) {
      Animated.spring(footerOffset, {toValue, duration: 150, useNativeDriver: true}).start((r) => {callback()});
    } else {
      Animated.spring(footerOffset, {toValue, duration: 150, useNativeDriver: true}).start();
    }
  }

  _closeTheHood = (callback = null) => {
    const { footerOffset, containerHeight } = this.state;

    const toValue = containerHeight + 30;

    if(callback)
      Animated.spring(footerOffset, {toValue, duration: 150, useNativeDriver: true}).start((r) => {callback()});
    else {
      Animated.spring(footerOffset, {toValue, duration: 150, useNativeDriver: true}).start();
    }
  }

  _unfoldTheHood = (callback = null) => {
    const { footerOffset } = this.state;

    const toValue = 30;

    if(callback)
      Animated.spring(footerOffset, {toValue, duration: 150, useNativeDriver: true}).start(callback);
    else
      Animated.spring(footerOffset, {toValue, duration: 150, useNativeDriver: true}).start();
  }

  Measure = (props = null) => {
    const { measure } = styles;

    const _onLayout = ({nativeEvent}) => {

      const { height } = nativeEvent.layout;

      this.setState({
        containerHeight: height,
        footerOffset: new Animated.Value(0)
      });
    }

    return <View style={measure} onLayout={_onLayout} />
  }

  Footer = (props = null) => {

    const { preview, touchBar, header, bodyContainer } = styles;
    const { containerHeight, footerOffset } = this.state;
    const _toggleFold = () => {

      // You really should block while animating...

      const { hoodFolded } = this.state;
      if(hoodFolded)
        this.setState({hoodFolded: false}, this._unfoldTheHood);
      else
        this.setState({hoodFolded: true}, this._popTheHood);
    }

    return (
      <Animated.View style={Style.footerContainer(containerHeight, footerOffset)}>
        <View style={styles}>
          <TouchableWithoutFeedback onPress={_toggleFold}>
            <View style={touchBar}>
            </View>
          </TouchableWithoutFeedback>
          <View style={header}>
            <CircleImage size={40} source={{uri: 'https://pbs.twimg.com/profile_images/733037018561843200/l_0tKkFK_400x400.jpg'}}/>
            <Text style={{marginLeft: 15}}>
              Derrick Juul
            </Text>
          </View>
          <View style={bodyContainer}>
            <Text style={{fontSize: 14}}>
              This book is chillin. Its just a lil hard to read. Sometimes I wish I woulda stayed n got my GED but on some shit the streets B wildin I idin een do nuffin.
            </Text>
          </View>
        </View>
      </Animated.View>
    );
  }

  render() {
    const { containerHeight } = this.state;
    const { Measure, Footer } = this;

    if(!containerHeight) {
      return <Measure />
    } else {
      return <Footer />;
    }
  }
}

class Style {
  static footerContainer(containerHeight, footerOffset) {
    return {
      position: 'absolute',
      transform: [
        {translateY: footerOffset}
      ],
      height: containerHeight + 30,
      bottom: 0,
      left: 0,
      right: 0,
      flexDirection: 'column',
      backgroundColor: 'white',
    };
  }
}

const styles = StyleSheet.create({
  measure: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0
  },
  preview: {
    height: 150
  },
  touchBar: {
    backgroundColor: 'white',
    height: 15,
    borderTopWidth: .5,
    borderBottomWidth: .5,
    borderColor: '#F7F7F7',
    alignSelf: 'stretch'
  },
  header: {
    height: 50,
    alignSelf: 'stretch',
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  bodyContainer: {
    alignSelf: 'stretch',
    padding: 10
  }
});

export default ReviewFooter;
