import gridedSyncPairDataArray from '../data/gridedSyncPairData.json';
import eggPokemonDataArray from '../data/eggPokemonData.json';
import {
  shortenedMoveNameByAbilityId,
  newGridedPokemonMonsterBaseIdArray,
  type1SyncGrid,
  type2SyncGrid,
  type3SyncGrid,
} from './constants';

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

export const getPokemonNameList = (language) => {
  let existingGridedPokemon = [];
  gridedSyncPairDataArray
    .slice(0, -1) // remove the blank template, which is the last entry of the array
    .map((entry, index) => {
      if (
        // existing grided pokemons monsterBaseId from latest datamine
        !newGridedPokemonMonsterBaseIdArray.includes(entry.monsterBaseId) ||
        entry.trainerBaseId === '10000000' // Charizard (Red)
      ) {
        let name = entry.pokemonNameByLanguage['en']; // name stays the same so old links and saves are compatible
        let value = entry.pokemonNameByLanguage[language]; // value changes as language changes

        // // if there's already a pokemon with the same name, then use sync pair name for the new grided pokemon instead of pokemon name, eg. Lycanroc midday and midnight forms
        if (
          entry.monsterBaseId === '20082912' ||
          entry.trainerBaseId === '10024700'
        ) {
          // Lycanroc (Olivia), Charizard (Leon)
          // for the new sync pair:
          value = `${entry.pokemonNameByLanguage[language]} (${entry.trainerNameByLanguage[language]})`;
          name = entry.syncPairNameByLanguage['en'];

          return existingGridedPokemon.push({
            key: index,
            name: name,
            value: value, // value changes as language changes. name stays the same so old links and saves are compatible
          });
        } else if (
          entry.monsterBaseId === '20082911' ||
          entry.trainerBaseId === '10000000'
        ) {
          // Lycanroc (Kukui) Charizard (Red)
          // for the old sync pair, change displayed value but not name so that old saves are still compatible
          value = `${entry.pokemonNameByLanguage[language]} (${entry.trainerNameByLanguage[language]})`;

          return existingGridedPokemon.push({
            key: index,
            name: name,
            value: value, // value changes as language changes. name stays the same so old links and saves are compatible
          });
        } else if (entry.monsterBaseId === '20000900') {
          // rename Blastoise_new to Blastoise
          return existingGridedPokemon.push({
            key: index,
            name: name,
            value: value.replace('_new', ''), // value changes as language changes. name stays the same so old links and saves are compatible
          });
        } else {
          return existingGridedPokemon.push({
            key: index,
            name: name,
            value: value, // value changes as language changes. name stays the same so old links and saves are compatible
          });
        }
      }
    });
  return existingGridedPokemon.sort((a, b) => {
    let x = a.value;
    let y = b.value;
    return x < y ? -1 : x > y ? 1 : 0;
  });
};

export const getNewPokemonNameList = (language) => {
  let newlyGridedPokemon = [];
  gridedSyncPairDataArray
    .slice(0, -1) // remove the blank template, which is the last entry of the array
    .map((entry, index) => {
      if (
        // newly grided pokemons monsterBaseId from latest datamine
        newGridedPokemonMonsterBaseIdArray.includes(entry.monsterBaseId) &&
        entry.trainerBaseId !== '10000000'
      ) {
        let name = entry.pokemonNameByLanguage['en']; // name stays the same so old links and saves are compatible
        let value = entry.pokemonNameByLanguage[language]; // value changes as language changes

        if (entry.trainerBaseId === '10024700') {
          value = `${entry.pokemonNameByLanguage[language]} (${entry.trainerNameByLanguage[language]})`;
          name = entry.syncPairNameByLanguage['en'];
        }

        return newlyGridedPokemon.push({
          key: index,
          name: name,
          value: value, // value changes as language changes. name stays the same so old links and saves are compatible
        });
      }
    });

  return newlyGridedPokemon.sort((a, b) => {
    let x = a.value;
    let y = b.value;
    return x < y ? -1 : x > y ? 1 : 0;
  });
};

export const getPokemonDataByName = (pokemonName) => {
  let pokemonData;
  gridedSyncPairDataArray.forEach((pokemon) => {
    if (pokemonName.toLowerCase() === 'lycanroc') {
      if (
        pokemon.syncPairNameByLanguage['en'].toLowerCase() === 'kukui_lycanroc'
      ) {
        pokemonData = pokemon;
      }
    } else if (pokemonName.toLowerCase() === 'charizard') {
      if (
        pokemon.syncPairNameByLanguage['en'].toLowerCase() === 'red_charizard'
      ) {
        pokemonData = pokemon;
      }
    } else if (pokemonName.toLowerCase() === 'blastoise') {
      if (
        pokemon.pokemonNameByLanguage['en'].toLowerCase() === 'blastoise_new'
      ) {
        pokemonData = pokemon;
      }
    } else if (
      pokemon.pokemonNameByLanguage['en'] === pokemonName ||
      pokemon.pokemonNameByLanguage['en'].toLowerCase() === pokemonName ||
      pokemon.syncPairNameByLanguage['en'] === pokemonName ||
      pokemon.syncPairNameByLanguage['en'].toLowerCase() === pokemonName
    ) {
      pokemonData = pokemon;
    }
  });
  return pokemonData ? pokemonData : gridedSyncPairDataArray[0];
};

const role = { 0: 'P.Strike', 1: 'S.Strike', 2: 'Support', 3: 'Tech' };
export const getEggPokemonNameList = (language) =>
  eggPokemonDataArray
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
  eggPokemonDataArray.forEach((pokemon) => {
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
    if (type1SyncGrid.includes(pokemon)) {
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

    if (type2SyncGrid.includes(pokemon)) {
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

    if (type3SyncGrid.includes(pokemon)) {
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
        (cell.coords.q === -1 && cell.coords.r === 3) ||
        // New Blastoise grid
        (cell.coords.q === -2 && cell.coords.r === 1) ||
        (cell.coords.q === -3 && cell.coords.r === 1) ||
        (cell.coords.q === 2 && cell.coords.r === -2) ||
        (cell.coords.q === 2 && cell.coords.r === 0)
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
    if (type1SyncGrid.includes(pokemon)) {
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

    if (type2SyncGrid.includes(pokemon)) {
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

    if (type3SyncGrid.includes(pokemon)) {
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
        // New Blastoise grid
        (cell.coords.q === -3 && cell.coords.r === 1) ||
        (cell.coords.q === 2 && cell.coords.r === -2)
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
  if (language === 'ja') {
    if (moveName.includes('：威力アップ')) {
      renderedMoveName = moveName.replace('：威力アップ', '');
    } else if (moveName.includes('：命中率アップ')) {
      renderedMoveName = moveName.replace('：命中率アップ', '命中');
    } else if (moveName.includes('上昇')) {
      renderedMoveName = moveName.replace('上昇', '↑');
    } else if (moveName.includes('アップ')) {
      renderedMoveName = moveName.replace('アップ', '↑');
    } else if (moveName.includes('ダウン')) {
      renderedMoveName = moveName.replace('ダウン', '↓');
    }
  } else if (language === 'zh') {
    if (moveName.includes('：威力提升')) {
      renderedMoveName = moveName.replace('：威力提升', '');
    } else if (moveName.includes('：命中率提升')) {
      renderedMoveName = moveName.replace('：命中率提升', '命中');
    } else if (moveName.includes('下降')) {
      renderedMoveName = moveName.replace('下降', '↓');
    }
  } else if (language === 'de') {
    if (moveName.includes(': Stärke↑ ')) {
      renderedMoveName = moveName.replace(': Stärke↑ ', '');
    }
  } else if (language === 'de') {
    if (moveName.includes(': Stärke↑ ')) {
      renderedMoveName = moveName.replace(': Stärke↑ ', '');
    }
  } else if (language === 'es') {
    if (moveName.includes(': Potencia ↑ ')) {
      renderedMoveName = moveName.replace(': Potencia ↑ ', '');
    }
  } else if (language === 'fr') {
    if (moveName.includes(': Puissance ')) {
      renderedMoveName = moveName.replace(': Puissance ', '');
    }
  } else if (language === 'fr') {
    if (moveName.includes(': potenza ')) {
      renderedMoveName = moveName.replace(': potenza ', '');
    }
  } else if (language === 'ko') {
    if (moveName.includes(': 위력 상승 ')) {
      renderedMoveName = moveName.replace(': 위력 상승 ', '');
    }
  }

  if (renderedMoveName.includes('+25')) {
    if (language === 'ja') {
      renderedMoveName = 'B技威力+25';
    } else if (language === 'zh') {
      renderedMoveName = '拍檔威力+25';
    } else if (language === 'ko') {
      renderedMoveName = '버디즈기술+25';
    } else if (language === 'de') {
      renderedMoveName = 'VSdS +25';
    } else if (language === 'es') {
      renderedMoveName = 'M.Compi +25';
    } else if (language === 'fr') {
      renderedMoveName = 'Cap. Duo +25';
    } else if (language === 'fr') {
      renderedMoveName = 'Unimossa +25';
    } else {
      renderedMoveName = 'Sync +25';
    }
  }

  if (renderedMoveName.length > 12) {
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
    // } // end
  }

  return renderedMoveName;
};
