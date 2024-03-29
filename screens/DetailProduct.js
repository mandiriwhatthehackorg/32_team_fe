// detail dari deposito / pinjaman / rekening

// untuk add deposito dan pinjaman
import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import Button from "../components/Button";
import FormTextInput from "../components/FormTextInput";
import colors from "../constants/Colors";
import { Header, Button as Buttons } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class DetailTransaction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transaction_id: ""
    }
  }
  render() {
    const param = this.props.navigation.state.params;
    console.log(param)
    const title = param.type;
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={"#003A70"}
          leftComponent={
            <Buttons
              buttonStyle={{ backgroundColor: '#003A70' }}
              onPress={() => this.props.navigation.navigate('Links')}
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
          centerComponent={{ text: title, style: { color: '#fff', fontSize: 18 } }}
        />
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
            </View>
            <View style={{ width: "70%" }}>
              <View style={{ marginBottom: 40, marginTop: 40 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'right', marginRight: 10 }}>BAGUS BASUKI</Text>
              </View>
              <View>
                <Text style={{ fontSize: 16, textAlign: 'right', marginRight: 10 }}>IDR 80,000,0000.00</Text>
              </View>
            </View>
          </View>

        </View>
        <View style={styles.form}>
          <Text>
            Jangka Waktu:
          </Text>
          <Text style={{ fontWeight: "bold" }}> 5 Bulan</Text>
          <Text>
            Hold Amount:
          </Text>
          <Text style={{ fontWeight: "bold", marginBottom: 20 }}> IDR 100,000,000.00</Text>
          <Text>
            Suku Bunga:
          </Text>
          <Text style={{ fontWeight: "bold", marginBottom: 20 }}> 5,25% </Text>
          <Text>
            Bunga Pinjaman Bulanan:
          </Text>
          <Text style={{ fontWeight: "bold", marginBottom: 20 }}> IDR 5,250,000.00 </Text>

          <View style={{ height: 10 }} />

          <View style={{ height: 30 }} />
          <Button label={"KEMBALI"} color="#F7B519" onPress={() => {
            this.props.navigation.navigate("Links")
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
export default DetailTransaction;