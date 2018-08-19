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

  componentDidMount() {
    // setTimeout(() => {
    //   this._hideDetails()
    // }, 3000);
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

    var review = {
      ref: null
    };


    return (
      <Review
        ref={r => review.ref = r}
        source={
          {uri: 'https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/6/14/61478052-6253-11e1-9ddd-001a4bcf6878/4f4d4794d3f11.image.jpg'}
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
    if(toggleHeader)
      toggleHeader(true);
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
          renderSectionHeader={() => {

            const { headersHidden } = this.state;

            return (
              <CardHeader
                hidden={headersHidden}
                authorImageSource={{uri: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Ted_Geisel_NYWTS_2_crop.jpg'}}
                author="Dr. Suess"
                title="The Cat in the Hat"
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


// <Animated.View style={{position: 'absolute', bottom: this.state.hoodHeight, left: 0, right: 0, height: containerHeight + 30, backgroundColor: 'white', flexDirection: 'column'}}>
// <View style={{height: 150}}>
// <TouchableWithoutFeedback onPress={() => {
//
//   // You really should block while animating...
//
//   const { hoodFolded } = this.state;
//   if(hoodFolded)
//   this.setState({hoodFolded: false}, this._unfoldTheHood);
//   else
//   this.setState({hoodFolded: true}, this._popTheHood);
//
// }}>
// <View style={{backgroundColor: 'white', height: 15, borderTopWidth: .5, borderBottomWidth: .5, borderColor: '#F7F7F7', alignSelf: 'stretch'}}>
// </View>
// </TouchableWithoutFeedback>
// <View style={{height: 50, alignSelf: 'stretch', flexDirection: 'row', padding: 10, justifyContent: 'flex-start'}}>
// <View style={{alignSelf: 'center'}}>
// <Image source={{uri: 'https://pbs.twimg.com/profile_images/733037018561843200/l_0tKkFK_400x400.jpg'}} style={{height: 40, width: 40, borderRadius: 20}} />
// </View>
// <View style={{alignSelf: 'center'}}>
// <Text style={{marginLeft: 15}}>
// Derrick Juul
// </Text>
// </View>
// </View>
// <View style={{alignSelf: 'stretch', padding: 10}}>
// <Text style={{fontSize: 14}}>
// This book is chillin. Its just a lil hard to read. Sometimes I wish I woulda stayed n got my GED but on some shit the streets B wildin I idin een do nuffin.
// </Text>
// </View>
// </View>
// </Animated.View>







// <View style={{alignSelf: 'stretch', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', borderBottomWidth: .5, borderColor: '#F7F7F7', padding: 5, backgroundColor: 'white'}}>
// <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Ted_Geisel_NYWTS_2_crop.jpg'}} style={{width: 50, height: 50, borderRadius: 25}} />
// <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', marginLeft: 20}}>
// <Title style={{color: 'black'}}>
// The Cat in the Hat
// </Title>
// <Title style={{color: 'gray', fontSize: 18}}>
// by Dr. Suess
// </Title>
// </View>
// </View>
