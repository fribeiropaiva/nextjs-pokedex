import { Details } from "../../components/Details";
import axios from "axios";

export default function PokemonDetails({ pokemon }) {
  return <Details {...pokemon} />;
}

export async function getStaticPaths() {
  const pokemons = await axios.get(`https://api.pokemontcg.io/v2/cards`);

  const params = pokemons.data.data
    .map((pokemon) => {
      return {
        params: {
          id: pokemon.id
        }
      };
    })
    .slice(0, 8);

  return {
    fallback: true,
    paths: [...params]
  };
}

export async function getStaticProps(context) {
  const pokemonId = context.params.id;

  const pokemonInfo = await axios.get(
    `https://api.pokemontcg.io/v2/cards/${pokemonId}`
  );

  return {
    props: {
      pokemon: pokemonInfo.data
    }
  };
}
