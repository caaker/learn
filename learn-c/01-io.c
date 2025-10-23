// the standard input and output library provides scanf and printf for input and output
#include <stdio.h>

int main() {

  // hello universe
  printf("Hello Universe. Please enter up to 4 characters. \n");

  // reads up to 4 characters
  // scanf automatiaclly adds the null character - \0
  // if the user puts in more than 4 characters, a buffer overflow occurs, but no error is thrown
  char string2[5];
  scanf("%4s", string2);

  // mirror back the user input
  printf("You entered: %s\n", string2);
  
  // return 0 on success
  // c does not have keywords for error handling, but we can check function return values
  return 0;
}
