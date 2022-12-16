console.log(Vue)

//Options API
const app = Vue.createApp({
    //template: `
    //<h2>Hola mundo!</h2>
    //<p>{{1+1}}</p>
    //`
    data(){
        //propiedades reactivas: datos que usamos dentro de la pagina web
        return{
            mensaje: 'Hola mundo',
            nombre: 'Erick',
            apellido: 'Zambrano'
        }
    },
    methods:{
        cambiarNombre(event){
            this.nombre = "Benito"
            console.log(event)
        },
        cambiarApellido(){
            this.apellido = "Juarez"
        }
    }
})

app.mount('#myApp')