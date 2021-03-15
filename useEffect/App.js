import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, SafeAreaView, Button, TextInput} from 'react-native';
import Constants from 'expo-constants';

const App = props => {

	const [timer, setTimer] = useState(0);
	const [userTimer, setUserTimer] = useState('');
	const [userSeconds, setUserSeconds] = useState(10);
	const [timerStopped, setTimerStopped] = useState(true);

	useEffect(() => {

		let intervalID = null;

		if(!timerStopped) {

			if(timer !== userSeconds) {

				intervalID = setInterval(() => {

					console.log('HERE');

					setTimer(timer + 1)

				}, 1000);

			} else {

				intervalID = setInterval(() => {

					console.log('HERE');

					setTimer(0)

				}, 1000);

			}

		}

		return () => {

			console.log('CLEANUP');

			clearInterval(intervalID);

		};

	}, [timer, timerStopped]);

	return (

		<SafeAreaView style={styles.safeAreaView}>

				<Text style={styles.timerText}>{timer}</Text>

				<Button title="Reset Timer" onPress={() => setTimer(timer + 1)} />

				<TextInput value={userTimer} onChangeText={(text) => setUserTimer(text)} style={styles.userTimerInput} />

				<Button title="Submit Timer" onPress={() => {
					
					setUserSeconds(Number(userTimer));
					setTimer(0);
					setUserTimer('');
					
				}} />

				<Button title={timerStopped ? 'Start Timer' : 'Stop Timer'} onPress={() => setTimerStopped(!timerStopped)} />

		</SafeAreaView>

	);

};

const styles = StyleSheet.create({
	safeAreaView: {
		flex: 1,
		backgroundColor: '#2c3e50',
		justifyContent: 'center',
		alignItems: 'center'
	},
	timerText: {
		color: '#FFF',
		fontSize: 70,
		fontWeight: 'bold',
		textAlign: 'center'
	},
	userTimerInput: {
		borderBottomWidth: 1,
		borderBottomColor: '#3498db',
		width: '50%',
		height: 60,
		marginVertical: 35,
		fontSize: 20,
		color: '#FFF'
	}
});


export default App;