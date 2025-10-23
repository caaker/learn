// printf
#include <stdio.h>

// malloc
#include <stdlib.h>

// strcpy
#include <string.h>

int main() {

  int len = 5;

  // an array of characters
  char word1[] = "one ";

  // a pointer to an array of characters
  char* word2 = "two ";

  // a dnyamically allocated string of length len; has greater flexibility than a string literal
  char* word3 = malloc(sizeof(char) * (len + 1));
  strcpy(word3, "three");

  printf("%s\n", word1);
  printf("%s\n", word2);
  printf("%s\n", word3);

  // success
  return 0;
}