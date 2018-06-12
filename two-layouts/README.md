## 圣杯布局和双飞翼布局
  
## 共同目标
  
实现两边固定宽度，中间自适应的三栏布局  
  
中间栏都要放在文档流最前面实现优先渲染  
  
## 涉及的知识点

> 圣杯布局：float、负margin、父元素padding、左右栏相对定位
  
> 双飞翼布局：float、负margin、中间栏内嵌div

## 方案相同的部分
  
同样是要三栏全浮动float:left  
  
同样是对left和right部分添加负外边距，让三栏并排，但会和中间栏main重合  
  
## 不同的地方
  
### 圣杯布局
  
1.在三栏的共同的父元素上添加padding，让出left和right的位置  
  
2.对left和right设置相对定位position:relative  
  
3.left和right分别加上left和right属性，将左右两栏放回到对应位置  
  
### 双飞翼布局

1.直接在中间栏中添加一个div标签  

2.在div标签中写中间栏的内容  

3.div标签设置margin-left和margin-right让出left和right的位置 

## 总结

实现三栏布局，圣杯布局利用的是padding+相对定位，而双飞翼布局利用的是对中间栏增加一个子div并设置margin