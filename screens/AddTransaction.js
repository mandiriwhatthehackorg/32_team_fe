// untuk add deposito dan pinjaman
import * as React from "react";
import { StyleSheet, View, Text, TextInput, Picker, TouchableOpacity, Modal, TouchableHighlight, Alert } from "react-native";
import Button from "../components/Button";
import FormTextInput from "../components/FormTextInput";
import colors from "../constants/Colors";
import { Header, Button as Buttons } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class AddTransaction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      pinjaman: 0,
      transaction_id: "",
      selected_deposito: "",
      no: "",
      name: "",
      limit: "",
      expired: ""
    }
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  render() {
    const dataaa = []

    for (let i = 0; i < 6; i++) {

      dataaa.push(
        <Picker.Item key={i} label={(i + 1) + " Bulan"} value={i + 1} />
      )
    }

    return (
      <View style={styles.container}>
        <Header
          backgroundColor={"#003A70"}
          leftComponent={
            <Buttons
              buttonStyle={{ backgroundColor: '#003A70' }}
              onPress={() => this.props.navigation.navigate('Main')}
              icon={
                <Icon
                  name="arrow-left"
                  size={18}
                  color="white"
                />
              }
            >
            </Buttons>
          }
          centerComponent={{ text: 'PINJAMAN BARU', style: { color: '#fff', fontSize: 20 } }}
        />
        <Modal transparent={true}
          visible={this.state.modalVisible}>
          <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#eff0f1d9'
          }}>
            
            <View style={{
              width: '80%',
              height: 500,
              backgroundColor: "white",
              padding: "5%"
            }}>
              <View><Text style={{fontWeight: 'bold', fontSize: 18}}>MANDIRI DEPOSITO</Text></View>
              <TouchableOpacity style={{ width: "100%" }} onPress={() => {
                this.setState({
                  no: "1370002837980009",
                  name: "BAGUS BASUKI",
                  limit: "80000000",
                  expired: 6
                });
              }}>
                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <View style={{ width: "90%", height: 100, flexDirection: 'row', }}>
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
                this.setState({
                  no: "1370002837489233",
                  name: "BAGUS BASUKI",
                  limit: "80000000",
                  expired: 6,
                });
              }}>
                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  
                  <View style={{ width: "90%", height: 100, flexDirection: 'row', }}>
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
              <View style={{ height: 20 }} />
              <Text>
                No Deposito: <Text style={{ fontWeight: "bold" }}> {this.state.no}</Text>
              </Text>
              <Text>
                Nama: <Text style={{ fontWeight: "bold" }}> {this.state.name}</Text>
              </Text>
              <Text>
                Total Limit: <Text style={{ fontWeight: "bold" }}> {this.state.limit?"80,000,000.00":"0"} </Text>
              </Text>
              <Text>
                Jatuh Tempo Deposito: <Text style={{ fontWeight: "bold" }}> {this.state.expired} Bulan </Text>
              </Text>
              <View style={{ height: 20 }} />
              <Button label={"Pilih"} onPress={() => {
                this.setModalVisible(false);
              }} />
              <Button label={"Cancel"} color="#F7B519" onPress={() => {
                this.setModalVisible(false);
              }} />
            </View>

          </View>
        </Modal>
        <TouchableOpacity style={{ width: "100%" }} onPress={() => {
          this.setModalVisible(true);
        }}>
          <View style={{
            height: 200,
            width: "100%",
            backgroundColor: '#DADADA',
            marginTop: -2,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
          }}>

            <View style={{ width: "80%", height: '75%', backgroundColor: "white", borderColor: "gray", flexDirection: 'row', }}>
              <View style={{
                width: "30%", flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <View style={{ marginBottom: 20 }}>
                  <Icon
                    name="credit-card"
                    size={50}
                    color="#003A70"
                  />
                </View>
                <View>
                  <Text style={{ fontSize: 12 }}>CREDIT LIMIT</Text>
                </View>
              </View>
              <View style={{ width: "70%" }}>
                <View style={{ marginBottom: 40, marginTop: 40 }}>
                  <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'right', marginRight: 10 }}>PILIH REKENING AGUNAN</Text>
                </View>
                <View>
                  <Text style={{ fontSize: 16, textAlign: 'right', marginRight: 10 }}>IDR {this.state.limit}.00</Text>
                </View>
              </View>
            </View>

          </View>
        </TouchableOpacity>
        <View style={styles.form}>

          <View style={{ height: 30 }} />
          <Text>
            Nominal Pinjaman
          </Text>
          <TextInput
            keyboardType={'numeric'}
            value={this.state.pinjaman.toString()}
            onChangeText={(e) => {
              console.log(e)
              this.setState({
                pinjaman: e
              })
            }}
            placeholder={"Nominal Pinjaman"}
            style={[styles.textInput]}
          />
          <Text>
            Jangka Waktu
          </Text>
          <Picker
            value={this.state.month}
            onChangeText={this.handleEmailChange}
            placeholder={"Jangka Waktu"}
            style={[styles.textInput]}
          >
            {
              dataaa
            }
          </Picker>
          <Text>
            Rekening Penerima
          </Text>
          <Picker
            value={this.state.rekpenerima}
            onChangeText={this.handleEmailChange}
            placeholder={"Rekening Penerima"}
            style={[styles.textInput]}
          >
            <Picker.Item label="1370002833948564 / BAGUS BASUKI" value="1" />
          </Picker>

          <Button label={"Lanjut"} onPress={() => {
            this.props.navigation.navigate("AddTransaction2")
          }} />

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    alignItems: "center",
    justifyContent: "space-between"
  },
  logo: {
    height: 250,
    resizeMode: "center",
    alignSelf: "center"
  },
  form: {
    flex: 1,
    justifyContent: "center",
    width: "80%"
  },
  textInput: {
    height: 40,
    borderColor: colors.SILVER,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 20
  }
});

export default AddTransaction;