import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
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



