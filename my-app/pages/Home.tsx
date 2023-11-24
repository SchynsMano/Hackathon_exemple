import { View } from "react-native";
import { Text } from "react-native-svg";
import Avatar from "../components/avatar";
import { StyleSheet } from "react-native";

export default function Home() {

    return (
        <View style={styles.view}>
            {/* <Avatar></Avatar> */}
        </View>
    )
}

export const styles = StyleSheet.create({
    view: {
        backgroundColor: "#0D0F13",
        flex: 1,
        alignItems: "center",
    }
})