javascript代码规范
===================

#####我只整理了目前对我有用的,参考链接: https://github.com/airbnb/javascript

类型
---------
  - **原始值(数据类型)**
  
    + string
    + number
    + boolean
    + null
    + undefined
    
    ```javascript
    var foo = 1,
        bar = foo,
        name = 'jack',  //使用单引号
    bar = 9;
    console.log(foo, bar, name); // => 1, 9, jack
    ```
  - **复杂类型(引用类型)**
    + object
    + array
    + function
    
    ```javascript
    var foo = [1, 9],
        bar = foo;
    bar[0] = 2;
    console.log(foo[0], bar[0]); // => 2, 2
    ```

对象
---------

  - **使用字面值创建对象**
  
  ```javascript
  //bad
  var item = new Object();
  
  //good
  var item = {};
  ```

数组
-----

  - **使用字面值创建数组**
  
  ```javascript
  //bad
  var items = new Array();
  
  //good
  var items = [];
  ```
  - **不知道数组的长度时用push**
  
  ```javascript
  var items = [];
  // bad
  items[items.length] = 'asdf';

  // good
  items.push('asdf');
  ```
    
  - **复制数组的时候使用slice**
  
  ```javascript
  var len = items.length,
      itemsCopy = [],
      i;

  // bad
  for (i = 0; i < len; i++) {
    itemsCopy[i] = items[i];
  }

  // good
  itemsCopy = items.slice();
  ```
  
  - **把类数组转换成数组时使用Array的slice**
  
  ```javascript
  function fire(){
    args = Array.prototype.slice.call(arguments);
    ...
  }
  ```
  
函数
---------
  
  - **不要在非函数块内声明一个函数**
  
  ```javascript
  //bad
  if(true){
    function test(){
    }
  }
  
  //good
  if(true){
    var test = function test(){
    }
  }
  ```
  
属性
-----
  
  - **访问变量的属性时使用中括号(这样属性的名字可以使用空格等字符)**
  
  ```javascript
  var obj1 = {"name" : "john"};
  
  //bad
  console.log(obj1.name);
  
  //good
  console.log(obj1[name]);
  ```

变量
---------

  - **总是使用var关键字,最后再声明未赋值的变量**
  
    ```javascript
    var goSportsTeam = true,
        dragonball,
        length,
        i;
    ```
    
  - **在作用域顶端声明变量**
  
    ```javascript
    function() {
      if (!arguments.length) {
        return false;
      }

      var name = getName();

      return true;
    }
    ```
    
条件表达式和相等
------------------
  - **使用===和!===代替==和!=**
  
  - **使用快捷方式**
  
    ```javascript
    
    //bad
    if(name !== ""){
      // some code
    }
    
    //good
    if(name){
      // some code
    }
    
    //bad
    if(collections.lengh > 0){
      // some code
    }
    
    //good
    if(collections){
      // some code
    }
    
    ```
    
代码块
---------

  - **多行代码块就使用大括号,单行不用**
  
    ```javascript
    
    //bad 
    if(test)
    return false;
    
    //good
    if(test) return false;
      
    //good 
    if(test){
      return false;
    }
    
    //bad
    function() { return false;}
    
    //good
    function(){
      return false;
    }
    
    ```
    
空格
--------

  + **在大括号前放一个空格**
  
    ```javascript
    //good
    function test() {
      //some code
    }
    
    
    ```
  
  + **运算符号以一个空格分开** 

    ```javascript
    //good
    var c = a + b;
    
    ```
    
  + **使用长方法链式时,使用缩进**
  
    ```javascript
    // bad
    $('#items').find('.selected').highlight().end().find('.open').updateCount();

    // good
    $('#items')
      .find('.selected')
        .highlight()
        .end()
      .find('.open')
        .updateCount();
        
    ```
  


