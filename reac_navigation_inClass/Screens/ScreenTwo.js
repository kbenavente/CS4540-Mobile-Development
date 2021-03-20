import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

const ScreenTwo = props => {

    const [lyrics, setLyrics] = useState('');

    useEffect(() => {

        const getLyrics = async (artistname, songTitle) => {

            const responseLyrics = await fetch('https://api.lyrics.ovh/v1/' + artistname + '/' + songTitle);
            
            const lyrics = await responseLyrics.json();
            
            setLyrics(lyrics.lyrics);

        };

        getLyrics(props.route.params.artistName, props.route.params.songTitle);

    }, []);

    return (
        <View>
            <ScrollView>
                <Text>Artist Name: {props.route.params.artistName}</Text>
                <Text>Song Title: {props.route.params.songTitle}</Text>
                <Text style={{fontWeight: 'bold'}}>{lyrics}</Text>
            </ScrollView>
        </View>
    );

};

const styles = StyleSheet.create({

});

export default ScreenTwo;