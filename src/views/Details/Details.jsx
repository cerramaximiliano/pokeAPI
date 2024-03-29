import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Detail from "../../components/Detail/Detail";
import Footer from "../../components/Footer/Footer";


function Details() {
  const { id } = useParams();
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(url);
        const pokemonData = response.data;
        console.log(pokemonData)
        setDetails(pokemonData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [url]);

  
  return (
    <>
      {details ? 
      <Detail name={details.name} base={details.base_experience} height={details.height} weight={details.weight} image={details.sprites.front_default} abilities={details.abilities}/>
        : <div>Results not Found</div>
      
      }
      <Footer></Footer>
    </>
  );
}

export default Details;