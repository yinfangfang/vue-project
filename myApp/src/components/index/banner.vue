<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" :key="index" v-for="(b,index) in data">
                <img :src='data[index].src' class="img"/>
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
                const newSwiper = new Swiper('.swiper-container',{
                    loop:true,
                    autoplay:true,
                    pagination:{
                        el:".swiper-pagination",
                    },
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
    @import "../../../node_modules/swiper/css/swiper.css";
    .swiper-slide .img{
        width:3.75rem;
        height:2rem;
    }
    .swiper-pagination-bullet-active{
        background-color: white;
    }
</style>