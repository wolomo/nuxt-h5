/**

 * @author zhouzhuang5

 * @date 2020/9/11 15:49

 */
export  default  function ({$axios,redirect}) {
  $axios.onRequest((config => {
    console.log("请求前"+config.url)
  }))
  $axios.onResponse(response => {
    const code = response.data.code
    if (code === 0) {
      return response
    } else {
      console.error(code)
    }

  })

}
