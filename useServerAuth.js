import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

const useServerAuth = () => {
  const url =
    "https://chatgptpromt-flask-app-3e93bb6fd690.herokuapp.com/user/login";

  const [response, setResponse] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      });
      const json = await response.json();
      console.log(json);
      setResponse(json);
      AsyncStorage.setItem("user", JSON.stringify(json));
    } catch (error) {
      console.log(error);
      setResponse(error);
    }
  };

  const signup = async (email, password, displayName) => {
    const url = 'https://chatgptpromt-flask-app-3e93bb6fd690.herokuapp.com/user/signup'
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password, display_name: displayName }),
      });
      const json = await response.json();
      console.log(json);
      setResponse(json);
    } catch (error) {
      console.log(error);
      setResponse(error);
    }
  }

  const getUserInfo = async (uid) => {
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

  return { login, signup, response, getUserInfo };
};

export { useServerAuth };
