1. a very simple piece of JavaScript can make the new HTML5 tag elements styleable in older versions of IE.HTML5 shiv script may need to be placed in the head of your document, because you want it to take effect before the browser starts rendering the page.
  ```html
  <!DOCTYPE html>
  <html>
  <head>
      <style>
          blah {
              color: red;
          }
          aside {
              color: blue;
          }
      </style>
      <script>
          document.createElement('blah');
          document.createElement('aside');
      </script>
  </head>
  <body>
  <blah>Hello!</blah>
  <aside>new html5 tags</aside>

  </body>
  </html>
  
  ```
  
2. mantainable html 
  + Use lowercase for all elements and attributes as you would in XHTML.
  + Despite some elements not requiring closing tags, we recommend that all elements containing content be closed (as in <p>Text</p>).
  + Although you can leave attribute values unquoted, it’s highly likely that you’ll have attributes that require quotes (for example, when declaring multiple classes separated by spaces, or when appending a query string value to a URL). As a result, we suggest that you always use quotes for the sake of consistency.
  + Omit the trailing slash from void elements (such as meta or input).
  + Avoid providing redundant values for Boolean attributes (for instance, use <input type="checkbox" checked> rather than
<input type="checkbox" checked="checked">).
