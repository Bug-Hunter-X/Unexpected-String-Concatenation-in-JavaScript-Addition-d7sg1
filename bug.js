function foo(a,b){return a+b;}console.log(foo(2,3)); // Output: 5console.log(foo(2,"3")); //Output: 23

This seemingly simple addition function exhibits unexpected behavior when one of the arguments is a string.  JavaScript's loose typing allows it to perform string concatenation instead of numerical addition, leading to incorrect results.