import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import { store } from '@/store'

import BaseIcon from '@/components/BaseIcon.vue'
import BaseInput from '@/components/BaseInput.vue'
import BaseSelect from '@/components/BaseSelect.vue'
import BaseButton from '@/components/BaseButton.vue'
import 'nprogress/nprogress.css'

import '@/assets/styles/reset.css'

const app = createApp(App)

app.component('BaseIcon', BaseIcon)
app.component('BaseInput', BaseInput)
app.component('BaseSelect', BaseSelect)
app.component('BaseButton', BaseButton)

app.use(router)
app.use(store)
app.mount('#app')
