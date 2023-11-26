import React, { useState ,useRef  } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Button, Alert, StatusBar, ScrollView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import EventCard from "../components/Event";

const Stack = createStackNavigator();
let a = "2";

const Create = () => {
  const scrollViewRef = useRef();
  const [a, setA] = useState("2");

  const handleScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    console.log('Scrolled to:', offsetX);
  };

  const handleScrollEnd = (event) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const pageIndex = Math.round(contentOffset / scrollViewWidth);
    
    // Mise à jour de la variable a

    setA("3");
    if(pageIndex < 10){
      setA("3");
    }
    else if(pageIndex>=10 && pageIndex < 20){
      setA("4");
    }
    else if(pageIndex>=30){
      setA("5");
    }

    console.log('Current Page Index:', pageIndex);
  };

  const scrollViewWidth = 10;

  return (
    <View style={styles.containerBasic}>
      <View style={styles.containerScroll}>
        <ScrollView
          ref={scrollViewRef}
          onScroll={handleScroll}
          onMomentumScrollEnd={handleScrollEnd}
          horizontal
          pagingEnabled
          snapToInterval={scrollViewWidth}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
        >
          {/* Contenu de votre ScrollView */}
          <ScrollView
            style={styles.container}
            bounces={false}
            contentContainerStyle={styles.scrollViewContainer}
          >
            <TouchableOpacity>
              <View style={styles.contentContainer}>
                <EventCard
                  imageUrl="https://picsum.photos/200/300"
                  eventDate={a}
                  eventMonth="Nov"
                  title="Title"
                  description="Description"
                  timeAgo="10 min"
                />
              </View>
            </TouchableOpacity>
          </ScrollView>
          {/* Ajoutez d'autres écrans ScrollView au besoin */}
          <ScrollView
            style={styles.container}
            bounces={false}
            contentContainerStyle={styles.scrollViewContainer}
          >
            <TouchableOpacity>
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
            </TouchableOpacity>
          </ScrollView>

          <ScrollView
            style={styles.container}
            bounces={false}
            contentContainerStyle={styles.scrollViewContainer}
          >
            <TouchableOpacity>
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
            </TouchableOpacity>
          </ScrollView>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerBasic2: {
    alignItems: "center",
    marginTop: 300,
    flex: 1,
  },
  containerBasic: {
    alignItems: "center",
    marginTop: 150,
    flex: 1,
  },
  containerScroll: {
    backgroundColor: "transparent",
  },
  mainScrollView: {
    flexGrow: 0,
  },
  scrollViewContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
});

export default Create;
