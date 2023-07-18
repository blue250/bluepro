<template>
  <div class="About" id="about" :style="{'height':'calc('+store.getters.HomeHeight+')'}">
    <div style="text-align: center;width: 200px;margin: 0 auto 0;overflow: hidden;">
      <img src="@/assets/img/dog.jpg" alt="" srcset="" style="width: 200px">
    </div>
    <div style="text-align: center;">
      <h1>关于 blue250</h1>
      <h3>前端开发工程师</h3>
      <div class="AboutInfo">🖐 嘿，我叫 刘浠贤，我是一名前端开发人员 👨‍💻， 🏠住在 <span class="KeepWord">山东</span>。 大多数情况下，我会使用<span style="color:red">vue2、vue3、ts</span>处理一些<span class="KeepWord">网站🕸</span> 和<span class="KeepWord">移动端📱。有<span style="color: red;">查阅源码</span>🙃的能力，</span>业余爱好喜欢打游戏🎮，也一直在减肥与长胖之间循环💦。努力成为一个强壮💪的程序员🧠</div>
    </div>
    <div style="text-align: center;margin-top: 20px;">
      <h1>关于 这个页面</h1>
      <div class="AboutInfo">如上面所说，这个页面就是使用 <span style="color: red;" class="KeepWord">vue3、vite、ts</span> 所写💻。大多数问题通过<span style="color: red;" class="KeepWord">翻阅源代码</span>与查看官方文档解决</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import {useStore} from 'vuex'
  const store=useStore()
</script>

<style lang="less">
  .About{
    justify-content: center;
    background-image: url('@/assets/img/background.jpg');
    background-size: 170%;
    background-position: center;
    .AboutInfo{
      font-size: 28px;
      width: 60%;margin: 20px auto 0;
    }
  }

  @media screen and (max-width:992px){
    .About{
    background-size: 300%;
      .AboutInfo{
        font-size: 18px;
      width: 95%;margin: 20px auto 0;
    }
    }

}

</style>