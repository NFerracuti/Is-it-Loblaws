import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Image
        style={styles.logo}
        source={require('../images/grocerlogo.png')}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 5,
    backgroundColor: '#ffcb2d',
  },
  logo: {
    width: 140,
    height: 100,
    marginRight: 7,
    marginTop: 7,
  },
});