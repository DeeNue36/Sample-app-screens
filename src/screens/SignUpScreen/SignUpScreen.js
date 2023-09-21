import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
//codes to get and set the username and password to the current text/input    
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    //navigation
    const navigation = useNavigation();

 //Functions that define what each button does when pressed/clicked
    const registerPressed = () =>{
        // console.warn('Registered');
        navigation.navigate('Confirm Email')
    };

    const SignIn = () =>{
        // console.warn('Sign In');
        navigation.navigate('Sign In');
    };

    const onTermsOfUsePressed = () =>{
        console.warn('Terms of Use');
        // navigation.navigate('') // we don't navigate to any page because we do not have a terms of use page
    };

    const onPrivacyPolicyPressed = () =>{
        console.warn('Privacy Policy');
        // navigation.navigate(''); // same applies here as in terms of use
    }


  return (
    <ScrollView>  
        <View style={styles.root}>
            <Text style={styles.title}>Create An Account</Text>

     {/*Gets the textinput elements and its associated stylesfrom custominput.js */}
        <CustomInput 
        placeholder="Username"
        value={username}
        setValue={setUsername}
        />
        <CustomInput 
        placeholder="Email"
        value={email}
        setValue={setEmail}
        />
        <CustomInput
            placeholder="Password"
            value={password}
            setValue={setPassword}
            secureTextEntry
            // ={true} value for secureTextEntry
            //not used beacuse it makes the code cleaner and is already defined in custominput.js
        />
        <CustomInput 
        placeholder="Repeat Your Password"
        value={repeatPassword}
        setValue={setRepeatPassword}
        secureTextEntry
        />

     {/*Gets the Pressable elements and its associated styles and props from custombutton.js */}
     {/*Also specifies its props gotten from custombutton.js e.g onPress,type et.*/}
        <CustomButton style
            text="Register"
            onPress={registerPressed}
            // type="PRIMARY"
            //It's either we do this or pass it as default value as done in custombutton.js
        />

       <Text style={styles.text}>
        By registering, you confirm that you accept our {''} 
        <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and {''} 
        <Text style={styles.link} onPress={onPrivacyPolicyPressed}>Privacy Policy</Text>
        </Text> 

        <SocialSignInButtons/>

        <CustomButton
            text="Have An Account? Sign In."     
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

export default SignUpScreen;












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