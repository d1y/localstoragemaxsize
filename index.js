module.exports = (testKey)=> new Promise(res=> {
  let key = testKey ? testKey : 'test'
    if (!window) return false
    //判断浏览器是否支持localStorage
    if (!window.localStorage) {
      // console.log('当前浏览器不支持localStorage!')
      return false
    }
    let test = '0123456789'
  
    //递归加到10kb
    const add = function (num) {
      num += num
      if (num.length == 10240) {
        test = num
        return
      }
      add(num)
    }
  
    add(test)
  
    let sum = test
    const show = setInterval(function () {
      //每次增加10kb
      sum += test
      try {
        window.localStorage.removeItem(key)
        window.localStorage.setItem(key, sum)
        //控制台输出当前大小（kb）
        // console.log(sum.length / 1024 + 'KB')
      } catch (e) {
        //如果大小超出范围setItem会报异常 这时就是超出最大限制
        // console.log(sum.length / 1024 + 'KB超出最大限制')
        res(sum.length / 1024)
        //清除定时
        clearInterval(show)
      }
    }, 0.1)
})