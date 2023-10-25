// In App.js in a new project

import React, {useState,useEffect} from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import FetchRecords from './FetchRecords';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Stack = createNativeStackNavigator();

function App() {

 

 

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="FetchRecords" component={FetchRecords} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;