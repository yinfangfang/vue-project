<template>
    <li>
        <div class="shop-info">
            <input type="checkbox"
                   class="check goods-check goodsCheck" v-model="data.checked" @change="iSelect(sid)"/>
            <div class="shop-info-img">
                <a href="#">
                    <img :src="data.pic"/>
                </a>
            </div>
            <div class="shop-info-text">
                <h4>{{data.title}}</h4>
                <div class="shop-brief">
                    <span>重量:{{data.weight}} | true</span>
                    <span>颜色:{{data.color}}</span>
                    <span>版本:{{data.ver}}</span>
                </div>
                <div class="shop-price">
                    <div class="shop-pices">
                        ￥<b class="price">{{data.price}}</b>
                    </div>
                    <div class="shop-arithmetic">
                        <a class="minus" @click="numChange(sid,pid,'reduce')">-</a>
                        <span class="num">{{data.qal}}</span>
                        <a class="plus" @click="numChange(sid,pid,'add')">+</a>
                    </div>
                </div>
            </div>
        </div>
    </li>
</template>

<script>
    export default {
        name: "item",
        props:["data","sid","pid"],
        methods:{
            iSelect(sid){
                this.$emit("iAll",sid)
            },
            numChange(sid,pid,flag){
                this.$bus.$emit("num",sid,pid,flag)
            }
        }
    }
</script>

<style scoped>

</style>