<template>
    <div>
        <div class="goods-box" :key="pid" v-for="(p,pid) in data.products">
            <div class="item-check">
                 <input type="checkbox" class="check goodsCheck" v-model="p.checked" @change="pSelected(sid)">
            </div>
            <div class="goodsInfo-box">
                <a href="#"><img :src="p.pic"></a>
                <div class="goodsInfo">
                    <p>{{p.title}}</p>
                    <span>特权金</span>
                    <p>{{p.ver}}</p>
                    <span>￥<span>{{p.price}}</span><span>x</span><span>{{p.qal}}</span></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "item",
        props:["data","sid"],
        methods:{
            pSelected (sid) {
                this.$emit('iAll', sid)
            },
        }
    }
</script>

<style scoped>
    .goods-box{
        display: flex;
        border: 1px solid #ccc;
        border-right: none;
        border-left: none;
        padding: 0.15rem 0 0.12rem;
    }
    .item-check{
        display: flex;
        align-items: center;
    }
    .goods-box .goodsInfo-box{
        display: flex;
    }
    .goods-box .goodsInfo-box a img{
        width:0.9rem;
        height:0.9rem;
        display: inline-block;
        border: 0.005rem solid #ccc;
        padding: 0.01rem;
        margin: 0 0.1rem;
    }
    .goodsInfo p,.goodsInfo span:nth-of-type(2){
        font-size: 0.14rem;
    }
    .goodsInfo p:nth-of-type(1){
        margin-left: 0rem;
        color: #0C0C0C;
    }
    .goodsInfo p:nth-of-type(2){
        color: rgb(102,102,102);
        font-size: 0.12rem;
        padding:0.025rem 0;
        margin-left: 0rem;
    }
    .goodsInfo>span:nth-child(2){
        font-size: 0.1rem;
        display: inline-block;
        width: 0.5rem;
        border: 0.005rem solid pink;
        text-align: center;
        line-height: 0.18rem;
        color: pink;
    }
    .goodsInfo span:nth-of-type(2){
        color: orangered;
    }
    .goodsInfo span:nth-of-type(2)>span{
        color: #0C0C0C;
        margin-left:0.08rem;
    }
</style>