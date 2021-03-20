import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const ScreenTwo = props => {

    return (
        <View style={styles.container}>
            <Text>This is Screen Two!</Text>
            <Button title="Go Back!" onPress={() => props.navigation.goBack()} />
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'maroon',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ScreenTwo;