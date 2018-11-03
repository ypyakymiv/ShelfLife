import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Details } from '../../../scenes/main';

class DetailsWithState extends Component {
  render() {
    return (
      <Details book={this.props.book} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    book: state.feed.focused
  };
}

export default connect(mapStateToProps)(DetailsWithState);
