<template>
    <div>
        <h4>店铺</h4>
        <nuxt-link to="/shopIndex/shop/1?a=1&b=2">店铺01</nuxt-link>
        <nuxt-link :to="{name:'shopIndex-shop-shopNo',params:{shopNo:2},query:{a:5,b:6}}">店铺02</nuxt-link>
        <nuxt-link :to="{name:'shopIndex-shop-shopNo',params:{shopNo:3},query:{a:3,b:4}}">店铺3</nuxt-link>
        <Nuxt />
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>

</style>