/*
 * @Author: your name
 * @Date: 2020-05-14 21:35:21
 * @LastEditTime: 2020-05-20 22:30:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mimall\vue.config.js
 */ 
module.exports = {
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://mall-pre.springboot.cn',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  }
};