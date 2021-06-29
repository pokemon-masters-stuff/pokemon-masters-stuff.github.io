const args = require('yargs').argv;
const fs = require('fs');

const trainerDB = require('../rawdata/protodump/Trainer.json');
const abilityPanelDB = require('../rawdata/protodump/AbilityPanel.json');
const abilityDB = require('../rawdata/protodump/Ability.json');
const moveDB = require('../rawdata/protodump/ModifiedMove.json');
const triangularCoordsToCollumns = require('../utils/triangularCoordsToCollumns');
const moveAndPassiveSkillDigitDB = require('../rawdata/protodump/MoveAndPassiveSkillDigit.json');

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

const replaceDigit = (str, moveAndPassiveSkillDigitEntry, language) => {
  let updatedStr = str
    .split('[Digit:1digit ]')
    .join(moveAndPassiveSkillDigitEntry.param1)
    .split('[Digit:1digit Idx="1" ]')
    .join(moveAndPassiveSkillDigitEntry.param2)
    .split('[Digit:1digit Idx="2" ]')
    .join(moveAndPassiveSkillDigitEntry.param3)
    .split('[Digit:1digit Idx="3" ]')
    .join(moveAndPassiveSkillDigitEntry.param4)
    .split('[Digit:1digit Idx="4" ]')
    .join(moveAndPassiveSkillDigitEntry.param5)
    .split('[Digit:1digit Idx="5" ]')
    .join(moveAndPassiveSkillDigitEntry.param6)
    .split('[Digit:1digit Idx="6" ]')
    .join(moveAndPassiveSkillDigitEntry.param7)
    .split('[Digit:1digit Idx="7" ]')
    .join(moveAndPassiveSkillDigitEntry.param8)
    .split('[Digit:1digit Idx="8" ]')
    .join(moveAndPassiveSkillDigitEntry.param9)
    .split('[Digit:1digit Idx="9" ]')
    .join(moveAndPassiveSkillDigitEntry.param10)
    .split('[Digit:2digits ]')
    .join(moveAndPassiveSkillDigitEntry.param1)
    .split('[Digit:2digits Idx="1" ]')
    .join(moveAndPassiveSkillDigitEntry.param2)
    .split('[Digit:2digits Idx="2" ]')
    .join(moveAndPassiveSkillDigitEntry.param3)
    .split('[Digit:2digits Idx="3" ]')
    .join(moveAndPassiveSkillDigitEntry.param4)
    .split('[Digit:2digits Idx="4" ]')
    .join(moveAndPassiveSkillDigitEntry.param5)
    .split('[Digit:2digits Idx="5" ]')
    .join(moveAndPassiveSkillDigitEntry.param6)
    .split('[Digit:2digits Idx="6" ]')
    .join(moveAndPassiveSkillDigitEntry.param7)
    .split('[Digit:2digits Idx="7" ]')
    .join(moveAndPassiveSkillDigitEntry.param8)
    .split('[Digit:2digits Idx="8" ]')
    .join(moveAndPassiveSkillDigitEntry.param9)
    .split('[Digit:2digits Idx="9" ]')
    .join(moveAndPassiveSkillDigitEntry.param10);

  if (updatedStr.includes('Qty')) {
    if (updatedStr.includes('Ref=')) {
      let iteratorOfRef = updatedStr.matchAll('Ref=');
      let arrayOfRefs = [];
      for (const Ref of iteratorOfRef) {
        arrayOfRefs.push(updatedStr.slice(Ref.index + 5, Ref.index + 6));
      }

      for (const Ref of arrayOfRefs) {
        let param;
        if (Ref.toString() === '1') {
          param = moveAndPassiveSkillDigitEntry.param2;
        } else if (Ref.toString() === '2') {
          param = moveAndPassiveSkillDigitEntry.param3;
        } else if (Ref.toString() === '3') {
          param = moveAndPassiveSkillDigitEntry.param4;
        } else if (Ref.toString() === '4') {
          param = moveAndPassiveSkillDigitEntry.param5;
        } else if (Ref.toString() === '5') {
          param = moveAndPassiveSkillDigitEntry.param6;
        } else if (Ref.toString() === '6') {
          param = moveAndPassiveSkillDigitEntry.param7;
        } else if (Ref.toString() === '7') {
          param = moveAndPassiveSkillDigitEntry.param8;
        } else if (Ref.toString() === '8') {
          param = moveAndPassiveSkillDigitEntry.param9;
        } else if (Ref.toString() === '9') {
          param = moveAndPassiveSkillDigitEntry.param10;
        }
        if (language === 'en') {
          updatedStr = updatedStr
            .split(
              updatedStr.slice(
                updatedStr.indexOf(`Ref="${Ref}"`) - 8,
                updatedStr.indexOf(`Ref="${Ref}"`) + 28
              )
            )
            .join(param.toString() === '1' ? 'rank' : 'ranks');
        } else if (language === 'fr') {
          updatedStr = updatedStr
            .split(
              updatedStr.slice(
                updatedStr.indexOf(`Ref="${Ref}"`) - 8,
                updatedStr.indexOf(`Ref="${Ref}"`) + 28
              )
            )
            .join(param.toString() === '1' ? 'rang' : 'rangs');
        } else if (language === 'es') {
          updatedStr = updatedStr
            .split(
              updatedStr.slice(
                updatedStr.indexOf(`Ref="${Ref}"`) - 8,
                updatedStr.indexOf(`Ref="${Ref}"`) + 31
              )
            )
            .join(param.toString() === '1' ? 'nivel' : 'niveles');
        } else if (language === 'it') {
          updatedStr = updatedStr
            .split(
              updatedStr.slice(
                updatedStr.indexOf(`Ref="${Ref}"`) - 8,
                updatedStr.indexOf(`Ref="${Ref}"`) + 29
              )
            )
            .join(param.toString() === '1' ? 'grado' : 'gradi');
        } else if (language === 'de') {
          updatedStr = updatedStr
            .split(
              updatedStr.slice(
                updatedStr.indexOf(`Ref="${Ref}"`) - 8,
                updatedStr.indexOf(`Ref="${Ref}"`) + 34
              )
            )
            .join(param.toString() === '1' ? 'Segment' : 'Segmente');
        }
      }
    }

    if (language === 'en') {
      updatedStr = updatedStr
        .split('[EN:Qty S="rank" P="ranks" ]')
        .join(
          moveAndPassiveSkillDigitEntry.param1.toString() === '1'
            ? 'rank'
            : 'ranks'
        )
        .split('[EN:Qty S="slot" P="slots" ]')
        .join(
          moveAndPassiveSkillDigitEntry.param1.toString() === '1'
            ? 'slot'
            : 'slots'
        );
    } else if (language === 'fr') {
      updatedStr = updatedStr
        .split('[FR:Qty S="rang" P="rangs" ]')
        .join(
          moveAndPassiveSkillDigitEntry.param1.toString() === '1'
            ? 'rang'
            : 'rangs'
        )
        .split('[FR:Qty S="segment" P="segments" ]')
        .join(
          moveAndPassiveSkillDigitEntry.param1.toString() === '1'
            ? 'segment'
            : 'segments'
        );
    } else if (language === 'es') {
      updatedStr = updatedStr
        .split('[ES:Qty S="nivel" P="niveles" ]')
        .join(
          moveAndPassiveSkillDigitEntry.param1.toString() === '1'
            ? 'nivel'
            : 'niveles'
        )
        .split('[ES:Qty S="punto" P="puntos" ]')
        .join(
          moveAndPassiveSkillDigitEntry.param1.toString() === '1'
            ? 'punto'
            : 'puntos'
        );
    } else if (language === 'it') {
      updatedStr = updatedStr
        .split('[IT:Qty S="grado" P="gradi" ]')
        .join(
          moveAndPassiveSkillDigitEntry.param1.toString() === '1'
            ? 'grado'
            : 'gradi'
        )
        .split('[IT:Qty S="utilizzo delle mosse" P="utilizzi delle mosse" ]')
        .join(
          moveAndPassiveSkillDigitEntry.param1.toString() === '1'
            ? 'utilizzo delle mosse'
            : 'utilizzi delle mosse'
        )
        .split('[IT:Qty S="barretta" P="barrette" ]')
        .join(
          moveAndPassiveSkillDigitEntry.param1.toString() === '1'
            ? 'barretta'
            : 'barrette'
        )
        .split('[IT:Qty S="utilizzo" P="utilizzi" ]')
        .join(
          moveAndPassiveSkillDigitEntry.param1.toString() === '1'
            ? 'utilizzo'
            : 'utilizzi'
        );
    } else if (language === 'de') {
      updatedStr = updatedStr
        .split('[DE:Qty S="Segment" P="Segmente" ]')
        .join(
          moveAndPassiveSkillDigitEntry.param1.toString() === '1'
            ? 'Segment'
            : 'Segmente'
        );
    }
  }

  return updatedStr;
};

const getUpdatedPassiveSkillName = (language, moveId, passiveId) => {
  if (moveId.toString() === '94' && passiveId.toString() === '22010302') {
    console.log('on a roll');
  }
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
          // moveAndPassiveSkillDigitDB.entries.forEach((entry) => {
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
          // if (moveId.toString() === '94' && passive.toString() === '22010302') {
          //   console.log('on a roll');
          // }
          // moveAndPassiveSkillDigitDB.entries.forEach((entry) => {
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
    if (moveId.toString() === '0') {
      return originalPassiveSkillName;
    } else {
      return moveNameDB[language][moveId] + ' ' + originalPassiveSkillName;
    }
    // return originalPassiveSkillName;
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

      moveAndPassiveSkillDigitDB.entries.forEach((entry) => {
        if (entry.id.toString() === passiveId.toString()) {
          moveAndPassiveSkillDigitEntry = entry;
        }
      });
      let finalSkillDescription = '';
      if (moveAndPassiveSkillDigitEntry) {
        finalSkillDescription = passiveSkillDescriptionPartsDB[language][index];
        finalSkillDescription = replaceDigit(
          finalSkillDescription,
          moveAndPassiveSkillDigitEntry,
          language
        );
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
