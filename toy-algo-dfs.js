class Node {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
}

// learn default arg
class BinaryTree {
  constructor(data) {
    this.root = new Node(data || 0);
  }

  makeTree() {
    this.insert(15);this.insert(5);this.insert(7);this.insert(3);this.insert(20);this.insert(13);
  }

  insert(data) {
    let iter = this.root;
    let node = new Node(data);
    while(iter) {
      if(iter.left && (node.data < iter.data)) {
        iter = iter.left;
      }
      if(!iter.left && (node.data < iter.data)) {
        iter.left = node;
        return node;
      }
      if(iter.right && (node.data >= iter.data)) {
        iter = iter.right;
      }
      if(!iter.right && (node.data >= iter.data)) {
        iter.right = node;
        return node;
      }
    }
  }

  df() {
    function recurse(node) {
      if(node === null) {
        return node;
      }
      // pre order
      recurse(node.left);
      // in order
      recurse(node.right);
      // post order

    }
    recurse(this.root);
  }

  // what order is this?
  dfIterative() {
    const stack = [];
    stack.push(this.root);
    let iter = stack.pop();
    while(iter) {
      if(iter.right) {
        stack.push(iter.right);
      }
      if(iter.left) {
        stack.push(iter.left);
      }
      iter = stack.pop();
    }
  }
}

const tree = new BinaryTree(10);
tree.makeTree();
tree.df();

/*

Time Complexity
--------------------
  -

Notes | Links
--------------------
https://www.cs.usfca.edu/~galles/visualization/DFS.html

*/


