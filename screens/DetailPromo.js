import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import Button from "../components/Button";
import FormTextInput from "../components/FormTextInput";
import imageLogo from "../assets/images/robot.gif";
import colors from "../constants/Colors";
import { Header, Button as Buttons } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
class LoginRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
  }

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
          centerComponent={{ text: 'Detail Promo', style: { color: '#fff', fontSize: 18 } }}
        />
        <Image source={imageLogo} style={styles.logo} />

        <View style={styles.form}>
          <Text> Detail dari promo tersebut </Text>
          <Button label={"Add Deposito / Pinjaman"} onPress={() => {
            //   this.handleLoginPress()
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
  }
});

export default LoginRegister;