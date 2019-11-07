<template>
    <ul class="today-you-con">
        <li class="today-you-product" :key="ind" v-for="(p,ind) in data.content">
            <img v-lazy="p.img" class="product-pic"/>
            <div class="product-title">{{p.title}}</div>
            <p class="product-price">
                <span>{{p.price}}</span>
                <span>{{p.oPrice}}</span>
            </p>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "listcon",
        props:["data"]
    }
</script>

<style scoped>
    .today-you-con{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin-top: 0.85rem;
        padding-top: 0.05rem;
    }
    .today-you-product{
        width: 49%;
        padding: 0.02rem;
        box-sizing: border-box;
        margin-bottom: 0.05rem;
        background-color: white;
    }
    .today-you-con .product-pic{
        width:100%;
    }
    .today-you-con .product-title{
        width:100%;
        margin:0.04rem 0rem;
        line-height:0.16rem;
        height:0.32rem;
        overflow: hidden;
        text-overflow:ellipsis;
    }
    .today-you-con .product-price{
        text-align: center;
    }
    .today-you-con .product-price span:nth-child(1){
        color:#c4193f;
    }
    .today-you-con .product-price span:nth-child(2){
        color: #969696;
        text-decoration: line-through;
        margin-left: 5px;
        font-size: 0.13rem;
    }
</style>