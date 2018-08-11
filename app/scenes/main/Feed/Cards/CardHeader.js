import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Title, Text } from 'native-base';
import { FlyAway } from '../../shared';

class CardHeader extends Component {

  // state = {
  //   hidden: false
  // }

  // componentDidMount() {
  //   const { hidden } = this.props;
  //
  //   if(hidden != this.state.hidden)
  //     this.setState({hidden}, () => {
  //       if(this.state.hidden)
  //         this._flyAway._flyAway();
  //       else
  //         this._flyAway._flyBack();
  //     });
  // }

  componentDidUpdate(prevProps) {
    const { hidden } = this.props;
    if(hidden != prevProps.hidden)
      if(hidden) this._flyAway();
      else this._flyBack();
  }

  _flyAway = () => {
    this._fly._flyAway()
  }

  _flyBack = () => {
    this._fly._flyBack()
  }

  render() {

    return (
      <FlyAway ref={fly => this._fly = fly}>
        <View style={{alignSelf: 'stretch', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', borderBottomWidth: .5, borderColor: '#F7F7F7', padding: 5, backgroundColor: 'white', ...this.props.style}}>
          <Image source={this.props.authorImageSource} style={{width: 50, height: 50, borderRadius: 25}} />
          <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', marginLeft: 20}}>
            <Title style={{color: 'black'}}>
              {this.props.title}
            </Title>
            <Title style={{color: 'gray', fontSize: 18}}>
              {this.props.author}
            </Title>
          </View>
        </View>
      </FlyAway>
    );
  }
}

export default CardHeader;
