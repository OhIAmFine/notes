用纯JS获得查询字符串
========================

在[stackoverflow](http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript)看到的,很赞

```javascript

function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

//用法:
var prodId = getParameterByName('prodId');

```


