import { Node } from "./node.js";
import { mergeSort } from "./mergeSort.js";

export class Tree {
    constructor() {
        this.root = null;
        this.size = 0;
    }

    buildTree(array, start = 0, end = array.length - 1) {
       array = mergeSort(array);
       if (start > end) return null;
       let mid = Math.floor((start + end) / 2);
        let node = new Node(array[mid]);
        node.setLeft(this.buildTree(array, start, mid - 1));
        node.setRight(this.buildTree(array, mid + 1, end));
        this.size++;
        this.root = node;
        return this.root;
    }

    prettyPrint(node = this.root, prefix = "", isLeft = true) {

        if (node === null) {
            return;
          }
          if (node.right !== null) {
            // if current is a left child, add | to prefix. If right, add " " 
            this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
          }
        
          console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
      
          if (node.left !== null) {
            this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
          }
    }

    insert(value, current = this.root) {

      let newNode = new Node(value);

      if (this.root == null) this.root = newNode;
   
      if (current.left == null && current.right == null) return current;

      if (newNode.data < current.data) { 
        const insert = this.insert(value, current = current.left);
        current.setLeft(newNode);   
   
        this.size++;  
        return insert;

      } else if (newNode.data > current.data) {
          const insert = this.insert(value, current = current.right);
          current.setRight(newNode);
          this.size++;
          return insert;
      }
    }

    deleteItem(value) {
      /*
        // if leaf
        if (value.left == null && value.right == null) {
          prev.left or prev.right = null
          // if node has one child
        } else if (value.left || value.right) {
            prev.next = current.next
         } else if (value.left && value.right) {
            find second largest from node 
            replace node with second largest node
          }
      */
    }

    getSize() {
      return this.size;
    }
     
}