class Node {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
}

class BinaryTree {
  constructor(data) {
    this.root = new Node(data || 0);
  }

  makeTree() {
    this.insert(3);this.insert(2);this.insert(4);this.insert(10);this.insert(7);this.insert(15)
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
      console.log(node.data);
      recurse(node.left);

      // in order
      recurse(node.right);

      // post order

    }
    recurse(this.root);
  }

  // this iterative version is always pre-order
  dfi() {
    const stack = [];
    let iter = this.root;
    while(iter) {
      // pre-order
      if(iter.right) {
        stack.push(iter.right);
      }
      if(iter.left) {
        stack.push(iter.left);
      }
      // post-order
      iter = stack.pop();
    }
  }
}

const tree = new BinaryTree(5);
tree.makeTree();
tree.df();

/*

Time Complexity
--------------------
  -

Notes | Links
--------------------
https://www.cs.usfca.edu/~galles/visualization/DFS.html
https://www.youtube.com/watch?v=fKgZiCXb6zs

*/


