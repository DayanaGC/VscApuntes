
//import { owners } from './data/heroes'

import superHeroes from './data/heroes'


// getHeroById ( id )
//funciones de Flecha


const getHeroById = ( id ) => superHeroes.find( hero => hero.id === id)


console.log( getHeroById(2) ) //Spiderman



//getHeroesByOwner 'DC', 'Marverl'
const getHeroesByOwner = ( owner ) => superHeroes.filter( hero => hero.owner === owner)
console.log( getHeroesByOwner('Marvel') )







