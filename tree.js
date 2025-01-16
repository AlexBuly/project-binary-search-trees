import { Node } from "./node.js";
import { mergeSort } from "./mergeSort.js";

export class Tree {
    constructor() {
        this.root = null;
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

      //if (this.root == null) this.root = newNode;
   
      if (current.left == null && current.right == null) return current;

      if (newNode.data < current.data) { 
        const insertLeft = this.insert(value, current = current.left);
        current.setLeft(newNode);   
        //return this.insert(value, current = current.left);
        //this.size++;  
        return insertLeft;

      } else if (newNode.data > current.data) {
          const insertRight = this.insert(value, current = current.right);
          current.setRight(newNode);
          //this.size++;
          //return this.insert(value, current = current.right)
          return insertRight;
      }
    }

    deleteItem(value, current = this.root) {
      /*
        // if leaf
        if (value.left == null && value.right == null) {
          prev.left or prev.right = null
          // if node has one child
         } else if (value.left && value.right) {
            find second largest from node 
            replace node with second largest node
          }
      */
     if (current.left == null && current.right == null) return current.data = null;


     if (value < current.data) return this.deleteItem(value, current = current.left);
     else if (value > current.data) return this.deleteItem(value, current = current.right);

     if (current.left == null && current.right != null) {
      current.data = current.right.data;
      current.right.data = null;
     } else if (current.left != null && current.right == null) {
        current.data = current.left.data;
        current.left.data = null; 
     }

    }

    find(value, current = this.root) {
      try {
        if (value === current.data) return current;

      return value < current.data ? this.find(value, current.left) 
      : this.find(value, current.right);
      } catch(error) {
        console.log(`${value} not in tree`)
      } 
    }

    levelOrder(callback, root = this.root) {
      if (!callback) {
        throw new Error("Callback required for levelOrder");
      }
      if (root === null) return;
      
      let queue = [];
      queue.push(root);
      while (queue.length != 0) {
        let current = queue[0];
        callback(current);
        if (current.left != null) queue.push(current.left);
        if (current.right != null) queue.push(current.right);
        queue.shift();

      }
    }

    inOrder(callback, root = this.root) {
      if (!callback) throw new Error("Callback required for inOrder");
      //if (this.root === null) return;
      
      if (root !== null) {
        this.inOrder(callback, root.left);
        callback(root);
        this.inOrder(callback, root.right);
      }
    }

    preOrder(callback, root = this.root) {
      if (!callback) throw new Error("Callback required for preOrder")
      if (root !== null) {
        callback(root);
        this.preOrder(callback, root.left);
        this.preOrder(callback, root.right);
      }
    }

    postOrder(callback, root = this.root) {
      if (!callback) throw new Element("Callback required for postOrder")
      if (root !== null) {
        this.preOrder(callback, root.left);
        this.preOrder(callback, root.right);
        callback(root);
      }
    }
}