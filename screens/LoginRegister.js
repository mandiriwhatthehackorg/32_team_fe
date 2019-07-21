import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import Button from "../components/Button";
import FormTextInput from "../components/FormTextInput";
import imageLogo from "../assets/images/imagess.png";
import colors from "../constants/Colors";

class LoginRegister extends React.Component {
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
        <View style={styles.form}>

          {
            this.state.type == "register" ?
              <FormTextInput
                value={this.state.email}
                onChangeText={this.handleEmailChange}
                placeholder={"Nama Depan"}
              />
              :
              null
          }

          {
            this.state.type == "register" ?
              <FormTextInput
                value={this.state.password}
                secureTextEntry={true}
                onChangeText={this.handlePasswordChange}
                placeholder={"Nama Belakang"}
              />
              :
              null
          }

          {
            this.state.type == "register" ?
              <FormTextInput
                value={this.state.password}
                secureTextEntry={true}
                onChangeText={this.handlePasswordChange}
                placeholder={"Telp"}
              />
              :
              null
          }
          <FormTextInput
            value={this.state.email}
            onChangeText={this.handleEmailChange}
            placeholder={"Email"}
          />
          <FormTextInput
            value={this.state.password}
            secureTextEntry={true}
            onChangeText={this.handlePasswordChange}
            placeholder={"Kata Sandi"}
          />
          {
            this.state.type == "login" ?
              <Button label={"Masuk"} onPress={() => {
                this.handleLoginPress()
              }} />
              : null
          }
          <Button label={"Pendaftaran"} color="#F7B519" onPress={() => {
            this.setState({
              type: "register",
              firstname: "",
              lastname: "",
              email: "",
              phone: "",
              password: ""
            })
          }} />
          {
            this.state.type == "register" ?
              <Button label={"Cancel"} onPress={() => {
                this.setState({
                  type: "login",
                  firstname: "",
                  lastname: "",
                  email: "",
                  phone: "",
                  password: ""
                })
              }} />
              : null
          }


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
    marginTop: -60,
    width: 350,
    resizeMode: "center",
    alignSelf: "center"
  },
  form: {
    marginTop: -250,
    flex: 1,
    justifyContent: "center",
    width: "80%"
  }
});

export default LoginRegister;