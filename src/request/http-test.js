import axios from "axios";
import qs from "qs"; //第三方库
// 根据环境变量区分接口的默认地址
switch (ProcessingInstruction.env.NODE_ENV) {
  case "production":
    axios.defaults.baseURL = "http://api.zhufengpeixun.cn";
    break;
  case "test":
    axios.defaults.baseURL = "http://192.168.20.12:8080";
    break;
  default:
    axios.defaults.baseURL = "http://127.0.0.1:3030";
}
//设置超时时间和跨域是否允许携带凭证
axios.defaults.timeout = 10000;
axios.defaults.withCredentials = true; //表示request携带cookie

//设置请求传递数据的格式 x-www-form-urlencoded(看服务器要求什么格式)
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.transfromRequest = data => qs.stringify(data);
//设置请求拦截器
//客户端发送请求-》 【请求拦截器】-》服务器
//TOKEN 校验（JWT）,接收服务器返回的token,存储到vuex/本地存储中，每一次向服务器发请求，都应该把token 带上
axios.interceptors.request.use((config) => {
  //携带token
  let token = localStorage.getItem('token');
  token && (config.headers.Authorization = token);
  return config;
}, error => {
  return Promise.reject(error);
})

//响应拦截器 
// 服务器返回信息-》[拦截的统一处理]-》客户端js 获取到信息
axios.interceptors.response.use(response => {
  return response.data
}, error => {
  let {
    response
  } = error;
  if (response) {
    //  服务器返回结果
    switch (response.status) {
      case 401: //当前请求需要用户验证（未登录）
        break;
      case 403: //服务器拒绝执行（一般是token 过期）
        break;
      case 404: // 找不到页面
        break;
    }
  } else {
    //服务器没有返回结果
    if (!window.navigator.online) {
      //断网处理：可以跳转到断网页面
      return;
    }
    return Promise.reject(error)
  }
})
export default axios;