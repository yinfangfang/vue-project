<template>
    <section>
        <klg-product-banner v-if="productInfo.detail" :data="productInfo.detail[0].banner"></klg-product-banner>
        <klg-product-introduce v-if="productInfo.detail" :data="productInfo.detail[0].information"></klg-product-introduce>
        <klg-product-ship v-if="productInfo.detail" :data="productInfo.detail[0].discount"></klg-product-ship>
        <div class="label-box" @click="showPopup">
            <div class="label-left">
                <div class="way">
                    <img src="../../../public/assets/img/product/correct_ico.png"/><span>发货&售后</span>
                </div>
                <div class="way">
                    <img src="../../../public/assets/img/product/correct_ico.png"/><span>支付方式</span>
                </div>
                <div class="way">
                    <img src="../../../public/assets/img/product/correct_ico.png"/><span>全天客服</span>
                </div>
            </div>
            <div class="label-right">
                <img src="../../../public/assets/img/product/arrow_right.png"/>
            </div>
        </div>
        <div class="label-box partone">
            <div class="label-left">规格</div>
            <div class="label-right">
                默认<img src="../../../public/assets/img/product/arrow_right.png"/>
            </div>
        </div>
        <klg-product-review v-if="productInfo.detail" :data="productInfo.detail[0].review"></klg-product-review>
        <div class="advert">
            <img  v-if="productInfo.detail" :src="productInfo.detail[0].advert"/>
        </div>
        <div class="box-title">猜你喜欢</div>
        <klg-product-conlist v-if="productInfo.detail" :data="productInfo.detail[0].like"></klg-product-conlist>
        <klg-product-detail v-if="productInfo.detail" :data="productInfo.detail[0].detail"></klg-product-detail>
        <klg-product-footer></klg-product-footer>
        <van-popup class="popup-box" v-model="show"  closeable position="bottom" :style="{ height: '20%' }">
            <h1>快乐购保证</h1>
            <div class="pop-box-con">
                <ul>
                    <li>
                        <p>发货&售后</p>
                        <div>商家直营旗舰店为快乐购入驻商家，该商品由其发货并提供售后服务</div>
                    </li>
                    <li>
                        <p>支付方式</p>
                        <div>商家直营商品或海外直邮商品仅支持线上支付</div>
                    </li>
                    <li>
                        <p>退货政策</p>
                        <div>海外直邮或保税区商品不支持拒收，不支持无理由退换货，若收到的商品有质量问题，请致电服务热线 400-705-1111</div>
                    </li>
                    <li>
                        <p>运费&税费</p>
                        <div>本商品价格为包邮包税价</div>
                    </li>
                    <li>
                        <p>全天客服</p>
                        <div>售后无忧 专业客服全天守候</div>
                    </li>
                </ul>
            </div>
        </van-popup>
    </section>
</template>

<script>
    import { Popup } from 'vant';
    import productApi from "../../apis/productApi";
    import banner from "../../components/product/banner"
    import introduce from "../../components/product/introduce"
    import ship from "../../components/product/ship"
    import review from "../../components/product/review"
    import conList from "../../components/index/conList"
    import detail from "../../components/product/detail"
    import pfooter from "../../components/product/pfooter"
    export default {
        name: "product",
        data(){
            return {
                productInfo : [],
                show: false
            }
        },
        components:{
            "klg-product-banner": banner,
            "klg-product-introduce":introduce,
            "klg-product-ship":ship,
            "klg-product-review":review,
            "klg-product-conlist":conList,
            "klg-product-detail":detail,
            "klg-product-footer":pfooter,
            [Popup.name]:Popup
        },
        methods: {
            _initProductInfo() {
                productApi.getData(data => {
                    this.productInfo = data;
                })
            },
            showPopup() {
                this.show = true;
            }
        },
        created() {
            this._initProductInfo();
        }
    }
</script>

<style scoped>
    .label-box{
        display: flex;
        justify-content: space-between;
        padding: 0.08rem 0.1rem;
        box-sizing: border-box;
    }
    .label-left{
        display: flex;
    }
    .label-left .way{
        margin-right: 0.1rem;
    }
    .label-left img{
        width:0.14rem;
        height: 0.14rem;
        vertical-align: middle;
    }
    .label-right img{
        width:0.12rem;
        height: 0.12rem;
        vertical-align: middle;
    }
    .partone{
        border-bottom: 0.05rem solid rgb(238,238,238);
    }
    .advert img{
        width:100%;
        height:auto;
    }
    .box-title{
        padding:0.1rem 0.1rem;
        border-bottom: 1px solid #e6e6e6;
    }
    .popup-box{
        height: 60% !important;
    }
    .popup-box h1{
        text-align: center;
        font-size: 0.15rem;
        padding: 15px 10px;
    }
    .pop-box-con{
        padding: 0.1rem;
        box-sizing: border-box;
    }
    .pop-box-con li{
        width: 100%;
        line-height: 1.4em;
        padding-left: 2.5em;
        position: relative;
        box-sizing: border-box;
        margin-bottom: 0.1rem;
    }
    .pop-box-con p{
        font-size: 0.16rem;
        color: #5a5a5a;
    }
    .pop-box-con p:before {
        content: "";
        position: absolute;
        left: 0.2rem;
        top: 0.05rem;
        width: 4px;
        height: 4px;
        border-radius: 4px;
        background-color: #ef2f2f;
    }
    .pop-box-con div{
        color:rgb(159,159,159);
        margin-top: 0.05rem;
    }
</style>