js函数
======

一、作为值的函数
-----------------

 1. 函数名本身就是变量,是一个包含指针的变量,所以函数可以作为值来使用,可以作为参数传给一个函数,也可以作为值返回给一个函数


二、函数的内部属性
-------------------

 1. arguments,它是一个类数组对象,包含着传进来的参数值.该对象有一个callee属性,该属性是一个指针,指向拥有该argument对象的函数

  ```javascript
  // 阶乘函数
  function factorial(num){
    if(num <= 1)
    return 1;
   
    return num * arguments.callee(num-1); // 不使用factorial是为了消除耦合性
  }
  ```

 2. this,它是函数据以执行的环境对象 

 3. caller,它保存了调用当前函数的函数的引用

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
 1. length,函数希望接收的参数个数
 
 2. prototype
 
四、函数的方法
---------------

 call()和apply(),这两个方法的用途都是在特定的作用域调用函数,其实就是设置函数体内的this对象值.
 
 

  
