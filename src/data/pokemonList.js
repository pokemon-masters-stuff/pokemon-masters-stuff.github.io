let list = [
  { name: 'Pikachu' },
  { name: 'Torkoal' },
  { name: 'Infernape' },
  { name: 'Dewgong' },
  { name: 'Haxorus' },
  { name: 'Kingdra' },
  { name: 'Serperior' },
  { name: 'Vileplume' },
  { name: 'Mew' },
  { name: 'Metagross' }
];

let pokemonList = list.map((obj, index) => {
  return {
    ...obj,
    key: index,
    value: obj.name
  };
});

export default pokemonList;
