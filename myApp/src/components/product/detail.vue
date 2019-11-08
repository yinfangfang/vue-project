<template>
    <div>
        <div class="bline-change">
            <ul class="tab-ul">
                <li class="current" @click="changeone"><span>商品详情</span></li>
                <li @click="changetwo"><span>产品参数</span></li>
                <li @click="changethree"><span>配送与售后</span></li>
            </ul>
        </div>
        <ul class="product-detail">
            <li v-show="index=0">
                <img :key="index" v-for="(i,index) in data.current" :src="i.picture"/>
            </li>
            <li v-show="index=1">
                <p class="canshu" :key="index" v-for="(i,index) in data.paramater" >
                    <span class="col-1">{{i.name}}</span>
                    <span class="col-2">{{i.con}}</span>
                </p>
            </li>
            <li v-show="index=2">
                <img :key="index" v-for="(i,index) in data.send" :src="i.picture"/>
            </li>
        </ul>
    </div>

</template>

<script>
    export default {
        name: "detail",
        props:["data"],
        data(){
            return {
                index:0
            }
        },
        methods:{
            changeone(){
                this.index = 0
            },
            changetwo(){
                this.index = 1
            },
            changethree(){
                this.index = 2
            }
        }
    }
</script>

<style scoped>
    .tab-ul{
        height: 0.46rem;
        line-height: 0.46rem;
        display: flex;
        text-align: center;
        color: #969696;
    }
    .tab-ul li{
        flex:1
    }
    .tab-ul li.current {
        color: #1e1e1e;
    }
    .tab-ul li span{
        line-height: 40px;
        display: inline-block;
    }
    .tab-ul li.current span {
        border-bottom: 0.02rem solid #c4223c;
    }
    .product-detail img{
        width:100%;
    }
    .canshu{
        padding: 0.1rem;
        border-bottom: 0.01rem solid rgb(238,238,238);
    }
    .col-1{
        display: inline-block;
        width:40%;
    }
</style>