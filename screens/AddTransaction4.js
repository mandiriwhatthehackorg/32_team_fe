// untuk add deposito dan pinjaman
import * as React from "react";
import { Image, StyleSheet, View, Text, TextInput, Picker, ScrollView, Alert } from "react-native";
// import Button from "../components/Button";
import FormTextInput from "../components/FormTextInput";
import colors from "../constants/Colors";
import { Header, Button as Buttons } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from "../components/Button";
import imageLogo from "../assets/images/Logo-Mandiri-blue.png";

class AddTransaction4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pinjaman: 1000000,
            transaction_id: "",
            selected_deposito: "",
            no: "1370002833948564",
            name: "BAGUS BASUKI",
            limit: "800000000",
            expired: 6,
            deposito: [
                {
                    no: "1370002833948564",
                    name: "BAGUS BASUKI",
                    limit: "800000000",
                    expired: 6
                },
                {
                    no: "912345678",
                    name: "BAGUS BASUKI",
                    limit: "900000000",
                    expired: 12,
                }
            ],
            checked: false
        }
    }
    render() {
        const dataaa = []

        for (let i = 0; i < this.state.expired; i++) {

            dataaa.push(
                <Picker.Item key={i} label={(i + 1) + " Bulan"} value={i + 1} />
            )
        }

        return (
            <View>
                <ScrollView>
                <View style={styles.container}>
                    <Image source={imageLogo} style={styles.logo} />
                    <View>
                        <Text>Ref.20190721012310231</Text>
                    </View>
                    <View>
                        <Text>Waktu.21/07/2019 07:50:21</Text>
                    </View>
                    <View style={{ height: 30 }} />
                    <View style={styles.form}>
                        <Text>
                            STATUS PENGAJUAN
                        </Text>
                        <Text style={{ fontWeight: "bold", marginBottom: 20 }}> BERHASIL</Text>
                        <Text>
                            REKENING DIAGUNKAN
                        </Text>
                        <Text style={{ fontWeight: "bold", marginBottom: 20 }}> BAGUS BASUKI - 1370000029102139 (IDR)</Text>
                        <Text>
                            Hold Amount
                        </Text>
                        <Text style={{ fontWeight: "bold", marginBottom: 20 }}> IDR 100,000,000.00</Text>
                        <Text>
                            REKENING PENERIMAAN
                        </Text>
                        <Text style={{ fontWeight: "bold", marginBottom: 20 }}> BAGUS BASUKI - 137000327I63564689 (IDR)</Text>
                        <Text>
                            Nominal Pinjaman Pokok
                        </Text>
                        <Text style={{ fontWeight: "bold", marginBottom: 20 }}> IDR 80,000,000.00</Text>
                        <Text>
                            Jangka Waktu
                        </Text>
                        <Text style={{ fontWeight: "bold", marginBottom: 20 }}> 5 BULAN</Text>
                        <Text>
                            Suku Bunga Pinjaman
                        </Text>
                        <Text style={{ fontWeight: "bold", marginBottom: 20 }}> 5,25%</Text>
                        <Text>
                            Suku Pinjaman Bulanan
                        </Text>
                        <Text style={{ fontWeight: "bold", marginBottom: 20 }}> IDR 5250,000.00</Text>
                        <Text>
                            Tanggal Pembayaran Pertama
                        </Text>
                        <Text style={{ fontWeight: "bold", marginBottom: 20 }}> IDR 21 Agustus 2019</Text>

                        <View style={{ height: 30 }} />
                        <Button label={"SELESAI"} color="#F7B519" onPress={() => {
                            Alert.alert('Selamat!',
                            'Peminjaman anda berhasil!',)
                            this.props.navigation.navigate("Main")
                        }} />

                    </View>

                </View>
                </ScrollView>
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
        marginTop: 10,
        height: 100,
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

export default AddTransaction4;