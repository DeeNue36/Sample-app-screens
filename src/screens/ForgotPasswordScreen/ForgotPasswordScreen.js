import { View, Text, StyleSheet, ScrollView } from 'react-native';
// import React from 'react';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native'

const ForgotPasswordScreen = () => {
//codes to get and set the username and password to the current text/input    
    const [username, setUsername] = useState('');
  
    //navigating to other screens 
    const navigation = useNavigation();

 //Functions that define what each button does when pressed/clicked
    const onSendPressed = () =>{
        // console.warn('Confirmed');
        navigation.navigate('New Password');

    };

    const SignIn = () =>{
        // console.warn('Sign In');
        navigation.navigate('Sign In');
    };

  return (
    <ScrollView>  
        <View style={styles.root}>
            <Text style={styles.title}>Reset Your Password</Text>
       
     {/*Gets the textinput elements and its associated stylesfrom custominput.js */}
        <CustomInput 
        placeholder="Username"
        value={username}
        setValue={setUsername}
        />
     

     {/*Gets the Pressable elements and its associated styles and props from custombutton.js */}
     {/*Also specifies its props gotten from custombutton.js e.g onPress,type et.*/}
        <CustomButton style
            text="Send"
            onPress={onSendPressed}
        />

        <CustomButton
            text="Back To Sign In."     
            onPress={SignIn}
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
        // marginTop: 10,
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        color: 'cornflowerblue',
        margin: 10,
    },
    text: {
        color: 'grey',
        marginVertical: 10,
    },
    link:{
        color: '#FDB075',
    }
});

export default ForgotPasswordScreen;












// logo: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: 'cornflowerblue',
        
// },
// signIn:{
//     fontSize: 18,
//     marginTop: 20,
//     color: 'white',
// },