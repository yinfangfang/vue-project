<template>
    <div>
        <div class="classify" v-if="flag">
            <klg-cheader></klg-cheader>
            <section class="main">
                <klg-leftnav :data="classifyInfo.list"></klg-leftnav>
                <klg-rightlist :data="classifyInfo.list[id]"></klg-rightlist>
            </section>
            <klg-footer></klg-footer>
        </div>
        <klg-search v-else></klg-search>
    </div>

</template>

<script>
    import classifyApi from "../../apis/classifyApi";
    import header from "../../components/classify/header"
    import footer from "../../components/footer/footer"
    import leftNav from "../../components/classify/leftNav"
    import rightList from "../../components/classify/rightList"
    import search from "./search"
    export default {
        name: "classify",
        components:{
            "klg-footer":footer,
            "klg-cheader":header,
            "klg-leftnav":leftNav,
            "klg-rightlist":rightList,
            "klg-search":search
        },
        data(){
            return {
                classifyInfo : [],
                id:0,
                flag:true
            }
        },
        methods: {
            _initIndexInfo() {
                classifyApi.getData(data => {
                    this.classifyInfo = data;
                    console.log(data)
                })
            }
        },
        created() {
            this._initIndexInfo();
        },
        mounted() {
            this.$bus.$on("change",(id)=>{
                this.id = id
            })
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
    .main{
        height:100%;
        display: flex;
        margin-top:0.5rem;
        background-color: white;
    }
</style>