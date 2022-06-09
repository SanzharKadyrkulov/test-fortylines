import React from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5hierarchy from '@amcharts/amcharts5/hierarchy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import { useLayoutEffect } from 'react';

const BinaryTree = ({ rootValue, tree, setResult }) => {
	tree.insert(rootValue);
	// const [rootState, setRootState] = React.useState(tree.root);
	useLayoutEffect(() => {
		let root = am5.Root.new('tree_div');

		root.setThemes([am5themes_Animated.new(root)]);

		let container = root.container.children.push(
			am5.Container.new(root, {
				width: am5.percent(100),
				height: am5.percent(100),
				layout: root.verticalLayout,
			})
		);

		let series = container.children.push(
			am5hierarchy.Tree.new(root, {
				singleBranchOnly: false,
				downDepth: 1,
				initialDepth: 10,
				valueField: 'value',
				categoryField: 'name',
				childDataField: 'children',
			})
		);

		series.data.setAll([tree.root]);
		series.set('selectedDataItem', series.dataItems[0]);

		series.appear(1000, 100);

		const keyDownHandler = (e) => {
			if (e.code === 'Space') {
				tree.randomInsert();
				// tree.insert(-93);
				// setRootState(tree.root);
				series.data.setAll([tree.root]);
				series.set('selectedDataItem', series.dataItems[1]);
				setResult(tree.countOddAndEven());
				series.appear(1000, 100);
			}
		};
		window.addEventListener('keydown', keyDownHandler);
		return () => {
			root.dispose();
			window.removeEventListener('keydown', keyDownHandler);
		};
	}, []);
	return <div id='tree_div' style={{ width: '100%', height: '500px' }}></div>;
};

export default BinaryTree;
