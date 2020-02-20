let list = [
  { name: 'Pikachu', id: 20002500 },
  { name: 'Torkoal', id: 20032401 },
  { name: 'Infernape', id: 20039200 },
  { name: 'Dewgong', id: 20008700 },
  { name: 'Haxorus', id: 20061201 },
  { name: 'Kingdra', id: 20038400 },
  { name: 'Serperior', id: 20049701 },
  { name: 'Vileplume', id: 20004501 },
  { name: 'Mew', id: 20000600 },
  { name: 'Charizard', id: 20015111 },
  { name: 'Metagross', id: 20037600 }
];

let pokemonList = list.map((obj, index) => {
  return {
    ...obj,
    key: index,
    value: obj.name,
    id: obj.id
  };
});

export default pokemonList;
