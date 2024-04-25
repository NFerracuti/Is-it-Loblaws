import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';

import { getStoreOwner, allBrands, getFilteredBrands } from '../Hooks/brands';

export default function Home() {
  const [selectedValue, setSelectedValue] = useState('');
  const [search, setSearch] = useState('');
  const [filteredBrands, setFilteredBrands] = useState([]);

  useEffect(() => {
    setFilteredBrands(getFilteredBrands(search));
  }, [search]);

  const handleSelect = (brand) => {
    setSelectedValue(brand);
    setSearch('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topHalf}>
        <Text style={styles.title}>Choose a grocer:</Text>
        <TextInput
          style={styles.searchBar}
          value={search}
          onChangeText={setSearch}
          placeholder="Search for a grocer"
        />
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
      </View>
      <View style={styles.bottomHalf}>
        <View style={styles.resultContainer}>
          <Text style={styles.resultTextOne}>Selected grocer: </Text>
          <Text style={styles.resultTextTwo}>{selectedValue}</Text>
        </View>
        <View style={styles.resultContainer}>
          <Text style={styles.resultTextOne}>Store owner: </Text>
          <Text style={styles.resultTextThree}>{getStoreOwner(selectedValue)}</Text>
        </View>
      </View>
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
  topHalf: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderBottomWidth: 2,
  },
  bottomHalf: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
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
  },
  resultTextTwo: {
    fontSize: 18,
  },
  resultTextThree: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});