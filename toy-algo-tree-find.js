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
    let iter = this.root;
    let node = new Node(data);
    while(iter) {
      if(iter.left && (node.data < iter.data)) {
        iter = iter.left;
      }
      if(!iter.left && (node.data < iter.data)) {
        iter.left = node;
        return;
      }
      if(iter.right && (node.data >= iter.data)) {
        iter = iter.right;
      }
      if(!iter.right && (node.data >= iter.data)) {
        iter.right = node;
        return;
      }
    }
  }

  find(data) {
    let iter = this.root;
    while(iter) {
      console.log(data, iter.data)
      if(iter.data === data) {
        return iter;
      }
      if(data < iter.data) {
        iter = iter.left;
        continue;
      }
      if(data > iter.data) {
        iter = iter.right;
      }
    }
  }

  printTree() {

  }
}

const tree = new BinaryTree(10);
tree.makeTree();
console.log(tree.find(13));

/*

Time Complexity
--------------------
  - find is log n for a balanced tree

Notes | Links
--------------------

*/
