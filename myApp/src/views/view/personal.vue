<template>
    <section>
        <header class="pheader">
            <img class="userpic" src="../../../public/assets/img/personal/001.gif"/>
            <p class="user-name">MB_166855c7b</p>
            <img class="user-vip" src="../../../public/assets/img/personal/mvip1.png"/>
        </header>
        <div class="order">
            <div class="order-title">
                <div class="my-order">我的订单</div>
                <div class="more-order">
                    查看更多订单
                    <img src="../../../public/assets/img/personal/arrow.png"/>
                </div>
            </div>
            <div class="order-tab">
                <ul>
                    <li>
                        <a href="#">
                            <img src="../../../public/assets/img/personal/order_ico1.png"/>
                            <p>待付款</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../../../public/assets/img/personal/order_ico2.png"/>
                            <p>待收货</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../../../public/assets/img/personal/order_ico3.png"/>
                            <p>待评价</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../../../public/assets/img/personal/order_ico4.png"/>
                            <p>退货/款</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="order">
            <div class="order-title">
                <div class="my-order">我的资产</div>
            </div>
            <div class="asset-tab">
                <div>
                    <p>0</p>
                    <p>快乐币</p>
                </div>
                <div>
                    <p>7</p>
                    <p>优惠券</p>
                </div>
            </div>
        </div>
        <div class="items">
            <ul>
                <li>
                    <img class="icon" src="../../../public/assets/img/personal/icon_1.png">收货地址<img src="../../../public/assets/img/personal/arrow.png" class="arrow">
                </li>
                <li>
                    <img class="icon" src="../../../public/assets/img/personal/icon_2.png">我的预售<img src="../../../public/assets/img/personal/arrow.png" class="arrow">
                </li>
                <li>
                    <img class="icon" src="../../../public/assets/img/personal/icon_3.png">我的收藏<img src="../../../public/assets/img/personal/arrow.png" class="arrow">
                </li>
                <li>
                    <img class="icon" src="../../../public/assets/img/personal/icon_4.png">我的足迹<img src="../../../public/assets/img/personal/arrow.png" class="arrow">
                </li>
                <li>
                    <img class="icon" src="../../../public/assets/img/personal/icon_5.png">帮助反馈<img src="../../../public/assets/img/personal/arrow.png" class="arrow">
                </li>
                <li>
                    <img class="icon" src="../../../public/assets/img/personal/icon_6.png">会员权益<img src="../../../public/assets/img/personal/arrow.png" class="arrow">
                </li>
                <li>
                    <img class="icon" src="../../../public/assets/img/personal/icon_7.png">账号设置<img src="../../../public/assets/img/personal/arrow.png" class="arrow">
                </li>
            </ul>

        </div>
        <div class="items user">退出当前账户</div>
    </section>

</template>

<script>
    export default {
        name: "personal"
    }
</script>

<style scoped>
    .pheader{
        padding:0.25rem 0;
        text-align: center;
        border-bottom: 0.1rem solid rgb(238,238,238);
    }
    .userpic{
        width:0.5rem;
        height: 0.5rem;
    }
    .user-name{
        font-size: 0.2rem;
    }
    .user-vip{
        width:0.68rem;
        height:0.18rem;
        margin-top: 0.05rem;
    }
    .order-title{
        display: flex;
        justify-content: space-between;
        padding:0.1rem 0.1rem 0.1rem 0.15rem;
        box-sizing: border-box;
        border-bottom: 1px solid #dcdcdc;
    }
    .order{
        border-bottom: 0.1rem solid rgb(238,238,238);
    }
    .more-order img{
        width:0.07rem;
        height:0.12rem;
    }
    .order-tab ul{
        display: flex;
        padding:0.15rem 0.075rem;
    }
    .order-tab li{
        flex: 1;
        text-align: center;
    }
    .order-tab img{
        width:auto;
        height:0.2rem;
    }
    .asset-tab{
        display: flex;
    }
    .asset-tab>div{
        width: 50%;
        text-align: center;
        margin: 0.15rem 0;
    }
    .asset-tab>div:nth-child(1){
        border-right: 1px solid rgb(238,238,238);
    }
    .items{
        padding:0 0.1rem;
        border-bottom: 0.1rem solid rgb(238,238,238);
        font-size: 0.16rem;
    }
    .icon{
        width:0.19rem;
        height:0.19rem;
        vertical-align: middle;
        margin-left: 0.05rem;
        margin-right: 0.1rem;
    }
    .arrow{
        width:0.07rem;
        height:0.12rem;
        vertical-align: middle;
        float: right;
    }
    .items li{
        padding: 0.15rem 0rem;
        border-bottom:1px solid rgb(238,238,238);
    }
    .user{
        padding: 0.15rem 0rem;
        color: rgb(255, 0, 0);
        text-align: center;
    }
</style>