import React, { Component } from 'react';
import { Container, Content, Left, Body, Right, Title, Item, Icon, Text, Input, Button } from 'native-base';
import { CustomIcon, CustomHeader, IconButton } from '../shared';
import SearchSettings from './SearchSettings';
import RotateIcon from './RotateIcon';
import Collapsible from 'react-native-collapsible';
import { StyleSheet, View } from 'react-native';

class SearchTemplate extends Component {
  state = {
    searchSettingsOpen: false
  }

  onSearchSettingPress = (state) => {
    const { opening } = state;
    this.setState({ searchSettingsOpen: opening });
  }


  render() {

    const {
      collapsible,
      searchBar,
      headerContainer,
      header,
      headerBody
    } = styles;


    const {
      searchSettingsOpen
    } = this.state;


    return (
      <Container>
        <CustomHeader style={header}>
          <View style={headerContainer}>
            <View style={headerBody}>
              <Icon name="search" />
              <Input placeholder="search" style={searchBar} />
              <RotateIcon name="settings" onAnimationStart={this.onSearchSettingPress} />
            </View>
          </View>
        </CustomHeader>
        <Collapsible collapsed={!searchSettingsOpen} style={collapsible}>
          <SearchSettings />
        </Collapsible>
        <View style={{alignSelf: 'stretch', height: 1/3, backgroundColor: 'rgba(0, 0, 0, 0.3)'}} />

        <Content>
          {this.props.children}
        </Content>
      </Container>
    );
  }

}

const styles = StyleSheet.create({
  collapsible: {
    height: null,
    flexDirection: 'column',
  },
  searchBar: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10
    // backgroundColor: 'red'
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    // height: 75
    flexDirection: 'column',
    borderBottomWidth: 0
  },
  headerBody: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default SearchTemplate;
