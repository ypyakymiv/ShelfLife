import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';

class BookPanel extends Component {

  state = {
    aspectRatio: null
  }

  componentWillMount() {
    const { source } = this.props;

    Image.getSize(source.uri, (width, height) => this.setState({aspectRatio: width / height}));
  }


  render() {
    const { bookPanel } = styles;
    const { width, source, selected } = this.props;
    const { aspectRatio } = this.state;
    if(aspectRatio)
      return (
        <View style={[bookPanel, {width}]}>
          <Image
          source={source}
          style={{width, aspectRatio}}
          resizeMode={"cover"}
          />
        </View>
      );
    return null;
  }
}

const styles = StyleSheet.create({
  bookPanel: {
    backgroundColor: 'red',
  }
});

export default BookPanel;
