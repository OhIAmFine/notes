- **Intentation Level**: Nicholas C. Zakas recommend using four spaces per indentation level.
- **Statement Termination**: Using semicolons.
- **Line Breaking**: When a line reaches the maximum character length, it must be manually split into two lines. Line breaking is typically done after an operator, and the next line is indented two levels.There is one exception to this rule.When assigning a value to a variable, the wrapped line should appear immediately under the first part of the assignment.
  ```js

  // Good: Break after operator, following line indented two levels
  callAFunction(document, element, window, "some string value", true, 123,
          navigator);

  // There is one exception to this rule.
  var result = something + anotherThing + yetAnotherThing + somethingElse +
               anotherSomethingElse;

  ```
- **Blank Lines**: Adding a blank line before each flow control statement.
- **Naming**: Try to make the variable names as short as possible to get the point across. Try to make the variable name indicate the data type of its value.
- **Constants**: The convention comes from C and uses all uppercase letters with underscores separating words.
- **Constructors**: Pascal case.
- **Object literals**: Object literals allow you to specify all of the properties within two curly braces.
- **Array literals**: Instead of using the Array constructor, you can use two square brackets and include the initial members of the array.
- **Single-Line Comments**: One empty line preceding comment, right indention and enough space between code and comment
- **Multiline Comments**:  The style is to have at least three lines: one for the /*, one or more lines beginning with a * that is aligned with the * on the previous line, and the last line for */.
- **Statements**: 
  ```js
  if ( condition ) {
      doSomething();
  } else {
      doSomethingElse();
  }
  ```


  
