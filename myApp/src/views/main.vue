<template>
    <div>
        <router-view></router-view>
        <footer>
            <ul>
                <li>
                    <a href="#/">
                        <img src="../assets/img/wx_black_01.png"/>
                        <p>
                            首页
                        </p>
                    </a>
                </li>
                <li>
                    <a href="#/main/classify">
                        <img src="../assets/img/wx_black_02.png"/>
                        <p>
                            分类
                        </p>
                    </a>
                </li>
                <li>
                    <a href="#/main/cart">
                        <img src="../assets/img/wx_black_04.png"/>
                        <p>
                            购物车
                        </p>
                    </a>
                </li>
                <li>
                    <a href="#/main/personal">
                        <img src="../assets/img/wx_black_05.png"/>
                        <p>
                            我的
                        </p>
                    </a>
                </li>
            </ul>
        </footer>
    </div>

</template>

<script>

    export default {
        name: "vmain",
        components:{
        }
    }
</script>

<style scoped>
    footer{
        width:100%;
        position: fixed;
        bottom: 0px;
    }
    footer ul{
        width:100%;
        display: flex;
        list-style-type: none;
        padding-left: 0px;
    }
    footer li{
        flex:1;
        text-align:center;
    }
</style>