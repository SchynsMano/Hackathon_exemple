import React from 'react';
import { View, Text, Button } from 'react-native';

const Page1 = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Page 1</Text>
      <Button
        title="Aller à la page 2"
        onPress={() => navigation.navigate('Page2')}
      />
    </View>
  );
};


export default Page1;
