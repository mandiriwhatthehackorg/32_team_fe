import * as React from "react";
import { Image, StyleSheet, View, Text, Alert } from "react-native";
import Button from "../components/Button";
import FormTextInput from "../components/FormTextInput";
import imageLogo from "../assets/images/Logo-Mandiri-blue.png";
import colors from "../constants/Colors";
import PinView from 'react-native-pin-view'
class AddTransaction6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "login",
      email: "",
      password: ""
    }
  }
  handleEmailChange = (email) => {
    this.setState({ email: email });
  };

  handlePasswordChange = (password) => {
    this.setState({ password: password });
  };

  handleLoginPress = () => {
    this.props.navigation.navigate('Main')
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={imageLogo} style={styles.logo} />
        <View>
          <Text style={{ fontWeight: "bold", marginBottom: 24 }}>Masukkan MPIN Mandiri</Text>
        </View>
        <View style={{
          marginHorizontal: 30,

        }}>
          <Text style={{ textAlign: "center" }}>Gunakan MPIN (PIN SMS Banking) yang telah anda daftarkan di cabang Bank Mandiri</Text>
        </View>
        <View style={styles.form}>
          {/* <FormTextInput
            value={this.state.password}
            secureTextEntry={true}
            onChangeText={this.handlePasswordChange}
            placeholder={"Password"}
          /> */}
          <PinView
            onComplete={(val, clear) => {
              Alert.alert('Selamat!',
              'Pembelian deposito anda berhasil!',)
              this.props.navigation.navigate("Main")
            }}
            pinLength={5}
          />

          {/* <Button label={"KONFIRMASI"}  onPress={() => {
            this.props.navigation.navigate("AddTransaction4")
          }} /> */}

          <Button label={"KEMBALI"} color="#F7B519" onPress={() => {
            this.props.navigation.navigate("AddTransaction5")
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
    marginTop: 100,
    height: 100,
    resizeMode: "center",
    alignSelf: "center"
  },
  form: {
    flex: 1,
    justifyContent: "center",
    width: "80%"
  }
});

export default AddTransaction6;