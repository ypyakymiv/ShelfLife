import React, { Component } from 'react';
import { BookImage } from '../../shared';
import ReactNative, { findNodeHandle, Image, View, TouchableWithoutFeedback } from 'react-native';
import { Title, Text } from 'native-base';


// You should measure relative to Container/Content,
// however for our purposes this is synonymous to the
// screen

class Review extends Component {

  state = {
    animating: false,
    origin: null,
    end: false
  }

  _measureInWindow = () => {
    this._bookImage.measureInWindow(
      (x, y, width, height) => {
        console.log(`x: ${x}`);
        console.log(`y: ${y}`);
        console.log(`width: ${width}`);
        console.log(`height: ${height}`);
      }
    )
  }


  // _measure = () => {
  //   const { container } = this.props;
  //
  //   this._bookImage.measureLayout(
  //     findNodeHandle(container),
  //     (x, y, width, height, pageX, pageY) => {
  //
  //       // console.log("result => " + result);
  //       console.log(this._bookImage);
  //       console.log(`x: ${x}`);
  //       console.log(`y: ${y}`);
  //       console.log(`width: ${width}`);
  //       console.log(`height: ${height}`);
  //       console.log(`pageX: ${pageX}`);
  //       console.log(`pageY: ${pageY}`);
  //
  //       // this.setState({
  //       //   x, y, width, height, pageX, pageY
  //       // });
  //     }
  //   );
  // }

  Measure = (props) => {

    const { aspectRatio } = this.bookImage.state;

    console.log("Hello");

    return (
      <View
        onLayout={({nativeEvent}) => {this.setState({end: true}); console.log(nativeEvent.layout);}}
        style={Styles.measure()}
      />
    );

  }

  _expand = () => {
    // this.setState({animating: true});
    this._measureInWindow();
  }

  render() {

    const { animating, end } = this.state;
    const { Measure } = this;

    console.log(this.bookImage)


    if(this.bookImage && !end) {
      return (
        <Measure />
      );
    }

    if(animating)
      return (
        <View
          style={{alignSelf: 'stretch', height: 300, backgroundColor: 'red', zIndex: 1}}
        />
      );
    else
      return (
        <TouchableWithoutFeedback onPress={this.props.onPress}>
          <View ref="view" style={{alignSelf: 'stretch', flexDirection: 'column'}}>
            <View style={{flexDirection: 'column', padding: 10, justifyContent: 'space-between', alignItems: 'center'}}>
              <BookImage ref={ref => {this.bookImage = ref; this.forceUpdate()}} fillWidth={true} source={{uri: 'http://www.thesociologicalcinema.com/uploads/4/8/3/9/4839762/2442263.jpg?1421951700'}}/>
            </View>
          </View>
        </TouchableWithoutFeedback>
      );
  }
}

class Styles {
  static measure() {
    return {
      backgroundColor: 'red',
      position: 'absolute',
      height: 1,
      left: 0,
      right: 0,
      top: 0
    };
  }
}

export default Review;
