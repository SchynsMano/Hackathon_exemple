import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Page2 = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Page 2</Text>
      <Button
        title="Retour à la page 1"
        onPress={() => navigation.navigate('Page1')}
      />
    </View>
  );
};


export default Page2;



