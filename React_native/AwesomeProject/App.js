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
      name="Page1"
      component={Page1}
      options={{
        title: 'Page premières',
        headerStyle: {
          backgroundColor: 'blue',
        },
        headerRight: () => (
          <Button
            onPress={() => alert('This is a button!')}
            title="Info"
           
            titleStyle={{ color: 'blue' }} // Changer la couleur du texte du titre du bouton
            buttonStyle={{ backgroundColor: 'white' }} // Changer la couleur de fond du bouton
            
          />
        ),
      }}
    />
        <Stack.Screen
          name="Page2"
          component={Page2}
          //options={{
            //headerLeft: null, // Retire le bouton de retour
          //}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;



