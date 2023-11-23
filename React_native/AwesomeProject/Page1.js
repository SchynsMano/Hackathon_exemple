import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';

const Page1 = ({ navigation }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fonction pour effectuer la requête à l'API Flask locale
    const fetchData = async () => {
      console.log("incomming");
      try {
        const response = await axios.get('http://10.0.2.2:5000/api/data');


        setData(response.data.message);
      } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération des données', error);
      }
    };

    // Appel de la fonction pour effectuer la requête lors du montage du composant
    fetchData();
  }, []); // Le tableau vide en tant que deuxième argument signifie que cela ne devrait s'exécuter qu'une seule fois lors du montage du composant

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Page 1</Text>
      
      {/* Afficher les données de l'API */}
      {data ? (
        <Text>Données de l'API : {JSON.stringify(data)}</Text>
      ) : (
        <Text>Chargement en cours...</Text>
      )}

      <Button
        title="Aller à la page 2"
        onPress={() => navigation.navigate('Page2')}
      />
    </View>
  );
};

export default Page1;
