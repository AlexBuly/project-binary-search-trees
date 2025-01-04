import { Tree } from "./tree.js";

const tree = new Tree();
const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const build = tree.buildTree(array);
console.log(build);
tree.prettyPrint(build);
