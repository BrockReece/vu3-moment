import { createApp } from 'vue'
import App from './App.vue'
import moment from 'moment'
import VueMoment from './plugins/moment'
import './index.css'

createApp(App)
    .use(VueMoment, {
        moment, 
        formats: { default: 'LLLL', short: 'L' }
    })
    .mount('#app')
