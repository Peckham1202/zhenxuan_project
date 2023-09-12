import { App, Component } from 'vue';
import SvgIconVue from './SvgIcon.vue';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

const allComponents: Record<string, Component> = {
  SvgIconVue,
  ...ElementPlusIconsVue, //所有的 element-plus 提供的 icon组件 集
};

export default {
  install(app: App) {
    // app
    console.log(allComponents);

    //注册所有的组件
    for (const [key, component] of Object.entries(allComponents)) {
      app.component(key, component);
    }
  },
};
