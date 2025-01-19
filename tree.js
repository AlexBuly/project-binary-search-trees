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

    insert(value) {
      let newNode = new Node(value);

      if (this.root === null) this.root = newNode; 
      this.insertNode(this.root, newNode);  
    }

    insertNode(current, newNode) {
      if (newNode.data < current.data) {
        current.left === null ? current.setLeft(newNode) : this.insertNode(current.left, newNode);
      } else {
        current.right === null ? current.setRight(newNode) : this.insertNode(current.right, newNode);
      }
    }

    getSuccessor(curr) {
      curr = curr.right;

      while (curr !== null && curr.left !== null) {
          curr = curr.left;
      }
      return curr;
  }

    deleteItem(value, current = this.root) {
      if (current === null) {
        return current;
    }

     if (value < current.data) {
      current.left = this.deleteItem(value, current.left);
  } else if (value > current.data) {
      current.right = this.deleteItem(value, current.right);
  } else {
      if (current.left === null) {
          return current.right;
      }
      
      if (current.right === null) {
          return current.left;
      }

      let succ = this.getSuccessor(currNode);
      current.data = succ.data;
      current.right = this.deleteItem(succ.data, currNode.right);
  }

  return current;

      

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