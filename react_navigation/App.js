import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ScreenOne from './Screens/ScreenOne';
import ScreenTwo from './Screens/ScreenTwo';
import ScreenThree from './Screens/ScreenThree';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


const Stack = createStackNavigator();

const NotAuthenticatedStack = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen name="Screen Three" component={ScreenThree} />
    </Stack.Navigator>
  );

};

const AuthenticatedStack = () => {
  return (<Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#000'
        }
      }}>

        <Stack.Screen name="Screen One" component={ScreenOne} options={{
          title: 'Theme Parks',
          //headerShown: false,
        }} />
        <Stack.Screen name="Screen Two" component={ScreenTwo} options={{
          title: 'Disneyland',
          //headerShown: false,
        }} />

  </Stack.Navigator>);
};

const App = props => {

  const [authenticated, setAuthenticated] = useState(false);

  return (
    <NavigationContainer>

      {authenticated && <AuthenticatedStack />}
      {!authenticated && <NotAuthenticatedStack />}

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App;