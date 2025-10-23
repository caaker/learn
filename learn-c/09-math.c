#include <stdio.h>

// for using abs()
#include <stdlib.h>

// for using sqrt()
#include <math.h>

void math() {
  
  int test = abs(-5);
  printf("test: %i\n", test);

  int test1 = sqrt(9);
  printf("test1: %i\n", test1);

}

int main() {
  math();  
  return 0;
}