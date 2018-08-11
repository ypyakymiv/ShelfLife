import React, { Component } from 'react';
import FeedTemplate from './FeedTemplate';
import Feed from './Feed';

const sampleData = [
  {
    img: {
      uri: "https://images.isbndb.com/covers/00/11/9780394800011.jpg"
    }
  },
  {
    img: {
      uri: "https://images.isbndb.com/covers/00/41/9781467070041.jpg"
    }
  }
]

class FeedScene extends Component {

  state = {
    headerVisible: true
  }

  render() {

    const { headerVisible } = this.state;

    // console.log("1HeaderVisible: " + headerVisible);


    return (
      <FeedTemplate headerVisible={headerVisible}>
        <Feed
          toggleHeader={
            (headerVisible) => {
              this.setState({headerVisible});
            }
          }
          data={sampleData}
        />
      </FeedTemplate>
    );
  }
}

export default FeedScene;
