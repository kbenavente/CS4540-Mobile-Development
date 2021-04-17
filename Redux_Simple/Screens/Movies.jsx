import React from 'react';
import {SafeAreaView, View, StyleSheet, Text, FlatList, Button} from 'react-native';

import {toggleFavorite} from '../store/actions/actionTypes';

import {useSelector, useDispatch} from 'react-redux';

const Movies = props => {

    const dispatch = useDispatch();

    const toggleFavorites = (imdbID) => dispatch({type: toggleFavorite, imdbID: imdbID});

    const movies = useSelector(state => state.movies.movies);

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
                data={movies}
                renderItem={renderMovies}
            />
        </SafeAreaView>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'cyan',
        justifyContent: 'center',
        alignItems: 'center',
    },
    listItem: {
        marginTop: 15,
        borderWidth: 2,
        borderColor: 'black',
    }
});

export default Movies;