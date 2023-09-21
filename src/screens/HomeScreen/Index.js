import * as React from 'react';
// import { DrawerContent } from './src/DrawerContent';
import { Button, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import SignInScreen from '../SignInScreen/SignInScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 


// const Stack = createNativeStackNavigator();

// Functions for the drawer screens 
function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     <Text style={{fontSize: 24,}}>My Profile</Text>
      {/* <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      /> */}
    </View>
  );
}

function OngoingTripScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize: 24,}}>Ongoing Trip</Text>
      {/* <Button onPress={() => navigation.goBack()} 
      title="Go back home"
     /> */}
    </View>
  );
}

function PreviousTripsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize: 24,}}>Previous Trips</Text>
      {/* <Button onPress={() => navigation.goBack()} 
      title="Go back home"
     /> */}
    </View>
  );
}

function AboutUsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize: 24,}}>About Us</Text>
      {/* <Button onPress={() => navigation.goBack()} 
      title="Go back home"
     /> */}
    </View>
  );
}

function ContactUsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     <Text style={{fontSize: 24,}}>Contact Us</Text>
      {/* <Button onPress={() => navigation.goBack()} 
      title="Go back home"
     /> */}
    </View>
  );
}

function LogOutScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize: 24,}}>Log Out</Text>
      {/* <Button onPress={() => navigation.navigate('App', { screen: 'Sign In' })} 
      title="Go To Sign In"
     /> */}
    </View>

  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator initialRouteName="Profile">
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Ongoing Trip" component={OngoingTripScreen} />
        <Drawer.Screen name="Previous Trips" component={PreviousTripsScreen} />
        <Drawer.Screen name="About Us" component={AboutUsScreen} />
        <Drawer.Screen name="Contact Us" component={ContactUsScreen} />
        <Drawer.Screen name="Log Out" component={LogOutScreen} />
      </Drawer.Navigator>
          {/* <Stack.Navigator initialRouteName='Sign In' screenOptions={{headerShown: false}}>
          <Stack.Screen name="Sign In" component={SignInScreen} />
          </Stack.Navigator> */}
    </NavigationContainer>
  );
}
 





// import 'react-native-gesture-handler';
// import { View, Text, StyleSheet, Button } from 'react-native'
// import React from 'react'
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import Animated, {
//     useSharedValue,
//     withTiming,
//     useAnimatedStyle,
//     Easing,
//   } from 'react-native-reanimated';

//   const Drawer = createDrawerNavigator();

//   function MyDrawer() {
//     return (
//       <Drawer.Navigator>
//         <Drawer.Screen name="Feed" component={Feed} />
//         <Drawer.Screen name="Article" component={Article} />
//       </Drawer.Navigator>
//     );
//   }

// const Index = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.home}>Welcome Home</Text>
//     </View>
//   )
// }
 
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: '#0cb04b',
//     },
//     home: {
//         fontSize: 32,
//         alignSelf: 'center',
//         color: 'white',
//     },
// });

// export default Index;
  
//   export default function AnimatedStyleUpdateExample(props) {
//     const randomWidth = useSharedValue(10);
  
//     const config = {
//       duration: 500,
//       easing: Easing.bezier(0.5, 0.01, 0, 1),
//     };
  
//     const style = useAnimatedStyle(() => {
//       return {
//         width: withTiming(randomWidth.value, config),
//       };
//     });
  
//     return (
//       <View
//         style={{
//           flex: 1,
//           alignItems: 'center',
//           justifyContent: 'center',
//           flexDirection: 'column',
//         }}>
//         <Animated.View
//           style={[{ width: 100, height: 80, backgroundColor: 'black', margin: 30 }, style]}
//         />
//         <Button
//           title="toggle"
//           onPress={() => {
//             randomWidth.value = Math.random() * 350;
//           }}
//         />
//       </View>
//     );
//   }

// const Drawer = createDrawerNavigator();

