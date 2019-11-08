<template>
    <div class="basic-info">
        <p class="title-text">{{data.title}}</p>
        <p class="describe-text">{{data.dec}}</p>
        <div class="price-box">
            <span>￥{{data.xprice}}</span><span>{{data.oprice}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "introduce",
        props:["data"]
    }
</script>

<style scoped>
    .basic-info{
        padding: 0.1rem;
        box-sizing: border-box;
    }
    .title-text{
        font-size: 0.17rem;
        color: #1d1d1d;
    }
    .describe-text{
        padding: 0.1rem 0 0.05rem 0;
        font-size: 0.14rem;
        line-height: 0.2rem;
        color:#c31f3a;
    }
    .price-box span:nth-child(1){
        color:#c31f3a;
        font-size: 0.2rem;
        font-weight: 600;
        margin-right: 0.05rem;
    }
    .price-box span:nth-child(2){
        color: #969696;
        text-decoration: line-through;
        font-size: 0.16rem;
    }
</style>