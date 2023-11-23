import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native';

import Page1 from './Page1';
import Page2 from './Page2';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Page1"> 
      <Stack.Screen
        name="Page1"//nom pour accéder a la page
        component={Page1} //composant a ajouter
        options={{
          title: 'Page premières', // titre de la page
          headerStyle: { //style de la barre de navigation
            backgroundColor: 'blue',
          },
          headerRight: () => (
            <Button//ajoute un bouton a droite
              onPress={() => alert('This is a button!')}//creer une boite de dialogue
              title="Info"
              titleStyle={{ color: 'blue' }}
              buttonStyle={{ backgroundColor: 'white' }}
            />
          ),
           
        }}
      />
      <Stack.Screen
        name="Page2"
        component={Page2}
        options={{
          headerShown: false, // Retire la barre de navigation pour cet écran
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );  
};

export default App;



