import React from "react";
import {
  Alert,
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { CurvedBottomBarExpo } from "react-native-curved-bottom-bar";
import Ionicons from "@expo/vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
// import Multi from "./components/multi";
import Inscription from "../pages/Inscription";
import Connection from "../pages/Connection";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/Home";
import Homes from "../pages/Homes";

const Stack = createStackNavigator();

const HomeScreen = () => {
  const _renderIcon = (routeName, selectedTab) => {
    let icon = "";

    switch (routeName) {
      case "title1":
        icon = "ios-home-outline";
        break;
      case "title2":
        icon = "person-outline";
        break;
    }

    return (
      <Ionicons
        name={icon}
        size={25}
        color={routeName === selectedTab ? "black" : "gray"}
      />
    );
  };

  const renderTabBar = ({ routeName, selectedTab, navigate }) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.tabbarItem}
      >
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  // Define the Home screen component here
  return (
    <CurvedBottomBarExpo.Navigator
      type="DOWN"
      screenOptions={{
        headerShown: false,
      }}
      style={styles.bottomBar}
      shadowStyle={styles.shawdow}
      height={55}
      circleWidth={50}
      bgColor="white"
      initialRouteName="title1"
      borderTopLeftRight
      renderCircle={({ selectedTab, navigate }) => (
        <Animated.View style={styles.btnCircleUp}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert("Click Action")}
          >
            <Ionicons name={"apps-sharp"} color="gray" size={25} />
          </TouchableOpacity>
        </Animated.View>
      )}
      tabBar={renderTabBar}
    >
      <CurvedBottomBarExpo.Screen
        name="title1"
        position="LEFT"
        component={() => HomeCall()}
      />
      <CurvedBottomBarExpo.Screen
        name="title2"
        component={() => HomesCall()}
        position="RIGHT"
      />
    </CurvedBottomBarExpo.Navigator>
  );
};

const HomesCall = () => {
  return <Homes />;
};

const HomeCall = () => {
  return <Home />;
};

export default function Nav() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Connection">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Inscription"
            component={Inscription}
            options={{
              title: "Inscription",
              headerStyle: {
                backgroundColor: "blue",
              },
              headerShown: false,
            }}
          />
          {/* <Stack.Screen
            name="Connection"
            component={Connection}
            options={{
              headerShown: false, // Retire la barre de navigation pour cet écran
            }}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export const styles = StyleSheet.create({
  popup: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "transparent",
  },
  container: {
    flex: 1,
    padding: 20,
  },
  shawdow: {
    shadowColor: "#DDDDDD",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  button: {
    flex: 1,
    justifyContent: "center",
  },
  bottomBar: {},
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E8E8E8",
    bottom: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: "gray",
  },
  tabbarItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 30,
    height: 30,
  },
  screen1: {
    flex: 1,
    backgroundColor: "#BFEFFF",
  },
  screen2: {
    flex: 1,
    backgroundColor: "#FFEBCD",
  },
});