import React, { Component } from 'react';
import { FlatList } from 'react-native';
import BookResult from './BookResult';

const TEST_DATA = [
  {
    title: 'Cat in the Hat',
    isbn: '97801923491',
    author: 'Dr. Suess',
    price: 4.99,
    image: {
      uri: 'https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/6/14/61478052-6253-11e1-9ddd-001a4bcf6878/4f4d4794d3f11.image.jpg'
    }
  },
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

class BookResults extends Component {

  _renderItem = ({item, index}) => {
    return (
      <BookResult {...item} />
    );
  }

  render() {
    return (
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={TEST_DATA}
        renderItem={this._renderItem}
      />
    );
  }
}

export default BookResults;
