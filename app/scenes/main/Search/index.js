import React, { Component } from 'react';
import { View } from 'react-native';
import SearchTemplate from './SearchTemplate';
import BookResults from './BookResults';

class Search extends Component {
  render() {
    return (
      <SearchTemplate>
        <BookResults />
      </SearchTemplate>
    );
  }
}

export default Search;
