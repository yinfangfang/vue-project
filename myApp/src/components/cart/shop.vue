<template>
    <div class="shop-group-item">
        <div class="shop-name">
            <input type="checkbox"
                   class="check goods-check shopCheck" v-model="data.checked" @change="pSelectAll(sid)">
            <h4>
                <a href="#">{{data.shopName}}</a>
            </h4>
            <div class="coupons">
                <span>领券</span>
                <em>|</em>
                <span>编辑</span>
            </div>
        </div>
        <lm-cart-products-list @iAll="iAll" v-if="data.products" :data="data.products" :sid="sid"></lm-cart-products-list>
        <div class="shopPrice">
            本店总计：
            ￥<span class="shop-total-amount ShopTotal">{{data|shopTotalPrice}}</span>
        </div>


    </div>
</template>

<script>
    import list from "./products/list"
    export default {
        name: "shop",
        props:["data","sid"],
        components:{
            "lm-cart-products-list":list
        },
        methods:{
            pSelectAll(sid){
                this.$emit("sAll",sid)
            },
            iAll(sid){
                this.$emit("iAll",sid)
            }
        },
        filters:{
            shopTotalPrice(data){
                let total = 0
                data.products.forEach((item,pid)=>{
                    if(item.checked == true){
                        total += item.price*item.qal
                    }
                })
                return total
            }
        }
    }
</script>

<style scoped>

</style>