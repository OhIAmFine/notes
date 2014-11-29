js闭包
 
  ```javascript
  function foo(x) {
    var tmp = 3;

    return function (y) {
      alert(x + y + tmp);
      x.memb = x.memb ? x.memb + 1 : 1;
      alert(x.memb);
    }
  }

  var age = new Number(2);
  var bar = foo(age); // bar is now a closure referencing age.
  bar(10);
  
  ```
  
  第一次调用bar()会创建 **x.memb** = 1,以后每一次调用bar()都会增加x.memb的值

参考链接:[How do JavaScript closures work?](http://stackoverflow.com/questions/111102/how-do-javascript-closures-work)
