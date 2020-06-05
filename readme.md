# 打包代码分割测试

## 目的：
1. 按照路由分割界面代码
2. 第三方包小的合并放一起，大的独立分割，颗粒大小见splitChunks》minsize 属性
2. 每个界面按需加载界面代码块，按需加载第三方包。（需要按需加载的界面使用 asyncComp,不需要的使用普通 route）


## 测试方法
1. yarn 
2. yarn build
3. 双击build> index.html 观察network 加载情况


### Reference：
- https://medium.com/hackernoon/the-100-correct-way-to-split-your-chunks-with-webpack-f8a9df5b7758