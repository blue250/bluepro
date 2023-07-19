<template>
  <div class="About" id="about" :style="{'height':'calc('+store.getters.HomeHeight+')'}" v-lazy="bg1">
    <div style="text-align: center;margin: 0 auto 0;overflow: hidden;" class="AboutImg" v-lazy="img1">
      <img src="" alt="" srcset="" style="width: 100%">
    </div>
    <div style="text-align: center;">
      <div class="h1">关于 blue250</div>
      <div class="h3">前端开发工程师</div>
      <div class="AboutInfo">🖐 嘿，我叫 刘浠贤，我是一名前端开发人员 👨‍💻， 🏠住在 <span class="KeepWord">山东</span>。 大多数情况下，我会使用<span style="color:red">vue2、vue3、ts</span>处理一些<span class="KeepWord">网站🕸</span> 和<span class="KeepWord">移动端📱。有<span style="color: red;">查阅源码</span>🙃的能力，</span>业余爱好喜欢打游戏🎮，也一直在减肥与长胖之间循环💦。努力成为一个强壮💪的程序员🧠</div>
    </div>
    <div style="text-align: center;margin-top: 20px;">
      <div class="h1">关于 这个页面</div>
      <div class="AboutInfo">
        页面使用 
        <span style="color: red;" class="KeepWord">vue3、vite、ts</span>
         所写💻。技术点:<br/>
        <span style="color: red;" class="KeepWord">自定义指令v-lazy</span>，优化页面进入速度、
         <span style="color: red;" class="KeepWord">移动端适配</span>、
         <span style="color: red;" class="KeepWord">整屏滑动</span>。

         大多数问题通过
         <span style="color: red;" class="KeepWord">翻阅源代码</span>
         与查看官方文档解决
        </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import {useStore} from 'vuex'
  const store=useStore()
  const bg1=new URL('@/assets/img/background.jpg', import.meta.url).href
  const img1=new URL('@/assets/img/dog.jpg', import.meta.url).href
</script>

<style lang="less">
  .About{
    justify-content: center;
    // background-image: url('@/assets/img/background.jpg');
    background-size: 170%;
    background-position: center;
    .h1{
      font-size: 32px;
    }
    .h3{
      font-size: 19px;
    }
    .AboutImg{
      width: 200px;
    }
    .AboutInfo{
      font-size: 28px;
      width: 60%;margin: 20px auto 0;
    }
  }

  @media screen and (max-width:992px){
    .About{
    background-size: 300%;
    .AboutImg{
      width: 120px;
    }
      .AboutInfo{
        font-size: 18px;
      width: 95%;margin: 20px auto 0;
    }
    }

}
  @media screen and (max-width:768px){
    .About{
    .h1{
      font-size: 26px;
    }
    .h3{
      font-size: 18px;
    }
    }

}

</style>