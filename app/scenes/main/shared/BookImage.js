import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';

class BookImage extends Component {

  state = {
    aspectRatio: null,
    width: null,
    height: null
  }

  constructor(props) {
    super(props);
    Image.getSize(props.source.uri,
      (width, height) => this.setState({aspectRatio: width / height})
    );
  }

  setInfo = ({nativeEvent}) => {
    const { width, height } = nativeEvent.layout;

    this.setState({
      width, height
    });
  }

  getAspectRatio() {
    return this.state.aspectRatio;
  }

  imageFillWidth = () => {
    const {
      aspectRatio,
      width
    } = this.state;


    if(aspectRatio && width) {
      return {flex: 1, height: (1 / aspectRatio) * width};
    } else {
      return {flex: 1};
    }
  }

  componentDidMount() {

  }

  _setRef = (ref) => {
    const { onRef } = this.props;

    if(onRef) onRef(ref);
  }

  render() {

    const { image } = styles;
    const { fillWidth } = this.props;

    if(fillWidth) {
      return (
        <View ref={this._setRef} onLayout={this.setInfo} style={{flex: 1, alignSelf: 'stretch', flexDirection: 'row', backgroundColor: 'red'}}>
          <Image style={this.imageFillWidth()} source={this.props.source} />
        </View>
      );
    }

    return (
      <Image style={image} resizeMode={'contain'} {...this.props} />
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: null
  }
});

export default BookImage;
