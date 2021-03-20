import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Screens Imports
import ScreenOne from '../Screens/ScreenOne';
import ScreenTwo from '../Screens/ScreenTwo';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer() {

    return (
        <Drawer.Navigator>
            <Drawer.Screen name="OptionOne" component={MyBottomTabNavigator} />
            <Drawer.Screen name="OptionTwo" component={ScreenTwo} />
        </Drawer.Navigator>
    );

}

function HomeScreenStack() {

    return (
        <Stack.Navigator>
            <Stack.Screen name="ScreenOne" component={ScreenOne} />
            <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
        </Stack.Navigator>
    );

};

function MyBottomTabNavigator() {

    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreenStack} />
            <Tab.Screen name="Notes" component={ScreenTwo} />
        </Tab.Navigator>
    );

}

export {HomeScreenStack, MyBottomTabNavigator, MyDrawer};