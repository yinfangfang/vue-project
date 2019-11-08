<template>
    <div class="swiper-container swiper3">
        <div class="swiper-wrapper">
            <div class="swiper-slide pbanner" :key="index" v-for="(b,index) in data">
                <img :src="b.pic" class="img"/>
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
    import Swiper from "swiper"
    export default {
        name: "banner",
        props:["data"],
        methods:{
            _initSwiper(){
                /*eslint-disable no-new*/
                const newSwiper = new Swiper('.swiper3',{
                    loop:true,
                    autoplay:true,
                    pagination:{
                        el:".swiper-pagination",
                    },
                    // observer:true,//修改swiper自己或子元素时，自动初始化swiper
                    // observeParents:true//修改swiper的父元素时，自动初始化swiper
                })
            }
        },
        mounted(){
            this._initSwiper()
        },
    }
</script>


<style>
    @import "../../../node_modules/swiper/css/swiper.css";
    .pbanner .img{
        width:4rem;
        height:4rem;
    }
    .swiper3 .swiper-pagination-bullet-active{
        background:rgb(34,34,34);
    }
</style>