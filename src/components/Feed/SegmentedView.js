import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';
import SegmentedControlTab from "react-native-segmented-control-tab";

import TodayView from './TodayView';
import WeeklyView from './WeeklyView';

class SegmentedView extends Component {
	constructor() {
		super();
		this.state = {
			selectedIndex: 0
		};
	}

	handleIndexChange = index => {
		this.setState({
			...this.state,
			selectedIndex: index
		});
	};

	render() {
		return (
			<View>
				<SegmentedControlTab
					tabsContainerStyle={styles.segmented}
					values={["Today", "Weekly"]}
					selectedIndex={this.state.selectedIndex}
					onTabPress={this.handleIndexChange}
				/>
				<View>
					{!this.state.selectedIndex ? (
						<TodayView />
					) : (
						<WeeklyView />
					)}
				</View>
			</View>
		);
	}
}

export default SegmentedView;

const styles = StyleSheet.create({
	segmented: {
		marginLeft: 30,
		marginRight: 30,
		marginTop: 10,
		marginBottom: 10
	}
})