import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity,Alert,StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PostAPIHooks from './PostAPIHooks';


function SignUpScreen() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {signup} = PostAPIHooks();
  
  const navigation = useNavigation();

  const handleSignUp = () => {
   
     signup(email, password, username).then((r)=>{
        console.log(r);
        if(r.error){
            console.log('we are in error block');
            Alert.alert('user already exits', 'try different email', [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ]);
          
            return;
        }
        else{
           navigation.navigate('ProfileScreen',{uid:r.uid})
        }
     }
     );
    // navigation.navigate("ProfileScreen");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome To SignUp Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Email Address"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleSignUp}>
        <Text style={styles.buttonText}>SignUp</Text>
      </TouchableOpacity>
     
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

export default SignUpScreen;
