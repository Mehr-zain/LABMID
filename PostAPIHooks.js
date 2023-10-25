import { useEffect, useState } from "react";
import axios from "axios";

const PostAPIHooks=()=>{
    
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
          return json;
        } catch (error) {
          console.log('Failure', error);
        
        }
      
    }


      return { signup };
}

export default PostAPIHooks;

