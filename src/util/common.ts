import store from '../store'

console.log(store.state,'1');

export const debounce=(fn:any,wait = 500,isImmediate = false)=>{
  var timerId:any = null;
  var flag = true;
  console.log('this');
  return function(this:any){
    
    var context = this
    var args = arguments
    clearTimeout(timerId )
    if(isImmediate ){
        if(flag){
            fn.apply(context,args)
            flag = false
        }
        timerId = setTimeout(function(){
            flag = true
        },wait)
    }else{
        timerId = setTimeout(function(){
            fn.apply(context,args)
        },wait)
    }
  }
}

export const throttle=(fn:any,wait = 500,isImmediate = false)=>{
  
  var flag = true;
  return function(this:any){
    if(flag == true){
      var context = this
      var args = arguments
      flag = false
      isImmediate && fn.apply(context,args)
      setTimeout(() => {
        !isImmediate && fn.apply(context,args)
        flag = true
      },wait)
    }
  }
}
export const SrcollToA=(a)=>{
  
  let height=document.getElementById(a)?.offsetTop!-store.state.Header
  console.log(document.getElementById(a)?.offsetTop,'1');
  window.scrollTo({
    top:height,
    behavior: "smooth", 
  })
  // document.getElementById(a)!.scrollIntoView({
  //   behavior: "smooth", 
  //   block: "end", inline: "nearest"
  //   // 定义动画过渡效果， "auto"或 "smooth" 之一。默认为 "auto"
  // }) 
}