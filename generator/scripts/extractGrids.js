const args = require('yargs').argv;
const fs = require('fs');

const trainerDB = require('../rawdata/protodump/Trainer.json');
const abilityPanelDB = require('../rawdata/protodump/AbilityPanel.json');
const abilityDB = require('../rawdata/protodump/Ability.json');
const moveDB = require('../rawdata/protodump/ModifiedMove.json');
const triangularCoordsToCollumns = require('../utils/triangularCoordsToCollumns');
const MoveAndPassiveSkillDigitDB = require('../rawdata/protodump/MoveAndPassiveSkillDigit.json');

const abilityDescriptionDBde = require('../rawdata/lsddump/ability_description_de.json');
const abilityDescriptionDBen = require('../rawdata/lsddump/ability_description_en.json');
const abilityDescriptionDBes = require('../rawdata/lsddump/ability_description_es.json');
const abilityDescriptionDBfr = require('../rawdata/lsddump/ability_description_fr.json');
const abilityDescriptionDBit = require('../rawdata/lsddump/ability_description_it.json');
const abilityDescriptionDBja = require('../rawdata/lsddump/ability_description_ja.json');
const abilityDescriptionDBko = require('../rawdata/lsddump/ability_description_ko.json');
const abilityDescriptionDBzh = require('../rawdata/lsddump/ability_description_zh-TW.json');

// const passiveAbilityDescriptionDBde = require('../rawdata/lsddump/passive_skill_name_de.json');
// const passiveAbilityDescriptionDBen = require('../rawdata/lsddump/passive_skill_name_en.json');
// const passiveAbilityDescriptionDBes = require('../rawdata/lsddump/passive_skill_name_es.json');
// const passiveAbilityDescriptionDBfr = require('../rawdata/lsddump/passive_skill_name_fr.json');
// const passiveAbilityDescriptionDBit = require('../rawdata/lsddump/passive_skill_name_it.json');
// const passiveAbilityDescriptionDBja = require('../rawdata/lsddump/passive_skill_name_ja.json');
// const passiveAbilityDescriptionDBko = require('../rawdata/lsddump/passive_skill_name_ko.json');
// const passiveAbilityDescriptionDBzh = require('../rawdata/lsddump/passive_skill_name_zh-TW.json');

// const passiveSkillDescriptionDBde = require('../rawdata/lsddump/passive_skill_description_de.json');
// const passiveSkillDescriptionDBen = require('../rawdata/lsddump/passive_skill_description_en.json');
// const passiveSkillDescriptionDBes = require('../rawdata/lsddump/passive_skill_description_es.json');
// const passiveSkillDescriptionDBfr = require('../rawdata/lsddump/passive_skill_description_fr.json');
// const passiveSkillDescriptionDBit = require('../rawdata/lsddump/passive_skill_description_it.json');
// const passiveSkillDescriptionDBja = require('../rawdata/lsddump/passive_skill_description_ja.json');
// const passiveSkillDescriptionDBko = require('../rawdata/lsddump/passive_skill_description_ko.json');
// const passiveSkillDescriptionDBzh = require('../rawdata/lsddump/passive_skill_description_zh-TW.json');

const moveNameDBde = require('../rawdata/lsddump/move_name_de.json');
const moveNameDBen = require('../rawdata/lsddump/move_name_en.json');
const moveNameDBes = require('../rawdata/lsddump/move_name_es.json');
const moveNameDBfr = require('../rawdata/lsddump/move_name_fr.json');
const moveNameDBit = require('../rawdata/lsddump/move_name_it.json');
const moveNameDBja = require('../rawdata/lsddump/move_name_ja.json');
const moveNameDBko = require('../rawdata/lsddump/move_name_ko.json');
const moveNameDBzh = require('../rawdata/lsddump/move_name_zh-TW.json');

const allGridedSyncPairs = require('../data/allGridedSyncPairs.json');

const passiveSkillNameDBde = require('../rawdata/lsddump/passive_skill_name_de.json');
const passiveSkillNameDBen = require('../rawdata/lsddump/passive_skill_name_en.json');
const passiveSkillNameDBes = require('../rawdata/lsddump/passive_skill_name_es.json');
const passiveSkillNameDBfr = require('../rawdata/lsddump/passive_skill_name_fr.json');
const passiveSkillNameDBit = require('../rawdata/lsddump/passive_skill_name_it.json');
const passiveSkillNameDBja = require('../rawdata/lsddump/passive_skill_name_ja.json');
const passiveSkillNameDBko = require('../rawdata/lsddump/passive_skill_name_ko.json');
const passiveSkillNameDBzh = require('../rawdata/lsddump/passive_skill_name_zh-TW.json');

const passiveSkillNamePartsDBde = require('../rawdata/lsddump/passive_skill_name_parts_de.json');
const passiveSkillNamePartsDBen = require('../rawdata/lsddump/passive_skill_name_parts_en.json');
const passiveSkillNamePartsDBes = require('../rawdata/lsddump/passive_skill_name_parts_es.json');
const passiveSkillNamePartsDBfr = require('../rawdata/lsddump/passive_skill_name_parts_fr.json');
const passiveSkillNamePartsDBit = require('../rawdata/lsddump/passive_skill_name_parts_it.json');
const passiveSkillNamePartsDBja = require('../rawdata/lsddump/passive_skill_name_parts_ja.json');
const passiveSkillNamePartsDBko = require('../rawdata/lsddump/passive_skill_name_parts_ko.json');
const passiveSkillNamePartsDBzh = require('../rawdata/lsddump/passive_skill_name_parts_zh-TW.json');

const passiveSkillDescriptionDBde = require('../rawdata/lsddump/passive_skill_description_de.json');
const passiveSkillDescriptionDBen = require('../rawdata/lsddump/passive_skill_description_en.json');
const passiveSkillDescriptionDBes = require('../rawdata/lsddump/passive_skill_description_es.json');
const passiveSkillDescriptionDBfr = require('../rawdata/lsddump/passive_skill_description_fr.json');
const passiveSkillDescriptionDBit = require('../rawdata/lsddump/passive_skill_description_it.json');
const passiveSkillDescriptionDBja = require('../rawdata/lsddump/passive_skill_description_ja.json');
const passiveSkillDescriptionDBko = require('../rawdata/lsddump/passive_skill_description_ko.json');
const passiveSkillDescriptionDBzh = require('../rawdata/lsddump/passive_skill_description_zh-TW.json');

const passiveSkillDescriptionPartsDBde = require('../rawdata/lsddump/passive_skill_description_parts_de.json');
const passiveSkillDescriptionPartsDBen = require('../rawdata/lsddump/passive_skill_description_parts_en.json');
const passiveSkillDescriptionPartsDBes = require('../rawdata/lsddump/passive_skill_description_parts_es.json');
const passiveSkillDescriptionPartsDBfr = require('../rawdata/lsddump/passive_skill_description_parts_fr.json');
const passiveSkillDescriptionPartsDBit = require('../rawdata/lsddump/passive_skill_description_parts_it.json');
const passiveSkillDescriptionPartsDBja = require('../rawdata/lsddump/passive_skill_description_parts_ja.json');
const passiveSkillDescriptionPartsDBko = require('../rawdata/lsddump/passive_skill_description_parts_ko.json');
const passiveSkillDescriptionPartsDBzh = require('../rawdata/lsddump/passive_skill_description_parts_zh-TW.json');

// const passiveSkillDescriptionDB = {
//   de: passiveSkillDescriptionDBde,
//   en: passiveSkillDescriptionDBen,
//   es: passiveSkillDescriptionDBes,
//   fr: passiveSkillDescriptionDBfr,
//   it: passiveSkillDescriptionDBit,
//   ja: passiveSkillDescriptionDBja,
//   ko: passiveSkillDescriptionDBko,
//   zh: passiveSkillDescriptionDBzh,
// };

const passiveSkillDescriptionPartsDB = {
  de: passiveSkillDescriptionPartsDBde,
  en: passiveSkillDescriptionPartsDBen,
  es: passiveSkillDescriptionPartsDBes,
  fr: passiveSkillDescriptionPartsDBfr,
  it: passiveSkillDescriptionPartsDBit,
  ja: passiveSkillDescriptionPartsDBja,
  ko: passiveSkillDescriptionPartsDBko,
  zh: passiveSkillDescriptionPartsDBzh,
};

const passiveSkillNameDB = {
  de: passiveSkillNameDBde,
  en: passiveSkillNameDBen,
  es: passiveSkillNameDBes,
  fr: passiveSkillNameDBfr,
  it: passiveSkillNameDBit,
  ja: passiveSkillNameDBja,
  ko: passiveSkillNameDBko,
  zh: passiveSkillNameDBzh,
};

const passiveSkillNamePartsDB = {
  de: passiveSkillNamePartsDBde,
  en: passiveSkillNamePartsDBen,
  es: passiveSkillNamePartsDBes,
  fr: passiveSkillNamePartsDBfr,
  it: passiveSkillNamePartsDBit,
  ja: passiveSkillNamePartsDBja,
  ko: passiveSkillNamePartsDBko,
  zh: passiveSkillNamePartsDBzh,
};

// const moveDescriptionDB = require('../rawdata/de/move_description_de.json');

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

// const passiveAbilityDescriptionDB = {
//   de: passiveAbilityDescriptionDBde,
//   en: passiveAbilityDescriptionDBen,
//   es: passiveAbilityDescriptionDBes,
//   fr: passiveAbilityDescriptionDBfr,
//   it: passiveAbilityDescriptionDBit,
//   ja: passiveAbilityDescriptionDBja,
//   ko: passiveAbilityDescriptionDBko,
//   zh: passiveAbilityDescriptionDBzh,
// };

const passiveSkillDescriptionDB = {
  de: passiveSkillDescriptionDBde,
  en: passiveSkillDescriptionDBen,
  es: passiveSkillDescriptionDBes,
  fr: passiveSkillDescriptionDBfr,
  it: passiveSkillDescriptionDBit,
  ja: passiveSkillDescriptionDBja,
  ko: passiveSkillDescriptionDBko,
  zh: passiveSkillDescriptionDBzh,
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

const gridedTrainerList = Object.keys(allGridedSyncPairs);

// On 5/25/2020 the following changes have been made to the .proto files:
// monsterId->monsterBaseId
// trainerId->monsterId
// characterId->trainerId

/*
 * Usage i.e: node extractGrids.js
 * */
const languages = ['de', 'en', 'es', 'fr', 'it', 'ja', 'ko', 'zh'];

const getUpdatedPassiveSkillName = (language, moveId, passiveId) => {
  let originalPassiveSkillName = passiveSkillNameDB[language][passiveId];
  if (originalPassiveSkillName.includes('Idx')) {
    let iteratorOfIdx = originalPassiveSkillName.matchAll('Idx');
    let arrayOfIdxIndex = [];
    let arrayOfPassiveSkillNameParts = [];
    for (const Idx of iteratorOfIdx) {
      // console.log(`For moveId=${moveId}: Found ${Idx[0]} at ${Idx.index}`);
      // console.log(
      //   `For moveId=${moveId}: Idx has the following properties: ${Object.keys(Idx)}
      //   index=${Idx.index}
      //   input=${Idx.input}
      //   groups=${Idx.groups}
      //   `
      // );
      arrayOfIdxIndex.push(
        originalPassiveSkillName.slice(Idx.index + 5, Idx.index + 13)
      );
    }
    for (const index of arrayOfIdxIndex) {
      let finalSkillName = '';
      if (
        passiveSkillNamePartsDB[language][index.toString()].includes(
          'Name:PassiveSkillNameDigit'
        )
      ) {
        let digit = passiveId.toString().slice(-1);
        if (moveId.toString() === '0') {
          // MoveAndPassiveSkillDigitDB.entries.forEach((entry) => {
          //   if (entry.id.toString() === passiveId.toString()) {
          //     digit = entry.param1;
          //   } else {
          //     digit = passiveId.toString().slice(-1);
          //   }
          // });
          finalSkillName = passiveSkillNamePartsDB[language][
            index.toString()
          ].replace('[Name:PassiveSkillNameDigit ]', digit);
        } else {
          // MoveAndPassiveSkillDigitDB.entries.forEach((entry) => {
          //   if (entry.id.toString() === moveId.toString()) {
          //     digit = entry.param1;
          //   }
          // });
          finalSkillName =
            moveNameDB[language][moveId] +
            ' ' +
            passiveSkillNamePartsDB[language][index.toString()].replace(
              '[Name:PassiveSkillNameDigit ]',
              digit
            );
        }
      } else {
        finalSkillName = passiveSkillNamePartsDB[language][index.toString()];
      }

      arrayOfPassiveSkillNameParts.push(finalSkillName);
    }
    // console.log('arrayOfPassiveSkillNameParts', arrayOfPassiveSkillNameParts);
    return arrayOfPassiveSkillNameParts.join('\n');
  } else {
    return originalPassiveSkillName;
  }
};

// const getUpdatedPassiveSkillDescription = (language, moveId, passiveId) => {
//   let originalPassiveSkillDescription =
//     passiveSkillDescriptionDB[language][passiveId];
//   if (originalPassiveSkillDescription.includes('Idx')) {
//     let iteratorOfIdx = originalPassiveSkillDescription.matchAll('Idx');
//     let arrayOfIdxIndex = [];
//     let arrayOfPassiveSkillDescriptionParts = [];
//     for (const Idx of iteratorOfIdx) {
//       // console.log(`For moveId=${moveId}: Found ${Idx[0]} at ${Idx.index}`);
//       // console.log(
//       //   `For moveId=${moveId}: Idx has the following properties: ${Object.keys(Idx)}
//       //   index=${Idx.index}
//       //   input=${Idx.input}
//       //   groups=${Idx.groups}
//       //   `
//       // );
//       arrayOfIdxIndex.push(
//         originalPassiveSkillDescription.slice(Idx.index + 5, Idx.index + 12)
//       );
//     }
//     for (const index of arrayOfIdxIndex) {

//       arrayOfPassiveSkillDescriptionParts.push(
//         passiveSkillDescriptionPartsDB[language][index.toString()]
//       );
//     }

//     return arrayOfPassiveSkillDescriptionParts.join('\n');
//   } else {
//     return originalPassiveSkillDescription;
//   }
// };

const getUpdatedPassiveSkillDescription = (language, moveId, passiveId) => {
  let originalPassiveSkillDescription =
    passiveSkillDescriptionDB[language][passiveId];
  if (originalPassiveSkillDescription.includes('Idx')) {
    let iteratorOfIdx = originalPassiveSkillDescription.matchAll('Idx');
    let arrayOfIdxIndex = [];
    let arrayOfPassiveSkillDescriptionParts = [];
    for (const Idx of iteratorOfIdx) {
      // console.log(`For moveId=${moveId}: Found ${Idx[0]} at ${Idx.index}`);
      // console.log(
      //   `For moveId=${moveId}: Idx has the following properties: ${Object.keys(Idx)}
      //   index=${Idx.index}
      //   input=${Idx.input}
      //   groups=${Idx.groups}
      //   `
      // );
      arrayOfIdxIndex.push(
        originalPassiveSkillDescription.slice(Idx.index + 5, Idx.index + 12)
      );
    }
    for (const index of arrayOfIdxIndex) {
      // console.log('index', index);
      let moveAndPassiveSkillDigitEntry;

      MoveAndPassiveSkillDigitDB.entries.forEach((entry) => {
        if (entry.id.toString() === passiveId.toString()) {
          moveAndPassiveSkillDigitEntry = entry;
        }
      });
      let finalSkillDescription = '';
      if (moveAndPassiveSkillDigitEntry) {
        finalSkillDescription = passiveSkillDescriptionPartsDB[language][index];
        finalSkillDescription = finalSkillDescription.replace(
          '[Digit:1digit ]',
          moveAndPassiveSkillDigitEntry.param1
        );
        finalSkillDescription = finalSkillDescription.replace(
          '[Digit:2digits ]',
          moveAndPassiveSkillDigitEntry.param1
        );
        finalSkillDescription = finalSkillDescription.replace(
          '[Digit:2digits Idx="1" ]',
          moveAndPassiveSkillDigitEntry.param2
        );
        finalSkillDescription = finalSkillDescription.replace(
          '[Digit:2digits Idx="2" ]',
          moveAndPassiveSkillDigitEntry.param3
        );
        finalSkillDescription = finalSkillDescription.replace(
          '[Digit:2digits Idx="3" ]',
          moveAndPassiveSkillDigitEntry.param4
        );
        finalSkillDescription = finalSkillDescription.replace(
          '[Digit:2digits Idx="4" ]',
          moveAndPassiveSkillDigitEntry.param5
        );
        finalSkillDescription = finalSkillDescription.replace(
          '[Digit:2digits Idx="5" ]',
          moveAndPassiveSkillDigitEntry.param6
        );
        finalSkillDescription = finalSkillDescription.replace(
          '[Digit:2digits Idx="6" ]',
          moveAndPassiveSkillDigitEntry.param7
        );
        finalSkillDescription = finalSkillDescription.replace(
          '[Digit:2digits Idx="7" ]',
          moveAndPassiveSkillDigitEntry.param8
        );
        finalSkillDescription = finalSkillDescription.replace(
          '[Digit:2digits Idx="8" ]',
          moveAndPassiveSkillDigitEntry.param9
        );
        finalSkillDescription = finalSkillDescription.replace(
          '[Digit:2digits Idx="9" ]',
          moveAndPassiveSkillDigitEntry.param10
        );

        if (finalSkillDescription.includes('EN:Qty')) {
          if (moveAndPassiveSkillDigitEntry.param1.toString() === '1') {
            finalSkillDescription = finalSkillDescription.replace(
              '[EN:Qty S="rank" P="ranks" ]',
              'rank'
            );
          } else {
            finalSkillDescription = finalSkillDescription.replace(
              '[EN:Qty S="rank" P="ranks" ]',
              'ranks'
            );
          }
        }

        // const mapObj = {
        //   '[Digit:1digit ]': moveAndPassiveSkillDigitEntry.param1,
        //   '[Digit:2digits ]': moveAndPassiveSkillDigitEntry.param1,
        //   '[Digit:2digits Idx="1" ]': moveAndPassiveSkillDigitEntry.param2,
        //   '[Digit:2digits Idx="2" ]': moveAndPassiveSkillDigitEntry.param3,
        //   '[Digit:2digits Idx="3" ]': moveAndPassiveSkillDigitEntry.param4,
        //   '[Digit:2digits Idx="4" ]': moveAndPassiveSkillDigitEntry.param5,
        //   '[Digit:2digits Idx="5" ]': moveAndPassiveSkillDigitEntry.param6,
        //   '[Digit:2digits Idx="6" ]': moveAndPassiveSkillDigitEntry.param7,
        //   '[Digit:2digits Idx="7" ]': moveAndPassiveSkillDigitEntry.param8,
        //   '[Digit:2digits Idx="8" ]': moveAndPassiveSkillDigitEntry.param9,
        //   '[Digit:2digits Idx="9" ]': moveAndPassiveSkillDigitEntry.param10,
        // };
        // new RegExp(Object.keys(mapObj).join('|'), 'gi');
        // // console.log(passiveSkillDescriptionPartsDB[language][index]);
        // var re = new RegExp(Object.keys(mapObj).join('|'), 'gi');
        // console.log('index', index);
        // console.log(
        //   'moveAndPassiveSkillDigitEntry',
        //   moveAndPassiveSkillDigitEntry
        // );
        // console.log(passiveSkillDescriptionPartsDB[language][index]);
        // finalSkillDescription = passiveSkillDescriptionPartsDB[language][
        //   index
        // ].replace(re, function (matched) {
        //   return mapObj[matched];
        // });
        // console.log('finalSkillDescription', finalSkillDescription);
      } else {
        finalSkillDescription = passiveSkillDescriptionPartsDB[language][index];
      }

      arrayOfPassiveSkillDescriptionParts.push(finalSkillDescription);
    }
    // console.log(
    //   'arrayOfPassiveSkillDescriptionParts',
    //   arrayOfPassiveSkillDescriptionParts
    // );
    return arrayOfPassiveSkillDescriptionParts.join('\n');
  } else {
    return originalPassiveSkillDescription;
  }
};

const extractGrids = () => {
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

  gridedTrainerList.forEach((trainerId) => {
    // let trainerId = args.trainerId;

    languages.forEach((language) => {
      const abilities = [];
      let ability = {};

      exportStatementsForIndex += `export { default as trainerId_${trainerId}_GridData${language.toUpperCase()} } from './grids/${language}/${trainerId}.json';`;
      importStatements += `trainerId_${trainerId}_GridData${language.toUpperCase()},`;

      abilityPanelDB.entries.forEach((entry) => {
        if (entry.trainerId === trainerId.toString()) {
          const { cellId, energyCost, orbs, x, y, z, abilityId } = entry;
          // let cellId = bilityPanelId;
          // let energyCost = energy;
          let orbCost = orbs;
          const coords = triangularCoordsToCollumns({ x, y, z });
          let move = {};

          ability = abilityDB.entries.find(
            (ability) => ability.abilityId === abilityId
          );

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
              ability.moveId,
              ability.passiveId
            );
            move = {
              ...move,
              // name: move.name.replace(
              //   '[Name:AbilityDescription ]',
              //   passiveSkillNameDB[language][ability.passiveId]
              // ),
              // description:
              //   passiveSkillDescriptionDB[language][ability.passiveId],
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
  });

  languages.forEach((language) => {
    exportStatements += `${language}: {${exportStrings[language]}},`;
  });

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
};

extractGrids();
