import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import useFetchRecords from './useFetchRecords';

const FetchRecords = () => {
  const {bitcoinData88, loading} = useFetchRecords();

 
 
 
  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Text style={styles.heading}>Currency</Text>
      <Text>{item[0]}</Text>
      <Text style={styles.heading}>Description</Text>
      <Text style={styles.rate}>{item[1].description}</Text>
      <Text style={styles.heading}>BitCoin Rate</Text>
      <Text style={styles.rate}>${item[1].rate}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={bitcoinData88}
          keyExtractor={item => item[0]}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'green',
  },
  item: {
    flexDirection: 'col',
    justifyContent: 'space-between',
    padding: 10,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  rate: {
    fontSize: 16,
  },
});

export default FetchRecords;
