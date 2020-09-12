import arrayOfAllGridedPokemon from '../data/allGridedPokemon.json';
import arrayOfAllEggPokemon from '../data/allEggPokemon.json';
import { shortenedMoveNameByAbilityId } from './constants';

export const removeHyphens = (str) => {
  return str.replace(/-/g, '');
};

export const capitalizeSyncPairNameForUrl = (syncPairName) => {
  let firstPart = syncPairName.substr(0, syncPairName.indexOf('_'));
  let secondPart = syncPairName.substr(syncPairName.indexOf('_') + 1);

  let capitalizedFirstPart =
    firstPart.charAt(0).toUpperCase() + firstPart.slice(1);
  let capitalizedSecondPart =
    secondPart.charAt(0).toUpperCase() + secondPart.slice(1);

  let newString = capitalizedFirstPart + '_' + capitalizedSecondPart;
  return newString;
};

export const getPokemonNameList = (language) =>
  arrayOfAllGridedPokemon
    .map((entry, index) => {
      let name = entry.pokemonNameByLanguage['en']; // name stays the same so old links and saves are compatible
      let value = entry.pokemonNameByLanguage[language]; // value changes as language changes

      // // if there's already a pokemon with the same name, then use sync pair name for the new grided pokemon instead of pokemon name, eg. Lycanroc midday and midnight forms
      // if (entry.monsterBaseId === "20082912") {
      //   // for the new sync pair:
      //   value = `${entry.pokemonNameByLanguage[language]} (${entry.trainerNameByLanguage[language]})`;
      //   name = entry.syncPairNameByLanguage["en"];

      //   return {
      //     key: index,
      //     name: name,
      //     value: value + "*", // value changes as language changes. name stays the same so old links and saves are compatible
      //   };
      // } else if (entry.monsterBaseId === "20082911") {
      //   // for the old sync pair, change displayed value but not name so that old saves are still compatible
      //   value = `${entry.pokemonNameByLanguage[language]} (${entry.trainerNameByLanguage[language]})`;

      //   return {
      //     key: index,
      //     name: name,
      //     // value: value, // value changes as language changes. name stays the same so old links and saves are compatible
      //     value: value + "*", // value changes as language changes. name stays the same so old links and saves are compatible
      //   };
      // }

      if (
        entry.monsterBaseId === '20003501' ||
        entry.monsterBaseId === '20087900' ||
        entry.monsterBaseId === '20086211'
      ) {
        return {
          key: index,
          name: name,
          value: value + '*', // value changes as language changes. name stays the same so old links and saves are compatible
        };
      } else {
        return {
          key: index,
          name: name,
          value: value, // value changes as language changes. name stays the same so old links and saves are compatible
        };
      }
    })
    .sort((a, b) => {
      let x = a.value;
      let y = b.value;
      return x < y ? -1 : x > y ? 1 : 0;
    });

export const getPokemonDataByName = (pokemonName) => {
  let pokemonData;
  arrayOfAllGridedPokemon.forEach((pokemon) => {
    if (
      pokemon.pokemonNameByLanguage['en'] === pokemonName ||
      pokemon.pokemonNameByLanguage['en'].toLowerCase() === pokemonName ||
      pokemon.syncPairNameByLanguage['en'] === pokemonName ||
      pokemon.syncPairNameByLanguage['en'].toLowerCase() === pokemonName
    ) {
      pokemonData = pokemon;
    }
  });
  return pokemonData;
};

const role = { 0: 'P.Strike', 1: 'S.Strike', 2: 'Support', 3: 'Tech' };
export const getEggPokemonNameList = (language) =>
  arrayOfAllEggPokemon
    .map((entry, index) => {
      // if (entry.monsterBaseId === 'id of new duplicate pokemon') {
      //  // for the new sync pair:
      //   let valueOfNewSyncPair = entry.pokemonNameByLanguage[language]+'('+entry.trainerNameByLanguage[language]+')'
      //   let name = entry.syncPairNameByLanguage['en']
      // }
      // if (entry.monsterBaseId === 'id of old duplicate pokemon') {
      //  // for the old sync pair, change displayed value but not name so that old saves are still compatible
      //  let valueOfOldSyncPair = entry.pokemonNameByLanguage[language]+'('+entry.trainerNameByLanguage[language]+')'
      // }
      return {
        key: index,
        name: entry.pokemonNameByLanguage['en'] + ` (${role[entry.role]})`,
        role: entry.role,
        value: entry.pokemonNameByLanguage[language] + ` (${role[entry.role]})`, // value changes as language changes. name stays the same so old links and saves are compatible
      };
    })
    .sort((a, b) => {
      let x = a.value;
      let y = b.value;
      return x < y ? -1 : x > y ? 1 : 0;
    });

export const getEggPokemonDataByNameAndRole = (pokemonName, role) => {
  let pokemonData;
  arrayOfAllEggPokemon.forEach((pokemon) => {
    if (
      pokemon.pokemonNameByLanguage['en'] === pokemonName &&
      pokemon.role === role
    ) {
      pokemonData = pokemon;
    }
  });
  return pokemonData;
};

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
      pokemon === 'sharpedo' ||
      pokemon === 'emboar' ||
      pokemon === 'drifblim' ||
      pokemon === 'dragonite' ||
      pokemon === 'jigglypuff' ||
      pokemon === 'sandslash' ||
      pokemon === 'kommo-o' ||
      pokemon === 'typhlosion' ||
      pokemon === 'feraligatr' ||
      pokemon === 'pheromosa'
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
      pokemon === 'milotic' ||
      pokemon === 'delphox' ||
      pokemon === 'crobat' ||
      pokemon === 'onix' ||
      pokemon === 'lycanroc' ||
      pokemon === 'venusaur' ||
      pokemon === 'silvally'
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
      pokemon === 'torterra' ||
      pokemon === 'blastoise' ||
      pokemon === 'meganium' ||
      pokemon === 'clefairy'
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
      pokemon === 'sharpedo' ||
      pokemon === 'emboar' ||
      pokemon === 'drifblim' ||
      pokemon === 'dragonite' ||
      pokemon === 'jigglypuff' ||
      pokemon === 'sandslash' ||
      pokemon === 'kommo-o' ||
      pokemon === 'typhlosion' ||
      pokemon === 'feraligatr' ||
      pokemon === 'pheromosa'
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
      pokemon === 'milotic' ||
      pokemon === 'delphox' ||
      pokemon === 'crobat' ||
      pokemon === 'onix' ||
      pokemon === 'lycanroc' ||
      pokemon === 'venusaur' ||
      pokemon === 'silvally'
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
      pokemon === 'torterra' ||
      pokemon === 'blastoise' ||
      pokemon === 'meganium' ||
      pokemon === 'clefairy'
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

// let names = {}; // to generate list of skills to be abbreviated

export const renderMoveName = (moveName, abilityId, language) => {
  let renderedMoveName = moveName;

  if (moveName.length > 12) {
    if (shortenedMoveNameByAbilityId[language]) {
      if (shortenedMoveNameByAbilityId[language][abilityId]) {
        renderedMoveName = shortenedMoveNameByAbilityId[language][abilityId];
      }
      // comment out this else-if when generating lists of skill names to be abbreviated
      else if (shortenedMoveNameByAbilityId['en'][abilityId]) {
        renderedMoveName = shortenedMoveNameByAbilityId['en'][abilityId];
      }
      // else {
      //   // to generate list of skills to be abbreviated
      //   if (language === 'en') {
      //     names[abilityId] = moveName; // to generate list of skills to be abbreviated
      //     console.log(names); // to generate list of skills to be abbreviated
      //   }
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
