import { useEffect, useState } from 'react';
import './App.css';
import BinaryTree from './components/BinaryTree';
import PieChart from './components/PieChart';
import BinarySearchTree from './utils/BinaryTree';

function App() {
	const tree = new BinarySearchTree();
	const [result, setResult] = useState({ odd: 0, even: 0 });
	useEffect(() => {
		console.log(result);
	}, [result]);
	const data = [
		{ value: result.odd, category: 'odd' },
		{ value: result.even, category: 'even' },
	];
	return (
		<div>
			<BinaryTree setResult={setResult} rootValue={0} tree={tree} />

			<PieChart data={data} />
		</div>
	);
}

export default App;
