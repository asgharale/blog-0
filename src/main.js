import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// style
import '@/assets/css/base.scss';
import '@/assets/css/vars.scss';


createApp(App).use(store).use(router).mount('#app')
