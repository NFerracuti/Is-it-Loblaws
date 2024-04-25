import React, { Component, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/Components/Header';
import Footer from './src/Components/Footer';

// import registerNNPushToken from 'native-notify';

import Home from './src/screens/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Home />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
