import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import ChatRoom from '../components/ChatRoom';
import { Header, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class ChatRoomScreen extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Header
                    leftComponent={
                        <Button
                        onPress={() => this.props.navigation.navigate('Home')}
                            icon={
                                <Icon
                                    name="arrow-left"
                                    size={18}
                                    color="white"
                                />
                            }
                        >
                        </Button>
                    }
                    centerComponent={{ text: 'Chatroom', style: { color: '#fff' , fontSize: 18 } }}
                />
                <ChatRoom />
            </View>
        )
    }
}

export default ChatRoomScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
