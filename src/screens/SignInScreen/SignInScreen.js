import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';//imports the custom text inputs
import CustomButton from '../../components/CustomButton';//imports the various primary,secondary and tertiary buttons
import SocialSignInButtons from '../../components/SocialSignInButtons';//imports the social media sign in buttons
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
//codes to get and set the username and password to the current text/input    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    //navigating between screens
    const navigation = useNavigation();

 //Functions that define what each button does when pressed/clicked
    const signInPressed = () =>{
        // console.warn('Sign In');

        // we have to Validate User

        navigation.navigate('Home Screen');
    };

    const forgotPasswordPressed = () =>{
        // console.warn('Forgot Password');
        navigation.navigate('Forgot Password');
    };

    const SignUp = () =>{
        // console.warn('Sign Up');
        navigation.navigate('Sign Up');
    }


  return (
    <ScrollView>  
        <View style={styles.root}>
        <Text style={styles.logo}>Welcome To Uhuru DD</Text>
        <Text style={styles.signIn}>Sign In </Text>
        {/* <Image source= {require('@expo/')} 
        style ={styles.logo} /> */}

     {/*Gets the textinput elements and its associated stylesfrom custominput.js */}
        <CustomInput 
        placeholder="Username"
        value={username}
        setValue={setUsername}
        />
        <CustomInput
            placeholder="Password"
            value={password}
            setValue={setPassword}
            secureTextEntry
            // ={true} value for secureTextEntry
            //not used beacuse it makes the code cleaner and is already defined in custominput.js
        />
     {/*Gets the Pressable elements and its associated styles and props from custombutton.js */}
     {/*Also specifies its props gotten from custombutton.js e.g onPress,type et.*/}
        <CustomButton style
            text="Sign In"
            onPress={signInPressed}
            // type="PRIMARY"
            //It's either we do this or pass it as default value as done in custombutton.js
        />

        <CustomButton style
            text="Forgot Password?"
            onPress={forgotPasswordPressed}
            type="TERTIARY"
        />

        <SocialSignInButtons/>

        <CustomButton
            text="Don't Have An Account? Create an Account"     
            onPress={SignUp}
            type="TERTIARY"
        />
        </View>
    </ScrollView>  
  )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 30,
        marginTop: 30,
    },
    logo: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'cornflowerblue',
       
    },
    signIn:{
        fontSize: 18,
        marginTop: 20,
        color: 'black',
    }
});

export default SignInScreen;