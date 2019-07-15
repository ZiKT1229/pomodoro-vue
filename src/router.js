import Vue from 'vue';
import Router from 'vue-router';
import Todolist from './views/Todolist.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'todolist',
      component: Todolist,
    },
    {
      path: '/analytics',
      name: 'analytics',
      component: () => import('./views/Analytics.vue'),
    },
    {
      path: '/setting',
      name: 'setting',
      component: () => import('./views/Setting.vue'),
    },
  ],
});
