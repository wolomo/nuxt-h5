<template>
    <div>
        <h2>详情</h2>
        <nuxt-link to="/shopIndex/shop/comment/4">评论详情</nuxt-link>
        <nuxt></nuxt>
    </div>
</template>

<script>
    export default {
        name: "_no",
        validate({params,query}){
            console.log(params,query)
            return typeof params.shopNo === 'number'
        }
    }
</script>

<style scoped>

</style>