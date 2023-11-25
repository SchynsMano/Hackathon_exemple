import { Text } from "react-native-svg";
import ReactSearchBox from "react-search-box";
import Search from "../components/search";
import { SearchBar } from "@rneui/themed";
import { View, ScrollView, StatusBar, StyleSheet } from "react-native";
import EventCard from "../components/Event";
import Top from "../components/Top";
import EventHeader from "../components/Top";
import { AppState } from "react-native";

const Carousel = () => {
  return (
    <View>
      <ScrollView horizontal pagingEnabled style={styles.mainScrollView}>
        {/* Premier écran défilable */}
        <ScrollView
          style={styles.container}
          bounces={false}
          contentContainerStyle={styles.scrollViewContainer}
        >
          <StatusBar hidden />

          {/* View a afficher dans le scroll */}
          <View style={styles.contentContainer}>
            <EventCard
              imageUrl="../assets/banner.png"
              eventDate="10"
              eventMonth="Nov"
              title="Title"
              description="Description"
              timeAgo="10 min"
            />
          </View>
        </ScrollView>

        {/* Deuxième écran défilable */}
        <ScrollView
          style={styles.container}
          bounces={false}
          contentContainerStyle={styles.scrollViewContainer}
        >
          {/* View a afficher dans le scroll */}
          <View style={styles.contentContainer}>
            <EventCard
              imageUrl="https://picsum.photos/200/300"
              eventDate="10"
              eventMonth="Nov"
              title="Title"
              description="Description"
              timeAgo="10 min"
            />
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default function Home() {
  return (
    <View style={styles.view}>
      <EventHeader dateTime={"DECEMBER 16, 9:10 PM"} profileUri={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} />

      {/* <Text style={styles.title}>Explore events</Text> */}
      <Search />
      <Carousel />
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
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  containerScroll: {},
  mainScrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    flex: 1,
  },
  inputHeaderContainer: {
    marginHorizontal: 36,
    marginTop: 28,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    // Couleur de la bordure
  },
  text: {
    color: "white",
    fontSize: 16,
  },

  carre: {
    width: 300,
    height: 300,
    borderRadius: 10, // Vous pouvez ajuster cette valeur selon vos préférences
  },
});
