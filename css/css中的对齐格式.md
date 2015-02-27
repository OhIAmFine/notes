CSS中的对齐格式常用的属性
==========================

一、vertical-align
-----------------------

1. 该属性设置元素的垂直对齐方式,继承性为no,默认值为baseline(父元素的基线)。
2. 常用的值:  
   top	把元素的顶端与行中最高元素的顶端对齐
   text-top	把元素的顶端与父元素字体的顶端对齐
   middle	把此元素放置在父元素的中部
   bottom	把元素的顶端与行中最低的元素的顶端对齐
   text-bottom	把元素的底端与父元素字体的底端对齐
   inherit	规定应该从父元素继承 vertical-align 属性的值  

二、direction
----------------------

1. direction是具有继承性,规定文本的方向 / 书写方向,默认值为ltr(left to right).
2. 该属性影响了left,right的计算值(left,right有效时):如果 'left' 和 'right' 都设定了值,如果元素的 'direction' 属性是 "ltr"， 那么取 'left'的值, 如果 'direction' 属性是 ‘rtl’,那么 取'right'的值. 


 #####附一个 [css属性参考链接](http://www.w3school.com.cn/cssref/index.asp)，没事可以多看看,温故而知新.
 
   
