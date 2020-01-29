import Vue from 'vue';
import Router from 'vue-router';
import Main from '../pages/main';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/main/',
    },
    {
      path: '/main/',
      name: 'main',
      component: Main,
    },
  ],
});
