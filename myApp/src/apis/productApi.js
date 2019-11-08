// 导出基础接口路径
import {BASEURL} from "../commons/Config";
// 定义接口
const PRODUCTURL = `${BASEURL}/klgProduct`;

// 导出主页面信息
export default {
    getData(cb){
        // 通过fetch访问数据接口，返回数据
        fetch(PRODUCTURL).then(res=>{
            res.json().then(cb)
        })
    }
}