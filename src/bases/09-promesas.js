
import {getHeroById} from './bases/08-imp-expo'


//console.log('Inicio')

//new Promise((resolve, reject) => {

//    console.log(' cuerpo de la promesa')
//    resolve('Promesa  resuelta ')

//})
//.then( console.log)
//.catch( console.log )

//console.log('FIn')

const getHeroByIdAsync = (id) => {
     return new Promise( (resolve, reject )=> {

     setTimeout(() => {

        const hero = getHeroById( id ) 

        if ( hero ){
        resolve( hero )
        }else {
           reject('Heroe no exiaste') 
        }

     }, 1000);

    });
}


getHeroByIdAsync(3)
    .then( h => {
        console.log(`El heroe es: ${h.name}`) 
    })
    .catch( console.log )



 