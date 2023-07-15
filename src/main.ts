import {createApp} from 'vue'
import App from './view/View1.vue'

import {setGlobalOptions} from 'vue-request';

setGlobalOptions({
    manual: true
})

createApp(App).mount('#app')
