class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor(val) {
    this.first = new Node(( val || 0 ));
    this.last = this.first;
  }

  addToEnd(val) {
    const node = new Node(val);
    this.last.next = node;
    this.last = node;
  }

  reverse() {
    let previous;
    let iter = this.first;
    while(iter) {
      let next = iter.next;
      iter.next = previous;
      previous = iter;
      iter = next;
    }
    this.swap();
  }

  swap() {
    let temp = this.first;
    this.first = this.last;
    this.last = temp;
  }

  print() {
    let iter = this.first;
    while(iter !== undefined) {
      console.log(iter.val);
      iter = iter.next;
    }
  }

}

let ll = new LinkedList();
ll.addToEnd(1);
ll.addToEnd(2);
ll.addToEnd(3);
// ll.print();
ll.reverse();
ll.print();



