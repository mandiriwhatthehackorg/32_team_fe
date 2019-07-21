import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';
class OnboardingScreen extends React.Component {

    render() {
        return (
            <Onboarding
                bottomBarColor={"#003A70"}
                pages={[
                    {
                        backgroundColor: '#fff',
                        image: <Image source={require('../assets/images/2.png')} />,
                        title: 'Selamat Datang di Deposave!',
                        subtitle: 'Kami disini untuk menyelamat deposit anda!',
                        titleStyles: {
                            fontWeight: "bold"
                        },
                        subTitleStyles: {
                            fontSize: 16
                        }
                    },
                    {
                        backgroundColor: '#fff',
                        image: <Image source={require('../assets/images/1.png')} />,
                        title: '',
                        subtitle: 'Anda tidak akan kehilangan deposito anda lagi!',
                        subTitleStyles: {
                            fontSize: 18,
                            marginTop: -40
                        }
                    },
                    {
                        backgroundColor: '#fff',
                        image: <Image source={require('../assets/images/3.png')} />,
                        title: '',
                        subtitle: 'Rubah deposito anda menjadi agunan dan dapatkan suku bunga yang ringan!',
                        subTitleStyles: {
                            fontSize: 18,
                            marginTop: -40
                        }
                    }
                ]}
                SkipButtonComponent={({ isLight, skipLabel, ...props }) => <Text style={{ color: "white", marginLeft: 20, fontSize: 17 }} {...props}>Skip</Text>}
                NextButtonComponent={({ isLight, ...props }) => <Text style={{ color: "white", marginRight: 20, fontSize: 17 }} {...props}>Next</Text>}
                DoneButtonComponent={({ isLight, ...props }) => <Text style={{ color: "white", marginRight: 20, fontSize: 17 }} {...props}><Icon
                    name="check"
                    size={18}
                    color="white"
                /></Text>}
                onSkip={() => this.props.navigation.navigate('LoginRegister')}
                onDone={() => this.props.navigation.navigate('LoginRegister')}
            />
        )
    }
}

export default OnboardingScreen

