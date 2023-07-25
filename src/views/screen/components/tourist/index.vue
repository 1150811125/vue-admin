<template>
  <div class="box">
    <div class="top">
      <p class="title">实时游客统计</p>
      <p class="bg"></p>
      <p class="right">
        可预约总量
        <span>99999</span>
        人
      </p>
    </div>
    <div class="number">
      <span v-for="(item, index) in people" :key="index">{{ item }}</span>
    </div>
    <div class="charts" ref="charts"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts'
//水球图echarts拓展插件
import 'echarts-liquidfill'
let people = ref('215908人')
//获取节点
let charts = ref()

onMounted(() => {
  //获取echarts类的实例
  let myecharts = echarts.init(charts.value)
  //设置实例的配置项
  myecharts.setOption({
    //标题组件
    title: {
      text: '水球图',
    },
    //x轴组件
    xAxis: {},
    yAxis: {},
    //系列：决定你展示什么样的图形图标
    series: {
      type: 'liquidFill', //系列
      data: [0.6, 0.4],
      waveAnimation: true, //动画
      animationDration: 3, //时长
      animationDurationUpdate: 0,
      radius: '90%',
      outline: {
        show: true,
        borderDistance: 8,
        itemStyle: {
          color: 'none', //外层颜色
          borderColor: '#294D99',
          borderWidth: 8,
          shadowBlue: 20,
          shadowColor: 'rgba(0,0,0,0.25)',
        },
      },
    },
    //布局组件
    grid: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
  })
})
</script>

<style scoped lang="scss">
.box {
  background: url(../../images/dataScreen-main-lb.png) no-repeat;
  background-size: 100% 100%;
  margin-top: 10px;

  .top {
    margin-left: 20px;
    .title {
      color: white;
      font-size: 20px;
    }
    .bg {
      width: 68px;
      height: 7px;
      background: url(../../images/dataScreen-title.png) no-repeat;
      background-size: 100% 100%;
      margin-top: 10px;
    }
    .right {
      float: right;
      color: white;
      font-size: 15px;
      span {
        color: yellowgreen;
        margin: 0 5px;
      }
    }
  }
  .number {
    margin-top: 30px;
    display: flex;
    padding: 10px;
    span {
      font-size: 20px;
      flex: 1;
      height: 55px;
      text-align: center;
      line-height: 55px;
      background: url(../../images/total.png) no-repeat;
      background-size: 100% 100%;
      color: #29fcff;
    }
  }
  .charts {
    width: 100%;
    height: 250px;
  }
}
</style>
