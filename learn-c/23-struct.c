#include <stdio.h>


// with structs we can combine similar variables
struct Packet {
  int header;
  int body;
};

// 0b designates a binary literral
int main() {
  struct Packet p1;
  p1.header = 0b0000001;
  p1.body = 0b0000010;

  printf("p1.header: %d\n", p1.header);
  printf("p1.body: %d\n", p1.body);
}
