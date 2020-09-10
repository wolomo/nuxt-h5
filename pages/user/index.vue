<template>
    <div>

        <div class="text">
            我的

        </div>

        <van-tabbar v-model="active">
            <van-tabbar-item icon="search">首页</van-tabbar-item>
            <van-tabbar-item icon="search">分类</van-tabbar-item>
            <van-tabbar-item icon="setting-o">购物车</van-tabbar-item>
            <van-tabbar-item badge="3">
                <span>我的</span>
                <template #icon="props">
                    <img :src="props.active ? icon.active : icon.inactive" />
                </template>
            </van-tabbar-item>

        </van-tabbar>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return{
                active: 0,
                icon: {
                    active: 'https://img.yzcdn.cn/vant/user-active.png',
                    inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
                },
            }
        }
    }
</script>

<style scoped lang="scss">
    .text{
        font-size: .75rem;
    }
</style>
