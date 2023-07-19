import {createApp} from 'vue'
import App from './view/View10.vue'

import {setGlobalOptions} from 'vue-request';

setGlobalOptions({
    //manual: true
})

createApp(App).mount('#app')
