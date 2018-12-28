
// const path = require("path")
// // const {VueLoaderPlugin}  = require("vue-loader")
// //webpack.config.js 是一个标准commonjs模块
//
//
//
// //webpack是nodejs中的一个模块 //4x
// module.exports = {
//
//   //当前的webpack编译是在开发环境中执行 不压缩
//   mode:"development" ,//dev production
//
//   //设置打包入口
//   entry:{
//     app:path.resolve(__dirname,"src/main.js")
//   },
//
//   //设置打包后的文件输出的位置
//   output :{
//     filename:"[name].bundle.js" ,//打包输出的文件名
//     path:path.resolve(__dirname,"src/dist/")
//   },
//
//   //设置打包中的一些配置
//   resolve:{
//     alias: {
//       //设置import导入的模块的位置
//       "vue":"vue/dist/vue.esm.js"
//     },
//     //设置webpack 所识别的扩展名
//     extensions:[".js",".css",".vue",".jpg",".png"]
//   },
//
//   //设置当前的项目中的文件转换规则
//   module:{
//
//     //设置规则
//     rules:[
//       {test:/\.css$/,loader:"style-loader!css-loader",exclude: /node_modules/},
//       {test:/\.vue$/,loader:"vue-loader",exclude:/node_modules/},
//       {test: /\.html$/, loader: 'html-withimg-loader'}
//     ]
//   },
//
//   // plugins:[
//   //   //vue-loader
//   //   new VueLoaderPlugin()
//   // ]
//
// }
