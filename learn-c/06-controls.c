#include <stdio.h>

void loops() {

  // for loop
  for(int i = 0; i < 5; i++) {
    printf("%i\n", i);
  }

  // while loop
  int j = 0;
  while(j < 5) {
    printf("%i\n", j);
    j++;
  }
}

void selection() {
  // if - else
  int boolean = 1;
  if(boolean){
    printf("true\n");
  } else {
    printf("false\n");
  }
}

int main() {
  loops();
  selection();
  return 0;
}