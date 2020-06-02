import pokemonNameListByMonsterBaseId from '../data/pokemonNameListByMonsterBaseId';
import arrayOfAllGridedPokemon from '../data/allGridedPokemon.json';
import { shortenedMoveNameByAbilityId } from './constants';

export const getPokemonNameList = (language) =>
  arrayOfAllGridedPokemon
    .map((entry, index) => {
      return {
        key: index,
        name: pokemonNameListByMonsterBaseId[entry.monsterBaseId]['en'],
        value: pokemonNameListByMonsterBaseId[entry.monsterBaseId][language], // value changes as language changes. name stays the same so old links and saves are compatible
      };
    })
    .sort((a, b) => {
      let x = a.value;
      let y = b.value;
      return x < y ? -1 : x > y ? 1 : 0;
    });

// TO DO: REFACTOR
export const getFillColorByMoveType = ({ type, group }) => {
  let colorsByTypeDef = {
    statsBoost: '#66b6ec', // blue
    passive: '#fff04d', // yellow
    moveEffect: '#f24646', // red
    movePowerBoost: '#73d958', // green
    moveAccuracyBoost: '#73d958', // green
    syncBoost: '#d12deb', // purple
    // locked: '#dedbd3', // gray
  };
  let colorsByTypeId = {
    1: colorsByTypeDef.statsBoost,
    2: colorsByTypeDef.statsBoost,
    3: colorsByTypeDef.statsBoost,
    4: colorsByTypeDef.statsBoost,
    5: colorsByTypeDef.statsBoost,
    6: colorsByTypeDef.statsBoost,
    7: colorsByTypeDef.passive,
    8: colorsByTypeDef.moveEffect,
    9: colorsByTypeDef.movePowerBoost,
    10: colorsByTypeDef.moveAccuracyBoost,
  };
  let cellColor = colorsByTypeDef.syncBoost;

  if (group !== 3) {
    cellColor = colorsByTypeId[type];
  }

  return cellColor;
};

export const checkSelectabilityBasedOnSyncLv = (pokemon, cell, syncLevel) => {
  let selectable = true;

  if (syncLevel === '1') {
    if (
      pokemon === 'pikachu' ||
      pokemon === 'charizard' ||
      pokemon === 'dewgong' ||
      pokemon === 'infernape' ||
      pokemon === 'haxorus' ||
      pokemon === 'kingdra' ||
      pokemon === 'metagross' ||
      pokemon === 'houndoom' ||
      pokemon === 'raichu' ||
      pokemon === 'reuniclus' ||
      pokemon === 'golisopod' ||
      pokemon === 'salazzle' ||
      pokemon === 'gallade' ||
      pokemon === 'garchomp' ||
      pokemon === 'lucario' ||
      pokemon === 'empoleon' ||
      pokemon === 'leavanny' ||
      pokemon === 'sharpedo'
    ) {
      if (
        (cell.coords.q === 0 && cell.coords.r === 3) ||
        (cell.coords.q === 0 && cell.coords.r === -3) ||
        (cell.coords.q === 1 && cell.coords.r === -5) ||
        (cell.coords.q === 2 && cell.coords.r === -6) ||
        (cell.coords.q === -3 && cell.coords.r === -1) ||
        (cell.coords.q === -2 && cell.coords.r === -2) ||
        (cell.coords.q === 2 && cell.coords.r === 2) ||
        (cell.coords.q === 3 && cell.coords.r === 1) ||
        (cell.coords.q === -1 && cell.coords.r === 5) ||
        (cell.coords.q === -2 && cell.coords.r === 6) ||
        (cell.coords.q === 3 && cell.coords.r === -6) ||
        (cell.coords.q === 2 && cell.coords.r === -5) ||
        (cell.coords.q === 1 && cell.coords.r === -4) ||
        (cell.coords.q === -1 && cell.coords.r === -2) ||
        (cell.coords.q === -2 && cell.coords.r === -1) ||
        (cell.coords.q === -3 && cell.coords.r === 0) ||
        (cell.coords.q === 3 && cell.coords.r === 0) ||
        (cell.coords.q === 2 && cell.coords.r === 1) ||
        (cell.coords.q === 1 && cell.coords.r === 2) ||
        (cell.coords.q === -1 && cell.coords.r === 4) ||
        (cell.coords.q === -2 && cell.coords.r === 5) ||
        (cell.coords.q === -3 && cell.coords.r === 6)
      ) {
        selectable = false;
      }
    }

    if (
      pokemon === 'torkoal' ||
      pokemon === 'vileplume' ||
      pokemon === 'palossand' ||
      pokemon === 'liepard' ||
      pokemon === 'heliolisk' ||
      pokemon === 'masquerain' ||
      pokemon === 'meowstic' ||
      pokemon === 'milotic'
    ) {
      if (
        (cell.coords.q === 0 && cell.coords.r === 3) ||
        (cell.coords.q === 0 && cell.coords.r === -3) ||
        (cell.coords.q === 2 && cell.coords.r === -6) ||
        (cell.coords.q === 1 && cell.coords.r === -5) ||
        (cell.coords.q === -1 && cell.coords.r === -4) ||
        (cell.coords.q === -2 && cell.coords.r === -4) ||
        (cell.coords.q === 2 && cell.coords.r === 2) ||
        (cell.coords.q === 1 && cell.coords.r === 2) ||
        (cell.coords.q === -1 && cell.coords.r === 3) ||
        (cell.coords.q === -2 && cell.coords.r === 4) ||
        (cell.coords.q === 3 && cell.coords.r === -6) ||
        (cell.coords.q === 2 && cell.coords.r === -5) ||
        (cell.coords.q === 1 && cell.coords.r === -4) ||
        (cell.coords.q === -1 && cell.coords.r === -3) ||
        (cell.coords.q === -2 && cell.coords.r === -3) ||
        (cell.coords.q === -3 && cell.coords.r === -3) ||
        (cell.coords.q === 3 && cell.coords.r === 0) ||
        (cell.coords.q === 3 && cell.coords.r === 1) ||
        (cell.coords.q === 2 && cell.coords.r === 1) ||
        (cell.coords.q === -3 && cell.coords.r === 3) ||
        (cell.coords.q === -3 && cell.coords.r === 4) ||
        (cell.coords.q === -2 && cell.coords.r === 3)
      ) {
        selectable = false;
      }
    }

    if (
      pokemon === 'serperior' ||
      pokemon === 'alakazam' ||
      pokemon === 'rotom' ||
      pokemon === 'steelix' ||
      pokemon === 'swanna' ||
      pokemon === 'starmie' ||
      pokemon === 'torterra'
    ) {
      if (
        (cell.coords.q === 0 && cell.coords.r === 3) ||
        (cell.coords.q === 0 && cell.coords.r === -3) ||
        (cell.coords.q === 2 && cell.coords.r === -6) ||
        (cell.coords.q === 1 && cell.coords.r === -5) ||
        (cell.coords.q === -1 && cell.coords.r === -3) ||
        (cell.coords.q === -3 && cell.coords.r === -2) ||
        (cell.coords.q === 2 && cell.coords.r === 4) ||
        (cell.coords.q === 1 && cell.coords.r === 4) ||
        (cell.coords.q === -1 && cell.coords.r === 4) ||
        (cell.coords.q === -3 && cell.coords.r === 5) ||
        (cell.coords.q === 3 && cell.coords.r === -6) ||
        (cell.coords.q === 2 && cell.coords.r === -5) ||
        (cell.coords.q === 1 && cell.coords.r === -4) ||
        (cell.coords.q === -1 && cell.coords.r === -2) ||
        (cell.coords.q === -2 && cell.coords.r === -2) ||
        (cell.coords.q === -3 && cell.coords.r === -1) ||
        (cell.coords.q === 1 && cell.coords.r === 3) ||
        (cell.coords.q === 2 && cell.coords.r === 3) ||
        (cell.coords.q === 3 && cell.coords.r === 3) ||
        (cell.coords.q === -3 && cell.coords.r === 4) ||
        (cell.coords.q === -2 && cell.coords.r === 4) ||
        (cell.coords.q === -1 && cell.coords.r === 3)
      ) {
        selectable = false;
      }
    }

    if (pokemon === 'mew') {
      if (
        (cell.coords.q === 3 && cell.coords.r === -4) ||
        (cell.coords.q === 4 && cell.coords.r === -4) ||
        (cell.coords.q === 4 && cell.coords.r === -3) ||
        (cell.coords.q === 1 && cell.coords.r === 3) ||
        (cell.coords.q === 0 && cell.coords.r === 4) ||
        (cell.coords.q === -1 && cell.coords.r === 4) ||
        (cell.coords.q === -3 && cell.coords.r === -1) ||
        (cell.coords.q === -4 && cell.coords.r === 0) ||
        (cell.coords.q === -4 && cell.coords.r === 1) ||
        (cell.coords.q === -1 && cell.coords.r === -3) ||
        (cell.coords.q === 0 && cell.coords.r === -4) ||
        (cell.coords.q === 1 && cell.coords.r === -4) ||
        (cell.coords.q === 4 && cell.coords.r === -1) ||
        (cell.coords.q === 4 && cell.coords.r === 0) ||
        (cell.coords.q === 3 && cell.coords.r === 1) ||
        (cell.coords.q === -3 && cell.coords.r === 4) ||
        (cell.coords.q === -4 && cell.coords.r === 4) ||
        (cell.coords.q === -4 && cell.coords.r === 3)
      ) {
        selectable = false;
      }
    }
  }

  if (syncLevel === '2') {
    if (
      pokemon === 'pikachu' ||
      pokemon === 'charizard' ||
      pokemon === 'dewgong' ||
      pokemon === 'infernape' ||
      pokemon === 'haxorus' ||
      pokemon === 'kingdra' ||
      pokemon === 'metagross' ||
      pokemon === 'houndoom' ||
      pokemon === 'raichu' ||
      pokemon === 'reuniclus' ||
      pokemon === 'golisopod' ||
      pokemon === 'salazzle' ||
      pokemon === 'gallade' ||
      pokemon === 'garchomp' ||
      pokemon === 'lucario' ||
      pokemon === 'empoleon' ||
      pokemon === 'leavanny' ||
      pokemon === 'sharpedo'
    ) {
      if (
        (cell.coords.q === 0 && cell.coords.r === 3) ||
        (cell.coords.q === 0 && cell.coords.r === -3) ||
        (cell.coords.q === 1 && cell.coords.r === -5) ||
        (cell.coords.q === 2 && cell.coords.r === -6) ||
        (cell.coords.q === -3 && cell.coords.r === -1) ||
        (cell.coords.q === -2 && cell.coords.r === -2) ||
        (cell.coords.q === 2 && cell.coords.r === 2) ||
        (cell.coords.q === 3 && cell.coords.r === 1) ||
        (cell.coords.q === -1 && cell.coords.r === 5) ||
        (cell.coords.q === -2 && cell.coords.r === 6)
      ) {
        selectable = false;
      }
    }

    if (
      pokemon === 'torkoal' ||
      pokemon === 'vileplume' ||
      pokemon === 'palossand' ||
      pokemon === 'liepard' ||
      pokemon === 'heliolisk' ||
      pokemon === 'masquerain' ||
      pokemon === 'meowstic' ||
      pokemon === 'milotic'
    ) {
      if (
        (cell.coords.q === 0 && cell.coords.r === 3) ||
        (cell.coords.q === 0 && cell.coords.r === -3) ||
        (cell.coords.q === 2 && cell.coords.r === -6) ||
        (cell.coords.q === 1 && cell.coords.r === -5) ||
        (cell.coords.q === -1 && cell.coords.r === -4) ||
        (cell.coords.q === -2 && cell.coords.r === -4) ||
        (cell.coords.q === 2 && cell.coords.r === 2) ||
        (cell.coords.q === 1 && cell.coords.r === 2) ||
        (cell.coords.q === -1 && cell.coords.r === 3) ||
        (cell.coords.q === -2 && cell.coords.r === 4)
      ) {
        selectable = false;
      }
    }

    if (
      pokemon === 'serperior' ||
      pokemon === 'alakazam' ||
      pokemon === 'rotom' ||
      pokemon === 'steelix' ||
      pokemon === 'swanna' ||
      pokemon === 'starmie' ||
      pokemon === 'torterra'
    ) {
      if (
        (cell.coords.q === 0 && cell.coords.r === 3) ||
        (cell.coords.q === 0 && cell.coords.r === -3) ||
        (cell.coords.q === 2 && cell.coords.r === -6) ||
        (cell.coords.q === 1 && cell.coords.r === -5) ||
        (cell.coords.q === -1 && cell.coords.r === -3) ||
        (cell.coords.q === -3 && cell.coords.r === -2) ||
        (cell.coords.q === 2 && cell.coords.r === 4) ||
        (cell.coords.q === 1 && cell.coords.r === 4) ||
        (cell.coords.q === -1 && cell.coords.r === 4) ||
        (cell.coords.q === -3 && cell.coords.r === 5)
      ) {
        selectable = false;
      }
    }

    if (pokemon === 'mew') {
      if (
        (cell.coords.q === 3 && cell.coords.r === -4) ||
        (cell.coords.q === 4 && cell.coords.r === -4) ||
        (cell.coords.q === 4 && cell.coords.r === -3) ||
        (cell.coords.q === 1 && cell.coords.r === 3) ||
        (cell.coords.q === 0 && cell.coords.r === 4) ||
        (cell.coords.q === -1 && cell.coords.r === 4) ||
        (cell.coords.q === -3 && cell.coords.r === -1) ||
        (cell.coords.q === -4 && cell.coords.r === 0) ||
        (cell.coords.q === -4 && cell.coords.r === 1)
      ) {
        selectable = false;
      }
    }
  }
  return selectable;
};

let names = {}; // to generate list of skills to be abbreviated

export const renderMoveName = (moveName, abilityId, language) => {
  let renderedMoveName = moveName;

  if (moveName.length > 13) {
    if (shortenedMoveNameByAbilityId[language]) {
      if (shortenedMoveNameByAbilityId[language][abilityId]) {
        renderedMoveName = shortenedMoveNameByAbilityId[language][abilityId];
      }
      // else {
      //   // to generate list of skills to be abbreviated
      //   names[abilityId] = moveName; // to generate list of skills to be abbreviated
      //   console.log(names); // to generate list of skills to be abbreviated
      // }
    } else {
      if (shortenedMoveNameByAbilityId['en'][abilityId]) {
        renderedMoveName = shortenedMoveNameByAbilityId['en'][abilityId];
      }
    }
  }

  return renderedMoveName;
};

// export const addSyncLvReq = (pokemon, cell, moveName) => {
//   let nameWithSyncLvRequirement;
//   if (
//     pokemon === 'pikachu' ||
//     pokemon === 'charizard' ||
//     pokemon === 'dewgong' ||
//     pokemon === 'infernape' ||
//     pokemon === 'haxorus' ||
//     pokemon === 'kingdra' ||
//     pokemon === 'metagross' ||
//     pokemon === 'houndoom' ||
//     pokemon === 'raichu' ||
//     pokemon === 'reuniclus' ||
//     pokemon === 'golisopod' ||
//     pokemon === 'salazzle' ||
//     pokemon === 'gallade' ||
//     pokemon === 'garchomp' ||
//     pokemon === 'lucario'
//   ) {
//     if (
//       (cell.coords.q === 0 && cell.coords.r === 3) ||
//       (cell.coords.q === 0 && cell.coords.r === -3) ||
//       (cell.coords.q === 1 && cell.coords.r === -5) ||
//       (cell.coords.q === 2 && cell.coords.r === -6) ||
//       (cell.coords.q === -3 && cell.coords.r === -1) ||
//       (cell.coords.q === -2 && cell.coords.r === -2) ||
//       (cell.coords.q === 2 && cell.coords.r === 2) ||
//       (cell.coords.q === 3 && cell.coords.r === 1) ||
//       (cell.coords.q === -1 && cell.coords.r === 5) ||
//       (cell.coords.q === -2 && cell.coords.r === 6)
//     ) {
//       nameWithSyncLvRequirement = moveName + ' [Sync Lv3]';
//     } else if (
//       (cell.coords.q === 3 && cell.coords.r === -6) ||
//       (cell.coords.q === 2 && cell.coords.r === -5) ||
//       (cell.coords.q === 1 && cell.coords.r === -4) ||
//       (cell.coords.q === -1 && cell.coords.r === -2) ||
//       (cell.coords.q === -2 && cell.coords.r === -1) ||
//       (cell.coords.q === -3 && cell.coords.r === 0) ||
//       (cell.coords.q === 3 && cell.coords.r === 0) ||
//       (cell.coords.q === 2 && cell.coords.r === 1) ||
//       (cell.coords.q === 1 && cell.coords.r === 2) ||
//       (cell.coords.q === -1 && cell.coords.r === 4) ||
//       (cell.coords.q === -2 && cell.coords.r === 5) ||
//       (cell.coords.q === -3 && cell.coords.r === 6)
//     ) {
//       nameWithSyncLvRequirement = moveName + ' [Sync Lv2]';
//     }
//   }

//   if (
//     pokemon === 'torkoal' ||
//     pokemon === 'vileplume' ||
//     pokemon === 'palossand' ||
//     pokemon === 'liepard' ||
//     pokemon === 'heliolisk' ||
//     pokemon === 'masquerain' ||
//     pokemon === 'meowstic' ||
//     pokemon === 'milotic'
//   ) {
//     if (
//       (cell.coords.q === 0 && cell.coords.r === 3) ||
//       (cell.coords.q === 0 && cell.coords.r === -3) ||
//       (cell.coords.q === 2 && cell.coords.r === -6) ||
//       (cell.coords.q === 1 && cell.coords.r === -5) ||
//       (cell.coords.q === -1 && cell.coords.r === -4) ||
//       (cell.coords.q === -2 && cell.coords.r === -4) ||
//       (cell.coords.q === 2 && cell.coords.r === 2) ||
//       (cell.coords.q === 1 && cell.coords.r === 2) ||
//       (cell.coords.q === -1 && cell.coords.r === 3) ||
//       (cell.coords.q === -2 && cell.coords.r === 4)
//     ) {
//       nameWithSyncLvRequirement = moveName + ' [Sync Lv3]';
//     } else if (
//       (cell.coords.q === 3 && cell.coords.r === -6) ||
//       (cell.coords.q === 2 && cell.coords.r === -5) ||
//       (cell.coords.q === 1 && cell.coords.r === -4) ||
//       (cell.coords.q === -1 && cell.coords.r === -3) ||
//       (cell.coords.q === -2 && cell.coords.r === -3) ||
//       (cell.coords.q === -3 && cell.coords.r === -3) ||
//       (cell.coords.q === 3 && cell.coords.r === 0) ||
//       (cell.coords.q === 3 && cell.coords.r === 1) ||
//       (cell.coords.q === 2 && cell.coords.r === 1) ||
//       (cell.coords.q === -3 && cell.coords.r === 3) ||
//       (cell.coords.q === -3 && cell.coords.r === 4) ||
//       (cell.coords.q === -2 && cell.coords.r === 3)
//     ) {
//       nameWithSyncLvRequirement = moveName + ' [Sync Lv2]';
//     }
//   }

//   if (
//     pokemon === 'serperior' ||
//     pokemon === 'alakazam' ||
//     pokemon === 'rotom' ||
//     pokemon === 'steelix' ||
//     pokemon === 'swanna'
//   ) {
//     if (
//       (cell.coords.q === 0 && cell.coords.r === 3) ||
//       (cell.coords.q === 0 && cell.coords.r === -3) ||
//       (cell.coords.q === 2 && cell.coords.r === -6) ||
//       (cell.coords.q === 1 && cell.coords.r === -5) ||
//       (cell.coords.q === -1 && cell.coords.r === -3) ||
//       (cell.coords.q === -3 && cell.coords.r === -2) ||
//       (cell.coords.q === 2 && cell.coords.r === 4) ||
//       (cell.coords.q === 1 && cell.coords.r === 4) ||
//       (cell.coords.q === -1 && cell.coords.r === 4) ||
//       (cell.coords.q === -3 && cell.coords.r === 5)
//     ) {
//       nameWithSyncLvRequirement = moveName + ' [Sync Lv3]';
//     } else if (
//       (cell.coords.q === 3 && cell.coords.r === -6) ||
//       (cell.coords.q === 2 && cell.coords.r === -5) ||
//       (cell.coords.q === 1 && cell.coords.r === -4) ||
//       (cell.coords.q === -1 && cell.coords.r === -2) ||
//       (cell.coords.q === -2 && cell.coords.r === -2) ||
//       (cell.coords.q === -3 && cell.coords.r === -1) ||
//       (cell.coords.q === 1 && cell.coords.r === 3) ||
//       (cell.coords.q === 2 && cell.coords.r === 3) ||
//       (cell.coords.q === 3 && cell.coords.r === 3) ||
//       (cell.coords.q === -3 && cell.coords.r === 4) ||
//       (cell.coords.q === -2 && cell.coords.r === 4) ||
//       (cell.coords.q === -1 && cell.coords.r === 3)
//     ) {
//       nameWithSyncLvRequirement = moveName + ' [Sync Lv2]';
//     }
//   }

//   if (pokemon === 'mew') {
//     if (
//       (cell.coords.q === 3 && cell.coords.r === -4) ||
//       (cell.coords.q === 4 && cell.coords.r === -4) ||
//       (cell.coords.q === 4 && cell.coords.r === -3) ||
//       (cell.coords.q === 1 && cell.coords.r === 3) ||
//       (cell.coords.q === 0 && cell.coords.r === 4) ||
//       (cell.coords.q === -1 && cell.coords.r === 4) ||
//       (cell.coords.q === -3 && cell.coords.r === -1) ||
//       (cell.coords.q === -4 && cell.coords.r === 0) ||
//       (cell.coords.q === -4 && cell.coords.r === 1)
//     ) {
//       nameWithSyncLvRequirement = moveName + ' [Sync Lv3]';
//     } else if (
//       (cell.coords.q === -1 && cell.coords.r === -3) ||
//       (cell.coords.q === 0 && cell.coords.r === -4) ||
//       (cell.coords.q === 1 && cell.coords.r === -4) ||
//       (cell.coords.q === 4 && cell.coords.r === -1) ||
//       (cell.coords.q === 4 && cell.coords.r === 0) ||
//       (cell.coords.q === 3 && cell.coords.r === 1) ||
//       (cell.coords.q === -3 && cell.coords.r === 4) ||
//       (cell.coords.q === -4 && cell.coords.r === 4) ||
//       (cell.coords.q === -4 && cell.coords.r === 3)
//     ) {
//       nameWithSyncLvRequirement = moveName + ' [Sync Lv2]';
//     }
//   }
//   return nameWithSyncLvRequirement;
// };
