import React,{ useState}  from 'react';
import { View, ScrollView, StatusBar, StyleSheet, Text } from 'react-native';



const Homes = () => {
  

  const COLORS = {
    Black: 'black',
    Orange: 'orange',
    // Ajoutez d'autres couleurs au besoin
  };

  const SPACING = {
    space_36: 36,
    space_28: 28,
    // Ajoutez d'autres espaces au besoin
  };

  return (
    //horizontale : le mode horizontal, pagingEnabled active le fait qu'après chaque scroll on arrête de scroll
    
    <View>
        <View style={styles.containerScroll}>
            <ScrollView horizontal pagingEnabled style={styles.mainScrollView}>
                
            {/* Premier écran défilable */}
            <ScrollView style={styles.container} bounces={false} contentContainerStyle={styles.scrollViewContainer}>
                <StatusBar hidden />

                {/* View a afficher dans le scroll */}
                <View style={styles.contentContainer}>
                <View style={styles.carre} backgroundColor="grey"/>
                </View>

            </ScrollView>

            {/* Deuxième écran défilable */}
            <ScrollView style={styles.container} bounces={false} contentContainerStyle={styles.scrollViewContainer}>
                <StatusBar hidden />

                {/* View a afficher dans le scroll */}
                <View style={styles.contentContainer}>
                    <View style={styles.carre} backgroundColor="blue" >
                    <Text>hello</Text>
                </View>
                </View>
            </ScrollView>
            </ScrollView>
        </View>
        <Text>jhzbj</Text>
    </View>
    
  );
};

const styles = StyleSheet.create({

    containerScroll:{
        marginTop:100,
        backgroundColor:"transparent",
        height:400,
    },
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
     // Couleur de la bordure
  },
  text: {
    color: 'white',
    fontSize: 16,
  },

  carre: {
    width: 300,
    height: 300,
    borderRadius: 10, // Vous pouvez ajuster cette valeur selon vos préférences
  },
  
  // Ajoutez d'autres styles au besoin
});

export default Homes;
