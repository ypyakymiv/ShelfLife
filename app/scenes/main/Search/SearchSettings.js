import React, { Component } from 'react';
import Collapsible from 'react-native-collapsible';
import { StyleSheet, View } from 'react-native';
import { Title } from 'native-base';
import CustomSwitch from './CustomSwitch';

class SearchSettings extends Component {

  render() {

    const {
      collapsed,
      backgroundColor
    } = this.props;

    const {
      collapsible,
      settingsContainer,
      settingsRow,
      settingsItem
    } = styles;

    console.log(collapsed);

    return (
      <View style={[{backgroundColor: backgroundColor ? backgroundColor : null}, settingsContainer]}>
        <View style={settingsRow}>
          <Title style={settingsItem}>
            Local
          </Title>
          <View style={settingsItem}>
            <CustomSwitch />
          </View>
          <Title style={settingsItem}>
            Global
          </Title>
        </View>
        <View style={settingsRow}>
          <Title style={settingsItem}>
            Sort By:
          </Title>

          <Title style={settingsItem}>
            Relevance
          </Title>
        </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  collapsible: {
    height: null,
    // flex: 1
  },
  settingsContainer: {
    backgroundColor: '#F7F7F7',
    height: null,
    flexDirection: 'column',

  },
  settingsRow: {
    height: null,
    flexDirection: 'row'
  },
  settingsItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'black',
    marginTop: 10,
    marginBottom: 10
  }
});

export default SearchSettings;
