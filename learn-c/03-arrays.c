#include <stdio.h>
#include <stdlib.h>

void printArray(int arr[], int length) {
  for(int i = 0; i < length; i++) {
    printf("%i\n", arr[i]);
  }
}

// this function signature must match the signature required by quick sort below
// (int*) casts the generic pointer to an int pointer, and * dereferences the pointer to an integer value
// ... so that when we finally subtract, we are subtracting actual values
int compare(const void* a, const void* b) {
    return (*(int*)a - *(int*)b);
}

// function to demonstrate the use of the built in quick sort, which requiers compare()
void runqsort() {
  int numbers[] = {1, 2, 3, 2, 1};
  int length = sizeof(numbers) / sizeof(numbers[0]);
  qsort(numbers, length, sizeof(int), compare);
  for (int i = 0; i < length; i++) {
      printf("\n numbers: %d ", numbers[i]);
  }
}

void heapArray() {
  void* array_heap = malloc(sizeof(int) * 5);  
}

int main() {

  // define a 3 element array
  int arr[3] = {0, 1, 2};
  
  // this is a common programming idiom for C, as the language does not maintain the length for you
  int length = sizeof(arr) / sizeof(arr[0]);
  
  // print the length
  printf("Length is: %i \n", length);
  
  // print the entire array
  printArray(arr, length);

  // qsort
  runqsort();

  return 0;

}