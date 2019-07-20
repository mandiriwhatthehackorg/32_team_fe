// untuk add deposito dan pinjaman
import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
// import Button from "../components/Button";
import FormTextInput from "../components/FormTextInput";
import colors from "../constants/Colors";
import { Header, Button as Buttons } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
class AddTransaction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transaction_id: ""
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          leftComponent={
            <Buttons
              onPress={() => this.props.navigation.navigate('Home')}
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
          centerComponent={{ text: 'Add Deposito / Pinjaman', style: { color: '#fff', fontSize: 18 } }}
        />
        <View style={styles.form}>
          <FormTextInput
            value={this.state.email}
            onChangeText={this.handleEmailChange}
            placeholder={"Email"}
          />
          <FormTextInput
            value={this.state.password}
            onChangeText={this.handlePasswordChange}
            placeholder={"Password"}
          />
          {/* <Button label={"Add Transaction"} onPress={()=>{
              this.handleLoginPress()
          }} /> */}

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

export default AddTransaction;