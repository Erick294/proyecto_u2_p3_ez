const numeros = [1,2,3,4,5,6,7,8,9]
console.log(numeros)

const frases = [{texto:"El sufrimiento da sentido a la vida", autor:"Victor Frankl"},
                {texto:"¿Por qué tan serio?", autor:"The Joker"},
                {texto:"Tu también flotarás", autor:"It"},
                {texto:"Vayanse tontos", autor:"Gandalf"},
                {texto:"Construimos demasiados muros y no suficientes puentes", autor:"Isaac Newton"}]

console.log(frases)

//Options API
const app = Vue.createApp({
    data(){
        return{
            numeros: numeros,
            frases: frases
        }
    }
})

app.mount('#myApp2')