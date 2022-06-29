/*
 * @Author: your name
 * @Date: 2020-11-18 10:22:01
 * @LastEditTime: 2021-02-26 16:38:55
 * @LastEditors: wh
 * @Description: In User Settings Edit
 * @FilePath: \ec_project\src\utils\request.js
 */
import axios from 'axios';
let BASE_URL = '43.142.71.44:8090/picture'
//let BASE_URL = 'localhost:8090/picture'
const http = axios.create({
  timeout: 100000,
  baseURL: 'http://' + BASE_URL
});
// request拦截器
http.interceptors.request.use(config => {
  return config
})
/**
 * 响应拦截
 */
http.interceptors.response.use(response => {
  // 后台返回请求失败处理
  // if (response.data && response.data.code == 0){
  //   Message({
  //     message: '失败',
  //     type: 'error',
  //     duration: 3 * 1000
  //   })
  //   return
  // } else {
  //   return response
  // }
  return response.data
}, error => {
  return Promise.reject(error)
})

export default http
