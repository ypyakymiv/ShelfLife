import React, { Component } from 'react';
import { Animated, StyleSheet, StatusBar } from 'react-native';
import { Header } from 'native-base';

const headerColor = '#F7F7F7';

class CustomHeader extends Component {

  // state = {
  //   translateY: null,
  // }
  //
  // _showHeader = () => {
  //   // const { height } = this.state;
  //   // if(!height) return;
  //
  //   this._growHeader(1);
  // }
  //
  // _hideHeader = () => {
  //   this._growHeader(0);
  // }
  //
  // _growHeader = (value, callback = null) => {
  //
  //
  //   const { translateY } = this.state;
  //
  //   if(callback)
  //     Animated.spring(translateY, {
  //       toValue: value,
  //       duration: 150,
  //     }).start(callback);
  //   else
  //     Animated.spring(translateY, {
  //       toValue: value,
  //       duration: 150,
  //     }).start();
  // }
  //
  // componentDidUpdate(prevProps) {
  //   const { headerVisible } = this.props;
  //
  //
  //
  //   if(headerVisible != prevProps.headerVisible)
  //     if(headerVisible) {
  //       console.log("Show");
  //
  //       this._showHeader();
  //     }
  //     else {
  //       console.log("Hide");
  //
  //       this._hideHeader();
  //     }
  // }
  //
  // _transform = () => {
  //
  //   const { translateY } = this.state;
  //
  //   return {
  //     transform: [{translateY}]
  //   };
  // }

  render() {


    return (
      <Header style={[styles.header, this.props.style]}>
        <StatusBar backgroundColor={headerColor} barStyle={'dark-content'} />
        {this.props.children}
      </Header>
    );
  }

}

const styles = StyleSheet.create({
  header: {
    backgroundColor: headerColor,
    // elevation: 0,
    // backgroundColor: 'red',
    height: 45,
    borderBottomColor: 'rgba(0, 0, 0, .3)',
    borderBottomWidth: 1/3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

export default CustomHeader;
