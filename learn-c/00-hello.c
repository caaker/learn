// the standard input and output library provides scanf and printf for input and output
#include <stdio.h>

int main() {

  // char * string1;

  // reads up to 4 characters
  // scanf automatiaclly adds the null character - \0
  // if the user puts in more than 4 character buffer overflow occurs
  char string2[5];
  scanf("%4s", string2);
  
  printf("Hello Universe \n");

  // return 0 on success
  // c does not have keywords for error handling, but we can check function return values
  return 0;
}