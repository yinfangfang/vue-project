<template>
    <ul class="left-nav">
        <li @click="change(id)" class="left-nav-list" :key="id" v-for="(list,id) in data" :class="{ bgColors:id==current}">{{list.title}}</li>
    </ul>
</template>

<script>
    export default {
        name: "leftNav",
        data(){
            return {
                current:0
            }
        },
        props:["data"],
        methods:{
            change(id){
                this.$bus.$emit("change",id),
                this.current = id
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
        height:calc(100vh);
    }
    .left-nav li{
        height:0.5rem;
        line-height: 0.5rem;
        margin-bottom: 0.1rem;
        color: #949494;
        font-size: 0.15rem;
        position: relative;
    }
    .left-nav .bgColors {
        color: rgb(209,79,108);

    }
    .bgColors:after {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        height: 1em;
        margin-top: -0.5em;
        width: 5px;
        background-color: rgb(209, 79, 108);
        z-index:5;
    }

</style>