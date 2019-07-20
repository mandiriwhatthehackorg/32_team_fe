import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import ActionButton from '../components/ActionButton';
import Settings from '../components/Settings/Settings';

export default class SettingsScreen extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <Settings navigation={this.props.navigation}/>
        </ScrollView>
        {/* <ActionButton navigation={this.props.navigation}/> */}
      </View>
    )
  }
}

SettingsScreen.navigationOptions = {
  title: 'Profile'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
    height: '100%'
  },
});
