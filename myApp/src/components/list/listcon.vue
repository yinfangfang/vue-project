<template>
    <ul class="list-con">
        <li class="list-product" :key="ind" v-for="(p,ind) in data.popcon">
            <a :href="'#/main/product?id='+ind">
                <img v-lazy="p.img" class="product-pic"/>
                <div class="product-title">{{p.title}}</div>
                <p class="product-price">
                    <span>{{p.price}}</span>
                    <span>{{p.oPrice}}</span>
                </p>
            </a>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "listcon",
        props:["data"],
        methods:{
            // toproduct(){
            //     this.$router.replace("/main/product")
            // }
        }
    }
</script>

<style scoped>
    .list-con{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin-top: 0.85rem;
        padding-top: 0.05rem;
    }
    .list-product{
        width: 49%;
        padding: 0.02rem;
        box-sizing: border-box;
        margin-bottom: 0.05rem;
        background-color: white;
    }
    .list-product .product-pic{
        width:100%;
    }
    .list-product .product-title{
        width:100%;
        margin:0.04rem 0rem;
        line-height:0.16rem;
        height:0.32rem;
        overflow: hidden;
        text-overflow:ellipsis;
        padding-left: 0.1rem;
        box-sizing: border-box;
    }
    .list-product .product-price{
        padding-left: 0.1rem;
        box-sizing: border-box;
    }
    .list-product .product-price span:nth-child(1){
        font-size: 0.16rem;
        color:#c4193f;
    }
    .list-product .product-price span:nth-child(2){
        color: #969696;
        text-decoration: line-through;
        margin-left: 5px;
        font-size: 0.13rem;
    }
</style>