import { Tree } from "./tree.js";

const tree = new Tree();
const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
//const array = [20, 30, 32, 34, 36, 40, 50, 60, 65, 70, 75, 80, 85]
const uniqueArray = [...new Set(array)];
const build = tree.buildTree(uniqueArray);
//console.log(tree.insert(14));
//console.log(build);
tree.deleteItem(5);
console.log(tree.find(5));
tree.prettyPrint();
console.log(tree.getSize());
//console.log(build);