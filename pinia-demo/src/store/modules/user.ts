import { defineStore } from 'pinia'

const useUserStore = defineStore('user', {
    state: () => ({
        count: 1,
    }),
    getters: {
        doubleCount: (state) => state.count * 2,
    },
    actions: {
        increment() {
            this.count++;
        },
    },
})
export default useUserStore