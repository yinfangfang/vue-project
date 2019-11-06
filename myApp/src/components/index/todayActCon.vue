<template>
    <div>
        <img :src='data.actTitle' class="today-act-con"/>
        <con-list :data='data.swiperCon'></con-list>
    </div>
</template>

<script>
    import conList from "./conList";
    export default {
        name: "todayActCon",
        props:["data"],
        components:{
            conList
        }
    }
</script>

<style scoped>
    .today-act-con{
        width:3.75rem;
        height:1.72rem;
    }
</style>