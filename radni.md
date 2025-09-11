1. What is the difference between var, let, and const?
   <!-- ans 👇🏼 -->
   var: Function-scoped, can be reassigned, can be redeclared in the same scope.

let: Block-scoped can be reassigned cannot be redeclared in the same scope.

const: Block-scoped cannot be reassigned after initialization, cannot be redeclared in the same scope

2. Difference between map(), forEach(), and filter():
<!-- ans 👇🏼 -->

map(): Creates a new array by transforming each element.

forEach(): Executes a function for each element, but returns nothing.

filter(): Creates a new array with elements that pass a specific condition.

3. What are arrow functions in ES6?
<!-- ans 👇🏼 -->

Arrow functions are a shorthand way of writing functons in JavaScript. They are more concise, and they don't have their own this context but inherit this from the surrounding code. Arrow function are typically used for shorter and cleaner code in higher-order functions likes map(), filter(), or forEach().

4. How does destructuring assignment work in ES6?
<!-- ans 👇🏼 -->

Destructuring assignment in ES6 allows you to unpack values from arrays or properties from objects into distinct variables. This provides a concise and readable way to extract multiple values from data structures like arrays and objects.

5. Explain template literals in ES6. How are they different from string concatenation?

<!-- ans 👇🏼 -->

Template literals, introduced in ES6, are a new way to work with strings. They allow for easier string interpolation, multiline strings, and embedded expressions, all within a single string. Template literals are enclosed by backticks (`) instead of the usual single or double quotes.
can write strings across multiple lines without using escape characters (\n).
can perform operations or call functions inside ${}.
