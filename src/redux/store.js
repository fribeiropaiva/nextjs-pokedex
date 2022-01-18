import { createStore } from "redux";
import { addPokemonsReducer } from "./addPokemonsReducer";

export const store = () => createStore(addPokemonsReducer);
