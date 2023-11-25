import React, { useState } from "react";
import {
  Alert,
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
  Modal,
  Text,
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
import Profile from "./Profile";
import Create from "./Create";
import Multi from "../components/multi";
import { BlurView } from "expo-blur";
import Leaderboard from "./leaderbord";

export const BottomNav = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const toggleModal = () => setModalVisible(!modalVisible);
  
    return (
      <View style={styles.container}>
        <Modal animationType="fade" transparent={true} visible={modalVisible} onRequestClose={toggleModal}>
          <TouchableOpacity style={styles.modalOverlay} activeOpacity={1} onPressOut={toggleModal}>
            <BlurView intensity={90} style={styles.blurView}>
              <Multi />
            </BlurView>
          </TouchableOpacity>
        </Modal>
  
        <CurvedBottomBarExpo.Navigator
          type="DOWN"
          screenOptions={{ headerShown: false }}
          height={55}
          circleWidth={50}
          bgColor="white"
          initialRouteName="title1"
          borderTopLeftRight
          renderCircle={() => (
            <Animated.View style={styles.btnCircleUp}>
              <TouchableOpacity onPress={toggleModal}>
                <Ionicons name="apps-sharp" size={25} color="gray" />
              </TouchableOpacity>
            </Animated.View>
          )}
          tabBar={AppTab}
        >
          <CurvedBottomBarExpo.Screen name="title1" position="LEFT" component={Home} />
          <CurvedBottomBarExpo.Screen name="title2" position="RIGHT" component={Profile} />
        </CurvedBottomBarExpo.Navigator>
      </View>
    );
  };
  