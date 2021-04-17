import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Screens Imports
import Movies from '../Screens/Movies';
import FavoriteMovies from '../Screens/FavoriteMovies';

const Tab = createBottomTabNavigator();

function MyBottomTabNavigator() {

    return (
        <Tab.Navigator>
            <Tab.Screen name="Movies" component={Movies} />
            <Tab.Screen name="Favorites" component={FavoriteMovies} />
        </Tab.Navigator>
    );

}

export {MyBottomTabNavigator};