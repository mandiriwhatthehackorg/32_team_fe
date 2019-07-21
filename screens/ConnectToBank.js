import * as React from "react";
import { Image, StyleSheet, View, Picker, Alert } from "react-native";
import Button from "../components/Button";
import FormTextInput from "../components/FormTextInput";
import imageLogo from "../assets/images/Icon1copy.png";
import colors from "../constants/Colors";
import { Header, Button as Buttons } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class ConnectToBank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
          centerComponent={{ text: 'Connect Account', style: { color: '#fff', fontSize: 18 } }}
        />
        <Image source={imageLogo} style={styles.logo} />
        <View style={styles.form}>
          <Picker
            value={this.state.rekpenerima}
            onChangeText={this.handleEmailChange}
            placeholder={"Rekening Penerima"}
            style={[styles.textInput]}
          >
            <Picker.Item label="Mandiri Online" value="1" />
          </Picker>
          <FormTextInput
            value={this.state.email}
            onChangeText={this.handleEmailChange}
            placeholder={"Username"}
          />
          <FormTextInput
            value={this.state.password}
            onChangeText={this.handlePasswordChange}
            placeholder={"Password"}
          />
          <Button label={"Connect Account"} onPress={() => {
            Alert.alert('Selamat!',
            'Koneksi ke Mandiri Online Berhasil!',)
            this.handleLoginPress()
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
    marginTop: -100,
    width: 350,
    resizeMode: "center",
    alignSelf: "center"
  },
  form: {
    marginTop: -300,
    flex: 1,
    justifyContent: "center",
    width: "80%"
  }
});

export default ConnectToBank;