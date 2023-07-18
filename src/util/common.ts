import store from "../store"

console.log(store.state, "1")

export const debounce = (fn: any, wait = 500, isImmediate = false) => {
  var timerId: any = null
  var flag = true
  console.log("this")
  return function (this: any) {
    var context = this
    var args = arguments
    clearTimeout(timerId)
    if (isImmediate) {
      if (flag) {
        fn.apply(context, args)
        flag = false
      }
      timerId = setTimeout(function () {
        flag = true
      }, wait)
    } else {
      timerId = setTimeout(function () {
        fn.apply(context, args)
      }, wait)
    }
  }
}

export const throttle = (fn: any, wait = 500, isImmediate = false) => {
  var flag = true
  return function (this: any) {
    if (flag == true) {
      var context = this
      var args = arguments
      flag = false
      isImmediate && fn.apply(context, args)
      setTimeout(() => {
        !isImmediate && fn.apply(context, args)
        flag = true
      }, wait)
    }
  }
}
const Stop=(timer:number,top:number,height:number)=>{
  clearInterval(timer)
  top = height
  store.commit("Top", top)
  store.commit("FrezzActive", false)
}
export const SrcollToA = (a) => {
  store.commit("FrezzActive", true)
  let height = document.getElementById(a)?.offsetTop! - store.state.Header
  store.commit("DomId", a)
  // debugger
  let top = store.state.Top
  let dir = "down"
  if (top < height) {
    dir = "down"
  } else {
    dir = "up"
  }
  let timer = setInterval(() => {
    if (dir == "down") {
      top += 50
    } else {
      top -= 50
    }
    store.commit("Top", top)
    if (dir == "down" && top >= height) {
      Stop(timer,top,height)
    }
    if (dir == "up" && top <= height) {
      Stop(timer,top,height)
    }
  }, 15)

  // window.scrollTo({
  //   top:height,
  //   behavior: "smooth",
  // })
  // document.getElementById(a)!.scrollIntoView({
  //   behavior: "smooth",
  //   block: "end", inline: "nearest"
  //   // 定义动画过渡效果， "auto"或 "smooth" 之一。默认为 "auto"
  // })
}
export const Origin = () => {
  let origin = "PC"
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    origin = "PE"
  } else {
    origin = "PC"
  }

  store.commit("Origin", origin)
  console.log(store.state.Origin)
}
