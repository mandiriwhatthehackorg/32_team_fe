import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

class OnboardingScreen extends React.Component {

    render() {
        return (
            <Onboarding
                pages={[
                    {
                        backgroundColor: '#fff',
                        image: <Image source={require('../assets/images/robot-dev.png')} />,
                        title: '1 Onboarding',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    },
                    {
                        backgroundColor: '#fff',
                        image: <Image source={require('../assets/images/robot-dev.png')} />,
                        title: '2 Onboarding',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    },
                    {
                        backgroundColor: '#fff',
                        image: <Image source={require('../assets/images/robot-dev.png')} />,
                        title: '3 Onboarding',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    }
                ]}
                onSkip = {() => this.props.navigation.navigate('LoginRegister')}
                onDone = {() => this.props.navigation.navigate('LoginRegister')}
            />
        )
    }
}

export default OnboardingScreen

