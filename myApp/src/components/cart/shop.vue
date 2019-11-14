<template>
    <div class="cartGoods">
        <ul>
            <li :key="sid" v-for="(u,sid) in data.shops">
                <div class="shops">
                    <div class="shop-check">
                        <input type="checkbox" class="check shopCheck" v-model="u.checked" @change="shopSelect(sid)">
                    </div>
                    <span class="shopName"><img src="../../../public/assets/img/cart/icon_self.png" alt=""><a href="#">{{u.shopName}}</a><span class="toShop"></span></span>
                    <span class="shop-edit">{{u.edit}}</span>
                </div>
                <klg-item :data="u" :sid="sid" @iAll="iAll"></klg-item>
            </li>
        </ul>
    </div>
</template>

<script>
    import item from "./item"
    export default {
        name: "shop",
        props:["data"],
        data(){
            return{
                isActive:false
            }
        },
        components:{
            'klg-item':item
        },
        methods:{
            changeCheck(index){
                this.isActive = !this.isActive
            },
            shopSelect(sid){
                this.$emit("sAll",sid)
            },
            iAll(sid){
                this.$emit("iAll",sid)
            }
        }
    }
</script>

<style scoped>
    .cartGoods{
        margin-top: 0.4rem;
    }
    .shops{
        display: flex;
        padding-left: 0.3rem;
        box-sizing: border-box;
    }
    .shop-check{
        display: flex;
        align-items: center;
    }
    .cartGoods ul li{
        border-top: 0.12rem solid #eee;
        padding: 0.1rem;
    }
    .shops img{
        display: inline-block;
    }
    .shops .shopName{
        width:80%;
        line-height: 0.26rem;
    }
    .shops .shopName img{
        width: 0.2rem;
        height: 0.18rem;
        vertical-align: middle;
        margin:0 0.1rem;
    }
    .shops{
        font-size: 0.14rem;
        padding: 0 0 0.1rem;
    }
    .shops span:nth-of-type(2){
        float: right;
        margin-right: 0.1rem;
        line-height: 0.26rem;
    }
    .shops .shopName .toShop{
        display: inline-block;
        width: 0.07rem;
        height: 0.12rem;
        background: url("../../../public/assets/img/cart/arrow.png") no-repeat center ;
        background-size: 100% 100%;
        vertical-align: middle;
        margin-left: 0.08rem;
    }
</style>