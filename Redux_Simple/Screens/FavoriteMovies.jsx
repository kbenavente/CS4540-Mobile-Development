import React from 'react';
import {SafeAreaView, View, StyleSheet, Text, FlatList, TouchableOpacity, Button} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';

const FavoriteMovies = props => {

    const dispatch = useDispatch();

    const toggleFavorites = (imdbID) => dispatch({type: toggleFavorite, imdbID: imdbID});

    const favoriteMovies = useSelector(state => state.movies.favoriteMovies);

    const renderMovies = listItem => {

        return (
            <View style={styles.listItem}>
                <Text>{listItem.item.Title}</Text>
                <Button title="Toggle Favorite" onPress={() => toggleFavorites(listItem.item.imdbID)} />
            </View>
        );

    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList 
                data={favoriteMovies}
                renderItem={renderMovies}
            />
        </SafeAreaView>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'maroon',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default FavoriteMovies;