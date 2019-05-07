import JsonP from 'jsonp';
import axios from 'axios';
import {Modal} from 'antd';
export  default class Axios{
static jsonp(options){
    return new  Promise((resolve,reject)=>{
        JsonP(options.url,{
            param:"callback"
            },function(err,response){
                // if(response,status)
                // debugger;
                if(response.status==='success'){
                    resolve(response);
                }else
                {
                    reject(response.message);
                }
            })
    })
}
static ajax(options){
    let loading;
    if(options.data&&options.data.isShowLoading!==false){
        loading=document.getElementById("ajaxLoading");
        loading.style.display="block";
    }
    // let baseUrl=" https://www.easy-mock.com/mock/5cb88c728a2e4271d962e27c/api";
    let baseUrl=" https://www.easy-mock.com/mock/5a7278e28d0c633b9c4adbd7/api";
    return new Promise((resolve,reject)=>{
    axios({
        url:options.url,
        method:"get",
        baseURL:baseUrl,
        timeout:5000,
        params:(options.data&&options.data.params)||""
    }).then((response)=>{
        if(options.data&&options.data.isShowLoading!==false){
            loading=document.getElementById("ajaxLoading");
            loading.style.display="none";
        }
        if(response.status===200){
            let res=response.data;
            console.log(res.code)
            if(res.code=="0")
            {
                resolve(res)
            }else{
                Modal.info({
                    title:"提示",content:res.msg
                })
            }

        }else{
            reject(response.data)
        }
    })
    })

}
}