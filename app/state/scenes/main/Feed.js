import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Feed as feed, User as user } from '../../../services';
import { setFocus } from '../../actions/feed';
import { Feed } from '../../../scenes/main';

class FeedWithState extends Component {

  componentDidMount() {
    this.props.sign_in("yurithepro@gmail.com", "angel321").then(() => {
      this.props.fetchFeed();
    })
  }

  render() {
    return (
      <Feed data={this.props.feed.data} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    feed: state.feed
  };
}

const mapDispatchToProps = (dispatch) => {

  return bindActionCreators({
    fetchFeed: feed.index,
    sign_in: user.sign_in,
    focus: setFocus
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedWithState);
