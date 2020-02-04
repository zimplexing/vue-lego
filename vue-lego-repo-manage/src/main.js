// import store from './store';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueHighlightJS from 'vue-highlightjs';
import 'highlight.js/styles/github.css';

Vue.config.productionTip = false;
Vue.use(ElementUI, {
  size: 'small',
});
// Tell Vue.js to use vue-highlightjs
Vue.use(VueHighlightJS);

const appOptions = {
  render: h => h(App),
  router,
  // store,
};

Vue.config.productionTip = false;

export default appOptions;
