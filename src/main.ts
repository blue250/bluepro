import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store'
const app=createApp(App)
app.directive('lazy',{
  mounted(el,binding){
    
    window.addEventListener('load',()=>{
      // console.log(el.firstChild,binding,vnode,'111');
      // if(el.firstChild.)

      if(el.firstChild.tagName=='IMG'){
        el.firstChild.src=binding.value
      }else{
        console.log(binding.value,'binding.value');
        
        el.style.backgroundImage=`url(${binding.value})`
        console.log(el,el.style);
      }
    })
    el.addEventListener('load',()=>{
      el.firstChild.alt='加载中'
    })
  }
})
app.use(store).mount('#app')
