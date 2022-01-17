import { createStore } from 'vuex'

import * as user from './modules/user.js'
import * as event from './modules/event.js'
import * as notification from './modules/notification.js'

export const store = createStore({
  modules: {
    user,
    event,
    notification,
  },
  state: {
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community',
    ],
  },
})
