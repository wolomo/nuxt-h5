<template>
  <div class="container">
    <div>
        111111111
    </div>
  </div>
</template>

<script>
import middleware from "../.nuxt/middleware";

export default {
    //SSR   无法得到windows对象
    // 中间件
    middleware(context){
        // console.log(context)
        console.log("middleware page")
    },
    // 参数有效性
    validate({params,query}){
      console.log("validate")
        return true
    },
    // 读数据，返回组件
    asyncData(context){
        console.log("asyncData")
    },
    // 读数据，返回vuex
    fetch(){
        return{
            b:1
        }
    },
    //SSR &CSR
    beforeCreate(){
        console.log("beforeCreate")
    },
    created(){
        console.log("created")
    },
    //CSR  无法得到服务端对象context
    // 可以得到windows，this
    data(){
        return{
            a:1
        }
    },
    mounted() {
        console.log("mounted")
    },
    updated() {
        console.log("updated")
    }

}
</script>

<style>
  .title{

  }

</style>
