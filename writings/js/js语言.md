- 字符串的扩展与修复
 
 + truncate 方法
  ```javascript
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
  ```javascript
    function camelize(target){
      if(target.indexOf('-') < 0 && target.indexOf('_') < 0){
        return target; //提前判断，提高效率
      }
      return target.replace(/[-_][^-_]/g, function(match){
        return match.charAt(1).toUpperCase();
      })
    }
  ```
