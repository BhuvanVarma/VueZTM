const vm = Vue.createApp({
    data(){
        return {
            firstName: 'Bhuvan',
            lastName: 'Varma',
            URL: "https://www.google.com",
            raw_url: '<a href="https://www.google.com">Google</a>',
            age: 23
        }
    },
    methods: {
        fullName(){
            return `${this.firstName} ${this.lastName.toUpperCase()}`
        },
        increment(){
            this.age++
        },
        updateLastName(event){
            this.lastName = event.target.value
        }
    }
}).mount('#app')

setTimeout(() => {
    vm.firstName = "Sonu"
}, 2000)