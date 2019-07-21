import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import ActionButton from '../components/ActionButton';
import ChatHistory from '../components/ChatHistory';
import { Header } from 'react-native-elements';

export default class LinksScreen extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        {/* <Header
          centerComponent={{ text: 'LIST PRODUK', style: { color: '#fff', fontSize: 18 } }}
        /> */}
        <ScrollView style={styles.container}>
          {/**
         * Go ahead and delete ExpoLinksView and replace it with your content;
         * we just wanted to provide you with some helpful links.
         */}
          <ChatHistory navigation = {this.props.navigation} />
        </ScrollView>
        {/* <ActionButton navigation={this.props.navigation}/> */}
      </View>
    );
  }
}

LinksScreen.navigationOptions = {
  title: "DAFTAR PRODUK",
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
    height: "100%",
    backgroundColor: '#fff',
  },
  contentContainer: {
    height: '100%'
  },
});
