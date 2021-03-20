import React, {useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet, Button, TextInput} from 'react-native';

const ScreenOne = props => {

    const [artistName, setArtistName] = useState('');
    const [songTitle, setSongTitle] = useState('');

    return (
        <SafeAreaView>
            <View>
                <TextInput placeholder="Artist Name" value={artistName} onChangeText={(text) => setArtistName(text)} />
                <TextInput placeholder="Song Title" value={songTitle} onChangeText={(text) => setSongTitle(text)} />
                <Button title="Get Lyrics" onPress={() => {
                  
                  props.navigation.navigate('ScreenTwo', {artistName: artistName, songTitle: songTitle});

                }} />
            </View>
        </SafeAreaView>
    );

};

const styles = StyleSheet.create({

});

export default ScreenOne;