import React from 'react';
import { View, ScrollView, StatusBar, StyleSheet, Text } from 'react-native';


import { useEffect, useRef } from "react";
import { AppState } from "react-native";
import moment from "moment";


function TimeTriggeredScheduler({ children }) {

  // Ref to store the current app state
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    // Load the timer when the component mounts and register the event listener for app state changes

  const subscription = AppState.addEventListener("change", (nextAppState) => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === "active"
      ) {
        // Load the timer when the app returns to the foreground
        loadTimer();
      } 
      else if (nextAppState === "background" || nextAppState === "inactive") {
        // Save the timer value when the app goes to the background
        saveTimerValue();
      }

      // Update the current app state
      appState.current = nextAppState;
    });


    // Clean up the event listener on component unmount
    return () => {
      subscription.remove();
    };
  }, []);


  // Function to save the timer value to AsyncStorage when the app goes to the background

  const saveTimerValue = async () => {
    // Code to save the timer value to AsyncStorage
  };

  // Function to load the timer value from AsyncStorage when the app returns to the foreground

  const loadTimer = async () => {
    // Code to load the timer value from AsyncStorage
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Current App State: {appState}</Text>
    </View>
  );
}


export default TimeTriggeredScheduler;


