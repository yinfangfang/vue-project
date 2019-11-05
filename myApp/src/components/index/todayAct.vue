<template>
    <div>
        <div class="today-act-bg">
            <img :src='data.title' class="today-act-title"/>
        </div>
        <today-act-con :key="index" v-for="(con,index) in data.list" :data="con" ></today-act-con>
    </div>
</template>

<script>
    import todayActCon from "./todayActCon";
    export default {
        name: "todayAct",
        props:["data"],
        components:{
            "todayActCon":todayActCon
        }
    }
</script>

<style scoped>
    .today-act-bg{
        background-color: white;
        margin-top: 0.04rem;
    }
    .today-act-title{
        width:3.75rem;
        height:0.15rem;
        padding:0.15rem 0px;
    }
</style>