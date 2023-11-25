import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet,Button, Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import * as ImagePicker from 'expo-image-picker';
import { color } from '@rneui/base';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';


const Stack = createStackNavigator();

const Create = () => {
  //récupérer image, jeu, date
  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const navigation = useNavigation();

  const showAlert = () => {
    Alert.alert(
      'Authentification ratée',
      'Merci de remplir avec un nom et un mot de passe correct.',
      [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
    );
  };


  const handleSubmit= async () => {

    if(selectedButton === null || selectedImage === null || selectedDateTime === undefined){
      showAlert();
    }
    else{try {
      let bouton = null
      if(selectedButton === 1){
        bouton = "carrying"

      }else if(selectedButton === 2){

        bouton = "geoguesseur"
      }else if(selectedButton === 3){
        bouton = "tools finder"
      }
      const requestData = {
        image: selectedImage.uri,
        jeu: bouton,
        date: selectedDateTime,
      };
      const response = await axios.post('http://10.0.2.2:5000/api/settingGame', requestData);
      if (!response.data.error) {
        console.log('Connexion réussie!');
        
        navigation.navigate("Home");}
        else{
          showAlert();
        }
    }catch(error){
      
      showAlert();
    }
  }
   
    };






  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || new Date();
    setShowDatePicker(false);
    setSelectedDateTime(currentDate);
  };

  const onChangeTime = (event, selectedTime) => {
    const currentDate = selectedTime || new Date();
    setShowTimePicker(false);
    setSelectedDateTime(currentDate);
  };

  const showDatePickerModal = () => {
    setShowDatePicker(true);
  };

  const showTimePickerModal = () => {
    setShowTimePicker(true);
  };
  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access media library was denied');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setSelectedImage(result);
      // Ici, vous pouvez traiter l'image sélectionnée
    }
  };

  const handleButtonPress = (buttonId) => {
    setSelectedButton(buttonId);
    // Ajoutez ici le code à exécuter lorsque le bouton est sélectionné
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greyText}>Choisissez le type d'événement</Text>
      <View style={styles.containerIn}>
        <TouchableOpacity
          style={[
            styles.button,
            selectedButton === 1 && styles.selectedButton,
          ]}
          onPress={() => handleButtonPress(1)}
        >
          <Text style={styles.buttonText}>carrying</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            selectedButton === 2 && styles.selectedButton,
          ]}
          onPress={() => handleButtonPress(2)}
        >
          <Text style={styles.buttonText}>Geoguesseur</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            selectedButton === 3 && styles.selectedButton,
          ]}
          onPress={() => handleButtonPress(3)}
        >
          <Text style={styles.buttonText}>tools finder</Text>
        </TouchableOpacity>
        
      </View>
      <Text style={styles.greyText}>Choisissez une image d'évent</Text>
      {!selectedImage ?(
        <>
        
        <TouchableOpacity onPress={pickImage}>
          <View style={styles.containerIm}>
            <Text style={{color:"blue"}}>+Ajoutez image</Text>
          </View>
        </TouchableOpacity>
        </>
      ):(
        <Text style={{marginLeft:150,marginTop:20,color:"red"}}>Image bien reçue </Text>
        
    )}
    <View>
      <Text>Sélectionnez une date et une heure :</Text>
      <Button onPress={showDatePickerModal} title="Ouvrir le datepicker" />
      <Button onPress={showTimePickerModal} title="Ouvrir le timepicker" />

      {showDatePicker && (
        <DateTimePicker
          testID="datePicker"
          value={selectedDateTime}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChangeDate}
        />
      )}

      {showTimePicker && (
        <DateTimePicker
          testID="timePicker"
          value={selectedDateTime}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={onChangeTime}
        />
      )}
    </View>

   <Button onPress={handleSubmit} title="Soumettre" />
      

    </View>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  containerIn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  containerIm: {
    height: 100,
    width: 100,
    marginLeft:150,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    backgroundColor: 'rgba(180, 180, 180, 0.7)',
    borderWidth: 1,  // Ajoutez une largeur de bordure
    borderStyle: 'dashed',  // Utilisez le style en pointillés
    borderColor: 'rgba(0, 0, 0, 0.5)',  // Couleur de la bordure
  },
  button: {
    backgroundColor: 'rgb(230, 220, 320)',
    padding: 10,
    borderRadius: 20,
  },
  selectedButton: {
    backgroundColor: 'rgb(200, 170, 280)',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  imagePickerButton: {
    marginTop: 20,
    backgroundColor: 'rgb(150, 200, 250)',
    padding: 10,
    borderRadius: 20,
    width: 150, // Ajustez la largeur selon vos besoins
    height: 40,

  },
  greyText: {
    marginTop:30,
    color: 'rgba(128, 128, 128, 0.7)',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Create;
