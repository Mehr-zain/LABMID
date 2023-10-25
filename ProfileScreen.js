import React, { useState,useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';


function ProfileScreen({route}) {
    const {uid}=route.params
    console.log('in profile ',uid);
    const [response,setResponse]=useState("")
    useEffect(()=>{
        const getUserInfo = async () => {
            const url = `https://chatgptpromt-flask-app-3e93bb6fd690.herokuapp.com/user/profile/${uid}`;
            try {
              const response = await fetch(url);
              const json = await response.json();
              console.log(json);
              setResponse(json);
            } catch (error) {
              console.log(error);
              setResponse(error);
            }
          };
          getUserInfo()
    },[])
  return (
    <View style={styles.container}>
      <Text>{response.display_name}</Text>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff', 
  },
  header: {
    fontSize: 24,
    marginBottom: 24,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  loginButton: {
    backgroundColor: 'blue', 
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginBottom: 12,
  },
  signupButton: {
    backgroundColor: 'green', 
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white', 
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ProfileScreen;
