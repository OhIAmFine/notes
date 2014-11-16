css定位体系总结
=======================

常规流(Normal Flow),元素不设置position,float,display的值且元素所有的祖先元素不设置这三值的时候,元素处于常规流.
(若有祖先元素设置了这三个值中的某一个,那就形成了另外的一个常规流).

一、position
---------------

1. 默认值为static.
2. 设置为relative时,元素还在常规流中,但是可以使用top,left,right,bottom相对于其在常规流的位置进行定位,且不会影响
   到兄弟元素.
3. 设置为absolute时,元素脱离常规流,可以使用top,left,right,bottom相对于最近的设置了position属性(不是static)的祖先
   元素进行定位.
4. 设置为fixed时,元素脱离常规流,可以使用top,left,right,bottom相对于屏幕窗口定位.

二、float
-------------------

1. 首先要看元素是否设置了position值,如果元素的position值为absolute或者fixed,float计算后则为"none".
2. 如果元素的position值为relative,float的值不为none,那么元素可以根据漂浮后的位置使用left,right,top,bottom进行定位.
3. float值有效时,就使元素脱离的常规流,且对display的值有影响.

三、display
------------------

1. 上述position,float的情况都是基于display不为none时.
2. display不为none时,其计算后的值会受到position,float的影响,不会单纯使用手动设置的值


#####附上参考链接,里面也包含了display的计算规则,讲的非常好.  http://w3help.org/zh-cn/kb/009/


