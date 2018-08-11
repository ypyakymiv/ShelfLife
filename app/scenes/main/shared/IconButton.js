import React, { Component } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Icon } from 'native-base';

class IconButton extends Component {

  state = {
    pressed: false
  }

  render() {
    const { type, name } = this.props;
    const { pressed } = this.state;
    return (
      <TouchableWithoutFeedback
        onPressIn={() => this.setState({pressed: true})}
        onPressOut={() => this.setState({pressed: false})}
        {...this.props}
      >
        <Icon
          type={type}
          name={name}
          style={
            this.props.onPressIn ? null :
            {
            color: pressed ? 'black' : 'gray'
            }
          }
        />
      </TouchableWithoutFeedback>
    );
  }
}

export default IconButton;
