import React, { Component } from 'react';
import FeedTemplate from './FeedTemplate';
import Feed from './Feed';

class FeedScene extends Component {

  state = {
    headerCollapsed: false
  }

  render() {

    const { headerCollapsed } = this.state;

    return (
      <FeedTemplate headerCollapsed={headerCollapsed}>
        <Feed
          toggleHeader={
            (headerCollapsed) => {
              this.setState({headerCollapsed});
            }
          }
          {...this.props}
        />
      </FeedTemplate>
    );
  }
}

export default FeedScene;
