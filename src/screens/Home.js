import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, FlatList, TouchableOpacity, Keyboard, Platform } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';

import { getStoreOwner, getFilteredBrands } from '../Hooks/brands';

export default function Home() {
  const [selectedValue, setSelectedValue] = useState('');
  const [search, setSearch] = useState('');
  const [filteredBrands, setFilteredBrands] = useState([]);
  const [keyboardStatus, setKeyboardStatus] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardStatus(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardStatus(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  useEffect(() => {
    setFilteredBrands(getFilteredBrands(search));
  }, [search]);

  const handleSelect = (brand) => {
    setSelectedValue(brand);
    setSearch('');
  };

  if (keyboardStatus) {
    return (


      <View style={styles.container}>
        <View style={styles.topHalf}>
          <View style={styles.topContainer}>
            <Text style={styles.title}>Choose a grocer:</Text>
            <TextInput
              style={styles.searchBar}
              value={search}
              onChangeText={setSearch}
              placeholder="Search for a grocer"
            />
            {search !== '' && (
              <FlatList
                style={styles.list}
                data={filteredBrands}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => handleSelect(item)}>
                    <Text style={styles.listItem}>{item}</Text>
                  </TouchableOpacity>
                )}
              />
            )}
          </View>
        </View>
      </View>

    );
  }

  return (

    <View style={styles.container}>
      <View style={styles.topHalf}>
        <View style={styles.topContainer}>
          <Text style={styles.title}>Choose a grocer:</Text>
          <TextInput
            style={styles.searchBar}
            value={search}
            onChangeText={setSearch}
            placeholder="Search for a grocer"
          />
          {search !== '' && (
            <FlatList
              style={styles.list}
              data={filteredBrands}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleSelect(item)}>
                  <Text style={styles.listItem}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          )}
        </View>
      </View>
      <View style={styles.bottomHalf}>
        <View style={styles.resultContainerOne}>
          <Text style={styles.resultTextOne}>Selected grocer: </Text>
          <Text style={styles.resultTextTwo}>{selectedValue}</Text>
        </View>
        <View style={[styles.resultContainerTwo,
        getStoreOwner(selectedValue) === 'Loblaws' ? { borderColor: 'red' } :
          (getStoreOwner(selectedValue) === 'Sobeys (Empire Company)' || getStoreOwner(selectedValue) === 'Metro') ? { borderColor: '#ef3e00' } :
            {}
        ]}>
          <Text style={styles.resultTextOne}>Store owner: </Text>
          <Text style={styles.resultTextThree}>{getStoreOwner(selectedValue)}</Text>
        </View>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },

  topHalf: {
    flex: 0.6,
    width: '100%',
  },
  topContainer: {
    paddingTop: 20,
    alignItems: 'center',
    width: '100%',
  },
  bottomHalf: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  searchBar: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  list: {
    maxHeight: 200,
    fontSize: 18,
  },
  listItem: {
    fontSize: 18,
  },
  resultTextOne: {
    fontSize: 18,
    textAlign: 'center',
  },
  resultTextTwo: {
    fontSize: 18,
    textAlign: 'center',
  },
  resultTextThree: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  resultContainerOne: {
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: 300,
  },
  resultContainerTwo: {
    borderWidth: 3,
    borderColor: '#000',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: 300,
  },
});