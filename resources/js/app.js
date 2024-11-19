// import { createApp } from 'vue';
// import Mad from './components/IncrementCounter.vue';
//  // Import Element Plus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

// // Import Bootstrap CSS and JS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



// const app = createApp(Mad);

// // Use Element Plus globally
// app.use(ElementPlus);

// // Mount the app
// app.mount('#app');

import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
    return pages[`./Pages/${name}.vue`]
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(ElementPlus)
      .mount(el)
  },
})