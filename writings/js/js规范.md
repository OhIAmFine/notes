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
  ----
  
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
  
  
  


