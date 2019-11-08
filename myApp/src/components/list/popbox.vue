<template>
    <div class="pop-box" v-show="flag"  @touchmove.prevent>
        <ul class="pop-box-list">
            <li class="pop-box-con" :key="index" v-for="(t,index) in data.content" @click="select(index)" :class="{active:index==current}"><img :class="{arrow:index==current}" src="../../../public/assets/img/list/arrow.png"/>{{t.title}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "popbox",
        props:["data","flag"],
        data(){
            return{
                "current":0
            }
        },
        methods:{
            select(index){
                this.current = index
                this.$bus.$emit("changecon",index)
            }
        }
    }
</script>

<style scoped>
    .pop-box-list{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        background-color: white;
        padding:0.1rem;
    }
    .pop-box-con{
        width:49%;
        height: 0.4rem;
        line-height: 0.4rem;
        text-align: center;
    }
    .pop-box-con img{
        display: none;
        width:0.14rem;
        height:0.1rem;
        vertical-align: middle;
        margin-right: 0.05rem;
    }
    .pop-box-list .active{
        color:red;
    }
    .pop-box-list .arrow{
        display: inline-block;
    }
</style>