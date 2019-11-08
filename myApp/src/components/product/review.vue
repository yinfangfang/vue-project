<template>
    <div class="review">
        <div class="review-title">
            <div>用户评价&nbsp;&nbsp;({{data.num}})</div>
            <div><span>{{data.percent}}</span>&nbsp;好评</div>
        </div>
        <klg-evaluate :data="data.user"></klg-evaluate>
        <div class="review-more">
            查看更多评价<img src="../../../public/assets/img/product/more_arrow.png"/>
        </div>
    </div>
</template>

<script>
    import evaluate from "./evaluate";
    export default {
        name: "review",
        props:["data"],
        components:{
            "klg-evaluate":evaluate
        }
    }
</script>

<style scoped>
    .review{
        padding: 0 0.1rem;
        box-sizing: border-box;
        border-bottom: 0.05rem solid rgb(238,238,238);
    }
    .review-title{
        height:0.4rem;
        line-height: 0.4rem;
        display: flex;
        justify-content: space-between;
    }
    .review-title span{
        color:red;
    }
    .review-more{
        height: 0.46rem;
        line-height: 0.46rem;
        text-align: center;
        color: #c4223c;
    }
    .review-more img{
        width:0.15rem;
        height:0.1rem;
    }
</style>