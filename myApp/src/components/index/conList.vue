<template>
    <div class="swiper-container swiper2">
        <div class="swiper-wrapper contentList">
            <div class="swiper-slide content" :key="index" v-for="(pro,index) in data">
                <img :src="pro.img" class="product-pic"/>
                <p class="product-title">{{pro.title}}</p>
                <p class="product-price">
                    <span>{{pro.price}}</span>
                    <span>{{pro.oPrice}}</span>
                </p>
            </div>
            <div  class="swiper-slide content selectOther">
                <span class="selectALL">查看更多</span>
                <P class="seeAll">See All</P>
            </div>
        </div>
    </div>
</template>

<script>
    import Swiper from "swiper"
    export default {
        name: "conList",
        props:["data"],
        methods:{
            _initSwiper(){
                /*eslint-disable no-new*/
                const newSwiper = new Swiper('.swiper2',{
                    slidesPerView: 'auto',
                    spaceBetween: 10,
                    observer:true,//修改swiper自己或子元素时，自动初始化swiper
                    observeParents:true//修改swiper的父元素时，自动初始化swiper
                })
            }
        },
        mounted(){
            this._initSwiper()
        },
    }
</script>

<style>
    .swiper2{
        background-color: white;
    }
    .contentList{
        padding:0.1rem;
        margin-bottom: 0.1rem;
    }
    .content{
        width:40%;
        text-align: center;
    }
    .selectOther{
        margin-top: 15%;
    }
    .selectALL{
        border-bottom: 1px solid #1e1e1e;
        color: #505050;
    }
    .seeAll{
        margin-top: 0.02rem;
        line-height: 0.12rem;
        color: #969696;
    }
    .swiper2 .product-pic{
        width:100%;
    }
    .swiper2 .product-title{
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        margin:0.04rem 0rem;
    }
    .swiper2 .product-price span:nth-child(1){
        color:#c4193f;
    }
    .swiper2 .product-price span:nth-child(2){
        color: #969696;
        text-decoration: line-through;
        margin-left: 5px;
        font-size: 0.13rem;
    }

</style>