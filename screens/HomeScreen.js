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
import axios from 'axios';

const jpeg = require('../assets/images/5.jpeg')
class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      entries: [
      ]
    };
    if(this.state.entries.length < 1){
      axios
      .get("http://mandiriteam32-wth-32.apps.openshift.mandiriwhatthehack.com/getpersonalloan")
      .then(responses => {
        let response = responses.data;
        if (response.Response) {
          if (response.Response.products) {
            if (response.Response.products.productDetails) {
              const data =response.Response.products.productDetails;

              axios
              .get("http://mandiriteam32-wth-32.apps.openshift.mandiriwhatthehack.com/getdeposito")
              .then(responsess => {
                response = responsess.data;
                if (response.Response) {
                  if (response.Response.products) {
                    if (response.Response.products.productDetails) {
                      
                      this.setState({
                        entries: [...response.Response.products.productDetails, ...data]
                      })
                    } 
                  } 
                } 
              })
              .catch(error => {
                // console.log(error);
              });

            } 
          } 
        } 
      })
      .catch(error => {
        // console.log(error);
      });
    }
  }

  _renderItem({ item, index }, parallaxProps) {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={jpeg}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <Text style={{
          paddingTop: 5,
          paddingHorizontal: 5,
          fontSize: 19
        }} numberOfLines={2}>
          {item.name}
        </Text>
        <Text style={{
          padding: 5,
          fontSize: 12
        }} numberOfLines={2}>
          {item.description}
        </Text>
      </View>
    );
  }

  render() {
    return (

      <View style={styles.container}>
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
  title: "DEPOSAVE",
  headerStyle: {
    backgroundColor: '#003A70'
  },
  headerTitleStyle:{
    textAlign:"center", 
    flex:1,
    color: "white"
  },
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
    backgroundColor: "#eff2f6",
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
