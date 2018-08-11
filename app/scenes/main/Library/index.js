import React, { Component } from 'react';
import LibraryTemplate from './LibraryTemplate';
import LibraryBody from './LibraryBody';

class Library extends Component {
  render() {
    return (
      <LibraryTemplate>
        <LibraryBody />
      </LibraryTemplate>
    );
  }
}

export default Library;
