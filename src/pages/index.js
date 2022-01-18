import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { CardsList } from "../components/CardsList";
import { Header } from "../components/Header";
import { addPokemons } from "../redux/addPokemonsReducer";

export default function Home(props) {
  const dispatch = useDispatch();
  const [pokemons, setPokemons] = useState(props.pokemons);

  useEffect(() => {
    dispatch(
      addPokemons({
        type: "ADD_POKEMONS",
        payload: props.pokemons
      })
    );
  }, []);

  function filterPokemon(chosenPokemon) {
    const updatedPokemons = pokemons.filter(
      (pokemon) => pokemon.name.toLowerCase() === chosenPokemon.toLowerCase()
    );

    setPokemons(updatedPokemons);
  }

  return (
    <>
      <Header filterPokemon={filterPokemon} />
      <CardsList cards={pokemons} />
    </>
  );
}

export async function getStaticProps() {
  const pokemons = await axios.get(`https://api.pokemontcg.io/v2/cards`);
  pokemons.data.data.sort((a, b) => (a.name < b.name ? -1 : 1));

  return {
    props: {
      pokemons: pokemons.data.data
    }
  };
}
