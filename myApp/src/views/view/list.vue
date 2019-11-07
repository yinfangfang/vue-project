<template>
    <div class="list">
        <header class="lheder">
            <div class="toptitle">
                <span id="showClass">牛奶/酸奶<img class="h-ico" src="../../../public/assets/img/list/h_ico.png"/></span>
            </div>
            <section class="sortbar">
                <div class="sortMain">
                    <div class="o-complex">综合</div>
                    <div class="o-sales">销量</div>
                    <div class="o-news">新品</div>
                    <div class="o-price">价格<img src="../../../public/assets/img/list/def.png" /></div>
                </div>
                <div class="instock">筛选<img src="../../../public/assets/img/list/sy.png" /></div>
            </section>
        </header>
        <klg-list-con v-if="listInfo" :data="listInfo"></klg-list-con>
    </div>
</template>

<script>
    import list from "../../components/list/listcon"
    import listApi from "../../apis/listApi";
    export default {
        name: "list",
        data(){
            return{
                listInfo:[]
            }
        },
        components:{
            "klg-list-con":list
        },
        methods: {
            _initlISTInfo() {
                listApi.getData(data => {
                    this.listInfo = data;
                    console.log(data)
                })
            },
        },
        created() {
            this._initlISTInfo();
        }
    }
</script>

<style scoped>
    .list{
        background-color: rgb(240,240,240);
    }
    .lheder{
        width: 100%;
        position: fixed;
        top:0;
        background-color: white;
    }
    .toptitle{
        height:0.45rem;
        line-height: 0.45rem;
        font-size: 0.2rem;
        text-align: center;
        border-bottom: 0.005rem solid #dcdcdc;
    }
    .h-ico{
        width:0.1rem;
        height:0.1rem;
        margin-left: 0.02rem;
    }
    .sortbar{
        height:0.4rem;
        display: flex;
        text-align: center;
        line-height: 0.4rem;
    }
    .sortMain{
        width: 70%;
        display: flex;
        border-right: 0.005rem solid #dcdcdc;
    }
    .sortMain div{
        flex: 1;
    }
    .o-price img{
        width:0.09rem;
        height:0.12rem;
        vertical-align: middle;
        margin-left: 0.02rem;
    }
    .instock{
        width: 30%;
    }
    .instock img{
        width:0.12rem;
        height:0.12rem;
        vertical-align: middle;
        margin-left: 0.02rem;
    }
</style>