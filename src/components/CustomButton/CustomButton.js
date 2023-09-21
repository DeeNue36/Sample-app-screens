import { Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';

//backgColor and textColor are used here to change the state of any color coming from the container styles and will be used to style the facebook,google and apple buttons
//hence they are passed as props here
//type ="PRIMARY" is used as a default state for any button until its type is changed
//onPress,text,type,backgColor and textColor are props(properties) defined here but get their actual value from signinscreen.js because that is where they are needed to be specified 
const CustomButton = ({onPress, text, type ="PRIMARY", backgColor, textColor}) => {
  return (
    <Pressable 
    onPress={onPress}
        style={[
            styles.container, 
            styles[`container_${type}`], 
            backgColor ? {backgroundColor:backgColor} : {}
        ]}>
      <Text 
         style={[styles.text, 
         styles[`text_${type}`],
         textColor ? {color: textColor} : {}
        ]}>
         {text}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        //I removed the color because we have three types of buttons and we are to style them separately which are primary,secondary and tertiary
        //Primary: e.g a regular/normal sign up button with colors,border and text
        //Secondary: a button with transparent/no color but a defined border and text
        //Tertiary: e.g Forgot Password button which looks like a link...does not have any border or color just text
        // backgroundColor:"#3B71F3",
        width: "100%",
        padding: 15,
        marginVertical: 7,
        alignItems: "center",
        borderRadius: 7,
    },
    container_PRIMARY: {
        backgroundColor:"#3B71F3",
    },
    container_SECONDARY: {
       borderColor: "#3B71F3", 
       borderWidth: 2,
    },
    container_TERTIARY:{},
    text: {
        fontWeight: "bold",
        color: "white",
        fontSize: 16,
    },
    text_SECONDARY: {
        color: "#3B71F3",
    },
    text_TERTIARY: {
        color: "grey",
    },
});

export default CustomButton;