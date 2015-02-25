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
