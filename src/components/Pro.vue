<template>
  <div :style="{'height':'calc('+store.getters.HomeHeight+')'}" id="pro">
    <div class="pro scroll pro2" @wheel="test" @touchend="test">
      <!-- <div class="ProBox" style="background: #fff;" v-show="store.state.Origin=='PE'">1</div> -->
      <div v-for="(item,index) in ProList" :key="'pro'+index" class="ProBox" @click="ChosePro(item)">
      <div style="width: 100%;margin-bottom: 20px;border-radius: 5px;overflow: hidden;text-align: center;">
        <img :src="item.img" alt="" srcset="" style="max-width: 100%;" class="ProImg">
      </div>
      <h3>{{ item.title }}</h3>
      <div class="tag">{{ item.tag }}</div>
      <p style="color: #25252580;
    font-size: 16px;">{{item.info}}</p>
    </div>
    <mdialog :show="DialogShow" @close="DialogClose">
      <div class="Detail">
        <div class="Header">
          <img :src="DialogData.img" alt="" srcset="">
        </div>
        <h2 class="title">{{ DialogData.title }}</h2>
        <div style="text-align: center;margin: 20px auto;display: flex;flex-wrap: wrap;justify-content: center;">
          <span class="tags" v-for="(item,index) in DialogData.tags" :key="'tags'+index">{{ item }}</span>
        </div>
        <div>{{ DialogData.detail.info }}</div>
        <div v-if="DialogData.detail.imgs.length">
          <div v-for="(item,index) in DialogData.detail.imgs" :key="'detailimg'+index" style="padding: 20px 0;">
            <img :src="item" alt="" srcset="" style="width: 100%;">
          </div>
        </div>
      </div>
    </mdialog>
    </div>

  </div>

</template>

<script lang="ts" setup>
import { reactive,ref } from 'vue'
import {useStore} from 'vuex'
import mdialog from './dialog.vue'
const store=useStore()
const ProList=reactive([{
  img:new URL('@/assets/img/apright4.jpg',import.meta.url).href,title:'Apright',info:'亚太及大中华地区领先的企业支出管理应用云服务提供商。基于移动互联，大数据应用，混合云技术，通过费控佳（APright）企业支出管理平台全面解决企业的支出管理问题。',tag:'web 移动端',tags:['Vue','Element','Less','Npm'],detail:{info:'费控佳（APright）北京广赢佳科技有限公司是亚太及大中华地区领先的企业支出管理应用云服务提供商。 我们基于移动互联，大数据应用，混合云技术，通过费控佳（APright）企业支出管理平台全面解决企业的支出管理问题，让我们的客户“增收又增利”。',imgs:[new URL('@/assets/img/apright1.png',import.meta.url).href,new URL('@/assets/img/apright3.jpg',import.meta.url).href]}
},{
  img:new URL('@/assets/img/yund1.jpg',import.meta.url).href,title:'云顶之弈编辑/模拟器',info:'一款简单的云顶之弈编辑/模拟器，支持编辑棋子羁绊费用等，可以进行拖拽站位布局。目前还在开发中',tag:'web',tags:['Vue','Express','Mongodb','Less','Ts'],detail:{info:'云顶之弈编辑/模拟器,基础功能包括费用羁绊过滤，拖拽布局，自动统计羁绊信息。还有日志等功能，可以向后台添加修改删除日志(Express与Modgodb)。数据来自Roit官网数据龙。开发中、未上线',imgs:[new URL('@/assets/img/yund1.jpg',import.meta.url).href]}
},{
  img:new URL('@/assets/img/ssc1.png',import.meta.url).href,title:'三生菜',info:'提供农村老百姓生活必不可少的生活用品，如米面粮油，生鲜水果，日用品，五金等',tag:'移动端',tags:['Vue','Uniapp','Less'],detail:{info:'智慧电商平台。同时对接本地实体商家和服务性企业，例如药店，超市，五金日杂。已上线。',imgs:['img/ssc1.png']}
},{
  img:new URL('@/assets/img/repeat.png',import.meta.url).href,title:'更多❓',info:'还想查看其他项目？',tag:'❓',tags:['Vue','Uniapp','Less'],detail:{info:'其实我还有大屏与地图项目还有一些其他的web与移动端，但是因为已经很久了，所以没有截图，想了想还是不放出来了。想了解更多项目就问我本人吧。',imgs:[new URL('@/assets/img/repeat.png',import.meta.url).href]}
}])

let DialogData=reactive({img:'',title:'',info:'',tag:'',tags:[],detail:{info:'',imgs:[]}})

let DialogShow=ref(false)

const test=(e:any)=>{
  let a= document.getElementsByClassName('pro2')[0]
  if(a.scrollTop+a.clientHeight>=a.scrollHeight||(a.scrollTop==0)){
    e.cancelBubble=false
  }else{
    e.cancelBubble=true
  }
  console.log(a.scrollTop,a.clientHeight,a.scrollHeight,e,'e');
  
}

const ChosePro=(item:any)=>{
  Object.assign(DialogData,item)
  // DialogData=item
  DialogShow.value=true
}
const DialogClose=($event:boolean)=>{
  DialogShow.value=$event
}
</script>

<style lang="less">
  #pro{
    background: url('@/assets/img/repeat2.jpeg');
    padding: 10px 20px;
    .pro{
      // background: #fff;
      overflow: auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 992px;
    height: 100%;
    padding: 20px 0 0;
    margin: 0 auto;
    }
    // padding-top: 40px;

    .ProBox{
      background: #fff;
      border-radius: 20px;
      transition: all .3s;
      // float: left;
      width: 47%;
      padding: 20px;
      &:hover{
        box-shadow: 0 0 #0000, 0 0 #0000, 0 8px 30px #0000001f;
      }
      .ProImg{
        max-height: 210px;
      }
      .tag{
        margin: 20px 0;
        display: inline-block;
    background-color: #bae8e8;
    padding: 2px 8px;
    font-size: 14px;
    color: #fff;
    border-radius: 8px;
    line-height: 20px;
    font-weight: 700;
    letter-spacing: 1.4px;
      }
    }
    .Detail{
      .Header{
        overflow: hidden;
        height: 200px;
        img{
          width: 100%;
        }
      }
      .title{
        text-align: center;
      }
      &>h2,>div:not(.Header){
        width: 80%;
        margin: auto;
      }
      .tags{
        background-color: #eb9a04;
    padding: 2px 8px;
    font-size: 14px;
    color: #fff;
    border-radius: 8px;
    line-height: 20px;
    margin-right: 8px;
    margin-bottom: 8px;
      }
    }
  }
  @media screen and (max-width:768px){
    #pro{
      .pro{
    width: 100%;
    .ProBox{
      width: 90% !important;
      margin: 0 auto 20px !important;
    }
  }
    }

}
  @media screen and (max-width:992px){
    #pro{
      .pro{
    width: 100%;
    .ProBox{
      margin: 0 0 20px;
      // width: 90%;
    }
  }
    }

}
@media screen and (min-width:992px){
  #pro{
    .ProBox{
      margin: 0 0 20px;
    }
  }
}
</style>