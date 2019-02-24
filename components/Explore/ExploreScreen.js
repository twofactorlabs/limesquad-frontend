import React, { Component } from 'react';
import {
	View,
	StyleSheet,
	FlatList,
	Text,
	SafeAreaView
} from 'react-native';

import ShopItem from './ShopItem';

const supermarkets = [
	{
		name: "Tom Thumb",
		address: '1380 W Campbell Rd, Richardson, TX 75080',
		image: "https://dynl.mktgcdn.com/p/sPl_wbgRNszw4xFHOAyDbkHmTQVulf9o-KDPq6V8bgE/320x176.jpg"
	},
	{
		name: "Walmart",
		address: '15757 N Coit Rd, Dallas, TX 75248',
		image: "http://s.thestreet.com/files/tsc/v2008/photos/contrib/uploads/ebe3b613-a848-11e7-ac45-8d3c52b5d95e.png"
	},
	{
		name: "Target",
		address: '16731 Coit Rd, Dallas, TX 75248',
		image: "https://media3.s-nbcnews.com/j/newscms/2017_14/1958971/17804-target-346p-rs_9d9783007e2ab29d859618bd6763acee.fit-760w.jpg"
	},
	{
		name: "Sprouts",
		address: '1343 W Campbell Rd, Richardson, TX 75080',
		image: "http://s.thestreet.com/files/tsc/v2008/photos/contrib/uploads/ebe3b613-a848-11e7-ac45-8d3c52b5d95e.png"
	},
	{
		name: "HMart",
		address: '3320 K Ave, Plano, TX 75074',
		image: "http://s.thestreet.com/files/tsc/v2008/photos/contrib/uploads/ebe3b613-a848-11e7-ac45-8d3c52b5d95e.png"
	},
	{
		name: "Saigon Mall",
		address: '3320 K Ave, Plano, TX 75074',
		image: "http://s.thestreet.com/files/tsc/v2008/photos/contrib/uploads/ebe3b613-a848-11e7-ac45-8d3c52b5d95e.png"
	},
	{
		name: "Costco Wholesale",
		address: '3800 N Central Expy, Plano, TX 75074',
		image: "http://s.thestreet.com/files/tsc/v2008/photos/contrib/uploads/ebe3b613-a848-11e7-ac45-8d3c52b5d95e.png"
	},
	{
		name: "Whole Foods",
		address: '1411 E Renner Rd, Richardson, TX 75082',
		image: "http://s.thestreet.com/files/tsc/v2008/photos/contrib/uploads/ebe3b613-a848-11e7-ac45-8d3c52b5d95e.png"
	}
]

class ExploreScreen extends Component {

	static navigationOptions = {
		header: null
	}

	renderSeparator = () => {
		return (
			<View
				style={{
					height: 1,
					width: "100%",
					backgroundColor: "#CED0CE",
					marginLeft: 25,
				}}
			/>
		);
	};

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<Text style={styles.titleHeader}>Grocery Stores Near You</Text>
				<FlatList
					data={supermarkets}
					renderItem={({ item }) => <ShopItem item={item} />}
					ItemSeparatorComponent={this.renderSeparator}
				/>
			</SafeAreaView>
		)
	}
}

export default ExploreScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	text: {
		fontFamily: "Avenir Next",
		fontSize: 20
	},
	item: {
		padding: 10,
		height: 44,
		marginLeft: 30,
		fontSize: 18,
		fontFamily: 'Avenir Next',
	},
	titleHeader: {
		marginLeft: 25,
		fontSize: 22,
		marginBottom: 5,
		fontFamily: 'Avenir Next',
		fontWeight: '700',
		color: '#3c4560'
	}
})