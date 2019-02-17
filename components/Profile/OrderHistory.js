import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import OrderHistoryItem from './OrderHistoryItem'

class OrderHistory extends Component {
	renderSeparator = () => {
		return (
			<View
				style={{
					height: 1,
					width: "100%",
					backgroundColor: "#CED0CE",
					// marginLeft: "14%"
				}}
			/>
		);
	};

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.titleHeader}>Your History</Text>
				<FlatList
					data={[
						{ key: "Devin", store: 'Walmart' },
						{ key: "Jackson", store: 'Saigon' },
						{ key: "James", store: 'Chick Fil A' },
						{ key: "Joel", store: 'Moes' },
						{ key: "John", store: 'Walmart' },
						{ key: "Jillian", store: 'Walmart' },
						{ key: "Jimmy", store: 'HMart Plano' },
						{ key: "Julie", store: 'Walmart' }
					]}
					renderItem={({ item }) => <OrderHistoryItem item={item} />}
					ItemSeparatorComponent={this.renderSeparator}
				/>
			</View>
		);
	}
}

export default OrderHistory;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 10
	},
	item: {
		padding: 10,
		height: 44,
		marginLeft: 30,
		fontSize: 18,
		fontFamily: 'Avenir Next',
	},
	titleHeader: {
		marginLeft: 20,
		fontSize: 22,
		fontFamily: 'Avenir Next',
		fontWeight: '700',
		color: '#3c4560'
	}
});
