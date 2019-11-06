<template>
    <header class="iheader">
        <div class="i_search">
            <img src="../../../public/assets/img/s_ico1.png"/>
            <span>请输入您要搜索的内容</span>
        </div>
        <div class="i_list">
            <a href="#">今日精选</a>
            <a href="#">热销</a>
            <a href="#">新品首发</a>
        </div>
    </header>
</template>

<script>
    export default {
        name: "iheader"
    }
</script>

<style scoped>
    .iheader{
        height:0.9rem;
        background-color: white;
        padding-top:0.08rem;
        box-sizing: border-box;
        z-index:10;
    }
    .i_search{
        width:3.45rem;
        height:0.38rem;
        margin:0 auto;
        background-color: rgb(238,239,241);
        padding:0.12rem 0.08rem;
        box-sizing: border-box;
        border-radius: 0.06rem;
        color:rgb(109,109,109);
    }
    .i_search img{
        width:0.15rem;
        height:0.13rem;
        margin-right: 0.05rem;
    }
    .i_list{
        width:3.45rem;
        height:0.44rem;
        margin:0 auto;
        line-height: 0.44rem;
    }
    .i_list a{
        display: inline-block;
        width: 0.6rem;
        text-align: center;
        padding: 0rem 0.11rem;
        color:rgb(50,50,50);
    }
</style>