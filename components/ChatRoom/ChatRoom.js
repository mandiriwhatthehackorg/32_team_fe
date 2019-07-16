import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionGetLatestRate, actionSetAmount, actionAddToCurrencies, actionRemoveToCurrency } from '../../actions';
import { Text, View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'
import KeyboardSpacer from 'react-native-keyboard-spacer';

class _ChatRoom extends Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: [
                {
                    _id: 1,
                    text: 'Hello developer',
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://placeimg.com/140/140/any',
                    },
                },
            ],
        }
    }

    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))
    }

    componentWillMount() {
        this.props.actionGetLatestRate(this.props.rate.fromCurrency);
    }

    giftedChat() {
        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={messages => this.onSend(messages)}
                user={{
                    _id: 1,
                }}
            />
        )
    }

    render() {
        console.log(this.props.rate)
        return (
            <View style={styles.container}>
                {
                    this.giftedChat()
                }
                {Platform.OS === 'android' ? <KeyboardSpacer topSpacing={30} /> : null }
            </View>
        )
    }

}

const mapStateToProps = (state, ownProps) => ({
    rate: state.rate
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    actionGetLatestRate: data => dispatch(actionGetLatestRate(data)),
    actionSetAmount: data => dispatch(actionSetAmount(data)),
    actionAddToCurrencies: data => dispatch(actionAddToCurrencies(data)),
    actionRemoveToCurrency: data => dispatch(actionRemoveToCurrency(data))
});

export const ChatRoom = connect(
    mapStateToProps,
    mapDispatchToProps
)(_ChatRoom);

export default ChatRoom;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

