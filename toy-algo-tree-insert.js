class Node {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
}

class BinaryTree {

  constructor(data) {
    this.root = new Node(data);
  }

  makeTree() {
    this.insert(15);this.insert(5);this.insert(7);this.insert(3);this.insert(20);this.insert(13);
  }

  insert(data) {
    const node = new Node(data);

    // base case
    if(!this.root) {
      this.root = node;
      return node;
    }

    // iterate
    let iter = this.root;
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

  printTree() {

  }
}

const tree = new BinaryTree(10);
tree.makeTree();


/*

Time Complexity
--------------------
  -

Notes | Links
--------------------
https://www.youtube.com/watch?v=fKgZiCXb6zs

*/
