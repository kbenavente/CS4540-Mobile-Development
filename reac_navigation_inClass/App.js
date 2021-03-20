import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Navigation
import {NavigationContainer} from '@react-navigation/native';

// My Navigational Flow
import {HomeScreenStack, MyBottomTabNavigator, MyDrawer} from './Navigation/MainNavigator'

const App = props => {

	return (
		<NavigationContainer>
			<MyBottomTabNavigator />
		</NavigationContainer>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;