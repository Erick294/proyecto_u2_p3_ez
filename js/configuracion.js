console.log(Vue)

const app = Vue.createApp({
    template: `
    <h2>Hola mundo!</h2>
    {{1+1}}
    `
})

app.mount('#myApp')