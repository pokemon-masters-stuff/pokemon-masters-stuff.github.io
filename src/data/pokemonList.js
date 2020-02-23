const listOfPokemonsWithId = [
  { name: 'Pikachu', id: 20002500, characterId: 18000000000 },
  { name: 'Torkoal', id: 20032401, characterId: 10029000000 },
  { name: 'Infernape', id: 20039200, characterId: 10006000000 },
  { name: 'Dewgong', id: 20008700, characterId: 10032000000 },
  { name: 'Haxorus', id: 20061201, characterId: 10092000000 },
  { name: 'Kingdra', id: 20038400, characterId: 10028000000 },
  { name: 'Serperior', id: 20049701, characterId: 10101000000 },
  { name: 'Vileplume', id: 20004501, characterId: 10008000000 },
  { name: 'Mew', id: 20000600, characterId: 10137000000 },
  { name: 'Metagross', id: 20037600, characterId: 10090000000 },
  { name: 'Charizard', id: 20015111, characterId: 10000000000 },
  { name: 'Palossand', id: 20082301, characterId: 10007000000 },
  { name: 'Liepard', id: 20051001, characterId: 10048000000 },
  { name: 'Houndoom', id: 20022901, characterId: 10062000000 },
  { name: 'Raichu', id: 20002661, characterId: 10098000000 },
  { name: 'Rotom', id: 20047911, characterId: 10106100000 },
  { name: 'Alakazam', id: 20006500, characterId: 10114000000 }
];

let pokemonNameList = listOfPokemonsWithId
  .map((obj, index) => {
    return {
      ...obj,
      key: index,
      value: obj.name,
      id: obj.id
    };
  })
  .sort((a, b) => {
    let x = a.value;
    let y = b.value;
    return x < y ? -1 : x > y ? 1 : 0;
  });

export { listOfPokemonsWithId, pokemonNameList };
