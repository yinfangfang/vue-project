<template>
    <div>
        <div class="index" v-if="flag">
            <klg-iheader></klg-iheader>
            <klg-banner v-if="indexInfo" :data="indexInfo.banner"></klg-banner>
            <div class="link">
                <img :src="indexInfo.link"/>
            </div>
            <klg-today-act v-if="indexInfo.todayAct" :data="indexInfo.todayAct"></klg-today-act>
            <klg-today-you v-if="indexInfo.youxuan" :data="indexInfo.youxuan"></klg-today-you>
            <klg-footer></klg-footer>
        </div>
        <klg-search v-else></klg-search>
    </div>
</template>

<script>
    import indexApi from "../../apis/indexApi";
    import header from "../../components/index/header"
    import footer from "../../components/footer/footer"
    import banner from "../../components/index/banner"
    import todayAct from "../../components/index/todayAct";
    import todayYX from "../../components/index/todayYX";
    import search from "./search"
    export default {
        name: "index",
        components:{
            "klg-footer":footer,
            "klg-iheader":header,
            "klg-banner":banner,
            "klg-today-act":todayAct,
            "klg-today-you":todayYX,
            "klg-search":search
        },
        data(){
            return {
                indexInfo : [],
                flag:true
            }
        },
        methods: {
            _initIndexInfo() {
                indexApi.getData(data => {
                    this.indexInfo = data;
                    console.log(data)
                })
            },
        },
        created() {
            this._initIndexInfo();
        },
        mounted() {
            this.$bus.$on("toSearch",()=>{
                this.flag = false
            })
            this.$bus.$on("toback",()=>{
                this.flag = true
            })
        }
    }
</script>

<style scoped>
    .index{
        background-color: rgb(238,238,238);
    }
    .link img{
        width:3.75rem;
        height:1.1rem;
    }
</style>