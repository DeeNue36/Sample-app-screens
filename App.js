import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import React from 'react';
import SignInScreen from './src/screens/SignInScreen'
import SignUpScreen from './src/screens/SignUpScreen'
import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen/ConfirmEmailScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen/ForgotPasswordScreen';
import NewPasswordScreen from './src/screens/NewPasswordScreen';
import HomeScreen from './src/screens/HomeScreen/Index';



const Stack = createNativeStackNavigator();

const App = () => {
  return (
 
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Sign In' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Sign In" component={SignInScreen} />
        <Stack.Screen name="Sign Up" component={SignUpScreen} />
        <Stack.Screen name="Confirm Email" component={ConfirmEmailScreen} />
        <Stack.Screen name="Forgot Password" component={ForgotPasswordScreen} />
        <Stack.Screen name="New Password" component={NewPasswordScreen} />
        <Stack.Screen name="Home Screen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
  }
});

export default App;


// #0cb04b
// #DCDCDC
// #051C60































// import { StatusBar } from 'expo-status-bar';
// import React, {useState} from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import * as Font  from 'expo-font';
// import { AppLoading } from 'expo';




// export default function App () {

//     return (
//         <View style={styles.container} >
//           <Text style={styles.name}>Uhuru DD</Text>
//           <StatusBar style="auto" />
//         </View>
//     );
 

  
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#0cb04b',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   name:{
//     fontSize: 40,
//     fontWeight: 'bold',
//     color: 'white',
//   },
// });

// //const [loaded] = useFonts({
//   //   Montserrat: require('./assets/Fonts/JosefinSans-Bold.ttf'),
//   // });
  
//   //   if (!loaded) {
//   //     return null;
//   //   }

// // const getFonts = () => Font.loadAsync({
// //     'josefinsans-bold': require('./assets/fonts/JosefinSans-Bold.ttf'),
// //   })
//  // const [fontsLoaded, setFontsLoaded] = useState(false);

//   // if (fontsLoaded) {
//  // }
//   // else{
//   //   return (
//   //    <AppLoading
//   //     startAsync= {getFonts}
//   //     onFinish= { ()=> setFontsLoaded(true)}
//   //    />
//   //   )
//   // }