<template>
    <div>
        <klg-search-header></klg-search-header>
        <klg-search-hot v-if="searchInfo" :data="searchInfo"></klg-search-hot>
        <klg-footer></klg-footer>
    </div>
</template>

<script>
    import searchApi from "../../apis/searchApi";
    import sheader from "../../components/search/sheader";
    import hotContent from "../../components/search/hotContent";
    import footer from "../../components/footer/footer"
    export default {
        name: "search",
        data(){
            return {
                searchInfo : []
            }
        },
        methods: {
            _initSearchInfo() {
                searchApi.getData(data => {
                    this.searchInfo = data;
                    console.log(data)
                })
            },
        },
        created() {
            this._initSearchInfo();
        },
        components:{
            "klg-search-header":sheader,
            "klg-search-hot":hotContent,
            "klg-footer":footer,
        },
    }
</script>

<style scoped>

</style>