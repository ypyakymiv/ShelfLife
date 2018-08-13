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

    const aspectRatio = 1/2;

    const _onLayout = ({nativeEvent}) => {

      const { height, width, x, y } = nativeEvent.layout;

      const end = {
        height: width / aspectRatio,
        width,
        x,
        y
      };

      console.log(end);

      this.setState(end);
    }


    return (
      <View
        onLayout={_onLayout}
        style={Styles.measure()}
      />
    );

  }

  AnimatingReview = (props) => {
    const { width, height, x, y } = this.state.current;

    return (
      <Animated.View style={{width, y}}>
        <BookImage fullWidth={true} />
      </Animated.View>
    );
  }

  animateToOrigin = () => {
    const { width, y } = this.state.current;
    const { origin } = this.state;

    Animated.parallel([
      Animated.spring(width, {
        toValue: origin.width,
        duration: 150
      }),
      Animated.spring(y, {
        toValue: origin.y,
        duration: 150
      })
    ]).start(() => {
      this.setState({animating: false, expanded: false});
    });
  }

  animateToEnd = () => {
    const { width, y } = this.state.current;
    const { end } = this.state;

    Animated.parallel([
      Animated.spring(width, {
        toValue: end.width,
        duration: 150
      }),
      Animated.spring(y, {
        toValue: end.y,
        duration: 150
      })
    ]).start(() => {
      this.setState({animating: false, expanded: true});
    });
  }

  measureOrigin = (callback = null) => {
    this.refs.bookImage.measure((origin) => {

      console.log(origin)
      if(callback)
        this.setState({origin}, callback);
      else
        this.setState({origin});
    });
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

  _expand = () => {
    // this.setState({animating: true});
    this.measureOrigin(this.animateToEnd);
  }

  render() {

    const { end, animating } = this.state;
    const { MeasureEnd } = this;

    if(true) {
      return <MeasureEnd />
    }

    // <BookImage /*ref={ref => {this.bookImage = ref}}*/ fillWidth={true} source={{uri: 'https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/6/14/61478052-6253-11e1-9ddd-001a4bcf6878/4f4d4794d3f11.image.jpg'}}/>
    if(animating)
      return <AnimatingReview />;
    else
      return (
        <TouchableWithoutFeedback onPress={this.props.onPress}>
          <View ref="view" style={{alignSelf: 'stretch', flexDirection: 'column'}}>
            <View style={{flexDirection: 'column', padding: 10, justifyContent: 'space-between', alignItems: 'center'}}>
              <BookImage ref="bookImage" onLayout={this.setInitial} fillWidth={true} source={{uri: 'https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/6/14/61478052-6253-11e1-9ddd-001a4bcf6878/4f4d4794d3f11.image.jpg'}}/>
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
