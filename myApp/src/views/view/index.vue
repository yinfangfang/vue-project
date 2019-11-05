<template>
    <div>
        <klg-iheader></klg-iheader>
        <klg-banner v-if="indexInfo" :data="indexInfo.banner"></klg-banner>
        <div class="link">
            <img :src="indexInfo.link"/>
        </div>
        <klg-today-act v-if="indexInfo" :data="indexInfo.todayAct"></klg-today-act>
        <klg-footer></klg-footer>
    </div>

</template>

<script>
    import indexApi from "../../apis/indexApi";
    import header from "../../components/index/header"
    import footer from "../../components/footer/footer"
    import banner from "../../components/index/banner"
    import todayAct from "../../components/index/todayAct";
    export default {
        name: "index",
        components:{
            "klg-footer":footer,
            "klg-iheader":header,
            "klg-banner":banner,
            "klg-today-act":todayAct
        },
        data(){
            return {
                indexInfo : []
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
        }
    }
</script>

<style scoped>
    .link img{
        width:3.75rem;
        height:1.1rem;
    }
</style>