#include <stdio.h>
#include <stdbool.h>

// 7 primary types
void types() {

  /*
   the cpu typically fetches words in RAM for efficiency at 16, 32, or 64 bits
   frequently used data is stored in the on chip cache
  */

  // boolean - typically 8 bits because of addressing limitations
  bool b = true;

  // character - always 8 bits
  char c = 'c';

  // integer types - typically 16, 32, and 64 bits
  short s = 1;
  int i = 1;
  long l = 1;

  // floating point types - typically 32 bits and 64 bits
  float f = 1.000006;
  double d = 2.000000000012;

  // let's print the size of each using the %zu designator
  printf("Size of bool:   %zu bytes\n", sizeof(bool));
  printf("Size of char:   %zu bytes\n", sizeof(char));
  printf("Size of short:  %zu bytes\n", sizeof(short));
  printf("Size of int:    %zu bytes\n", sizeof(int));
  printf("Size of long:   %zu bytes\n", sizeof(long));
  printf("Size of float:  %zu bytes\n", sizeof(float));
  printf("Size of double: %zu bytes\n", sizeof(double));
}

void strings() {

  // a string can be declared using an array of characters
  // use double quotes, not single quotes
  // note that null takes up a byte
  char str1[] = "";
  char str2[] = "a";
  char str3[] = "ab";
  printf("--\n");
  printf("%zu is the size of '' \n", sizeof(str1));
  printf("%zu is the size of 'a' \n", sizeof(str2));
  printf("%zu is the size of 'ab' \n", sizeof(str3));

  // a string can be declared using a character pointer
  // a pointer is typically 8 bytes
  printf("--\n");
  char* str4 = "";
  char* str5 = "a";
  char* str6 = "ab";
  printf("%zu is the size of %s \n", sizeof(str4), str4);
  printf("%zu is the size of %s \n", sizeof(str5), str5);
  printf("%zu is the size of %s \n", sizeof(str6), str6);
}

void ints() {

  // zu is the option for size_t, and appears not to be an acronym of any sort
  int a = 3;
  printf("%zu is the size of int \n", sizeof(int));
  printf("%zu is the size of a \n", sizeof(a));
  printf("%zu is the size of &a \n", sizeof(&a));

  // bit length can be specefied explicitly
  int32_t i32 = 1;
  int64_t i64 = 1;
  printf("Size of int32 is: %zu \n", sizeof(i32));
  printf("Size of int64 is: %zu \n", sizeof(i64));
}

// constant integer - we can not change the value
void constant() {
  const int c1 = 0;
  // c1 = 0; // throws error
  
  // for ints printf requires the %i designator
  printf("%i\n", c1);
}

// constant pointer - we can not change the address
void constantPointer() {
  int x = 1;
  int y = 2;
  int* const p_int = &x;

  // we can change the value pointed to after dereferencing the pointer
  *p_int = y;

  // we can not change the address or an error is thrown
  // p_int = &y;
  printf("%i\n", *p_int);
}

// constant pointer value - we can not change the value via the pointer
void constantPointerValue() {
  int x = 3;
  int y = 4;

  // p points to x
  const int *p_int = &x;

  // p1 points to x
  int *p1_int = &x;
  
  // p now points to y
  p_int = &y;
  
  // y now equals 5
  y = 5;
  
  // we can not dereference p and change the value or an error is thrown
  // *p_int = 3;

  // but with out const we can
  *p1_int = 6;
  printf("%i\n", *p_int);
  printf("%i\n", *p1_int);
}

int main() {
  // types();
  // strings();
  // ints();

  // constant();
  // constantPointer();
  // constantPointerValue();
  return 0;
}
