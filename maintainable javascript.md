- **Intentation Level**: Nicholas C. Zakas recommend using four spaces per indentation level.
- **Statement Termination**: using semicolons
- **Line Breaking**: When a line reaches the maximum character length, it must be manually split into two lines. Line breaking is typically done after an operator, and the next line is indented two levels.There is one exception to this rule.When assigning a value to a variable, the wrapped line should appear immediately under the first part of the assignment.
  ```js

  // Good: Break after operator, following line indented two levels
  callAFunction(document, element, window, "some string value", true, 123,
          navigator);

  // There is one exception to this rule.
  var result = something + anotherThing + yetAnotherThing + somethingElse +
               anotherSomethingElse;

  ```
