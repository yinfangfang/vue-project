<template>
    <div class="kheader">
        <div class="cart-title">购物车(<span>0</span>)</div>
        <div class="cart-edit">编辑</div>
    </div>
</template>

<script>
    export default {
        name: "kheader"
    }
</script>

<style scoped>
    .kheader{
        width: 100%;
        height:0.4rem;
        text-align: center;
        line-height: 0.4rem;
        border-bottom: 1px solid #e6e6e6;
        position: fixed;
        top:0;
        z-index: 10;
    }
    .cart-title{
        width:100%;
        font-size: 0.16rem;
    }
    .cart-edit{
        width:0.6rem;
        color: #787878;
        position: absolute;
        top: 0;
        right: 0;
    }
</style>