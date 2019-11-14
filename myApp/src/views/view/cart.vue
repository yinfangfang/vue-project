<template>
    <div>
        <klg-cart-header :data="cartInfo"></klg-cart-header>
        <klg-cart-shop @sAll="shopSelectAll" @iAll="itemSelect" :data="cartInfo"></klg-cart-shop>
        <klg-cart-footer @cAll="cartSelectAll" :data="cartInfo"></klg-cart-footer>
    </div>
</template>

<script>
    import header from "../../components/cart/header"
    import footer from "../../components/cart/footer"
    import shop from "../../components/cart/shop";
    import cartApi from "../../apis/cartApi";
    export default {
        name: "cart",
        components:{
            "klg-cart-header":header,
            "klg-cart-footer":footer,
            "klg-cart-shop":shop
        },

        data(){
            return {
                cartInfo : []
            }
        },
        methods: {
            _initIndexInfo() {
                cartApi.getData(data => {
                    this.cartInfo = data;
                })
            },
            cartSelectAll(){
                let checked = this.cartInfo.checked;
                console.log(checked);
                this.cartInfo.shops.forEach((shop,sid)=>{
                    shop.checked = checked
                    shop.products.forEach((item,pid)=>{
                        item.checked = checked
                    })
                })
                this.cartInfo.totalMoney = this._totalPrice();
                this.cartInfo.totalNum = this._totalNum();
            },
            shopSelectAll(sid){
                let checked = this.cartInfo.shops[sid].checked;
                // console.log(sid);
                this.cartInfo.shops[sid].products.forEach((item,pid)=>{
                    item.checked = checked
                })
                let cChecked = this.cartInfo.shops.every((shop,sid,sArr)=>{
                    return shop.checked == true
                })
                this.cartInfo.checked = cChecked
                this.cartInfo.totalMoney = this._totalPrice();
                this.cartInfo.totalNum = this._totalNum();
            },
            itemSelect(sid){
                let checked = this.cartInfo.shops[sid].products.every((item,pid,iArr)=>{
                    return item.checked == true
                })
                this.cartInfo.shops[sid].checked = checked
                let sChecked = this.cartInfo.shops.every((shop,sid,sArr)=>{
                    // console.log(shop.checked)
                    return shop.checked == true
                })
                this.cartInfo.checked = sChecked
                this.cartInfo.totalMoney = this._totalPrice();
                this.cartInfo.totalNum = this._totalNum();
            },
            _totalPrice(){
                let total = 0
                this.cartInfo.shops.forEach((shop,sid)=>{
                    shop.products.forEach((item,pid)=>{
                        if(item.checked == true){
                            total += item.price*item.qal
                        }
                    })
                })
                return total
            },
            _totalNum(){
                let totalNum = 0
                this.cartInfo.shops.forEach((shop,sid)=>{
                    shop.products.forEach((item,pid)=>{
                        if(item.checked == true){
                            totalNum += item.qal
                        }
                    })
                })
                return totalNum
            }
        },
        created() {
            this._initIndexInfo();
        },
        watch:{
            cartInfo:{
                handler(n){
                    let total = this._totalPrice()
                    this.cartInfo.totalMoney = total
                    let totalNum = this._totalNum()
                    this.cartInfo.totalNum = totalNum
                }
            },
            deep:true
        }
    }
</script>

<style scoped>

</style>