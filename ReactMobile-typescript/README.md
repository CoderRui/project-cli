# 项目通用型脚手架

## 技术栈 
typescript  
webpack@4.x  
react@16.13.1  
less-loader@6.x  
antd@4.x  
...

## 记录配置问题

1. 改变项目`alias: { @:paths.appSrc ,...}` 不生效的问题 样式文件引用@不受影响
> 要改变tsconfig添加 `baseUrl、paths` 详情请看 `tsconfig.json`  
> 删除`webpack.config.js`中`extensions filter 函数`

2.当刚初始化时引入 `module.less` 无法引用时 是因为 `typescript typings` 没有声明得原因 
> ```javascript
> declare module '*.module.less' { // sass || scss 都可以
>   const classes: { readonly [key: string]: string };
>   export default classes;
>}
>```
