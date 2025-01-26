# project-binary-search-trees
Contains a binary search tree. First, node class was created. Each node has a data 
attribute and a left and right attribute which represent the node's left and right children. 

Next, a tree class was created. This tree clas contains a method to build a binary tree, 
print out the tree, insert a new node, delete a node, and find a node. 

The buildTree method sorts the nodes and also removes duplicate nodes. It sorts them 
using the merge sort metod and then once an array is created, a duplicates are removed 
by turning the array into a set and then converting the set back into an array.  

Nodes can also be printed in different orders. Level order prints all node at the same level 
before moving to the next. In order prints print the left subtree first, then the root, and 
then the right subtree, printing the nodes in numerical order. 

The height function returns the maximum height of the tree. 
Height is defined as the number of edges in the longest path from a given node to a leaf node.

The depth function returns the maximum depth of the tree. Depth is defined as the number of 
edges in the path from a given node to the tree’s root node.

isBalanced function that checks if the tree is balanced. The tree is balalanced if the different
 betwenn the left and right subtree is not more than 1. It does this by finding the height at each node and then checking if each is balanced.

Finally, there is a rebalance function. The rebalance rearranges nodes in order using inOrder traversal and then push the nodes into a new array. 

