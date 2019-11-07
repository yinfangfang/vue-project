<template>
    <div class="hot-content">
        <div class="hot-search-content" :key="sid" v-for="(con,sid) in data.content">
            <h4 class="hot-search-title">{{con.title}}</h4>
            <div class="hot-search-list clear">
                <span @click="changeStyle(sid,cid)" class="search-content" :key="cid" v-for="(c,cid) in con.list" :class="{ hot:cid==current && sid == part}">{{c.hotSearch}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "hotContent",
        props:["data"],
        data(){
            return{
                part:0,
                current:5
            }
        },
        methods:{
            changeStyle(sid,cid){
                this.part = sid,
                this.current = cid
            }
        }
    }
</script>

<style scoped>
    .hot-content{
        width:3.5rem;
        margin: 0 auto;
    }
    .hot-search-content{
        padding-top:0.2rem;
    }
    .hot-search-title{
        padding-left: 0.1rem;
    }
    .search-content{
        float: left;
        display: block;
        color: #6d6d6d;
        font-size: 0.93em;
        line-height: 2.5em;
        padding: 0 12px;
        border-radius: 3px;
        margin: 10px 0 0 10px;
        background-color: #f3f5f6;
    }
    .clear:after{content:"";display:block;clear:both;height:0;overflow:hidden;visibility:hidden;}
    .hot{
        color: #c4193f;
        background-color: #fbe9e9;
    }
</style>