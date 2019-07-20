import Constants from 'expo-constants';
import React from 'react';
import { SectionList, Image, StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Touchable from 'react-native-platform-touchable';

const { width: screenWidth } = Dimensions.get('window')
import Button from "../Button";

export default class Settings extends React.Component {
    render() {
        const { manifest = {} } = Constants;
        const sections = [
        ];

        return (
            <View style={{ flex: 1, marginHorizontal: 20, marginVertical: 20 }}>
                <Touchable
                    style={styles.option}
                    background={Touchable.Ripple('#ccc', false)}
                    onPress={this._handlePressDocs}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.optionIconContainer}>
                            <Image
                                source={require('../../assets/images/icon.png')}
                                resizeMode="contain"
                                fadeDuration={0}
                                style={{ width: 30, height: 30, marginTop: 1 }}
                            />
                        </View>
                        <View style={styles.optionTextContainer}>
                            <Text style={styles.optionText}>Add Deposito</Text>
                        </View>
                    </View>
                </Touchable>

                <Touchable
                    style={styles.option}
                    background={Touchable.Ripple('#ccc', false)}
                    onPress={this._handlePressDocs}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.optionIconContainer}>
                            <Ionicons name="ios-barcode" size={22} color="#ccc" />
                        </View>
                        <View style={styles.optionTextContainer}>
                            <Text style={styles.optionText}>Add Pinjaman</Text>
                        </View>
                    </View>
                </Touchable>

                <View style={{marginTop: 20}}>
                <Button label={"Connect With Bank Account"} style={{marginHorizontal:20}} onPress={() => {
                    this.props.navigation.navigate("ConnectToBank")
                }} />
                </View>
            </View>
        );
    }

    _renderSectionHeader = ({ section }) => {
        return <SectionHeader title={"Settings"} />;
    };

    _renderItem = ({ item }) => {
        if (item.type === 'color') {
            return <SectionContent>{item.value && <Color value={item.value} />}</SectionContent>;
        } else {
            return (
                <SectionContent>
                    <Text style={styles.sectionContentText}>{item.value}</Text>
                </SectionContent>
            );
        }
    };

    _handlePressDocs = () => {
        this.props.navigation.navigate("AddTransaction")
    };

    _handlePressForums = () => {
        WebBrowser.openBrowserAsync('http://forums.expo.io');
    };

}

const ListHeader = () => {
    const { manifest } = Constants;

    return (
        <View style={styles.titleContainer}>
            <View style={styles.titleIconContainer}>
                <AppIconPreview iconUrl={manifest.iconUrl} />
            </View>

            <View style={styles.titleTextContainer}>
                <Text style={styles.nameText} numberOfLines={1}>
                    {manifest.name}
                </Text>

                <Text style={styles.slugText} numberOfLines={1}>
                    {manifest.slug}
                </Text>

                <Text style={styles.descriptionText}>Description about user</Text>
            </View>
        </View>
    );
};

const SectionHeader = ({ title }) => {
    return (
        <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeaderText}>{title}</Text>
        </View>
    );
};

const SectionContent = props => {
    return <View style={styles.sectionContentContainer}>{props.children}</View>;
};

const AppIconPreview = ({ iconUrl }) => {
    if (!iconUrl) {
        iconUrl = 'https://s3.amazonaws.com/exp-brand-assets/ExponentEmptyManifest_192.png';
    }

    return <Image source={{ uri: iconUrl }} style={{ width: 64, height: 64 }} resizeMode="cover" />;
};

const Color = ({ value }) => {
    if (!value) {
        return <View />;
    } else {
        return (
            <View style={styles.colorContainer}>
                <View style={[styles.colorPreview, { backgroundColor: value }]} />
                <View style={styles.colorTextContainer}>
                    <Text style={styles.sectionContentText}>{value}</Text>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    titleContainer: {
        paddingHorizontal: 15,
        paddingTop: 15,
        paddingBottom: 15,
        flexDirection: 'row',
    },
    titleIconContainer: {
        marginRight: 15,
        paddingTop: 2,
    },
    sectionHeaderContainer: {
        backgroundColor: '#fbfbfb',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#ededed',
    },
    sectionHeaderText: {
        fontSize: 14,
    },
    sectionContentContainer: {
        paddingTop: 8,
        paddingBottom: 12,
        paddingHorizontal: 15,
    },
    sectionContentText: {
        color: '#808080',
        fontSize: 14,
    },
    nameText: {
        fontWeight: '600',
        fontSize: 18,
    },
    slugText: {
        color: '#a39f9f',
        fontSize: 14,
        backgroundColor: 'transparent',
    },
    descriptionText: {
        fontSize: 14,
        marginTop: 6,
        color: '#4d4d4d',
    },
    colorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    colorPreview: {
        width: 17,
        height: 17,
        borderRadius: 2,
        marginRight: 6,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#ccc',
    },
    colorTextContainer: {
        flex: 1,
    },
    optionsTitleText: {
        fontSize: 16,
        marginLeft: 15,
        marginTop: 9,
        marginBottom: 12,
    },
    optionIconContainer: {
        marginRight: 9,
    },
    option: {
        backgroundColor: 'blue',
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#EDEDED',
        marginBottom: 7
    },
    optionText: {
        fontSize: 17,
        marginTop: 1,
    },
    option2: {
        backgroundColor: '#fdfdfd',
        paddingHorizontal: 20,
        paddingVertical: 7,
    },
    optionText2: {
        fontSize: 15,
        marginTop: 1,
    },
});

