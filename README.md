# react-native-autocomplete-googleplaces-tnmt
Google places autocomplete component for react-native applications

# Installation

`npm install react-native-autocomplete-googleplaces-tnmt`

OR
                       
`yarn add react-native-autocomplete-googleplaces-tnmt`

# Example

	import React from 'react';
	import { StyleSheet, Text, View } from 'react-native';
	import GooglePlaces from 'react-native-autocomplete-googleplaces-tnmt';

	export default function App() {
		return (
			<View style={styles.container}>
				<GooglePlaces 
					apiKey="YOUR_API_KEY" //required (Get from https://developers.google.com/places/web-service/get-api-key)
				/>
			</View>
		);
	}

	const styles = StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: '#fff',
			alignItems: 'center',
			justifyContent: 'center',
		},
	});
