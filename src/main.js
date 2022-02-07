let html = document.querySelector("#html")
let style = document.querySelector("#style")
let string = `/* 你好，我是Bumble
* 接下来我演示一下我的前端功底
* 首先准备一个div
**/
#div1{
  border: 1px solid red;
  width: 200px;
  height: 200px;
}
/* 接下来把div变成一个太极图
* 注意看好了
* 首先，把div变成一个圆
**/
#div1{
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
  border: none;
}
/* 太极图是阴阳形成的
* 一黑一白
**/
#div1{
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 中间部分加两个圆 */
#div1::before{
  width: 100px;
  height: 100px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background: #000;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
  width: 100px;
  height: 100px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`
let string2 = ""
let n = -1

let step = () => {
  n = n + 1
  setTimeout(() => {
    if (string[n] === '\n') {
      // 如果是回车，就增加html的回车
      string2 += '<br>'
    }else if (string[n] === ' ') {
      string2 += '&nbsp;'
    }else{
      // 如果不是回车，就照搬
      string2 += string[n]
    }
    html.innerHTML = string2
    style.innerHTML = string.substring(0,n)
    // 滚动条始终滚到最下方
    window.scrollTo(0,99999)
    html.scrollTo(0,99999)
    if (n < string.length - 1) {
      step() 
    }
  },50)
}
step()