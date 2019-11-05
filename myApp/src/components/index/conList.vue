<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" :key="index" v-for="(pro,index) in data">
                <img :src="pro.img" class="product-pic"/>
                <p class="product-title">{{pro.title}}</p>
                <p class="product-price">
                    <span>{{pro.price}}</span>
                    <span>{{pro.oPrice}}</span>
                </p>
            </div>
            <div  class="swiper-slide selectOther">
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
                const newSwiper = new Swiper('.swiper-container',{
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
    .swiper-wrapper{
        padding:0.1rem;
    }
    .swiper-slide{
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
    .product-pic{
        width:100%;
    }
    .product-title{
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }

</style>