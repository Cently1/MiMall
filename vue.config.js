/*
 * @Author: your name
 * @Date: 2020-05-14 21:35:21
 * @LastEditTime: 2020-05-15 22:08:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mimall\vue.config.js
 */ 
module.exports = {
  devServer: {
    host: "localhost",
    port: 8080,
    proxy: {
      "/api": {
        target: "https://www.imooc.com",
        changeOrigin: true,
        pathRewrite: {
          "/api": ""
        }
      }
    }
  }
};