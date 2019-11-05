<template>
    <header class="cheader">
        <div class="c_search">
            <img src="../../../public/assets/img/s_ico1.png"/>
            <span>搜索商品,品牌</span>
        </div>
    </header>
</template>

<script>
    export default {
        name: "cheader"
    }
</script>

<style scoped>
    .cheader{
        width:100%;
        height:0.5rem;
        border-bottom:0.005rem solid rgb(245,245,245);
        position: fixed;
        top:0;
        padding:0.1rem 0rem;
        box-sizing: border-box;
    }
    .c_search{
        width:3.45rem;
        height:0.3rem;
        margin:0 auto;
        background-color: rgb(238,239,241);
        padding:0.07rem 1.15rem;
        box-sizing: border-box;
        border-radius: 0.3rem;
        color:rgb(109,109,109);
    }
    .c_search img{
        width:0.15rem;
        height:0.13rem;
        margin-right: 0.05rem;
    }
</style>