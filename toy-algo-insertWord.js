// implementation of insertWord for a trie
class Node {
  constructor() {
    this.next = {};
    this.end = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }
  insertWord(word) {
    let iter = this.root;
    for(let i = 0; i < word.length; i++) {
      const char = word[i];
      if(!iter.next[char]) {
        iter.next[char] = new Node();
      }
      if( i === (word.length - 1)) {
        iter.next[char].end = true;
      }
      iter = iter.next[char];
    }
  }
}

const trie = new Trie();
trie.insertWord('dog');
console.log(trie);
console.log(trie.root.next.d);
console.log(trie.root.next.d.next.o);
console.log(trie.root.next.d.next.o.next.g);
