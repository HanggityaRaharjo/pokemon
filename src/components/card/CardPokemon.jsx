import React from "react";
const typeColors = {
  normal: { backgroundColor: "#A8A878", textColor: "#000000" },
  fighting: { backgroundColor: "#C03028", textColor: "#FFFFFF" },
  flying: { backgroundColor: "#A890F0", textColor: "#000000" },
  poison: { backgroundColor: "#A040A0", textColor: "#FFFFFF" },
  ground: { backgroundColor: "#E0C068", textColor: "#000000" },
  rock: { backgroundColor: "#B8A038", textColor: "#000000" },
  bug: { backgroundColor: "#A8B820", textColor: "#FFFFFF" },
  ghost: { backgroundColor: "#705898", textColor: "#FFFFFF" },
  steel: { backgroundColor: "#B8B8D0", textColor: "#000000" },
  fire: { backgroundColor: "#F08030", textColor: "#FFFFFF" },
  water: { backgroundColor: "#6890F0", textColor: "#FFFFFF" },
  grass: { backgroundColor: "#78C850", textColor: "#000000" },
  electric: { backgroundColor: "#F8D030", textColor: "#000000" },
  psychic: { backgroundColor: "#F85888", textColor: "#FFFFFF" },
  ice: { backgroundColor: "#98D8D8", textColor: "#000000" },
  dragon: { backgroundColor: "#7038F8", textColor: "#FFFFFF" },
  dark: { backgroundColor: "#705848", textColor: "#FFFFFF" },
  fairy: { backgroundColor: "#EE99AC", textColor: "#000000" },
  unknown: { backgroundColor: "#FFFFFF", textColor: "#000000" },
  shadow: { backgroundColor: "#000000", textColor: "#FFFFFF" },
};
const CardPokemon = ({ detail }) => {
  const type = detail.types[0].type.name;
  const backgroundColor = typeColors[type]
    ? typeColors[type].backgroundColor
    : "#FFFFFF";
  const textColor = typeColors[type] ? typeColors[type].textColor : "#000000";
  return (
    <div
      className="relative  p-5 rounded-xl shadow-md hover:scale-105 transition-all duration-300"
      style={{ backgroundColor }}
    >
      <p
        className="text-3xl font-semibold uppercase"
        style={{ color: textColor }}
      >
        {detail.name}
      </p>
      <img
        src={detail.sprites.other.showdown.front_default}
        className="absolute top-0 right-0 max-w-[100px]"
        alt=""
      />
      <div className="grid grid-cols-3 gap-5">
        {detail?.types.map((item, index) => (
          <img key={index} src={`${item.type.name}.png`} alt="" />
        ))}
      </div>
      <div className="">
        {detail?.stats.map((item, index) => (
          <div className="flex gap-2 font-semibold text-sm" key={index}>
            <div className="w-32">
              <p className="uppercase">{item.stat.name}</p>
            </div>
            <p className=" uppercase">: {item.base_stat}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardPokemon;
