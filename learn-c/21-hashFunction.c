#include <stdio.h>
#define CAPACITY 5000

// simple hash function converts a string to the sum of its ascii values 
// and then takes the modulus using CAPACITY
unsigned long hashFunction(char* str) {
  unsigned long i = 0;
  for (int j = 0; str[j] != '\0'; j++) {

    // str[j] holds the ascii value
    printf("str[j] = %i, ", str[j]);

    // i holds the sum of these ascii values
    i = i + str[j];
  }

  // capacity is the length of the array
  return i % CAPACITY;
}

int main() {
  char input[] = "abcdefg";
  unsigned long hashValue = hashFunction(input);
  printf("\nHash value: %lu\n", hashValue);
  return 0;
}