import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import ActionButton from '../components/ActionButton';
import ChatHistory from '../components/ChatHistory';

export default class LinksScreen extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          {/**
         * Go ahead and delete ExpoLinksView and replace it with your content;
         * we just wanted to provide you with some helpful links.
         */}
          <ChatHistory />
        </ScrollView>
        <ActionButton navigation={this.props.navigation}/>
      </View>
    );
  }
}

LinksScreen.navigationOptions = {
  title: 'Chat History',
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
