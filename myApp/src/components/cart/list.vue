<template>
    <ul>
        <lm-cart-product-item @iAll="iAll" :data="item" :sid="sid" :pid="key" :key="key" v-for="(item,key) in data"></lm-cart-product-item>
    </ul>
</template>

<script>
    import item from "./item"
    export default {
        name: "list",
        props:["data","sid"],
        components:{
            "lm-cart-product-item":item,
        },
        methods:{
            iAll(sid){
                this.$emit("iAll",sid)
            }
        }
    }
</script>

<style scoped>

</style>