import React, { Component } from 'react';
import { StyleSheet, Image, View } from 'react-native';
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

class DetailsBody extends Component {
  render() {

    const {
      image,
      title,
      author,
      authorImage,
      description
    } = TEST_DATA;

    const {
      container
    } = styles;

    return (
      <View style={container}>
        <View style={{flex: 1, height: 200}}>
          <Image resizeMode={'cover'} style={{flex: 1}} source={image} />
        </View>
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
        <View style={{alignSelf: 'stretch', justifyContent: 'center'}}>
          <Icon type="FontAwesome" name="comment-o" style={{alignSelf: 'center', padding: 10}} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  }
});

export default DetailsBody;
