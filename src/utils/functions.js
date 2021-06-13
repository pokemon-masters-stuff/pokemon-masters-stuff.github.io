import gridedSyncPairData from '../data/gridedSyncPairData.json';
import syncPairNamesAndIds from '../data/syncPairNamesAndIds.json';
import eggPokemonDataArray from '../data/eggPokemonData.json';
import {
  shortenedMoveNameByAbilityId,
  arrayOfTrainerIdsForNewlyGridedSyncPairs,
  arrayOfTrainerIdsWithSamePokemon,
  type1SyncGrid,
  type2SyncGrid,
  type3SyncGrid,
} from './constants';

export const removeHyphens = (str) => {
  if (str.toLowerCase() === 'sirfetch’d') {
    str = 'sirfetchd';
  }

  return str.replace(/-/g, '');
};

export const getPokemonNameList = (language) => {
  let existingGridedPokemon = [];

  Object.values(gridedSyncPairData).map((entry, index) => {
    if (
      !arrayOfTrainerIdsForNewlyGridedSyncPairs.includes(
        Number(entry.trainerId)
      )
    ) {
      if (arrayOfTrainerIdsWithSamePokemon.includes(Number(entry.trainerId))) {
        let value = `${entry.pokemonNameByLanguage[language]} (${entry.trainerNameByLanguage[language]})`; // value changes as language changes
        let trainerId = entry.trainerId.toString();
        return existingGridedPokemon.push({
          key: index,
          value: value, // value changes as language changes. name stays the same so old links and saves are compatible
          trainerId: trainerId,
        });
      } else {
        let value = entry.pokemonNameByLanguage[language]; // value changes as language changes
        let trainerId = entry.trainerId.toString();
        return existingGridedPokemon.push({
          key: index,
          value: value, // value changes as language changes. name stays the same so old links and saves are compatible
          trainerId: trainerId,
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
  Object.values(gridedSyncPairData).map((entry, index) => {
    if (
      arrayOfTrainerIdsForNewlyGridedSyncPairs.includes(Number(entry.trainerId))
    ) {
      if (arrayOfTrainerIdsWithSamePokemon.includes(Number(entry.trainerId))) {
        let value = `${entry.pokemonNameByLanguage[language]} (${entry.trainerNameByLanguage[language]})`; // value changes as language changes
        let trainerId = entry.trainerId.toString();
        return newlyGridedPokemon.push({
          key: index,
          value: value, // value changes as language changes. name stays the same so old links and saves are compatible
          trainerId: trainerId,
        });
      } else {
        let value = entry.pokemonNameByLanguage[language]; // value changes as language changes
        let trainerId = entry.trainerId.toString();
        return newlyGridedPokemon.push({
          key: index,
          value: value, // value changes as language changes. name stays the same so old links and saves are compatible
          trainerId: trainerId,
        });
      }
    }
  });
  return newlyGridedPokemon.sort((a, b) => {
    let x = a.value;
    let y = b.value;
    return x < y ? -1 : x > y ? 1 : 0;
  });
};

export const getPokemonDataByTrainerId = (trainerId) => {
  return gridedSyncPairData[trainerId];
};

export const getSyncPairNameAndIdByTrainerId = (trainerId) => {
  return syncPairNamesAndIds[trainerId];
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

export const checkSelectabilityBasedOnSyncLv = (trainerId, cell, syncLevel) => {
  let selectable = true;

  if (syncLevel === '1') {
    if (type1SyncGrid.includes(trainerId)) {
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

    if (type2SyncGrid.includes(trainerId)) {
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

    if (type3SyncGrid.includes(trainerId)) {
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

    if (trainerId === '10137000000') {
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
    if (type1SyncGrid.includes(trainerId)) {
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

    if (type2SyncGrid.includes(trainerId)) {
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

    if (type3SyncGrid.includes(trainerId)) {
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

    if (trainerId === '10137000000') {
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
