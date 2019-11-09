<template>
    <div class="pfooter">
        <div class="pfooter-left">
            <a href="#/main/index" class="home">
                <img src="../../../public/assets/img/product/home.png"/><p>首页</p>
            </a>
            <a href="#/main/cart" class="cart">
                <img src="../../../public/assets/img/product/cart.png"/><p>购物车</p>
            </a>
        </div>
        <div class="pfooter-perchase">
            <a href="#" class="addpro">加入购物车</a><a href="#" class="perchase">立即购买</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "pfooter"
    }
</script>

<style scoped>
    .pfooter{
        width:100%;
        display: flex;
        height:0.5rem;
        position: fixed;
        bottom: 0;
        background-color: #ffffff;
        text-align: center;
    }
    .pfooter-left{
        width:30%;
        padding-top:0.05rem;
        box-sizing: border-box;
    }
    .pfooter-left a{
        display: inline-block;
        width:50%;
    }
    .pfooter-left .home img{
        width:0.22rem;
        height:0.22rem;
    }
    .pfooter-left .cart img{
        width:0.22rem;
        height:0.22rem;
    }
    .pfooter-perchase{
        width:70%;
        line-height: 0.5rem;
        font-size: 0.16rem;
    }
    .pfooter-perchase a{
        display: inline-block;
        width:50%;
        color:white;
    }
    .pfooter-perchase a:nth-child(1){
        background-color:rgb(223,41,70) ;
    }
    .pfooter-perchase a:nth-child(2){
        background-color:rgb(195,31,58) ;
    }
</style>