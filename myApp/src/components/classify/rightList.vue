<template>
    <div class="right-list">
        <list-con :key="index" v-for="(list,index) in data.content" :data="list"></list-con>
    </div>
</template>

<script>
    import listCon from "./listCon";
    export default {
        name: "rightList",
        props:["data"],
        components:{
            "list-con":listCon
        }
    }
</script>

<style scoped>
    .right-list{
        width:75%;
        padding:0.1rem 0.05rem;
        box-sizing: border-box;
        overflow: auto;
        margin-left: 25%;
        margin-bottom:0.5rem;
    }
</style>