<template>
    <div>
        <klg-cart-header></klg-cart-header>
        <klg-cart-footer></klg-cart-footer>
    </div>
</template>

<script>
    import header from "../../components/cart/header"
    import footer from "../../components/cart/footer"
    export default {
        name: "cart",
        components:{
            "klg-cart-header":header,
            "klg-cart-footer":footer,
        }
    }
</script>

<style scoped>

</style>