// 导出基础接口路径
import {BASEURL} from "../commons/Config";
// 定义接口
const SEARCHURL = `${BASEURL}/klgSearch`;

// 导出信息
export default {
    getData(cb){
        // 通过fetch访问数据接口，返回数据
        fetch(SEARCHURL).then(res=>{
            res.json().then(cb)
        })
    }
}