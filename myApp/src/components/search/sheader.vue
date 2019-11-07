<template>
    <div class="search-head">
        <div class="shead-main">
            <img class="return" src="assets/img/return.png" @click="toback">
            <div class="search-input">
                <img class="s-ico" src="assets/img/s_ico1.png">
                <input type="text" class="tel-input" placeholder="青稞谷物" searchkey="青稞谷物">
            </div>
            <div class="s-btn">搜索</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "sheader",
        methods:{
            toback(){
                this.$bus.$emit("toback")
            }
        }
    }
</script>

<style scoped>
    .search-head{
        padding: 8px;
    }
    .shead-main{
        width:100%;
        display: flex;
    }
    .return{
        width:0.18rem;
        height:0.18rem;
        margin: 0.08rem 0.08rem 0;
    }
    .search-input{
        position: relative;
        height: 0.32rem;
        flex: 1;
        background-color: #f3f5f5;
        border-radius: 0.2rem;
        font-size: 0.13rem;
        padding: 0 0.1rem;
    }
    .s-ico{
        width:0.15rem;
        height:0.13rem;
        margin-right: 0.05rem;
    }
    .tel-input{
        font-size: 0.13rem;
        width: 80%;
        height: 0.32rem;
        background: none;
        border:none;
        outline: none;
    }
    .s-btn{
        background-color: #3985ff;
        color: #fff;
        line-height: 0.32rem;
        display: inline-block;
        font-size: 0.93em;
        border-radius: 4px;
        padding: 0 12px;
        margin-left: 8px;
    }
</style>