import Constants from 'expo-constants';
import React from 'react';
import { SectionList, Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Touchable from 'react-native-platform-touchable';

export default class Settings extends React.Component {
  render() {
    const { manifest = {} } = Constants;
    const sections = [
    ];

    return (
      <View>
        <SectionList
          style={styles.container}
          renderItem={this._renderItem}
          renderSectionHeader={this._renderSectionHeader}
          stickySectionHeadersEnabled={true}
          keyExtractor={(item, index) => index}
          ListHeaderComponent={ListHeader}
          sections={sections}
        />
        <ScrollView>
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
                  style={{ width: 20, height: 20, marginTop: 1 }}
                />
              </View>
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionText}>Bot Profile</Text>
              </View>
            </View>
          </Touchable>

          <Touchable
            style={styles.option}
            background={Touchable.Ripple('#ccc', false)}
            onPress={this._handlePressForums}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.optionIconContainer}>
                <Ionicons name="ios-chatboxes" size={22} color="#ccc" />
              </View>
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionText}>Account & Password</Text>
              </View>
            </View>
          </Touchable>

          <Touchable
            style={styles.option}
            background={Touchable.Ripple('#ccc', false)}
            onPress={this._handlePressForums}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.optionIconContainer}>
                <Ionicons name="ios-chatboxes" size={22} color="#ccc" />
              </View>
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionText}>Sounds</Text>
              </View>
              <View style={styles.optionIconContainer}>
                <Ionicons name="ios-chatboxes" size={22} color="#ccc" />
              </View>
            </View>
          </Touchable>

          <Touchable
            style={styles.option}
            background={Touchable.Ripple('#ccc', false)}
            onPress={this._handlePressForums}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.optionIconContainer}>
                <Ionicons name="ios-chatboxes" size={22} color="#ccc" />
              </View>
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionText}>Themes</Text>
              </View>
            </View>
          </Touchable>

          <Touchable
            style={styles.option}
            background={Touchable.Ripple('#ccc', false)}
            onPress={this._handlePressForums}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.optionIconContainer}>
                <Ionicons name="ios-chatboxes" size={22} color="#ccc" />
              </View>
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionText}>Notification</Text>
              </View>
            </View>
          </Touchable>

          <Touchable
            style={styles.option}
            background={Touchable.Ripple('#ccc', false)}
            onPress={this._handlePressForums}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.optionIconContainer}>
                <Ionicons name="ios-chatboxes" size={22} color="#ccc" />
              </View>
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionText}>PIN & Fingerprint</Text>
              </View>
            </View>
          </Touchable>

          <Touchable
            style={styles.option}
            background={Touchable.Ripple('#ccc', false)}
            onPress={this._handlePressForums}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.optionIconContainer}>
                <Ionicons name="ios-chatboxes" size={22} color="#ccc" />
              </View>
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionText}>Log Out</Text>
              </View>
            </View>
          </Touchable>

          <Touchable
            style={styles.option2}
            background={Touchable.Ripple('#ccc', false)}
            onPress={this._handlePressForums}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionText2}>Help</Text>
              </View>
            </View>
          </Touchable>
          <Touchable
            style={styles.option2}
            background={Touchable.Ripple('#ccc', false)}
            onPress={this._handlePressForums}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionText2}>Rate Us</Text>
              </View>
            </View>
          </Touchable>
          <Touchable
            style={styles.option2}
            background={Touchable.Ripple('#ccc', false)}
            onPress={this._handlePressForums}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionText2}>Term of use</Text>
              </View>
            </View>
          </Touchable>
          <Touchable
            style={styles.option2}
            background={Touchable.Ripple('#ccc', false)}
            onPress={this._handlePressForums}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionText2}>Privacy policy</Text>
              </View>
            </View>
          </Touchable>
          <Touchable
            style={styles.option2}
            background={Touchable.Ripple('#ccc', false)}
            onPress={this._handlePressForums}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionText2}>Credits</Text>
              </View>
            </View>
          </Touchable>

        </ScrollView>
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
    WebBrowser.openBrowserAsync('http://docs.expo.io');
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
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EDEDED',
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

