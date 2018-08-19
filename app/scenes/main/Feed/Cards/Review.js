import React, { Component } from 'react';
import { BookImage } from '../../shared';
import ReactNative, { Animated, Image, View, TouchableWithoutFeedback } from 'react-native';
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
    current: {
      width: null,
      height: null,
      x: null,
      y: null
    }
  }

  MeasureEnd = (props) => {

    const { aspectRatio } = this.refs.bookImage.state;

    const _onLayout = ({nativeEvent}) => {

      const { height, width, x, y } = nativeEvent.layout;

      const end = {
        height: width / aspectRatio,
        width,
        x,
        y
      };

      this.setState({end});
    }


    return (
      <View
        onLayout={_onLayout}
        style={Styles.measure()}
      />
    );

  }

  setCurrent = async () => {

    const _wrap = (layout) => {
      return {
        width: new Animated.Value(layout.width),
        height: new Animated.Value(layout.height),
        x: new Animated.Value(layout.x),
        y: new Animated.Value(layout.y)
      };
    }

    const { current, end, origin, expanded, animating } = this.state;

    if(expanded) return this.setStatePromise({current: _wrap(end)});
    else if(!animating) return this.setStatePromise({current: _wrap(origin)});
  }

  AnimatingReview = (props) => {
    const { width, height, x, y } = this.state.origin;

    return <View style={{height, width, margin: 10, opacity: 0}} />
  }

  setStatePromise = async (state) => {
    await this.setState(state);
  }

  measure = () => {
    return new Promise((resolve, reject) => {
      this.refs.bookImage.measure(
        (x, y, width, height) => {
          resolve({x, y, height, width});
        }
      );
    });
  }

  measureOrigin = async () => {
    await this.measure().then(
      async origin => {
        console.log(origin)
        await this.setStatePromise({origin})
      }
    );
  }

  setInitial = ({nativeEvent}) => {

    const { x, y, width, height} = nativeEvent.layout;

    this.setState({
      current: {
        x: new Animated.Value(x),
        y: new Animated.Value(y),
        width: new Animated.Value(width),
        height: new Animated.Value(height)
      }
    });
  }

  prepareAnimation = async () => {
    return this.measureOrigin().then(
      () => {
        return this.setCurrent().then(
          () => {
            return this.setStatePromise({animating: true});
          }
        )
      }
    );
  }

  completeAnimation = async (expanded = false, callback = null) => {
    await this.setState({expanded, animating: false}, callback);
  }

  onPress = () => {
    const { onPress, onAnimation } = this.props;
    const { _getAnimation } = this;

    if(onAnimation) setTimeout(() => onAnimation(this), 0);

    if(onPress) setTimeout(onPress, 0);
  }


  render() {

    const { end, animating, expanded } = this.state;
    const { MeasureEnd, AnimatingReview, setInitial } = this;

    if(!end && this.refs.bookImage) {
      return <MeasureEnd />
    }
    else if(animating || expanded)
      return (
        <AnimatingReview />
      );
    else
      return (
        <TouchableWithoutFeedback onPress={this.onPress}>
          <View ref="view" style={{alignSelf: 'stretch', flexDirection: 'column'}}>
            <View style={{flexDirection: 'column', padding: 10, justifyContent: 'space-between', alignItems: 'center'}}>
              <BookImage onLayout={setInitial} ref="bookImage" fillWidth={true} source={this.props.source}/>
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
