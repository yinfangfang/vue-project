<template>
    <div class="product-ship">
        <div class="left">
            <p :key="index" v-for="(p,index) in data">
                <span>{{p.class}}</span>{{p.intrduce}}
            </p>
        </div>
        <div class="right">
            <img src="../../../public/assets/img/product/arrow_right.png"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ship",
        props:["data"]
    }
</script>

<style scoped>
    .product-ship{
        width:100%;
        display: flex;
        justify-content: space-between;
        padding: 0 0.1rem;
        box-sizing: border-box;
    }
    .product-ship .left p{
        margin-bottom: 0.05rem;
    }
    .product-ship .left span{
        color: #df0010;
        display: inline-block;
        font-size: 0.857em;
        line-height: 1.4em;
        padding: 0 2px;
        border-radius: 2px;
        margin-right: 5px;
        border: 1px solid #df0010;
    }
    .product-ship .right{
        display: flex;
        align-items: center;
    }
    .product-ship .right img{
        width:0.12rem;
        height:0.12rem;
    }
</style>