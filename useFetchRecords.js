import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const useFetchRecords = () => {
  const [bitcoinData88, setBitcoinData88] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData88 = async () => {
      try {
        const localData = await AsyncStorage.getItem('bitcoinData88');
        if (localData) {
          setBitcoinData88(JSON.parse(localData));
        } else {
          const response = await axios.get(
            'https://api.coindesk.com/v1/bpi/currentprice.json',
          );
          const newData = Object.entries(response.data.bpi);
          setBitcoinData88(newData);

          await AsyncStorage.setItem('bitcoinData88', JSON.stringify(newData));
        }
      } catch (error) {
        console.error('Error fetching or saving data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData88();
  }, []);

  

  return { bitcoinData88, loading };
};

export default useFetchRecords;