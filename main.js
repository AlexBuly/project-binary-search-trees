import { Tree } from "./tree.js";

const tree = new Tree();
//const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const array = Array.from({ length: 15 }, () => Math.floor(Math.random() * 100));
const uniqueArray = [...new Set(array)];
tree.buildTree(uniqueArray);
tree.prettyPrint();
//tree.find(8);

//tree.deleteItem(67);

// After deleting 
//tree.prettyPrint();

//tree.insert(13);

// After inserting
//tree.prettyPrint();


console.log("Tree is balanced: ", tree.isBalanced());

// Test height and depth
const rootNode = tree.root;
const leftmostNode = rootNode.left.left;
const rightmostNode = rootNode.right.right;

console.log("Height of the root node:", tree.height(rootNode));
console.log("Height of the leftmost node:", tree.height(leftmostNode));
console.log("Depth of the root node:", tree.depth(rootNode));
console.log("Depth of the leftmost node:", tree.depth(leftmostNode));
console.log("Depth of the rightmost node:", tree.depth(rightmostNode));

console.log("Level-order:");
tree.levelOrder(node => console.log(node.data));

console.log("Pre-order:");
tree.preOrder(node => console.log(node.data));

console.log("In-order:");
tree.inOrder(node => console.log(node.data));

console.log("Post-order:");
tree.postOrder(node => console.log(node.data));

// Unbalance the tree
[110, 120, 130, 140, 150].forEach(value => tree.insert(value));
tree.prettyPrint();
console.log("Tree is balanced after unbalancing:", tree.isBalanced());

tree.rebalance();
tree.prettyPrint();
console.log("Tree is balanced after rebalancing:", tree.isBalanced());