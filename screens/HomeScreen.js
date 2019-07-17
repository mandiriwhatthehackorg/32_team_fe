import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';
import ActionButton from '../components/ActionButton';
import Home from '../components/Home';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <Text style={styles.getStartedTitle}>Robot Name</Text>
          <View style={styles.welcomeContainer}>
            <Image
              source={require('../assets/images/robot.gif')}
              style={styles.welcomeImage}
            />
          </View>
          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>
              Talk to with me with bellow conversations
            </Text>
          </View>
          <Home />
        </ScrollView>
        <ActionButton navigation={this.props.navigation} />
      </View>
    );
  }
}

export default HomeScreen;

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height: '100%'
  },
  contentContainer: {
    paddingTop: 30,
    height: '100%'
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 0,
  },
  welcomeImage: {
    // width: 100,
    height: 150,
    resizeMode: 'contain',
    marginTop: 3,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginBottom: 5
  },
  getStartedTitle: {
    marginTop: 20,
    fontSize: 20,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 23,
    textAlign: 'center',
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 20,
    textAlign: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },

  homeScreenFilename: {
    marginVertical: 7,
  },
});
