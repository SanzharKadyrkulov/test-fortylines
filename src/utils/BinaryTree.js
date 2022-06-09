class Node {
	constructor(value) {
		this.name = value;
		this.value = value;
		this.children = [];
		// this.left = null;
		// this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}
	insert(key) {
		if (this.root === null) {
			this.root = new Node(key);
			return;
		}
		let cur = this.root;
		let par = null;
		while (!!cur) {
			par = cur;
			if (cur.value === key) {
				console.log('can not add same number');
				return;
			}
			if (cur.value > key) {
				cur = cur.children[0];
			} else if (cur.value < key) {
				cur = cur.children[1];
			}
		}
		if (par.value > key) {
			par.children.unshift(new Node(key));
		} else if (par.value < key) {
			par.children.push(new Node(key));
		}
	}

	randomInsert() {
		const random = Math.floor(
			Math.random() * (Math.random() > 0.5 ? 101 : -101)
		);
		this.insert(random);
	}

	countOddAndEven() {
		let cur = this.root;
		let odd = 0;
		let even = 0;
		function dis(root) {
			if (!root) {
				return;
			}
			dis(root.children[0]);
			if (root.value % 2 === 0) odd++;
			if (root.value % 2 !== 0) even++;
			dis(root.children[1]);
		}
		dis(cur);
		return { odd, even };
	}
}
export default BinarySearchTree;
