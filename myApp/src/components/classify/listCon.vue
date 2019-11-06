<template>
    <div class="right-list-con">
        <h3 class="title">{{data.classify}}</h3>
        <ul class="product-list">
            <li class="product" :key="pid" v-for="(pro,pid) in data.conList">
                <img :src="pro.img"/>
                <p>{{pro.name}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "listCon",
        props:["data"]
    }
</script>

<style scoped>
    .right-list-con{
        width: 100%;
        padding: 0.15rem 0rem;
        box-sizing: border-box;
        text-align: center;
    }
    .product-list{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .product-list .product{
        width:33%;
        padding:0.1rem 0rem;
    }
    .product-list .product img{
        width:100%;
        height:auto;
    }
</style>