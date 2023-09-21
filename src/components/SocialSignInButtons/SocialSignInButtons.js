import { View, Text } from 'react-native';
import React from 'react';
import CustomButton from '../CustomButton';

const SocialSignInButtons = () => {
    const signInFacebook = () =>{
        console.warn('Facebook Signed In')
    };

    const signInGoogle = () =>{
        console.warn('Google Signed In')
    };

    const signInApple = () =>{
        console.warn('Apple Signed In')
    };  

  return (
    <>
        <CustomButton
            text="Sign In With Facebook"
            onPress={signInFacebook}
            backgColor="#E7EAF4"
            textColor="#4765A9"
        />
        
        <CustomButton
            text="Sign In With Google"      
            onPress={signInGoogle}
            backgColor="#FAE9EA"
            textColor="#DD4D44"
        />

        <CustomButton
            text="Sign In With Apple"     
            onPress={signInApple}
            backgColor="#e3e3e3"
            textColor="#363636"
        />
    </>
  )
}

export default SocialSignInButtons;