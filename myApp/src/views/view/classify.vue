<template>
    <div>
        <klg-cheader></klg-cheader>
        <section class="main">
            <klg-leftnav :data="classifyInfo.list"></klg-leftnav>
            <klg-rightlist :data="classifyInfo.list[id]"></klg-rightlist>
        </section>
        <klg-footer></klg-footer>
    </div>
</template>

<script>
    import classifyApi from "../../apis/classifyApi";
    import header from "../../components/classify/header"
    import footer from "../../components/footer/footer"
    import leftNav from "../../components/classify/leftNav"
    import rightList from "../../components/classify/rightList";
    export default {
        name: "classify",
        components:{
            "klg-footer":footer,
            "klg-cheader":header,
            "klg-leftnav":leftNav,
            "klg-rightlist":rightList
        },
        data(){
            return {
                classifyInfo : [],
                id:0
            }
        },
        methods: {
            _initIndexInfo() {
                classifyApi.getData(data => {
                    this.classifyInfo = data;
                    console.log(data)
                })
            },
            // dataNum(id){
            //     this.id = id
            // }
        },
        created() {
            this._initIndexInfo();
        },
        mounted() {
            this.$bus.$on("change",(id)=>{
                this.id = id
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