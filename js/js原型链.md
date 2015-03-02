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

```js
function A(){
  console.log(this.__proto__.aa); //1
  this.aa = 2;
}
A.prototype = {
 aa : 1
}
var a = new A;
console.log(a.aa); //2
a.__proto__.aa = 3;
delete a.aa; // 删掉特权属性，暴露原型上的同名属性
console.log(a.aa); // 3
var b = new A;
console.log(b.aa);
delete b.aa;
console.log(b.aa);

```
