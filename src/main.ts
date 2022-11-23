import { createApp } from 'vue'
import App from './App.vue'
import 'vfonts/Lato.css'
import 'normalize.css'
import './styles/index.scss'
import { createLogger } from 'vue-logger-plugin'
import router from './router'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(
  createLogger({
    level: import.meta.env.PROD ? 'error' : 'debug',
    callerInfo: true,
  }),
)
app.mount('#app')
