<template>
    <footer class="footer">
        <ul>
            <li>
                <a href="#/">
                    <img src="../../../public/assets/img/wx_black_01.png"/>
                    <p>首页</p>
                </a>
            </li>
            <li>
                <a href="#/main/classify">
                    <img src="../../../public/assets/img/wx_black_02.png"/>
                    <p>分类</p>
                </a>
            </li>
            <li>
                <a href="#/main/cart">
                    <img src="../../../public/assets/img/wx_black_04.png"/>
                    <p>购物车</p>
                </a>
            </li>
            <li>
                <a href="#/main/personal">
                    <img src="../../../public/assets/img/wx_black_05.png"/>
                    <p>我的</p>
                </a>
            </li>
        </ul>
    </footer>
</template>

<script>
    export default {
        name: "kfooter"
    }
</script>

<style scoped>
    .footer{
        width:100%;
        height:0.5rem;
        position: fixed;
        bottom: 0px;
        background-color: white;
        padding:0.06rem 0rem;
        box-sizing: border-box;
        font-size: 0.12rem;
        z-index:10;
    }
    .footer ul{
        width:100%;
        display: flex;
    }
    .footer li{
        flex:1;
        text-align:center;
    }
    .footer li img{
        width:0.24rem;
        height:0.24rem;
    }
</style>