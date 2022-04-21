// implementation of insertWord for a trie
class Node {
  constructor() {
    this.letters = {};
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
      if(!iter.letters[char]) {
        iter.letters[char] = new Node();
      }
      if( i === (word.length - 1)) {
        iter.letters[char].end = true;
      }
      iter = iter.letters[char];
    }
  }
}

const trie = new Trie();
trie.insertWord('dog');
console.log(trie);
console.log(trie.root.letters.d);
console.log(trie.root.letters.d.letters.o);
console.log(trie.root.letters.d.letters.o.letters.g);
