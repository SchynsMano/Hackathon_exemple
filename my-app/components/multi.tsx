import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { BlurView } from "expo-blur";
import { Color } from './GlobalStyles';

export default function Multi() {
  const buttons = [
    { text: "Button 1", iconName: "home" },
    { text: "Button 2", iconName: "search" },
    { text: "Button 3", iconName: "user" },
    { text: "Button 4", iconName: "bell" },
    { text: "Button 5", iconName: "cog" },
    { text: "Button 6", iconName: "heart" },
  ];

  // Split buttons into rows of 3
  const buttonRows = [];
  for (let i = 0; i < buttons.length; i += 3) {
    buttonRows.push(buttons.slice(i, i + 3));
  }

  return (
    <View style={styles.view}>
      <BlurView intensity={90} style={{borderRadius: 10}}>
        <View style={styles.card}>
          {buttonRows.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.buttonRow}>
              {row.map((button, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.button}
                  onPress={() => alert(`${button.text} clicked`)}
                >
                  <Icon name={button.iconName} size={20} color="#fff" />
                  {/* <Text style={styles.buttonText}>{button.text}</Text> */}
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#0D0F13",
  },
  card: {
    borderRadius: 10,
    borderColor: "#fff",
    borderWidth: 2,
    width: "100%",
    padding: 10,
    alignItems: "center",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0D0F13",
    marginTop: 10,
    borderRadius: 5,
    margin: 10,
    padding: 20,
  },
  buttonText: {
    marginLeft: 10,
    color: "#fff",
  },
});
