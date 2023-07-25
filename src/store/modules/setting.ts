//layout相关仓库
import { defineStore } from 'pinia'

const useLayoutSettingStore = defineStore('Setting', {
  state: () => {
    return {
      fold: false, // 用户控制菜单折叠还是收缩
      foldDelay: false, //文字延迟收缩
      refsh: false, //控制刷新效果
    }
  },
})
export default useLayoutSettingStore
