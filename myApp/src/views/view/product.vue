<template>
    <section>
        <klg-product-banner :data="productInfo.detail[0].banner"></klg-product-banner>
        <klg-product-introduce :data="productInfo.detail[0].information"></klg-product-introduce>
        <klg-product-ship :data="productInfo.detail[0].discount"></klg-product-ship>
        <div class="label-box">
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
        <klg-product-review :data="productInfo.detail[0].review"></klg-product-review>
        <div class="advert">
            <img :src="productInfo.detail[0].advert"/>
        </div>
        <div class="box-title">猜你喜欢</div>
        <klg-product-conlist :data="productInfo.detail[0].like"></klg-product-conlist>
        <klg-product-detail :data="productInfo.detail[0].detail"></klg-product-detail>
    </section>
</template>

<script>
    import productApi from "../../apis/productApi";
    import banner from "../../components/product/banner"
    import introduce from "../../components/product/introduce"
    import ship from "../../components/product/ship"
    import review from "../../components/product/review"
    import conList from "../../components/index/conList"
    import detail from "../../components/product/detail";
    export default {
        name: "product",
        data(){
            return {
                productInfo : []
            }
        },
        components:{
            "klg-product-banner": banner,
            "klg-product-introduce":introduce,
            "klg-product-ship":ship,
            "klg-product-review":review,
            "klg-product-conlist":conList,
            "klg-product-detail":detail
        },
        methods: {
            _initProductInfo() {
                productApi.getData(data => {
                    this.productInfo = data;
                    console.log(data)
                })
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

</style>