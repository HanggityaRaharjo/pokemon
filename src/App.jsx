import { useEffect, useState } from "react";
import { GetAllDataPokemon } from "./utils/ApiHandler";
import CardPokemon from "./components/card/CardPokemon";

export default function App() {
  const [pokemonData, setPokemonData] = useState([]);
  console.log(pokemonData);
  useEffect(() => {
    (async () => {
      const response = await GetAllDataPokemon({
        offset: 0,
        limit: 20,
        image: true,
      });
      setPokemonData(response.results);
    })();
  }, []);
  return (
    <main className="p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {pokemonData &&
          pokemonData.map((item, index) => (
            <CardPokemon key={index} detail={item.detail} />
          ))}
      </div>
    </main>
  );
}
