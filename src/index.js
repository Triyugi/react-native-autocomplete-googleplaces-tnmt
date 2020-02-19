import React from 'react';
import { Text, TextInput, View, TouchableOpacity, Keyboard, TouchableWithoutFeedback, StyleSheet } from 'react-native';

export default class GooglePlaces extends React.Component {
	
    constructor(props) {
        super(props)
        this.state = {
			searchValue: '',
		};
    }
	
    componentDidMount() {
        //
    }
	
	handleAddressChangeDebounce = (destination) => {
		let _this = this;
		this.setState({
			destination,
			searchValue: destination,
		});
		setTimeout(function() {
			_this.handleAddressChange(destination);
		},1000);
	}
	
	handleAddressChange = async (destination) => {
		let apiUrl = "https://maps.googleapis.com/maps/api/place/autocomplete/json?key=" + this.props.apiKey + "&input=" + destination;
		try {
			let result = await fetch(apiUrl);
			let json = await result.json();
			this.setState({
				predictions: json.predictions,
			});
		} catch (err) {
			console.log(err);
		}
	}
	
	handlePress = (val) => {
		this.setState({
			searchValue: val.description,
			predictions: null,
		});
		this.props.onAddressSelect(val);
	}
	
    render() {
        return (
            <View>
				<TextInput
					placeholder="Search..."
					style={styles.searchInput}
					value={this.state.searchValue}
					onChangeText={(value)=>this.handleAddressChangeDebounce(value)}
				/>
				{this.state.predictions && this.state.predictions.length > 0 && this.state.predictions.map((val,i) => {
					return (
						<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} key={i}>
							<Text style={styles.predictions} onPress={()=>this.handlePress(val)}>{val.description}</Text>
						</TouchableWithoutFeedback>
					)
				})}
			</View>
        );
    }
}

const styles = StyleSheet.create({
	predictions: {
		backgroundColor: 'white',
		width: '100%',
	},
	searchInput: {
		backgroundColor: 'white',
		height: 40,
		width: '100%',
	}
});