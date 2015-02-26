- 字符串的扩展与修复
 
 + truncate 方法
  ```js
    function truncate(target, length, truncation){
      length = length || 30;
      truncation = truncation === void(0) ? '...' :truncation; //  void 0  -> always return undefined
      return target.length > length ? target.slice(0, length - truncation.length) + truncation : String(target);
    }
    truncate("Standing in the mountain high", 10);
    truncate("Standing in the mountain high", 8, "-");
 ```
 
 http://stackoverflow.com/questions/7452341/what-does-void-0-mean

 + camelize 方法 将"_或者-"风格转换为驼峰风格
  ```js
    function camelize(target){
      if(target.indexOf('-') < 0 && target.indexOf('_') < 0){
        return target; //提前判断，提高效率
      }
      return target.replace(/[-_][^-_]/g, function(match){
        return match.charAt(1).toUpperCase();
      })
    }
  ```
  

 + pad方法 将字符串的某一端添加字符串
  ```js
    function pad(target, n){
      return (0..toFixed(n) + target).slice(-n);
    }
  ```


 + trim方法 
  ```js
  //版本
    function trim(str){
      return str.replace(/\s\s*/, '').replace(/\s\s*$/, ''); //匹配作为字符串开头的空白符,再匹配作为结束的空白符
    }
    
  //版本二
    function trim(str){
      var whitespace = ' \n\r\t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000';  //把可能空白符全列出来
      //拿掉前面的空白
      for(var i = 0,len = str.length; i < len; i++){
        if(whitespace.indexOf(str.charAt(i)) === -1){
          str = str.substring(i);
          break;
        }
      }  
      for(i = str.length - 1; i >= 0; i--){
        if(whitespace.indexOf(str.charAt(i)) === -1){
          str = str.substring(0, i + 1);
          break;
        }
      }
      return whitespace.indexOf(str.charAt(0)) === -1 ? str : ''; // 最后包含str为全空的情况
    }
    
  ```
  
- 数组的扩展与修复
 
 + 首先对ie6,7,8的修复(直接在Array原型上修复)
  ```js
    Array.prototype.indexOf = function(item, index){
      var n = this.length, i = ~~index; // 按位取反运算符
      if(i < 0){
        i += n;
      }
      for(; i < n; i++){
        if(this[i] === item) return i;
      }
      return -1;
    }
    
  ```
  
  ```js
  //https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
    if ('function' !== typeof Array.prototype.reduce) {
  Array.prototype.reduce = function(callback, opt_initialValue){
    'use strict';
    if (null === this || 'undefined' === typeof this) {
      throw new TypeError(
          'Array.prototype.reduce called on null or undefined');
    }
    if ('function' !== typeof callback) {
      throw new TypeError(callback + ' is not a function');
    }
    var index, value,
        length = this.length >>> 0,
        isValueSet = false;
    if (1 < arguments.length) {
      value = opt_initialValue;
      isValueSet = true;
    }
    for (index = 0; length > index; ++index) {
 //[].hasOwnProperty(0) ->会返回false,因为数组也是继承了object,会检测该数组的index位置上是否设有值(real value)
 //http://adripofjavascript.com/blog/drips/the-uses-of-in-vs-hasownproperty.html
      if (this.hasOwnProperty(index)) {
        if (isValueSet) {
          value = callback(value, this[index], index, this);
        }
        else {
          value = this[index];
          isValueSet = true;
        }
      }
    }
    if (!isValueSet) {
      throw new TypeError('Reduce of empty array with no initial value');
    }
    return value;
  };
}
    
  ``` 
  
 + removeAt方法:移除数组中指定位置的元素，返回布尔表示成功与否
 
  ```js
    function removeAt(target, index){
      return !!target.splice(index, 1).length;
    }
  
  ```
  
 + random方法:随机取出数组中的一个元素
 
  ```js
    function random(target){
      return target[Math.floor(Math.random()) * target.length];
    }
  
  ```  

 + unique方法:去重，返回一个没有重复元素的新数组  
 
 使用标签(label)命名循环体用以控制流  
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label
  ```js
    function unique(target){
      var result = [];
      loop: for(var i = 0, n = target.length; i < n; i++){
        for(var x = i + 1; x < n; x++){
          if(target[x] === target[i])
            continue loop;
        }
          result.push(target[i]);
      }
      return result;
    }
  
  ```  

 + intersect方法:对两个数组取交集  
 
  ```js
    function(target, array) {
      return target.filter(function(n) {
        return ~array.indexOf(n);  //不存在的值则为-1，取~后为0；存在的都得到非负整数，取~后得到负整数就转换为true
      });
    },
  
  ```  
