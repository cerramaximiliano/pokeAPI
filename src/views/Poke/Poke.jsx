import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";

function Poke () {
    const [ pokes, setPokes ] = useState([]);

    const fetchData = async () => {
        try {
            const result = await axios('https://pokeapi.co/api/v2/pokemon?limit=10');
            const { results } = result.data;
      
        const pokemonData = await Promise.all(results.map(async (pokemon) => {
            const getPokemon = await axios(pokemon.url);
            return getPokemon.data;
          }));
          setPokes(pokemonData);
        } catch (error) {
          console.log(error);
        }
      };
      
      useEffect(() => {
        fetchData();
      }, []);


      const handleSort = (sortType) => {
        const sortedPokes = [...pokes];  
        sortedPokes.sort((a, b) => {
          if (sortType === 'weight') return a.weight - b.weight;
          if (sortType === 'height') return a.height - b.height;
          return a.id - b.id;
        });
        setPokes([...sortedPokes]);
      };

    return (
        <>
            <div className="flex justify-around mt-5 mb-5">
              <button className="bg-transparent border-2 border-yellow-600 rounded-lg px-3 py-2 text-yellow-400 cursor-pointer hover:bg-yellow-600 hover:text-yellow-200" onClick={() => handleSort('id')}>Sort by ID</button>
              <button className="bg-transparent border-2 border-yellow-600 rounded-lg px-3 py-2 text-yellow-400 cursor-pointer hover:bg-yellow-600 hover:text-yellow-200" onClick={() => handleSort('weight')}>Sort by Weight</button>
              <button className="bg-transparent border-2 border-yellow-600 rounded-lg px-3 py-2 text-yellow-400 cursor-pointer hover:bg-yellow-600 hover:text-yellow-200" onClick={() => handleSort('height')}>Sort by Height</button>
            </div>
            <div className="flex flex-row flex-wrap gap-5 justify-center mb-5">
              {
                  pokes.map((pokemon, i) => {
                      return <Card key={i} id={pokemon.id} name={pokemon.name} image={pokemon.sprites.front_default} height={pokemon.height} weight={pokemon.weight}/>
                  })
                  }
            </div>

            <Footer></Footer>

        </>
    )
};


export default Poke;