import { render, screen } from "@testing-library/react";
import { CardsList } from ".";
import axios from "axios";
import "@testing-library/jest-dom";

jest.useRealTimers();

describe("Cards list", () => {
  test("check if number of cards is equal to number of fetched pokemons", async () => {
    const pokemons = await axios.get(`https://api.pokemontcg.io/v2/cards`);
    render(<CardsList cards={pokemons.data.data} />);
    const cards = screen.getAllByRole("article");
    // console.log(cards.length);
    expect(cards).toHaveLength(pokemons.data.data.length);
  });
});
