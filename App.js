import React, { useState, useEffect } from 'react';
import { StyleSheet, View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


import Header from './src/Components/Header';
import Footer from './src/Components/Footer';
import Home from './src/screens/Home';

export default function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2300); // loading screen time to show
  }, []);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <Image
          style={styles.logo}
          source={require('./src/images/grocerlogo.png')}
          resizeMode="contain"
        />
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.innerContainer}>
          <Header />
          <Home />
          <Footer />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: '#ffcb2d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 140,
    height: 100,
    marginRight: 7,
  },
});