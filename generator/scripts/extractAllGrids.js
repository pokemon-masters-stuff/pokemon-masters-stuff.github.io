const fs = require('fs');

const abilityPanelDB = require('../rawdata/protodump/AbilityPanel.json');
const abilityDB = require('../rawdata/protodump/Ability.json');
const moveDB = require('../rawdata/protodump/ModifiedMove.json');
const triangularCoordsToCollumns = require('../utils/triangularCoordsToCollumns');
const trainerAbilityDB = require('../rawdata/protodump/TrainerAbility.json');

const abilityDescriptionDBde = require('../rawdata/lsddump/dl/ability_description_de.json');
const abilityDescriptionDBen = require('../rawdata/lsddump/dl/ability_description_en.json');
const abilityDescriptionDBes = require('../rawdata/lsddump/dl/ability_description_es.json');
const abilityDescriptionDBfr = require('../rawdata/lsddump/dl/ability_description_fr.json');
const abilityDescriptionDBit = require('../rawdata/lsddump/dl/ability_description_it.json');
const abilityDescriptionDBja = require('../rawdata/lsddump/dl/ability_description_ja.json');
const abilityDescriptionDBko = require('../rawdata/lsddump/dl/ability_description_ko.json');
const abilityDescriptionDBzh = require('../rawdata/lsddump/dl/ability_description_zh-TW.json');

const moveNameDBde = require('../rawdata/lsddump/dl/move_name_de.json');
const moveNameDBen = require('../rawdata/lsddump/dl/move_name_en.json');
const moveNameDBes = require('../rawdata/lsddump/dl/move_name_es.json');
const moveNameDBfr = require('../rawdata/lsddump/dl/move_name_fr.json');
const moveNameDBit = require('../rawdata/lsddump/dl/move_name_it.json');
const moveNameDBja = require('../rawdata/lsddump/dl/move_name_ja.json');
const moveNameDBko = require('../rawdata/lsddump/dl/move_name_ko.json');
const moveNameDBzh = require('../rawdata/lsddump/dl/move_name_zh-TW.json');

const abilityDescriptionDB = {
  de: abilityDescriptionDBde,
  en: abilityDescriptionDBen,
  es: abilityDescriptionDBes,
  fr: abilityDescriptionDBfr,
  it: abilityDescriptionDBit,
  ja: abilityDescriptionDBja,
  ko: abilityDescriptionDBko,
  zh: abilityDescriptionDBzh,
};

const moveNameDB = {
  de: moveNameDBde,
  en: moveNameDBen,
  es: moveNameDBes,
  fr: moveNameDBfr,
  it: moveNameDBit,
  ja: moveNameDBja,
  ko: moveNameDBko,
  zh: moveNameDBzh,
};

const { gridedTrainerList, languages } = require('../utils/constants');

const {
  getUpdatedPassiveSkillName,
  getUpdatedPassiveSkillDescription,
} = require('../utils/functions');

// On 5/25/2020 the following changes have been made to the .proto files:
// monsterId->monsterBaseId
// trainerId->monsterId
// characterId->trainerId

/*
 * Usage i.e: node extractAllGrids.js
 * */

const extractAllGrids = () => {
  let exportStatementsForIndex = `
  export { default as shortenedMoveNameByAbilityIdDE } from './shortenedMoveNameByAbilityId/de';
  export { default as shortenedMoveNameByAbilityIdEN } from './shortenedMoveNameByAbilityId/en';
  export { default as shortenedMoveNameByAbilityIdIT } from './shortenedMoveNameByAbilityId/it';
  export { default as shortenedMoveNameByAbilityIdES } from './shortenedMoveNameByAbilityId/es';
  export { default as shortenedMoveNameByAbilityIdFR } from './shortenedMoveNameByAbilityId/fr';
  export { default as shortenedMoveNameByAbilityIdJA } from './shortenedMoveNameByAbilityId/ja';
  export { default as shortenedMoveNameByAbilityIdKO } from './shortenedMoveNameByAbilityId/ko';
  export { default as shortenedMoveNameByAbilityIdZH } from './shortenedMoveNameByAbilityId/zh';
  `;
  let importStatements = '';
  let exportStatements = '';
  let exportStrings = {
    de: '',
    en: '',
    es: '',
    fr: '',
    it: '',
    ja: '',
    ko: '',
    zh: '',
  };
  let isGrided = false;

  let trainerList = [];
  let trainersWithInconsecutiveCellIds = [];

  trainerAbilityDB.entries.forEach((entry) => {
    trainerList.push(entry.trainerId);
  });

  trainerList.forEach((trainerId) => {
    let areCellIdsConsecutive = true;
    if (gridedTrainerList.includes(trainerId)) {
      isGrided = true;
    }

    languages.forEach((language) => {
      let arrayOfCellIds = [];
      const abilities = [];
      let ability = {};

      exportStatementsForIndex += `export { default as trainerId_${trainerId}_GridData${language.toUpperCase()} } from './grids/${language}/${trainerId}.json';`;
      importStatements += `trainerId_${trainerId}_GridData${language.toUpperCase()},`;

      abilityPanelDB.entries.forEach((entry) => {
        if (entry.trainerId === trainerId.toString()) {
          const { cellId, energyCost, orbs, x, y, z, abilityId } = entry;
          let orbCost = orbs;
          const coords = triangularCoordsToCollumns({ x, y, z });
          let move = {};

          arrayOfCellIds.push(cellId);

          ability = abilityDB.entries.find(
            (ability) => ability.abilityId === abilityId
          );

          if (!ability) {
            console.log('entry.trainerId', entry.trainerId);
            console.log('abilityId', abilityId);
          }

          move.name = abilityDescriptionDB[language][ability.type];

          if (ability.moveId) {
            moveDB.entries.forEach((moveEntry) => {
              if (moveEntry.moveId === ability.moveId) {
                let updatedMove = { ...moveEntry };
                let moveName = moveNameDB[language][moveEntry.moveId]
                  ? moveNameDB[language][moveEntry.moveId]
                  : null;

                if (moveName) {
                  updatedMove = {
                    ...updatedMove,
                    name: move.name.replace('[Name:Move ]', moveName),
                  };
                }

                move = { ...move, ...updatedMove };
              }
            });
          }

          if (ability.passiveId) {
            let newMoveName = getUpdatedPassiveSkillName(
              language,
              ability.moveId,
              ability.passiveId
            );
            let newMoveDescription = getUpdatedPassiveSkillDescription(
              language,
              ability.passiveId
            );
            move = {
              ...move,
              name: newMoveName,
              description: newMoveDescription,
            };
          }

          abilities.push({
            cellId,
            coords: {
              q: coords.col,
              r: coords.row,
            },
            ability,
            move: {
              ...move,
              name: move.name.replace(
                /\[Digit:5digits \]/gi,
                `+${ability.value}`
              ),
              energyCost,
              orbCost,
            },
          });
        }
      });

      for (let i = 0; i < arrayOfCellIds.length - 1; i++) {
        if (arrayOfCellIds[i + 1] - arrayOfCellIds[i] !== 1) {
          areCellIdsConsecutive = false;
        }
      }

      fs.writeFile(
        `${__dirname}/../../src/data/grids/${language}/${trainerId}.json`,
        JSON.stringify(abilities),
        (err) => {
          if (err) throw err;
          console.log('Successfully written to file');
        }
      );

      exportStrings[
        language
      ] += `trainerId_${trainerId}_GridData${language.toUpperCase()},`;

      return abilities;
    });

    if (areCellIdsConsecutive === false) {
      trainersWithInconsecutiveCellIds.push(trainerId);
      console.log(
        `WARNING: trainerId: ${trainerId} - cellIds not consecutive.`
      );
    }
  });

  if (isGrided) {
    languages.forEach((language) => {
      exportStatements += `${language}: {${exportStrings[language]}},`;
    });

    fs.writeFile(
      `${__dirname}/../data/trainersWithInconsecutiveCellIds.json`,
      JSON.stringify(trainersWithInconsecutiveCellIds),
      (err) => {
        if (err) throw err;
        console.log('Successfully written to file');
      }
    );
    fs.writeFile(
      `${__dirname}/../../src/data/index.js`,
      exportStatementsForIndex,
      (err) => {
        if (err) throw err;
        console.log('Successfully written to file');
      }
    );
    fs.writeFile(
      `${__dirname}/../../src/data/exportGridsAsObject.js`,
      `import {` +
        importStatements +
        `} from '../data'; 
          export const allSyncGrids = {` +
        exportStatements.slice(0, -1) +
        '}',
      (err) => {
        if (err) throw err;
        console.log('Successfully written to file');
      }
    );
  }
};

extractAllGrids();
