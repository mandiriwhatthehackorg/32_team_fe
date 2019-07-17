import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

class _ActionButton extends Component {

  render() {
    return (
      <ActionButton 
        buttonColor="rgba(0,0,0,0)"
        renderIcon={(e)=>{
          return(<Image
            style={{
              height: 100,
              width: 70
            }}
            source={
              e
                ? require('../assets/images/robot.gif')
                : require('../assets/images/robot.gif')
            }
          />)
        }}
        onPress={() => this.props.navigation.navigate('ChatRoom', {name: 'Jane'})}
      />
    );
  }

}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});

export default _ActionButton;