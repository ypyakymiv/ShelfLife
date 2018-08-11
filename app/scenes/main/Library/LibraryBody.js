import React, { Component } from 'react';
import { StyleSheet, View, Image, FlatList } from 'react-native';
import { Title, Text, Icon } from 'native-base';
import { CustomHeader } from '../shared';
import BookResults from '../Search/BookResults';

const TEST_DATA = {
  name: "My tech books",
  locationName: "Abington, PA",
  numBooks: 143,
  totalValue: 9408.24
};

const TEST_DATA_BOOKS = [
  {
    title: 'Cat in the Hat',
    isbn: '97801923491',
    author: 'Dr. Suess',
    price: 4.99,
    image: {
      uri: 'https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/6/14/61478052-6253-11e1-9ddd-001a4bcf6878/4f4d4794d3f11.image.jpg'
    }
  }
];

class LibraryBody extends Component {

  _renderItem = ({item, index}) => {
    return (
      <BookResults />
    );
  }

  render() {

    const {
      name,
      locationName,
      numBooks,
      totalValue
    } = TEST_DATA;

    return (
      <View>
        <View style={{flexDirection: 'column', paddingTop: 10, backgroundColor: '#F7F7F7'}}>
          <Image style={{height: 15, alignSelf: 'stretch'}} resizeMode={'cover'} source={{uri: 'https://psmag.com/.image/t_share/MTQ5NjM2MTg5NzU2ODYwMjE4/library.jpg'}} />
          <View style={{alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center'}}>
            <Title style={{color: 'black', fontSize: 20}}>
              {name}
            </Title>
            <Title style={{color: 'darkblue', fontSize: 12}}>
              {locationName}
            </Title>
            <View style={{alignSelf: 'stretch', flexDirection: 'row'}}>
              <View style={{flexDirection: 'column', flex: 1}}>
                <Title style={{color: 'blue'}}>
                  {numBooks}
                </Title>
                <Title style={{color: 'black'}}>
                  Books
                </Title>
              </View>
              <View style={{flexDirection: 'column', flex: 1}}>
                <Title style={{color: 'green'}}>
                  ${totalValue}
                </Title>
                <Title style={{color: 'black'}}>
                  Value
                </Title>
              </View>
            </View>
          </View>
          <Image style={{height: 15, alignSelf: 'stretch'}} resizeMode={'cover'} source={{uri: 'https://psmag.com/.image/t_share/MTQ5NjM2MTg5NzU2ODYwMjE4/library.jpg'}} />
        </View>
        <CustomHeader>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
            <Icon name="search" />
            <Icon name="list" />
            <Icon name="add" />


          </View>
        </CustomHeader>
        <BookResults />
      </View>
    );
  }
}

export default LibraryBody;
