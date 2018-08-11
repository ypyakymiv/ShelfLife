import React, { Component } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Title } from 'native-base';
import { BookImage } from '../shared';


class BookResult extends Component {

  render() {

    const {
      touchable,
      container,
      bisection
    } = styles;

    const {
      title,
      isbn,
      author,
      image,
      price
    } = this.props;

    return (
      <TouchableWithoutFeedback onPress={() => {this.props.navigation.navigate('Details')}}>
        <View style={{flexDirection: 'row', alignSelf: 'stretch', height: 100, backgroundColor: 'white', justifyContent: 'flex-start'}}>
          <View style={{flex: 1, marginBottom: 2, marginTop: 2}}>
            <BookImage source={image} />
          </View>
          <View style={{flex: 3}}>
              <Title style={{color: 'black', fontSize: 20}}>
                {title}
              </Title>

              <Title style={{color: 'gray', fontSize: 14}}>
                {author}
              </Title>

              <Title style={{color: 'gray'}}>
                {isbn}
              </Title>

              <Title style={{color: 'green'}}>
                ${price}
              </Title>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );

    // return (
      // <TouchableWithoutFeedback style={touchable}>
        // <View style={container}>
        //   <BookImage source={image} />
        //   <View style={bisection}>
        //     <Title>
        //       {title}
        //     </Title>
        //
        //     <Title>
        //       {author}
        //     </Title>
        //
        //     <Title>
        //       {isbn}
        //     </Title>
        //
        //     <Title style={{alignSelf: 'flex-end'}}>
        //       {price}
        //     </Title>
        //   </View>
        // </View>
      // </TouchableWithoutFeedback>
    // );
  }
}

const styles = StyleSheet.create({
  touchable: {

  },
  container: {
    alignSelf: 'stretch',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 100
  },
  bisection: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
});

export default withNavigation(BookResult);
