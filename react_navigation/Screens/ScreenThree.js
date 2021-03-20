import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const ScreenThree = props => {

    useEffect(() => {

        const getLyrics = async () => {

            const lyrics = await fetch('https://api.lyrics.ovh/v1/Coldplay/Adventure+of+a+Lifetime');

            lyrics.json().then(result => console.log(result))

        }

        getLyrics();

    });

    return (
        <View style={styles.container}>
            <Text>This is Screen Three!</Text>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'teal',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ScreenThree;