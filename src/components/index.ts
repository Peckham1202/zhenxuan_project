import { App, Component } from 'vue';
import SvgIconVue from './SvgIcon.vue';

const allComponents: Record<string, Component> = { SvgIconVue };

export default {
  install(app: App) {
    // app
    Object.keys(allComponents).forEach((key) => {
      app.component(key, allComponents[key]);
    });
  },
};
