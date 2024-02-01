import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../components/Card/Card";


function Poke () {
    const [ pokes, setPokes ] = useState([]);

    const fetchData = async () => {
        try {
            const result = await axios('https://pokeapi.co/api/v2/pokemon?limit=10');
            const { results } = result.data;
            console.log(results);
      
        const pokemonData = await Promise.all(results.map(async (pokemon) => {
            const getPokemon = await axios(pokemon.url);
            return getPokemon.data;
          }));
          console.log(pokemonData)
          setPokes(pokemonData);

        } catch (error) {
          console.log(error);
        }
      };
      
      useEffect(() => {
        fetchData();
      }, []);

    return (
        <>
            <div className="flex flex-row flex-wrap gap-5 justify-center">
              {
                  pokes.map((pokemon, i) => {
                      return <Card key={i} id={pokemon.id} name={pokemon.name} image={pokemon.sprites.front_default} height={pokemon.height} weight={pokemon.weight}/>
                  })
                  }
            </div>

            
        </>
    )
};


export default Poke;