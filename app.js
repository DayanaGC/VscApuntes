const app = Vue.createApp({
    // template: `
    // <h1>Hola mundo</h1>
    // <p> Desde app.js </p>
    // `
    data() {
        return {
            quote: "Blackpink best gg",
            author: 'YG'
        }
    },
    methods: {
        changeQueote() {
            console.log('Hola mundo')
            this.author = 'YG Entertainment'

            this.capitalize()
        },
        capitalize() {
           this.quote = this.quote.toUpperCase() 
        }
    }

})

app.mount('#myApp')