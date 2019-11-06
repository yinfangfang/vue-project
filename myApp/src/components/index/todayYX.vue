<template>
    <div>
        <div class="today-you-bg">
            <img :src='data.title' class="today-you-title"/>
        </div>
        <today-you-con :data="data.content" ></today-you-con>
    </div>
</template>

<script>
    import todayYXCon from "./todayYXCon"
    export default {
        name: "todayYX",
        props:["data"],
        components:{
            "todayYouCon":todayYXCon
        }
    }
</script>

<style scoped>
    .today-you-bg{
        background-color: white;
        margin-top: 0.04rem;
    }
    .today-you-title{
        width:3.75rem;
        height:0.15rem;
        padding:0.15rem 0px;
    }
</style>