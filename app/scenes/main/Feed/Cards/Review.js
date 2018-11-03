import React, { Component } from 'react';
import { BookImage } from '../../shared';
import ReactNative, { Animated, Image, View, TouchableWithoutFeedback, Dimensions } from 'react-native';
import { Title, Text } from 'native-base';


// You should measure relative to Container/Content,
// however for our purposes this is synonymous to the
// screen

class Review extends Component {

  state = {
    animating: false,
    expanded: false,
    origin: null,
    end: null,
  }

  prepareAnimation = () => {
    return new Promise((resolve, reject) => {
      this.refs.bookImage.measure((x, y, width, height) => {
        this.setState({origin: {x, y, height, width}}, () => {
          resolve();
        });
      });
    });
  }

  onAspect = (aspect) => {
    const { width } = Dimensions.get('window');
    const height = width / aspect;
    this.setState({
      end: {
        width, height, x: 0, y: 0
      }
    });
  }

  onPress = () => {
    const { onPress, onAnimation } = this.props;
    const { _getAnimation } = this;

    if(onAnimation) setTimeout(() => onAnimation(this), 0);

    if(onPress) setTimeout(onPress, 0);
  }


  render() {
    const { onAspect } = this;

    return (
      <TouchableWithoutFeedback onPress={this.onPress}>
        <View ref="view" style={{alignSelf: 'stretch', flexDirection: 'column'}}>
          <View style={{flexDirection: 'column', padding: 10, justifyContent: 'space-between', alignItems: 'center'}}>
            <BookImage onAspect={onAspect} ref="bookImage" fillWidth={true} source={this.props.source}/>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

class Styles {
  static measure() {
    return {
      position: 'absolute',
      height: 1,
      left: 0,
      right: 0,
      top: 0
    };
  }
}

export default Review;
