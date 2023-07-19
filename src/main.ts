import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store'
const app=createApp(App)
app.directive('lazy',{
  mounted(el,binding){
    
    window.addEventListener('load',()=>{
      
      if(el.firstChild&&el.firstChild.tagName=='IMG'){
        el.firstChild.src=binding.value
      }else{
        el.style.backgroundImage=`url(${binding.value})`
      }
    })
    el.addEventListener('load',()=>{
      el.firstChild.alt='加载中'
    })
  }
})
app.use(store).mount('#app')
