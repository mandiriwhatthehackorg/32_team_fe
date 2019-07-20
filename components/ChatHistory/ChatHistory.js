import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { Ionicons } from '@expo/vector-icons';

export default class ChatHistory extends React.Component {
  render() {
    let list_chat_history = [
      {
        group: "Bank Mandiri",
        contents: [
          {
            image_url: require("../../assets/images/icon.png"),
            label: "Tabungan Deposito 1"
          },
          {
            icon: "ios-chatboxes",
            label: "Tabungan Deposito 2"
          },
          ,
          {
            icon: "ios-chatboxes",
            label: "Peminjaman"
          }
        ]
      },
      {
        group: "Bank BNI",
        contents: [
          {
            image_url: require("../../assets/images/icon.png"),
            label: "Tabungan Deposito 1"
          },
          {
            icon: "ios-chatboxes",
            label: "Tabungan Deposito 2"
          },
          ,
          {
            icon: "ios-chatboxes",
            label: "Peminjaman"
          }
        ]
      }
    ]
    return (
      <View>
        {
          list_chat_history.map((d, j) => {
            return(
              <View key={j}>
                <Text style={styles.optionsTitleText}>{d.group}</Text>
                {
                  d.contents.map((e, i) => {
                    return (
                      <Touchable
                        key={i}
                        style={styles.option}
                        background={Touchable.Ripple('#ccc', false)}
                        onPress={this._handlePressDocs}>
                        <View style={{ flexDirection: 'row' }}>
                          <View style={styles.optionIconContainer}>
                            {
                              e.image_url ?
                                <Image
                                  source={e.image_url}
                                  resizeMode="contain"
                                  fadeDuration={0}
                                  style={{ width: 20, height: 20, marginTop: 1 }}
                                />
                                :
                                <Ionicons name={e.icon} size={22} color="#ccc" />
                            }
                          </View>
                          <View style={styles.optionTextContainer}>
                            <Text style={styles.optionText}>{e.label}</Text>
                          </View>
                        </View>
                      </Touchable>
                    )
                  })
                }
              </View>
            )
          })
        }

      </View>
    );
  }

  _handlePressDocs = () => {
    this.props.navigation.navigate("DetailProduct")
  }; 

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  optionsTitleText: {
    fontSize: 14,
    marginLeft: 15,
    marginTop: 9,
    marginBottom: 12,
  },
  optionIconContainer: {
    marginRight: 9,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EDEDED',
  },
  optionText: {
    fontSize: 15,
    marginTop: 1,
  },
});
