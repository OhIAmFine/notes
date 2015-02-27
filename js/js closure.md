js闭包
 
 + 闭包是指函数有自由独立的变量。换句话说，定义在闭包中的函数可以“记忆”它创建时候的环境。
   这链接讲的太经典了: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Closures
   
 
 + 闭包的实践意义。闭包允许将函数与其所操作的某些数据（环境）关连起来。
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
