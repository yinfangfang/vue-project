<template>
    <ul class="left-nav">
        <li @click="change(id)" class="left-nav-list" :key="id" v-for="(list,id) in data">{{list.title}}</li>
    </ul>
</template>

<script>
    export default {
        name: "leftNav",
        props:["data"],
        methods:{
            change(id){
                this.$bus.$emit("change",id)
                console.log(id)
            }
        }
    }
</script>

<style scoped>
    .left-nav{
        width:25%;
        position: fixed;
        top: 50px;
        bottom: 0;
        left: 0;
        overflow: hidden;
        padding-bottom: 50px;
        text-align: center;
        border-right: 0.005rem solid rgb(245,245,245);
    }
    .left-nav-list{
        height:0.5rem;
        line-height: 0.5rem;
        margin-bottom: 0.1rem;
        color: #949494;
        font-size: 0.16rem;
    }
</style>