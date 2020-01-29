import './set-public-path';
import singleSpaVue from 'single-spa-vue';
import appOptions from './main';
import Vue from 'vue';

// appOptions.store.commit('setSingleSpa', 'vue-lego-repo-manage');

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions,
});

const { bootstrap, mount, unmount } = vueLifecycles;

export { bootstrap, mount, unmount };
