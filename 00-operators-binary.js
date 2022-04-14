/*
**  OPERATORS - BINARY LOGIC ( HEXADECIMAL EXPRESSION )
*/
const h1 = 0xf & 0x2;
const h2 = 0xf | 0x2;
const h3 = ~0x1;
// console.log(h1, h2, h3);

/*
**  OPERATORS - BINARY LOGIC ( BINARY EXPRESSION )
*/
const b1 = 0b1111 & 0b0010;
const b2 = 0b1111 | 0b0010;
const b3 = 0b1111 ^ 0b0000;
// console.log(b1, b2, b3);

/*
**  OPERATORS - BOOLEAN LOGIC
*/
const bool1 = true && false;
const bool2 = true || false;
const bool3 = !true;
// console.log(bool1, bool2, bool3);

/*
**  OPERATORS - TRUTHY LOGIC
*/
const res1 = true && 0;  // returns 0
const res2 = 0 || undefined; // returns undefined
// console.log(res1, res2);
