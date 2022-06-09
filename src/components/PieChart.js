import React from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5percent from '@amcharts/amcharts5/percent';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import { useLayoutEffect } from 'react';

const PieChart = ({ data }) => {
	useLayoutEffect(() => {
		let root = am5.Root.new('pie_div');

		root.setThemes([am5themes_Animated.new(root)]);

		let chart = root.container.children.push(
			am5percent.PieChart.new(root, {
				layout: root.verticalLayout,
			})
		);

		let series = chart.series.push(
			am5percent.PieSeries.new(root, {
				valueField: 'value',
				categoryField: 'category',
			})
		);

		series.data.setAll(data);

		series.appear(1000, 100);

		return () => {
			root.dispose();
		};
	}, [data]);
	console.log('render');
	return <div id='pie_div' style={{ width: '100%', height: '500px' }}></div>;
};

export default PieChart;
