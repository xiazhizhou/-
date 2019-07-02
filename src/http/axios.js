import axios from "axios";
import qs from "qs";
import router from "../router/index";
import { Toast } from "vant";

// const baseURL = 'http://47.75.51.134:8080/syb-backend/'
const baseURL = "http://192.168.5.147:8080/syb-backend/";

const routers = router;

axios.interceptors.request.use(
  config => {
    if(config.showLoading){
      Toast.loading({duration:0,forbidClick:true});
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.resolve(error.response);
  }
);

function errorState(response) {
  Toast.clear();
  // 如果http状态码正常，则直接返回数据
  if (
    response &&
    (response.status === 200 ||
      response.status === 304 ||
      response.status === 400)
  ) {
    Toast({
      message: "网络异常",
      position: "bottom",
    });
    return response.data;
  } else {
    Toast({
      message: "网络异常",
      position: "bottom",
    });
  }
}

function successState(response) {
  Toast.clear();
  //统一判断后端返回的错误码
  if (response.data.code == "0") {
    // Toast({
    //   message: response.data.info,
    //   position: "bottom",
    //   duration: 3000
    // });
  } else if (response.data.code == "1") {
    Toast({
      message: response.data.info || "网络异常",
      position: "bottom",
    });
  } else if (response.data.code == "2") {
    Toast({
      message: "登录信息已失效！",
      position: "bottom",
    });
    // console.log(routers)
    if(routers.history.current.path!='/login'){
      // router.push({
        // path: "/login",
      // query: { redirect: routers.history.current.path }
      // });
    }
    
  }
}

const httpServer = (opts, data) => {
  let Public = {
    //公共参数
    token: '597180248c434303ae02fdae2e8ae3e3'||localStorage.getItem("token")
  };

  let httpDefaultOpts = {
    //http默认配置
    method: opts.method,
    baseURL: baseURL,

    url: opts.url,
    timeout: 10000,
    params: Object.assign(Public, data),
    data: qs.stringify(Object.assign(Public, data)),
    headers:
      opts.method == "get"
        ? {
            "X-Requested-With": "XMLHttpRequest",
            Accept: "application/json",
            "Content-Type": "application/json; charset=UTF-8"
          }
        : {
            "X-Requested-With": "XMLHttpRequest",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
          }
  };
  if (opts.method == "get") {
    delete httpDefaultOpts.data;
  } else {
    delete httpDefaultOpts.params;
  }
  httpDefaultOpts.showLoading = !(data&&data.showLoading=='0')

  let promise = new Promise(function(resolve, reject) {
    axios(httpDefaultOpts)
      .then(res => {
        successState(res);
        resolve(res.data);
      })
      .catch(response => {
        errorState(response);
        reject(response);
      });
  });
  return promise;
};

export default httpServer;
