#include <iostream>
using namespace std;

// unlike C we must express the argument type
int boringFunction(int a) {
  return a;
}

// unlike C we can have default values
void defaultValue(int b = 1) {
  cout << "b: " << b << endl;
}

int main() {
  int a = boringFunction(1);
  cout << "a: " << a << endl;
  defaultValue();
  return 0;
}