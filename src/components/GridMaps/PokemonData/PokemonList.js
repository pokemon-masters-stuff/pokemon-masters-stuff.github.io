let list = [
  { name: 'Pikachu' },
  { name: 'Torkoal' },
  { name: 'Infernape' },
  { name: 'Dewgong' }
];

let PokemonList = list.map((obj, index) => {
  return {
    ...obj,
    key: index,
    value: obj.name
  };
});

console.log('PokemonList', PokemonList);

export default PokemonList;
