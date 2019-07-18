import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionGetLatestRate, actionSetAmount, actionAddToCurrencies, actionRemoveToCurrency } from '../../actions';
import { Text, View, StyleSheet, Platform } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'
import { Ionicons } from '@expo/vector-icons';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import Touchable from 'react-native-platform-touchable';
import { Button } from 'react-native-elements';

class _ChatRoom extends Component {

    constructor(props) {
        super(props);
        this.state = {
            attachment: false,
            actionBar: [
                {
                    label: "this is no one"
                },
                {
                    label: "this is no two"
                },
                {
                    label: "this is no three"
                }
            ],
            messages: [
                {
                    _id: 8,
                    text: 'This is a quick reply. Do you love Gifted Chat? (radio) KEEP IT',
                    createdAt: new Date(),
                    quickReplies: {
                        type: 'radio', // or 'checkbox',
                        keepIt: false,
                        values: [
                            {
                                title: '😋 Yes',
                                value: 'yes',
                            },
                            {
                                title: '📷 Yes, let me show you with a picture!',
                                value: 'yes_picture',
                            },
                            {
                                title: '😞 Nope. What?',
                                value: 'no',
                            },
                        ],
                    },
                    user: {
                        _id: 2,
                        name: 'React Native',
                    },
                },
                {
                    _id: 7,
                    text: 'This is a quick reply. Do you love Gifted Chat? (checkbox)',
                    createdAt: new Date(),
                    quickReplies: {
                        type: 'checkbox', // or 'radio',
                        keepIt: true,
                        values: [
                            {
                                title: 'Yes',
                                value: 'yes',
                            },
                            {
                                title: 'Yes, let me show you with a picture!',
                                value: 'yes_picture',
                            },
                            {
                                title: 'Nope. What?',
                                value: 'no',
                            },
                        ],
                    },
                    user: {
                        _id: 2,
                        name: 'React Native',
                    },
                },
                {
                    _id: 6,
                    text: 'This is a system message',
                    createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
                    system: true,
                    // Any additional custom parameters are passed through
                },
                {
                    _id: 5,
                    image: 'https://usabilitygeek.com/wp-content/uploads/2016/08/usability-testing-prototype.jpg',
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://placeimg.com/140/140/any',
                    },
                },
                {
                    _id: 4,
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://placeimg.com/140/140/any',
                    },
                    image: 'https://usabilitygeek.com/wp-content/uploads/2016/08/usability-testing-prototype.jpg',
                },
                {
                    _id: 3,
                    text: 'Nah sekarang password ya',
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://placeimg.com/140/140/any',
                    },
                },
                {
                    _id: 2,
                    text: 'Minta username nya dulu dong',
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://placeimg.com/140/140/any',
                    },
                },
                {
                    _id: 1,
                    text: 'Hello developer, Silahkan Login terlebih dahulu ya',
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
        if (messages[0].text == "Login") {
            this.props.navigation.navigate('Main')
        } else {
            console.log(messages)
            this.setState(previousState => ({
                messages: GiftedChat.append(previousState.messages, messages),
            }))
        }
    }

    componentWillMount() {
        this.props.actionGetLatestRate(this.props.rate.fromCurrency);
    }

    giftedChat() {
        return (
            <GiftedChat
                renderChatFooter={() => {
                    return (
                        <View style={{
                            position: "absolute",
                            bottom: 0,
                            width: "100%"
                        }}>
                            {
                                this.state.actionBar.map((e, i) => {
                                    return (
                                        <Touchable
                                            key={i}
                                            style={styles.option}
                                            background={Touchable.Ripple('#ccc', false)}
                                            onPress={() => { }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <View>
                                                    <Text style={styles.optionText}>{e.label}</Text>
                                                </View>
                                            </View>
                                        </Touchable>
                                    )
                                })
                            }
                        </View>
                    )
                }}
                messages={this.state.messages}
                onSend={messages => this.onSend(messages)}
                onQuickReply={messages => { console.log(messages) }}
                renderComposer={this.state.attachment ? () => {
                    return (
                        <Touchable
                            style={styles.attachedmentOption}
                            background={Touchable.Ripple('#ccc', false)}
                            onPress={() => { }}>
                            <View style={{ alignItems: "center", alignContent: "center" }}>
                                <View style={{flexDirection: "row"}}>
                                    <View style={{marginRight: 5}}>
                                        <Ionicons name={"ios-camera"} size={30} color="#FFFFFF" />
                                    </View>
                                    <View>
                                        <Text style={{fontSize: 20, color: "#FFFFFF"}}>Camera</Text>
                                    </View>
                                </View>
                            </View>
                        </Touchable>
                    )
                } : null}
                user={{
                    _id: 1,
                }}
            />
        )
    }

    render() {

        return (
            <View style={styles.container}>
                {
                    this.giftedChat()
                }
                {Platform.OS === 'android' ? <KeyboardSpacer topSpacing={30} /> : null}
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
    option: {
        backgroundColor: '#fdfdfd',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: '#EDEDED',
    },
    attachedmentOption: {
        backgroundColor: '#3498db',
        width: "100%",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: '#EDEDED',
    },
    optionText: {
        fontSize: 12,
        marginTop: 1,
    },
    optionIconContainer: {
        marginRight: 9,
      },
});

