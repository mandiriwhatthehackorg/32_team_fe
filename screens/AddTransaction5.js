// untuk add deposito dan pinjaman
import * as React from "react";
import { StyleSheet, View, Text, TextInput, Picker, CheckBox, TouchableOpacity, Modal, TouchableHighlight, Alert } from "react-native";
import Button from "../components/Button";
import FormTextInput from "../components/FormTextInput";
import colors from "../constants/Colors";
import { Header, Button as Buttons } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class AddTransaction5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      pinjaman: 0,
      transaction_id: "",
      selected_deposito: "",
      no: "",
      name: "",
      ballance: "",
      expired: "",
      checked: false
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
          centerComponent={{ text: 'DEPOSITO BARU', style: { color: '#fff', fontSize: 20 } }}
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
              <View><Text style={{ fontWeight: 'bold', fontSize: 18 }}>REKENING MANDIRI</Text></View>
              <TouchableOpacity style={{ width: "100%" }} onPress={() => {
                this.setState({
                  no: "1370002837980009",
                  name: "BAGUS BASUKI",
                  ballance: "80000000",
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
                  ballance: "80000000",
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
                No Rekening: <Text style={{ fontWeight: "bold" }}> {this.state.no}</Text>
              </Text>
              <Text>
                Nama: <Text style={{ fontWeight: "bold" }}> {this.state.name}</Text>
              </Text>
              <Text>
                Saldo: <Text style={{ fontWeight: "bold" }}> {this.state.ballance ? "100,000,000.00" : "0"} </Text>
              </Text>
              {/* <Text>
                Jatuh Tempo Deposito: <Text style={{ fontWeight: "bold" }}> {this.state.expired} Bulan </Text>
              </Text> */}
              <View style={{ height: 30 }} />
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
                  <Text style={{ fontSize: 12 }}>SALDO</Text>
                </View>
              </View>
              <View style={{ width: "70%" }}>
                <View style={{ marginBottom: 40, marginTop: 40 }}>
                  <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'right', marginRight: 10 }}>PILIH REKENING</Text>
                </View>
                <View>
                  <Text style={{ fontSize: 16, textAlign: 'right', marginRight: 10 }}>IDR {this.state.ballance}.00</Text>
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
            value={this.state.pinjaman2}
            placeholder={"Intsruksi saat jatuh tempo"}
            style={[styles.textInput]}
            onChangeText={(e) => {
              console.log(e)
              this.setState({
                pinjaman2: e
              })
            }}
          >
            <Picker.Item label="Auto - Renewer" value="Auto - Renewer" />
            <Picker.Item label="Non Auto - Renewer" value="Non Auto - Renewer" />
          </Picker>
          <View style={{ height: 10 }} />

          <View style={{ flexDirection: 'column' }}>
            <Text style={{ color: 'blue' }}
              onPress={() => { }}>
              Daftar Syarat dan ketentuan
            </Text>
            <View style={{ height: 10 }} />
            <View style={{ flexDirection: 'row', width: '80%' }}>
              <CheckBox
                value={this.state.checked}
                onValueChange={() => this.setState({ checked: !this.state.checked })}
              />
              <Text style={{ marginTop: 5 }}> Saya telah membaca, memahami,dan menyetujui atas syarat dan ketentuan yang tercantum di atas </Text>
            </View>
          </View>
          <View style={{ height: 30 }} />
          <Button  disabled={!this.state.checked} label={"KONFIRMASI"} onPress={() => {
            this.props.navigation.navigate("AddTransaction6")
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

export default AddTransaction5;