import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './store';
import './styles/main.scss';

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

/* eslint object-shorthand: 0, no-param-reassign: 0 */
Vue.directive('click-outside', {
  bind: (el, binding, vnode) => {
    el.clickOutsideEvent = (event) => {
      if (!(el === event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener('click', el.clickOutsideEvent);
  },
  unbind: (el) => {
    document.body.removeEventListener('click', el.clickOutsideEvent);
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
