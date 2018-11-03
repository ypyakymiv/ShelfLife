import React, { Component } from 'react';
import { StyleSheet, Image, View, ScrollView, Animated, Dimensions } from 'react-native';
import { BookImage } from '../shared';
import { Title, Text, Icon } from 'native-base';

const TEST_DATA = {
  title: 'Cat in the Hat',
  isbn: '97801923491',
  author: 'Dr. Suess',
  price: 4.99,
  description: `The Cat in the Hat is a children's book written and illustrated by Theodor Geisel under the pen name Dr. Seuss and first published in 1957. The story centers on a tall anthropomorphic cat, who wears a red and white-striped hat and a red bow tie. The Cat shows up at the house of Sally and her brother one rainy day when their mother is away. Despite the repeated objections of the children's fish, the Cat shows the children a few of his tricks in an attempt to entertain them.`,
  authorImage: {
    uri: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Ted_Geisel_NYWTS_2_crop.jpg'
  },
  image: {
    uri: 'https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/6/14/61478052-6253-11e1-9ddd-001a4bcf6878/4f4d4794d3f11.image.jpg'
  }
}


class AnimatingInfo extends Component {
  state = {
    animation: new Animated.Value(0),
    animating: false
  }

  constructor(props) {
    super(props);

    const { attached } = this.props;
    const { springTo } = this;

    if(attached)
      springTo(1)
  }

  springTo = (val) => {
    const { animation } = this.state;
    const { onAnimation } = this.props;

    if(onAnimation) onAnimation(true);

    Animated.spring(animation, {
      toValue: val,
      duration: 150,
      useNativeDriver: true
    }).start(() => {
      if(onAnimation) onAnimation(false);
    });

  }

  componentDidUpdate(prevProps) {
    const { springTo } = this;
    const { attached } = this.props;

    if(prevProps.attached != attached)
      if(attached) springTo(1);
      else springTo(0);
  }

  render() {
    const { animation } = this.state;
    const { height } = Dimensions.get('window');

    const animatingStyle = {
      transform: [
        {
          translateY: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [height, 0]
          })
        }
      ]
    }


    return (
      <Animated.View style={animatingStyle}>
        <Info {...this.props} />
      </Animated.View>
    );
  }
}

class Info extends Component {
  render() {
    const { title, author, authorImage, description } = this.props;
    return (
      <View style={{backgroundColor: 'white'}}>
        <View style={{alignSelf: 'stretch', flexDirection: 'row', alignItems: 'center', paddingLeft: 10, paddingRight: 15, padding: 5, borderBottomWidth: 1, borderBottomColor: '#F7F7F7'}}>
          <View>
            <Image resizeMode={'cover'} style={{width: 50, height: 50, borderRadius: 25}} source={authorImage} />
          </View>
          <View style={{flexDirection: 'column', alignItems: 'flex-start', marginLeft: 20}}>
            <Title style={{color: 'black', fontSize: 24}}>
              {title}
            </Title>
            <Title style={{color: 'lightgray', fontSize: 14}}>
              {author}
            </Title>
          </View>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
            <Icon type="Entypo" name="shopping-cart" />
          </View>
        </View>
        <View style={{padding: 5, paddingLeft: 15, paddingRight: 15}}>
          <Text style={{color: 'darkgray'}}>
            {description}
          </Text>
        </View>
      </View>
    );
  }
}

class DetailsBody extends Component {

  state = {
    detailsAttached: true,
    animating: true
  }

  onAnimation = (bool) => {
    this.setState({animating: bool})
  }

  renderInfo = (props) => {
    const { animating, detailsAttached } = this.state;
    const { onAnimation } = this;

    if(animating)
      return <AnimatingInfo onAnimation={onAnimation} attached={detailsAttached} {...props} />;
    else
      return <Info {...props} />;
  }

  render() {
    const { renderInfo } = this;

    const {
      animating
    } = this.state;

    const {
      container
    } = styles;


    console.log(this.props)

    return (
      <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={!animating} style={container}>
        <BookImage fillWidth={true} source={this.props.book.image} />
        {renderInfo(this.props.book)}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent'
  }
});

export default DetailsBody;
