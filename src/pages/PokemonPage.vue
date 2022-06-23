<template>

<h1 v-if="!pokemon">Espere por favor...</h1>

<div v-else>
    <div class="pokemon">
        <h1>¿Quien es este pokemon?</h1>

        <PokemonPicture 
        :pokemonId=" pokemon.id " 
        :showPokemon="showPokemon" 
        
        />

        <PokemonOptions 
            :pokemons="pokemonArr"
            @selection="checkAnswer"
        />

        <template v-if="showAnswer">
        <h2 class="fade-in" >{{ message }}</h2>
        <button @click="newGame">
            Nuevo Juego
        </button>
        </template>
    
    </div>
</div>
  
</template>

<script>
import PokemonOptions from '@/components/PokemonOptions'
import PokemonPicture from '@/components/PokemonPicture'

import getPokemonOptions from '@/assets/helpers/getPokemonOptions'

export default {
    components: {PokemonOptions, PokemonPicture },
    data() {
        return {
        pokemonArr: [],
        pokemon: null,
        showPokemon: false,
        showAnswer: false,
        message: ''
        }
    },
    methods: {
        async mixPokemonArr() {
            this.pokemonArr = await getPokemonOptions()

           const rndInt = Math.floor( Math.random() * 4 )
            this.pokemon = this.pokemonArr[ rndInt ]
        },
        checkAnswer( selectedId ) {
            this.showPokemon = true
            this.showAnswer = true

            if( selectedId === this.pokemon.id ) {
                this.message = `Correcto,${ this.pokemon.name}`
            }else {
                this.message = `Oops, era ${ this.pokemon.name}`
            }
        },
        newGame() {
            this.showPokemon = false
            this.showAnswer  = false
            this.pokemonArr  = []
            this.pokemon     = null
            this.mixPokemonArr()

        }
    },
    mounted() {
        this.mixPokemonArr()
    }
}

</script>



<style>


h2 {
    margin-right: -5%;
    margin-top: opx;
}
.wait {
    display: flex;
    align-content: center;
    flex-direction: column;
    align-items: center;
}
.game {
    display: flex;
    align-content: center;
    flex-direction: column;
    align-items: center;
}
.game img {
    margin: auto 10px;
}
button {
    font-size: 1em;
    padding: 1em 2em;
    /* margin-left: 100vw; */
    margin-top: 0px;
    margin-right: -5%;
    -webkit-appearance: none;
    appearance: none;
    background-color: #34495e;
    color: #fff;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    position: relative;
    transition: all;
} 
button:hover {
    /* color: #000; */
    background-color: #6a5acd;
    transition: backgroud-color ease-in 0.25s, color ease-in 0.25s;
}


</style>
