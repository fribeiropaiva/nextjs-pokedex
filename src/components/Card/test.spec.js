import { render, screen } from "@testing-library/react";
import { Card } from "./index";
import "@testing-library/jest-dom";

describe("Pokedex Cards", () => {
  test("Card renders completely", () => {
    const pokemon = {
      name: "Absol",
      images: {
        small: "https://images.pokemontcg.io/ex3/1.png"
      },
      types: ["Darkness"],
      id: "ex3-1"
    };

    render(<Card {...pokemon} />);

    const card = screen.getByRole("article");

    expect(card).toBeInTheDocument();

    // check if image was rendered
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();

    //check if pokemon name is correct
    const name = screen.getByText(`Name: ${pokemon.name}`);
    expect(name).toHaveTextContent("Name: Absol");

    //check if types are correct
    const types = screen.getByText(pokemon.types[0]);
    expect(types).toHaveTextContent("Type: Darkness");
  });
});
