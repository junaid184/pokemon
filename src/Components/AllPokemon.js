import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const AllPokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => {
        setPokemon(res.data.results);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  return (
    <div className="container">
      <h1>All Pokemons</h1>
      <ul>
        {pokemon.map((pokemons, index) => {
          return (
            <li key={index}>
              <Link to={`/pokemondetails/${index + 1}`}>
                <button type="button" className="btn btn-success my-3">
                  {pokemons.name}
                </button>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AllPokemon;
