import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Button,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import ImagePick from "./ImagePick";
import { useNavigation } from "@react-navigation/native";
import { Divider } from "react-native-paper";
import DatePicker from "react-native-date-picker";

const GeoForm = () => {
  //récupérer image, jeu, date
  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const navigation = useNavigation();
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const showAlert = () => {
    Alert.alert(
      "Authentification ratée",
      "Merci de remplir avec un nom et un mot de passe correct.",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }]
    );
  };

  const handleSubmit = async () => {
    if (
      selectedButton === null ||
      selectedImage === null ||
      selectedDateTime === undefined
    ) {
      showAlert();
    } else {
      try {
        let bouton = null;
        if (selectedButton === 1) {
          bouton = "carrying";
        } else if (selectedButton === 2) {
          bouton = "geoguesseur";
        } else if (selectedButton === 3) {
          bouton = "tools finder";
        }
        const requestData = {
          image: selectedImage.uri,
          jeu: bouton,
          date: selectedDateTime,
        };
        const response = await axios.post(
          "http://10.0.2.2:5000/api/settingGame",
          requestData
        );
        if (!response.data.error) {
          console.log("Connexion réussie!");

          navigation.navigate("Home");
        } else {
          showAlert();
        }
      } catch (error) {
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
    if (status !== "granted") {
      console.log("Permission to access media library was denied");
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
      <Text style={styles.title}>Office Guesser</Text>
      <Text style={styles.sectionTitle}>Choisissez un jeu :</Text>
      {!selectedImage ? (
        <ImagePick />
      ) : (
        <Text style={styles.imageReceived}>Image bien reçue</Text>
      )}

      <Divider style={{ margin: 20, borderColor: "#0D0F13", borderWidth: 1 }} />
      <Text style={styles.sectionTitle}>
        Sélectionnez une date et une heure :
      </Text>
      <DatePicker
        style={styles.datePicker}
        textColor="#0D0F13"
        mode="datetime"
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />

      <View style={styles.submitButton}>
        <Button onPress={handleSubmit} title="Soumettre" color="#0D0F13" />
      </View>
    </View>
  );
};
export default GeoForm;

const styles = StyleSheet.create({
  datePicker: {
    width: 200,
    height: 50,
    margin: 10,
    backgroundColor: "black",
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white", // Swapped to white
  },
  title: {
    marginBottom: 20,
    color: "#0D0F13", // Swapped to #0D0F13
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 40,
  },
  imageReceived: {
    marginLeft: 150,
    marginTop: 20,
    color: "#0D0F13", // Swapped to #0D0F13 for better visibility
  },
  datePickerContainer: {
    marginTop: 20,
  },
  sectionTitle: {
    paddingBottom: 10,
    color: "#0D0F13", // Swapped to #0D0F13
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  submitButton: {
    marginTop: 30,
    backgroundColor: "white", // Swapped to white
    padding: 10,
    borderRadius: 20,
  },
});
