# mini-app-practice
> 微信小程序的踩坑之旅，持续更（cai）新（keng）中...

喜欢请 star / fork, 关注请 watch.

### 0.说明：
* 项目演示图

![demo.gif](./demo-gifs/demo.gif)

* 项目导入

首先
```
git clone https://github.com/JerryYuanJ/mini-app-pratice.git
```
将项目下载到本地，接着使用微信开发者工具打开该目录即可。
目前实现的功能列表如下：

### 1.自定义组件之导航栏
* 使用方法：
拷贝components/tabbar组件至你的项目中，在页面/父组件中注册该组件即可使用：
```
<tabbar tab-items="{{tabOptions}}" actived-color="green" bind:tab-change="onTabChange">
</tabbar>
```

* 博客：[https://blog.csdn.net/qq_25324335/article/details/83629011](https://blog.csdn.net/qq_25324335/article/details/83629011)

### 2.大段文字的查看更多的效果
* 博客：[https://blog.csdn.net/qq_25324335/article/details/83687550](https://blog.csdn.net/qq_25324335/article/details/83687550)

### 3.元素随着页面的滚动吸附在顶部的实现（使用 IntersectionObserver ）
* 博客：
  * IntersectionObserver 详解：[https://blog.csdn.net/qq_25324335/article/details/83687695](https://blog.csdn.net/qq_25324335/article/details/83687695)
  * 应用实现：[https://blog.csdn.net/qq_25324335/article/details/83688923](https://blog.csdn.net/qq_25324335/article/details/83688923)

### 4.元素随着页面的滚动吸附在顶部的实现（使用页面监听函数 onPageScroll ）
* 博客：[https://blog.csdn.net/qq_25324335/article/details/83688923](https://blog.csdn.net/qq_25324335/article/details/83688923)
  
### 5.调用微信原生地图的简单应用

### 6. 自定义弹出层

### 7.自定义下拉刷新组件
 > **有bug，使用微信的动画API，动画只能执行一次，参考了微信开发者社区的解决方法，即复原动画，也没有用。后续有时间会使用原生js改写动画实现，如果你参考本组件，请不要在生产环境使用（功能不影响，但是会影响用户体验）**

### 8. 实现卡片翻转效果

这里没有使用微信小程序的动画API，而是采用了数据驱动的思想，使用 `data` 来绑定 style 的变化，从而达到这种动画效果。重点可以参考样式文件。

效果：

![flip-card-demo.gif](./demo-gifs/demo-flip-card.gif)


### 9. canvas初识之生成一张文字图片(可用于至于简单的文字表情包)

**TODO:** 实现文字换行/文字样式定制/图文混排?/...

目前效果：

![canvas-01.gif](./demo-gifs/canvas-01.gif)
