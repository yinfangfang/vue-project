<template>
    <div class="payment-bar">
        <div class="all-checkbox">
            <input type="checkbox" class="check goods-check"/>
            全选
        </div>
        <div class="shop-total">
            <strong>
                合计：￥<i id="AllTotal" class="total"></i>
            </strong>
            <span>不含运费/税费</span>
        </div>
        <div href="#" class="settlement">结算</div>
    </div>
</template>

<script>
    export default {
        name: "cfooter",
    }
</script>

<style scoped>
    .payment-bar{
        overflow:hidden;
        width:100%;
        height:49px;
        position:fixed;
        bottom:0;
        border-top:1px solid #e0e0e0;
        background:#fff;
        display: flex;
    }
    .payment-bar .all-checkbox{
        width:10%;
        float:left;
        line-height:0.5rem;
        padding-left:0.01rem;
    }
    .payment-bar .shop-total{
        text-align: right;
        width:60%;
    }
    .payment-bar .shop-total strong{
        display:block;
        font-size:16px;
    }
    .payment-bar .shop-total span{
        display:block;
        font-size:12px;
    }
    .payment-bar .settlement{
        width:30%;
        height:0.5rem;
        line-height:0.5rem;
        text-align:center;
        color:#fff;
        font-size:0.16rem;
        background:#f23030;
    }
</style>