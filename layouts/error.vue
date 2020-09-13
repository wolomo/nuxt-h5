<template>
    <div>
        <h1 v-if="error.statusCode">{{error.message}}</h1>
        <h1 v-else>异常哦~</h1>
        <button @click="$router.replace('/')">跳转到首页</button>
    </div>
</template>

<script>
    export default {
        name: "error",
        props:["error"]
    }
</script>

<style scoped>

</style>