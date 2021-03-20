import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const ScreenOne = props => {

    useEffect(() => {

        

    });

    return (
        <View style={styles.container}>
            <Text>This is Screen One!</Text>
            <Button title="Navigate to Screen Two ---->" onPress={() => props.navigation.navigate('Screen Two')} />
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

export default ScreenOne;