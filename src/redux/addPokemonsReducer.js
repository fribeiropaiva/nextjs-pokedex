const initialState = {};

export const addPokemons = (pokemons) => ({
  type: "ADD_POKEMONS",
  payload: pokemons
});

export const addPokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POKEMONS":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
