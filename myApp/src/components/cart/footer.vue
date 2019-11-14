<template>
    <div class="account">
        <div class="cart-check">
            <input type="checkbox" class="check cartCheck" v-model="data.checked" @change="selectAll">
            <span>全选</span>
        </div>
        <div class="topAccount">
            <span>合计：￥<span>{{data.totalMoney}}</span></span>
            <button>结算</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "kfooter",
        props:["data"],
        methods:{
            selectAll(){
                this.$emit("cAll")
            }
        }
    }
</script>

<style scoped>
    .account{
        position: fixed;
        bottom: 0rem;
        display: flex;
        justify-content: space-between;
        background: #fff;
        height: 0.5rem;
        border-top: 0.005rem solid #ccc;
        width: 100%;
        line-height: 0.5rem;
        padding: 0 0.1rem;
        font-size: 0.14rem;
    }
    .cart-check{
        display: flex;
        align-items: center;
    }
    .topAccount span span{
        color: orangered;
    }
    .topAccount button{
        width: 1rem;
        height: 0.5rem;
        color: #fff;
        background: red;
        margin-left: 0.05rem;
        font-size: 0.16rem;
        letter-spacing: 0.02rem;
    }
    .cartCheck{
        margin-right: 0.05rem;
    }
</style>