import pokemonNameListByMonsterBaseId from './pokemonNameListByMonsterBaseId';

const monsterBaseIdList = [
  '20002500',
  '20032400',
  '20039200',
  '20008700',
  '20061200',
  '20023000',
  '20049700',
  '20004501',
  '20015100',
  '20037600',
  '20000600',
  '20082300',
  '20051000',
  '20022900',
  '20002600',
  '20047911',
  '20006500',
  '20057900',
  '20073400',
  '20028400',
  '20080601',
  '20086700',
  '20073200',
  '20058100',
  '20044800',
  '20044501',
  '20035001',
  '20020801',
  '20047500',
  '20012100',
  '20038900',
  '20054200',
  '20039500',
  '20031900',
];

const getPokemonNameList = (language) =>
  monsterBaseIdList
    .map((monsterBaseId, index) => {
      return {
        key: index,
        name: pokemonNameListByMonsterBaseId[monsterBaseId]['en'],
        value: pokemonNameListByMonsterBaseId[monsterBaseId][language], // value changes as language changes. name stays the same so old links and saves are compatible
      };
    })
    .sort((a, b) => {
      let x = a.value;
      let y = b.value;
      return x < y ? -1 : x > y ? 1 : 0;
    });

export default getPokemonNameList;
