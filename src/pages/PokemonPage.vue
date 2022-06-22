<template>

    <div class="game">
        <h1>¿Quien es este pokemon?</h1>
        <PokemonPicture :pokemonId="53" :showPokemon="true" />
        <PokemonOptions :pokemons="pokemonArr"/>

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
        pokemonArr: []
        }
    },
    methods: {
        async mixPokemonArr() {
            this.pokemonArr = await getPokemonOptions()
            console.log(this.pokemonArr)
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
