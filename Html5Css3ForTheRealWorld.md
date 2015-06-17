1. a very simple piece of JavaScript can make the new HTML5 tag elements styleable in older versions of IE.
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
