js函数
======

一、作为值的函数
-----------------

 - 函数名本身就是变量,是一个包含指针的变量,所以函数可以作为值来使用,可以作为参数传给一个函数,也可以作为值返回给一个函数


二、函数的内部属性
-------------------

 - arguments,它是一个类数组对象,包含着传进来的参数值.该对象有一个callee属性,该属性是一个指针,指向拥有该arguments对象的函数

  ```javascript
  // 阶乘函数
  
  //非严格模式下的写法
  function factorial1(num){
    if(num <= 1)
    return 1;
   
    return num * arguments.callee(num-1); // 不使用factorial是为了消除耦合性
  }
  
  //严格模式下可以使用以下写法
  var factorial2 = (function f(num){
      if(num <= 1)
      return 1;
   
      return num * f(num-1);    
  }) 
  
  ```

 - this,它是函数据以执行的环境对象 

 - caller,它保存了调用当前函数的函数的引用

  ```javascript
  function outer(){
    inner();
  }
 
  function inner(){
    alert(inner.caller)
  }

  outer() // => alert出outer的代码块
  ```

三、函数的属性
---------------------
 - length,函数希望接收的参数个数
 
 - prototype
 
四、函数的方法
---------------

 - call()和apply(),这两个方法的用途都是在特定的作用域调用函数,其实就是设置函数体内的this对象值.
 
  ```javascript
  var color = 'red',
      obj2 = {"color":"blue"};
  
  function showColor(){
    console.log(this.color);
  }

  showColor();  // => red (注意:严格模式下this不会自动指向window而是undefined,会报错)
  
  showColor.call(obj2); // => blue
  ```
 
 - apply()接收其中运行的函数作用域和参数数组,而call()方法必须逐个列举每个参数 

五、函数定义的两种方式
-------------------------
  
 - 函数声明
 
 ```javascript
 function foo(){
   //some code
 }
 ```

 - 函数表达式
  
 ```javascript
 //以下两种方式都属于使用函数表达式定义函数
 
 var foo1 = function(){
   //some code
 }
 console.log(foo1.name) // => 控制台打印空字符串
 
 //两者的区别是foo1的name属性是空字符串,foo2的name属性为"foo2"
 
 var foo2 = function foo2(){
   //some code
 }
 console.log(foo2.name) // => foo2
 ```
 
注意:两种方式在变量提升时会有差异


六、apply方法
--------------

 apply:方法能劫持另外一个对象的方法，继承另外一个对象的属性.  
 Function.apply(obj,args)方法能接收两个参数   
   obj：这个对象将代替Function类里this对象   
   args：这个是数组，它将作为参数传给Function（args-->arguments）

  
七、bind方法
-------------  
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

  bind()方法会创建一个新函数,称为绑定函数.当调用这个绑定函数时,绑定函数会以创建它时传入 bind()方法的第一个参数作为   this,传入 bind() 方法的第二个以及以后的参数加上绑定函数运行时本身的参数按照顺序作为原函数的参数来调用原函数.
