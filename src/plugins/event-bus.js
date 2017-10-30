
import Vue from 'vue'

const bus = new Vue()

export { bus }

// reiceita de bolo para criar plugins
export default function install (Vue, options) {
  Object.defineProperty(Vue.prototype, '$bus', {
    get () {
      return bus
    }
  })
}

// import bus from '@/plugins/event-bus' //install()
// import { bus } from '@/plugins/event-bus' // objeto bus

// export default {
//     install(Vue, options) {
//         Vue.prototype.$broadcast = (event, payload) => bus.$emit(event, payload);
//         Vue.prototype.$listen = (event, fn) => bus.$on(event, fn);
//         Vue.prototype.$deafen = (event, fn) => bus.$off(event, fn);
//     }
// };
