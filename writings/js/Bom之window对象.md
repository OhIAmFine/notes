Bom之window对象
================

一、Bom对象的核心:window
---------------------------

  - window是浏览器的一个实例.在浏览器中,window有双重角色,既是js访问浏览器的接口,也是ECMAScript规定的global对象
    

  - 全局作用域的变量和函数都是window的属性和方法,但是和使用var关键字定义的变量有一点不同.window属性和方法可以使
用delete删除,而使用var关键字定义的变量将会有一个名为Configurable的属性且设置为了false,这样就不可以通过delete删除
    
      ```javascript
    
      window.a = 'jack';
    
      var b = 'john';
    
      delete window.a; // ie9以下报错,其他浏览器返回true  
      delete window.b; // ie9以下报错,其他浏览器返回false
      
      ```  
      
    
    
二、窗口关系及框架
-------------------
  

   



三、属性
