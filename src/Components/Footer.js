import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking, Alert, Image } from 'react-native';

export default function Footer() {
  const toReddit = async () => {
    const url = 'https://www.reddit.com/r/loblawsisoutofcontrol/';
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  };

  const toInsta = async () => {
    const url = 'https://www.instagram.com/loblawsisoutofcontrol/?hl=en';
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  };

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={toReddit}>
        <Image
          style={styles.image}
          source={require('../images/reddit-icon.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={toInsta}>
        <Image
          style={styles.image}
          source={require('../images/insta-icon.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    display: 'flex',
    flexDirection: 'row', // Set the direction of the items to be in a row
    justifyContent: 'space-around', // Distribute the items evenly along the horizontal axis
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 60,
    alignItems: 'center',
    paddingRight: 30,
    paddingLeft: 30,
    borderTopColor: 'black',
    borderTopWidth: 5,
    backgroundColor: '#ffcb2d',
  },
  image: {
    width: 35,
    height: 35,
  },
});