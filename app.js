const vm = Vue.createApp({
    data(){
        return {
            firstName: 'Bhuvan',
            middleName: '',
            lastName: 'Varma',
            URL: "https://www.google.com",
            raw_url: '<a href="https://www.google.com">Google</a>',
            age: 23
        }
    },
    methods: {
        fullName(){
            return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`
        },
        increment(){
            this.age++
        },
        updateLastName(msg, event){
            console.log(msg)
            this.lastName = event.target.value
        },
        updateMiddleName(event){
            this.middleName = event.target.value
        }
    }
}).mount('#app')

setTimeout(() => {
    vm.firstName = "Sonu"
}, 2000)