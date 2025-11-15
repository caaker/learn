/*

IMPORTING
 - import the files you need with the preprocessor directive include followed by the library name

#include <stdio.h>
#include "math_utils.h"

*/

/*

EXPORTING
 - export your own files by creating a header file with and include guard that holds the function signatures
 - create .c file that holds the actual implementation
 - a header file is not required but is good practice so ensure the .c file is only compiled once
 - it also separates interface from implementaton
 - the include guard is also not required but good practice to make sure the file is not included twice


// math_utils.h
#ifndef MATH_UTILS_H
#define MATH_UTILS_H
int add(int a, int b);
#endif


// math_utils.c
#include <stdio.h>
int add(int a, int b) {
    return a + b;
}

*/