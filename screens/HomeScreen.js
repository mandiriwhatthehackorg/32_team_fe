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
  Dimensions
} from 'react-native';
import Button from "../components/Button";
import Home from '../components/Home';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { Gravity } from 'expo-sensors/build/DeviceMotion';
const { width: screenWidth } = Dimensions.get('window')
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      entries: [
        {
          title: 'Beautiful and dramatic Antelope Canyon',
          subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
          thumbnail: 'https://camo.githubusercontent.com/7590ec7e6b705a6e8e381397247d576c6db72147/68747470733a2f2f692e696d6775722e636f6d2f653157625a63752e676966'
        },
        {
          title: 'Earlier this morning, NYC',
          subtitle: 'Lorem ipsum dolor sit amet',
          thumbnail: 'https://i.imgur.com/UPrs1EWl.jpg'
        },
        {
          title: 'White Pocket Sunset',
          subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
          thumbnail: 'https://i.imgur.com/MABUbpDl.jpg'
        },
        {
          title: 'Acrocorinth, Greece',
          subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
          thumbnail: 'https://i.imgur.com/KZsmUi2l.jpg'
        },
        {
          title: 'The lone tree, majestic landscape of New Zealand',
          subtitle: 'Lorem ipsum dolor sit amet',
          thumbnail: 'https://i.imgur.com/2nCt3Sbl.jpg'
        },
        {
          title: 'Middle Earth, Germany',
          subtitle: 'Lorem ipsum dolor sit amet',
          thumbnail: 'https://i.imgur.com/lceHsT6l.jpg'
        }
      ]
    };
  }

  _renderItem({ item, index }, parallaxProps) {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{ uri: item.thumbnail }}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <Text style={{
          paddingTop: 5,
          paddingHorizontal: 5,
          fontSize: 18
        }} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={{
          padding: 5,
          fontSize: 12
        }} numberOfLines={2}>
          {item.title}
        </Text>
      </View>
    );
  }

  render() {
    return (

      <View style={styles.container}>
        <Header
          centerComponent={{ text: 'DEMO APPS', style: { color: '#fff', fontSize: 18 } }}
        />
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>

          <Home navigation={this.props.navigation} />

          <View style={{ marginTop: 10 }}>
            <Carousel
              sliderWidth={screenWidth}
              sliderHeight={screenWidth}
              itemWidth={screenWidth - 60}
              data={this.state.entries}
              renderItem={this._renderItem}
              hasParallaxImages={true}
            />
          </View>
          <View style={{
            height: 20
          }} />
        </ScrollView>
        {/* <ActionButton navigation={this.props.navigation} /> */}
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
    marginHorizontal: '20%'
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

  item: {
    backgroundColor: "#f6f8faeb",
    width: screenWidth - 80,
    height: screenWidth - 80,
    borderRadius: 8
  },
  imageContainer: {
    flex: 1,
    marginBottom: 1, // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
});
