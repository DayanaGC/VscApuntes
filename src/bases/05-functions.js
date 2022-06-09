




//function saludar( best gg) {
//   return `Blackpink ${ best gg }`
//}

//const saludar = ( xyz ) => {
//    return `Hola ${ xyz }`
//}

const saludar = (nombre = 'Lisa') => `Hola ${ nombre}`


const nombre = 'Jisoo'

//console.log(   saludar(nombre)    )



const getUser = () => ({ 
    uid:'ABCD123',
    username: 'Lisa Manoban01'
})
    

const heroes = [{
    id: 1,
    name: 'Batman'
},{
    id: 2,
    name: 'Superman'

}]

 
//const existe = heroes.some( (heroe ) => heroe.id === 3 );

const { name} = heroes.find( (heroe ) => heroe.id === 1 );

console.log(name)  