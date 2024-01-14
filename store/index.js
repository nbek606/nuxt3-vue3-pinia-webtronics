import { defineStore } from 'pinia'

import { actions, state, getters } from './storeService'

export const useStore = defineStore('store', {
  state: () => ({ ...state }),
  actions: { ...actions },
  getters: { ...getters },
  persist: {
    paths: ['auth', 'user']
  },
})