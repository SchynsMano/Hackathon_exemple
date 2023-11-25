import { View, ScrollView, StatusBar, StyleSheet, Text } from "react-native";

export default function Geoguessr() {
  return (
    <View style={styles.view}>

    </View>
  );
}

export const styles = StyleSheet.create({
  view: {
    backgroundColor: "#0D0F13",
    flex: 1,
    alignItems: "center",
  },
  title: {
    padding: 20,
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginLeft: 8,
  },
  mainScrollView: {
    flexGrow: 0, // Ensure the ScrollView doesn't grow larger than its content
  },
  scrollViewContainer: {
    alignItems: "center", // Center children horizontally
    justifyContent: "center", // Center children vertically
  },
  contentContainer: {
    // Flex removed to give ScrollView a determinate size
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  text: {
    color: "white",
    fontSize: 16,
  },
  carre: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
});
