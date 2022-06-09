




const person = {
    name:    'Lisa',
    age:      27,
    codeName: 'Bailarina'
}

const { name, age, codeName, power = 'Bailar'} = person

//console.log ( name )
//console.log ( age )
//console.log ( codeName )
//console.log ( power )

const createHero = ({ name, age, codeName, power }) => 
({
    id: 5435435,
    name,
    age,
    codeName,
    power,
})


console.log( createHero( person) )


