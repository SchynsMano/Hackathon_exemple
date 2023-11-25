import { View } from "react-native";
import { Text } from "react-native-svg";
import { StyleSheet } from "react-native";
import ReactSearchBox from "react-search-box";
import Search from "../components/search";
import { SearchBar } from '@rneui/themed';


export default function Home() {

  return (
    <View style={styles.view}>
        <Search/>
    </View>
  );
}

export const styles = StyleSheet.create({
  view: {
    backgroundColor: "#0D0F13",
    flex: 1,
    alignItems: "center",
  },
  searchbar:{
    width: 300,
  }
});
