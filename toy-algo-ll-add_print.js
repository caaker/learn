class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(val = 0) {
    let node = new Node(val);
    this.first = node;
    this.last = node;
  }
  add(val = 0) {
    const node = new Node(val);
    this.last.next = node;
    this.last = node;
  }
  print() {
    let iter = this.first;
    while(iter) {
      console.log(iter.val);
      iter = iter.next;
    }
  }
}

let ll = new LinkedList();
ll.add(1);
ll.add(2);
ll.add(3);
ll.print();
