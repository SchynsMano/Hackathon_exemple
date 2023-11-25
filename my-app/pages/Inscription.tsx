
import { useState, useEffect } from 'react';
import * as React from "react";
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Input } from "@rneui/base";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Inscription = () => {
  const navigation = useNavigation();
  const [inputValue, setInputValue] = useState('');

  const handlePressInsc = () => {
    console.log("Le bouton a été cliqué !");
    navigation.navigate("Homes");
    // Ajoutez ici le code que vous souhaitez exécuter lorsque le bouton est cliqué
  };

  

  return (
    <View style={styles.container}>
      <Image
        source={require('../blue-steel.png')}
        style={styles.backgroundImage}
      />
      <Text style={styles.text}>Inscription</Text>

      <View style={styles.container2}>

        <InputName
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
        />
        <InputMail/>
       

        <InputMdp
          
            value={inputValue}
            onChangeText={(text) => setInputValue(text)}
          />

          <InputMdpVal/>
        

       

        <BoutonInsc onPress={handlePressInsc} />
        </View>
    </View>
  );
};


const InputName = () => {
  return(
    <Input
    containerStyle={{}}
    disabledInputStyle={{ background: "#ddd" }}
    inputContainerStyle={{width: 250 }}
    errorMessage=""
    errorStyle={{}}
    errorProps={{}}
    inputStyle={{ fontSize:10, color: 'grey' }}
    labelStyle={{}}
    labelProps={{}}
    leftIcon={<Icon name="account-outline" size={20} color={"#ddd"} />}
    leftIconContainerStyle={{}}
    placeholder="Entrer un nom utilisateur"
    placeholderTextColor="grey"
  />
  

  );
};


const InputMail = () => {
    return(
      <Input
      containerStyle={{}}
      disabledInputStyle={{ background: "#ddd" }}
      inputContainerStyle={{width: 250 }}
      errorMessage=""
      errorStyle={{}}
      errorProps={{}}
      inputStyle={{ fontSize:10, color: 'grey' }}
      labelStyle={{}}
      labelProps={{}}
      leftIcon={<Icon name="email" size={20} color={"#ddd"}/>}
      leftIconContainerStyle={{}}
      placeholder="Entrer votre adresse email"
      placeholderTextColor="grey"
    />
    
  
  
  
    );
  };



const InputMdp = () => {
  return(
    <Input
    containerStyle={{}}
    disabledInputStyle={{ background: "#ddd" }}
    inputContainerStyle={{width: 250 }}
    errorMessage=""
    errorStyle={{}}
    errorProps={{}}
    inputStyle={{ fontSize:10, color: 'grey' }}
    labelStyle={{}}
    labelProps={{}}
    leftIcon={<Icon name="lock-outline" size={20} color={"#ddd"}/>}
    leftIconContainerStyle={{}}
    placeholder="Créer votre mot de passe"
    placeholderTextColor="grey"
  />
  );
};

const InputMdpVal = () => {
    return(
      <Input
      containerStyle={{}}
      disabledInputStyle={{ background: "#ddd" }}
      inputContainerStyle={{width: 250 }}
      errorMessage=""
      errorStyle={{}}
      errorProps={{}}
      inputStyle={{ fontSize:10, color: 'grey' }}
      labelStyle={{}}
      labelProps={{}}
      leftIcon={<Icon name="lock-outline" size={20} color={"#ddd"}/>}
      leftIconContainerStyle={{}}
      placeholder="Validez votre mot de passe"
      placeholderTextColor="grey"
    />
    );
  };



  const BoutonInsc = ({ onPress }) => {
    return (
      <TouchableOpacity style={styles.boutonAllonge} onPress={onPress}>
        <Text style={styles.texteBouton}>S'inscrire</Text>
      </TouchableOpacity>
    );
  };



const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
    backgroundColor: 'gray',
  },

  container2: {
    flex: 1,
    backgroundColor: 'transparent', // Définir le fond sur transparent
    alignItems: 'center',
  },

  

    boutonAllonge: {
      width: 250,
      marginTop: 20,
      paddingVertical: 5,
      paddingHorizontal: 60,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'white',
      backgroundColor: 'white',
    },
    texteBouton: {
      color: 'black',
      fontSize: 16,
      textAlign: 'center',
    },

  text: {
    
    color: 'white', // Ajoutez une couleur de texte blanche pour une meilleure visibilité
    fontSize: 40,
    marginTop : 100,
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // ou 'contain' selon vos préférences
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  
});

export default Inscription;





