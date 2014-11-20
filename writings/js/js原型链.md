js原型链prototype
------------------

```javascript
function Person1(){

}
Person1.prototype.sayName = function(){
  console.log("jack");
};

function Person2(){

}
Person2.prototype = new Person1(); // 原型对象为一个实例
Person2.prototype.sayAge = function(){
  console.log(22);
};

var person =  new Person2();

person.sayAge();  // 以读取方式访问一个实例的属性时,先在该实例中寻找,没有的话就会搜索实例的原型
person.sayName(); // 原型链实现的继承,搜索过程沿着原型链继续向上

```
