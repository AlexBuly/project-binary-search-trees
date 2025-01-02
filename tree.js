import { Node } from "./node.js";
import { mergeSort } from "./mergeSort.js";

export class Tree {
    constructor() {
        this.root = null;
    }

    buildTree(array) {
        array = mergeSort(array);
        if (array.length <= 1) return array;
        let mid = Math.floor(array.length / 2);
        let node = new Node(array[mid]);
        node.setLeft(this.buildTree(array.slice(0, mid)));
        node.setRight(this.buildTree(array.slice(mid+1)));
        this.root = node;
        return this.root;
    }

    prettyPrint(node, prefix = "", isLeft = true) {
        node = new Node(this.root);

        if (node === null) {
            return;
          }
          if (node.right !== null) {
            prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
          }
          console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
          if (node.left !== null) {
            prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
          }
    }
}