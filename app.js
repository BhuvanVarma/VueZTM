const vm = Vue.createApp({
    data(){
        return {
            firstName: 'Bhuvan',
            lastName: 'Varma'
        }
    },
    methods: {
        fullName(){
            return `${this.firstName} ${this.lastName.toUpperCase()}`
        }
    }
}).mount('#app')

setTimeout(() => {
    vm.firstName = "Sonu"
}, 2000)