#include <stdbool.h>
#include <stdio.h>

#define ALPHABET_SIZE 26

struct Node {

  // declare an array of pointers to Nodes
  struct Node* children[ALPHABET_SIZE];
  bool isEndOfWord;
};

int main() {

  struct Node *node1 = NULL;

  // allocate the appropriate amount of memory and cast a generic pointer to a Node pointer
  node1 = (struct Node *)malloc(sizeof(struct Node));
}

