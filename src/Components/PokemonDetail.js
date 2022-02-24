import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const PokemonDetail = () => {
  const { id } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState([]);
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => {
        setPokemonDetails(res.data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);
  return (
    <div className="container">
      <div>
        <h1>
          {pokemonDetails?.forms && pokemonDetails?.forms[0]?.name} Pokemon
          Abilities
        </h1>
        <ul>
          {pokemonDetails?.abilities?.map((item, index) => {
            return (
              <li key={index}>
                <h3>{item?.ability?.name}</h3>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h1>
          {pokemonDetails?.forms && pokemonDetails?.forms[0]?.name} Pokemon
          Sprites
        </h1>
        <ul>
          <li>
            <img
              src={pokemonDetails?.sprites?.back_default}
              alt="back_default"
            />
          </li>
          <li>
            <img src={pokemonDetails?.sprites?.back_female} alt="back_female" />
          </li>
          <li>
            <img src={pokemonDetails?.sprites?.back_shiny} alt="back_shiny" />
          </li>
          <li>
            <img
              src={pokemonDetails?.sprites?.back_shiny_female}
              alt="back_shiny_female"
            />
          </li>
          <li>
            <img
              src={pokemonDetails?.sprites?.front_default}
              alt="front_default"
            />
          </li>
          <li>
            <img
              src={pokemonDetails?.sprites?.front_female}
              alt="front_female"
            />
          </li>
          <li>
            <img src={pokemonDetails?.sprites?.front_shiny} alt="front_shiny" />
          </li>
          <li>
            <img
              src={pokemonDetails?.sprites?.front_shiny_female}
              alt="front_shiny_female"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PokemonDetail;
