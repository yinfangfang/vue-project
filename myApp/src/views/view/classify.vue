<template>
    <div>
        <klg-cheader></klg-cheader>
        <klg-footer></klg-footer>
    </div>
</template>

<script>
    import header from "../../components/classify/header"
    import footer from "../../components/footer/footer"
    export default {
        name: "classify",
        components:{
            "klg-footer":footer,
            "klg-cheader":header
        }
    }
</script>

<style scoped>

</style>