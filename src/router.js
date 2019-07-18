import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Cats from './views/Cats.vue';
import Dogs from './views/Dogs.vue';
import Pets from './views/Pets.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cats',
      name: 'cats',
      component: Cats
    },
    {
      path: '/dogs',
      name: 'dogs',
      component: Dogs
    },
    {
      path: '/pets/:species/:id',
      name: 'pets',
      component: Pets
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
});
