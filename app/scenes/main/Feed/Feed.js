import React, { Component } from 'react';
import { FlatList, SectionList, Image, View, Animated, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import BookPanel from './BookPanel';
import { Title, Text } from 'native-base';
import { Review, ReviewFooter, CardHeader } from './Cards';

// The footer jolts forward slightly in the beggining
// because render() uses this.state.containerHeight
// before it is givin a value through the onLayout of
// the root View. Easy fix, either toggle the render
// output based on whether or not containerHeight is
// defined or find a default value for containerHeight.
// Shouldnt be too hard after encapsulating each part of
// this component in its own file/component.

class Feed extends Component {

  state = {
    headersHidden: false,
    containerHeight: null,
    width: null,
    focused: 0,
    item: null,
    hoodHeight: new Animated.Value(0),
    hoodPop: null,
    hoodFolded: true,
    animatingElement: null,
    animating: false,
    expanded: false
  }

  onAnimation = (ref) => {
    ref.prepareAnimation().then(
      () => {
        const { origin, end } = ref.state;
        this.props.navigation.push("FeedDetailsTransition", {origin, end, source: ref.props.source});
      }
    );
  }

  _renderItem = ({item, index}) => {
    console.log(item.image)
    return (
      <Review
        source={
          {uri: item.image}
        }
        onPress={
          () => {
            this._hideDetails();
          }
        }
        onAnimation={
          this.onAnimation
        }
      />
    );
  }

  viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  }

  _hideHeaders = (callback = null) => {
    const { toggleHeader } = this.props;

    this.setState({headersHidden: true});
    // if(toggleHeader)
      // toggleHeader(true);
  }

  _hideDetails = (callback = null) => {
    this._closeTheHood();
    this._hideHeaders();
  }


  _popTheHood = (callback = null) => {
    this._footer._popTheHood(callback);
  }

  _closeTheHood = (callback = null) => {
    this._footer._closeTheHood(callback);
  }

  _unfoldTheHood = (callback = null) => {
    this._footer._unfoldTheHood(callback);
  }

// D. Juul
// https://pbs.twimg.com/profile_images/733037018561843200/l_0tKkFK_400x400.jpg

  render() {

    if(!this.props.data || this.props.data.length < 1)
      return <Text>Nothing</Text>;


    return (
      <View style={{flex: 1}}>
        <SectionList
          scrollEventThrottle={1}
          ref={(list) => this._list = list}
          onMomentumScrollEnd={() => {
            clearTimeout(this.state.hoodPop);
            this.setState({hoodPop: setTimeout(this._popTheHood, 50)});
          }}
          onMomentumScrollBegin={() => {
            clearTimeout(this.state.hoodPop);
          }}
          onScrollEndDrag={() => {
            clearTimeout(this.state.hoodPop);
            this.setState({hoodPop: setTimeout(this._popTheHood, 50)});
          }}
          onScrollBeginDrag={() => {
            clearTimeout(this.state.hoodPop);
            this._closeTheHood();
          }}
          showsVerticalScrollIndicator={false}
          stickySectionHeadersEnabled={true}
          onLayout={({nativeEvent}) => this.setState({width: nativeEvent.layout.width})}
          renderSectionHeader={({section: {data}}) => {
            item = data[0]
            const { headersHidden } = this.state;

            return (
              <CardHeader
                // hidden={headersHidden}
                authorImageSource={{uri: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Ted_Geisel_NYWTS_2_crop.jpg'}}
                author={item.authors[0]}
                title={item.title}
              />
            );
          }}
          sections={this.props.data.map((x, i) => { return {key: i.toString(), data: [{...x, key: i.toString()}]}; })}
          renderItem={this._renderItem}
          viewabilityConfig={this.viewabilityConfig}
          onViewableItemsChanged={this.updateViewableItem}
        />
        <ReviewFooter ref={footer => this._footer = footer} />
      </View>
    );
  }
}

export default withNavigation(Feed);
