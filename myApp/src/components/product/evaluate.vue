<template>
    <div>
        <div class="review-item" :key="index" v-for="(e,index) in data">
            <div class="review-pic">
                <img :src="e.userpic"/>
            </div>
            <div class="review-main">
                <div class="review-main-title">
                    <span>{{e.user}}</span>
                    <span>{{e.time}}</span>
                </div>
                <div>{{e.comment}}</div>
                <div class="picture">
                    <img :key="index" v-for="(i,index) in e.commentpic" :src="i.img"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "evaluate",
        props:["data"]
    }
</script>

<style scoped>
    .review-item{
        display: flex;
        justify-content: space-between;
    }
    .review-pic{
        width:15%;
    }
    .review-pic img{
        width:0.35rem;
        height:0.35rem;
    }
    .review-main{
        width:85%;
    }
    .review-main-title{
        display: flex;
        justify-content: space-between;
        color: #979797;
        margin-bottom: 0.05rem;
    }
    .picture img{
        width:30%;
        height:auto;
        margin-right: 0.05rem;
    }
</style>