js作用域和变量提升
=====================

一、js作用域
-------------
  
  - js变量按照作用域的不同可以分为全局变量和局部变量
  
  - 与其它语言的不同.C,JAVA等语言拥有块级作用域(block-level scope),遇到if等语句块就会生成一个局部环境,但是js只是遇到函数
    语句块才生成一个局部环境.
  
    ```c
    //c语言
    
    #include <stdio.h>
    int main() {
   	  int x = 1;
  	  printf("%d, ", x); // 1
  	  if (1) {
	    	int x = 2;
	    	printf("%d, ", x); // 2
	    }
    	printf("%d\n", x); // 1
    }
    ```
   
    
    ```javascript
    //js代码
    
    var x = 1;
    console.log(x); // 1
    if (true) {
	    var x = 2;
    	console.log(x); // 2
    }
    console.log(x); // 2
    function test(){
      var x = 3;
      console.log(x);
    }
    test(); // 3
    console.log(x) // 2
    
    ```
    
  - 如果一定要在语句块里面使用,可以用立即执行函数创建临时作用域
    
    ```javascript
    function foo() {
	    var x = 1;
	    
	    if (x) {
		    (function () {
			    var x = 2;
			    // some other code
	   	  }());
	    }
	    
	    // x is still 1.
    }
    ```
     
  
    


二、变量提升
--------------

  - 普通变量.除了函数以外的变量声明(通过关键字var的形式),会提升到所在作用域的顶部.注意,赋值操作却没有提升.
  
    ```javascript
      
      function foo(){
        bar();
        var i = 1;
      }  
      
      //上述代码等同于:
      
      function foo(){
        var i;
        bar();
        i = 1;
      }
    ``` 
  
  
  
  
  - 函数
  
    + 函数声明提升.使用函数声明方式定义的函数"function foo(){}",整个函数都会提升到当前所在作用域的顶端
    
      ```javascript
      //这样调用不会报错
      foo();
      function foo(){
      
      }
      
      ```
      
    + 函数表达式提升.使用函数表达式定义的函数"var foo = function(){}",只有函数名提升到当前所在作用域的顶端,函数体则
      没有,所以在定义之前调用会报错.

      ```javascript
      //这样调用会报错
      foo();
      var foo = function(){
      
      }
      
      ```
 

参考链接: http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html 
