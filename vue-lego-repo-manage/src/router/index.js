import Vue from 'vue';
import VueRouter from 'vue-router';
import Edit from '../pages/edit';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'edit',
    component: Edit,
  },
];

const router = new VueRouter({
  // mode: 'history',
  routes,
});

export default router;
