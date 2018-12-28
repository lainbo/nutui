import Vue from 'vue';
import VueRouter from 'vue-router';
import Conf from '../../src/config.json';
import vueg from 'vueg';
import 'vueg/css/transition-min.css';
import frontCover from './default.vue';
 

 const Index = () => import('./info.vue');
 const Intro = () => import('./page/intro.vue');
 const Start = () => import('./page/start.vue');
 const International = () => import('./page/international.vue');
 const Theme = () => import('./page/theme.vue');
 //const Update = () => import('./page/changelog.vue');

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    redirect: '/index'
  },
  {
    path:'/default',
    name:'frontcover',
    component:frontCover
    
  },
  {    
    path: '/index',
    name:'intr',
    components: {
      demonav: Index,
      main: Intro,     
    }
  },
  {    
    path: '/international',
    name:'international',
    components: {
      demonav: Index,
      main: International,     
    }
  },
  {    
    path: '/start',
    name:'start',
    components: {
      demonav: Index,
      main: Start,     
    }
  },
  {    
    path: '/theme',
    name:'theme',
    components: {
      demonav: Index,
      main: Theme,     
    }
  }
];
//组件md文件展示
Conf.packages.map(item => {
  if (item.showDemo === false) return;
  const pkgName =  item.name.toLowerCase();
  routes.push({
    path: '/' + item.name,
    components: {      
      demonav: Index,
      main: () => import('./view/' + pkgName + '.vue')
    },
    name: item.name
  });
});

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.path == '/index') {
      return null;
    } else {
      return { x: 0, y: 0 }
    }
  }
});





const options = {
  duration: '0.3', //转场动画时长，默认为0.3，单位秒
  firstEntryDisable: false, //值为true时禁用首次进入应用时的渐现动画，默认为false
  firstEntryDuration: '.4', //首次进入应用时的渐现动画时长，默认为.6
  forwardAnim: 'fadeInRight', //前进动画，默认为fadeInRight
  backAnim: 'fadeInLeft', //后退动画，默认为fedeInLeft
  sameDepthDisable: false, //url深度相同时禁用动画，默认为false
  tabs: [], //默认为[]，'name'对应路由的name,以实现类似app中点击tab页面水平转场效果，如tabs[1]到tabs[0]    ，会使用backAnim动画，tabs[1]到tabs[2]，会使用forwardAnim动画
  tabsDisable: false, //值为true时，tabs间的转场没有动画，默认为false
  shadow: false, //值为false，转场时没有阴影的层次效果
  disable: false, //禁用转场动画，默认为false，嵌套路由默认为true
  nuxt: false //若使用后端渲染框架Nuxt，需要将此设为true，默认为false
};

Vue.use(vueg, router, options);

export default router;
