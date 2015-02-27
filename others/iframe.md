调用iframe
-----------

top window:

```javascript
  
  //top window get the iframe
  var $$ = document.getElementById("iframeID").contentWindow;
  
  $$.document.getElementById("element");
  $$.cc
  
```

iframe:

```javascript
  
  var cc = "iframeCC" 

```


