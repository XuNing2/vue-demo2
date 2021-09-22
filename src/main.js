import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 将创建的 App 搞个别名
const app = createApp(App)

// 使用路由配置
app.use(router)

app.use(ElementPlus)

// 挂载运行
app.mount('#app')


import ECharts from 'vue-echarts'
import { use } from "echarts/core";

// 手动引入 ECharts 各模块来减小打包体积
import {
  CanvasRenderer
} from 'echarts/renderers'
import {
  BarChart
} from 'echarts/charts'
import {
  GridComponent,
  TooltipComponent
} from 'echarts/components'

use([
  CanvasRenderer,
  BarChart,
  GridComponent,
  TooltipComponent
]);

// 全局注册组件（也可以使用局部注册）
app.component('v-chart', ECharts)

import Axios from 'axios';//引入axios
app.config.globalProperties.Axios=Axios //全局配置axios