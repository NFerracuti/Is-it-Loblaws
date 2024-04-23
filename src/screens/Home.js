import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function Home() {
  const [selectedValue, setSelectedValue] = useState("java");
  const loblawsBrands = [
    "Loblaws",
    "Atlantic Superstore",
    "Dominion Stores",
    "Extra Foods",
    "Fortinos",
    "Freshmart",
    "Maxi",
    "No Frills",
    "No Name",
    "President's Choice",
    "President's Choice Financial",
    "Provigo",
    "Real Canadian Liquorstore",
    "Real Canadian Superstore",
    "Shoppers Drug Mart / Pharmaprix",
    "SuperValu",
    "T & T Supermarket",
    "Valu-mart",
    "Your Independent Grocer",
    "Zehrs Markets"
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Is it Loblaws?</Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Select an option" value="" />
        {loblawsBrands.map((brand, index) => (
          <Picker.Item key={index} label={brand} value="yes" />
        ))}
        <Picker.Item label="No" value="no" />
      </Picker>
      {selectedValue === "yes" && <Text>Yes, they are Loblaws!</Text>}
      {selectedValue === "no" && <Text>No!</Text>}
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});