import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
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
      // {
      //   group: "Bank BNI",
      //   contents: [
      //     {
      //       image_url: require("../../assets/images/icon.png"),
      //       label: "Tabungan Deposito 1"
      //     },
      //     {
      //       icon: "ios-chatboxes",
      //       label: "Tabungan Deposito 2"
      //     },
      //     ,
      //     {
      //       icon: "ios-chatboxes",
      //       label: "Peminjaman"
      //     }
      //   ]
      // }
    ]
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eff0f1d9'
      }}>

        <View style={{
          width: '100%',
          height: 500,
          backgroundColor: "white",
          padding: "5%"
        }}>


          <View><Text style={{ fontWeight: 'bold', fontSize: 18 }}>PINJAMAN</Text></View>
          <TouchableOpacity style={{ width: "100%" }} onPress={() => {
            this.props.navigation.navigate("DetailProduct", {
              no: "1370002837980746",
              name: "BAGUS BASUKI",
              limit: "80000000",
              expired: 6,
              type: "PINJAMAN"
            })
          }}>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <View style={{ width: "90%", height: 70, flexDirection: 'row', }}>
                <View style={{
                  width: "30%", flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <View>
                    <Icon
                      name="credit-card"
                      size={50}
                      color="#003A70"
                    />
                  </View>
                </View>
                <View style={{
                  width: "70%", flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'center'
                }}>
                  <View >
                    <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'left', marginLeft: 10 }}>BAGUS BASUKI</Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 16, textAlign: 'left', marginLeft: 10 }}>1370002837980746</Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <View style={{ height: 20 }} />
          <View><Text style={{ fontWeight: 'bold', fontSize: 18 }}>DEPOSITO</Text></View>
          <TouchableOpacity style={{ width: "100%" }} onPress={() => {
            this.props.navigation.navigate("DetailProduct", {
              no: "1370002837980009",
              name: "BAGUS BASUKI",
              limit: "100000000",
              expired: 6,
              type: "DEPOSITO"
            })
          }}>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <View style={{ width: "90%", height: 70, flexDirection: 'row', }}>
                <View style={{
                  width: "30%", flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <View>
                    <Icon
                      name="credit-card"
                      size={50}
                      color="#003A70"
                    />
                  </View>
                </View>
                <View style={{
                  width: "70%", flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'center'
                }}>
                  <View >
                    <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'left', marginLeft: 10 }}>BAGUS BASUKI</Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 16, textAlign: 'left', marginLeft: 10 }}>1370002837980009</Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: "100%" }} onPress={() => {
            this.props.navigation.navigate("DetailProduct", {
              no: "1370002837489233",
              name: "BAGUS BASUKI",
              limit: "100000000",
              expired: 6,
              type: "DEPOSITO"
            })
          }}>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center'
            }}>

              <View style={{ width: "90%", height: 70, flexDirection: 'row', }}>
                <View style={{
                  width: "30%", flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <View>
                    <Icon
                      name="credit-card"
                      size={50}
                      color="#003A70"
                    />
                  </View>
                </View>
                <View style={{
                  width: "70%", flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'center'
                }}>
                  <View >
                    <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'left', marginLeft: 10 }}>BAGUS BASUKI</Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 16, textAlign: 'left', marginLeft: 10 }}>1370002837489233</Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

      </View>
    );
  }

  _handlePressDocs = () => {
    this.props.navigation.navigate("DetailProduct")
  };

}
