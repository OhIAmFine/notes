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
  
  if (condition) {
      doSomething();
  } else {
      doSomethingElse();
  }
  ```
- **switch**:
    + Each case statement is indented one level from the switch keyword.
    + There is an extra line before and after each case statement from the second one on.
    + Falling through.
    + Omitting default when there is no default action and annotate it using a comment
  ```js
  switch(condition) {
      case "first":
          // code
          break;
          
      case "second":
          // code
          break;
          
      case "third":
          // code
          break;
          
      default:
          // code
  };
  
  switch(condition) {
      // obvious fall through
      case "first":
      case "second":
          // code
          break;
        
      case "third":
          // code
        
          /*falls through*/
      default:
          // code
}
  
  switch(condition) {
      case "first":
          // code
          break;
        
      case "second":
          // code
          break;
        
      // no default
  }
  ```
- **For-in Loop**: 
  + Using hasOwnProperty() for for-in loops unless you’re intentionally looking up the prototype chain, in which case it should be indicated with a comment.
  + Another area of focus with for-in loops is their usage with objects.

  ```js
  var prop;
  for (prop in object) {
      if (object.hasOwnProperty(prop)) {
          console.log("Property name is " + prop);
          console.log("Property value is " + object[prop]);
      }
  }
  
  
  for (prop in object) { // include prototype properties
      console.log("Property name is " + prop);
      console.log("Property value is " + object[prop]);
  }
  ```
- **Variable Declarations**: 
  + All var statements are hoisted to the top of the containing function regardless of where they actually occur in the code.Therefore, a popular style is to have all variables declared at the top of a function instead of scattered throughout
  + Combining all var statements with one initialized variable per line. The equals signs should be aligned. For variables that aren’t initialized, they should appear last.
  ```js
  function doSomethingWithItems(items) {
      var value = 10,
          result = value + 10,
          i,
          len;
      for (i=0, len=items.length; i < len; i++) {
          doSomething(items[i]);
      }
  }
  ```
- **Function Declarations**:  
  + Function declarations should never appear inside of block statements
  + The recommended style for function calls is to have no space between the function name and the opening parenthesis, which is done to differentiate it from a block statement.
  + Immediate Function Invocation
  ```js
  // Good
  var value = (function() {
      // function body
      return {
          message: "Hi"
      }
  }());
  ```
- **Primitive Wrapper Types**:There are three primitive wrapper types: String, Boolean, and Number. Each of these types exists as a constructor in the global scope and each represents the object form of its respective primitive type. The main use of primitive wrapper types is to make primitive values act like objects.

  ```js
  var name = "Nicholas";
  console.log(name.toUpperCase());
  
  // The author property has vanished after the second line. That’s because the temporaryString object
  // representing the string was destroyed after line 2 executed, and a new String object was created for line 3.
  var name = "Nicholas";
  name.author = true;
  console.log(name.author); // undefined
  ```
- **Simple Client-Side Templates**: 
  ```js
  var templateText = "<li><a href='%s'>%s<b>%s</b></a></li>";

  function sprintf(text) {
      var i=1, args=arguments;
      return text.replace(/%s/g, function() {
          return (i < args.length) ? args[i++] : "";
      });
  }
  // usage
  var result = sprintf(templateText, "/item/4", "Fourth item", "$88");

  ```
- **Loose Coupling of UI layers**
- **Avoid Gobals**
- **Event Handling**:
  + Separate Application Logic
  + Don’t Pass the Event Object Around
  + When handling events, it is best to let the event handler be the only function that touches the event object.
  ```js
  // Good
  var MyApplication = {
      handleClick: function(event) {
          // assume DOM Level 2 events support
          event.preventDefault();
          event.stopPropagation();
          // pass to application logic
          this.showPopup(event.clientX, event.clientY);
      },
    showPopup: function(x, y) {
        var popup = document.getElementById("popup");
        popup.style.left = x + "px";
        popup.style.top = y + "px";
        popup.className = "reveal";
    }
  };
  addListener(element, "click", function(event) {
      MyApplication.handleClick(event); // this is okay
  });
  ```
- **Avoid Null Comparisons*:
  + Decting Primitive values
  + Decting Reference values
  + Decting Properties
  ```js
  // If you are expecting a value to be a string, number, boolean, or undefined, the typeof operator is your best option.
  // detect a string
  if (typeof name === "string") {
      anotherName = name.substring(3);
  }
  // detect a number
  if (typeof count === "number") {
      updateCount(count);
  }
  // detect a boolean
  if (typeof found === "boolean" && found) {
      message("Found!");
  }
  // detect undefined
  if (typeof MyApp === "undefined") {
      MyApp = {
          // code
      };
  }
  
  //In JavaScript, any value that isn’t a primitive is definitely a reference.
  //Another downside to using typeof for objects is that typeof returns “object” for null values as well
  //The instanceof operator is the best way to detect values of a particular reference type
  // detect a Date
  if (value instanceof Date) {
      console.log(value.getFullYear());
  }
  // detect a RegExp
  if (value instanceof RegExp) {
      if (value.test(anotherValue)) {
          console.log("Matches");
      }
  }
  // detect an Error
  if (value instanceof Error) {
      throw value;
  }
  
  //The instanceof operator also works with custom types that you’ve defined for yourself.
  function Person(name) {
      this.name = name;
  }
  var me = new Person("Nicholas");
  console.log(me instanceof Object); // true
  console.log(me instanceof Person); // true
  
  // detect a Function
  function myFunc() {}
  // Bad
  console.log(myFunc instanceof Function); // true
  
  function myFunc() {}
  // Good
  console.log(typeof myFunc === "function"); // true
  
  //detect a array
  function isArray(value) {
      return Object.prototype.toString.call(value) === "[object Array]";
  }
  
  //detect a propertity
  var object = {
      count: 0,
      related: null
  };
  // Good
  if ("count" in object) {
      // this executes
  }
  
  // Good for all non-DOM objects
  if (object.hasOwnProperty("related")) {
      //this executes
  }
  // Good when you're not sure
  if ("hasOwnProperty" in object && object.hasOwnProperty("related")) {
      //this executes
  }
  
  ```
  
- **Browser Detection**: The value of 'navigator.userAgent' is not reliable, Looking to use a more sane approach to browser-based conditionals, developers turned to a technique called feature detection. 
  + Test for the standard solution
  + Test for browser-specific solutions
  + Provide a logical fallback if no solution is availabal 
  ```js
  // Good
  function getById (id) {
      var element = null;
      if (document.getElementById) { // DOM
          element = document.getElementById(id);
      } else if (document.all) { // IE
          element = document.all[id];
      } else if (document.layers) { // Netscape <= 4
          element = document.layers[id];
      }
      return element;
  }
  ```
  
  




  

