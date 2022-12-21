const listaEstudiantes = []
nom = ""
apell = ""
dire = ""

const app = Vue.createApp({
        //Options API
        data() {
            return {
                //Propiedades reactivas
                lista: listaEstudiantes,
            }
        },
        methods: {
            //agregar elementos a listas
            agregarEstudiante(){
                nom = document.getElementById('nombre_estudiante').value
                apell = document.getElementById('apellido_estudiante').value
                dire = document.getElementById('direccion_estudiante').value

                this.lista.unshift({nombre: nom, apellido: apell, direccion: dire})

                resetear()
            }
        }
    })

function resetear() {
    document.getElementById('nombre_estudiante').value=''
    document.getElementById('apellido_estudiante').value=''
    document.getElementById('direccion_estudiante').value=''
}
    
app.mount('#myApp')