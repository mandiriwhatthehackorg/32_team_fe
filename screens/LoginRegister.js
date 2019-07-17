import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import Button from "../components/Button";
import FormTextInput from "../components/FormTextInput";
import imageLogo from "../assets/images/robot.gif";
import colors from "../constants/Colors";
import ChatRoom from '../components/ChatRoom';

class LoginRegister extends React.Component {
    constructor(props){
        super(props);
        this.state={
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
          {/* <FormTextInput
            value={this.state.email}
            onChangeText={this.handleEmailChange}
            placeholder={"Email"}
          />
          <FormTextInput
            value={this.state.password}
            onChangeText={this.handlePasswordChange}
            placeholder={"Password"}
          />
          <Button label={"Login"} onPress={()=>{
              this.handleLoginPress()
          }} /> */}
          <ChatRoom navigation={this.props.navigation} />
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
    flex: 1,
    width: "100%",
    resizeMode: "contain",
    alignSelf: "center"
  },
  form: {
    flex: 1,
    justifyContent: "center",
    width: "100%"
  }
});

export default LoginRegister;