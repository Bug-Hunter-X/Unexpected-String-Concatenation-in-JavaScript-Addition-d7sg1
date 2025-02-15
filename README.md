# Unexpected String Concatenation in JavaScript Addition

This repository demonstrates a common but easily overlooked bug in JavaScript: unexpected string concatenation during arithmetic operations due to JavaScript's loose typing. The `bug.js` file shows the problematic code, while `bugSolution.js` offers a solution.

## Problem

JavaScript's flexibility with data types can lead to unexpected results, particularly when performing arithmetic operations. The example shows how adding a number and a string results in string concatenation instead of the expected numerical addition.

## Solution

The solution involves explicitly converting the arguments to numbers using `Number()` before performing the addition. This ensures consistent numerical behavior.

## How to run the code

1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` in a text editor or IDE.
3. Execute each file in a JavaScript environment (e.g., node.js).