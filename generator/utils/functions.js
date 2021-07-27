const moveAndPassiveSkillDigitDB = require('../rawdata/protodump/MoveAndPassiveSkillDigit.json');

const moveNameDBde = require('../rawdata/lsddump/move_name_de.json');
const moveNameDBen = require('../rawdata/lsddump/move_name_en.json');
const moveNameDBes = require('../rawdata/lsddump/move_name_es.json');
const moveNameDBfr = require('../rawdata/lsddump/move_name_fr.json');
const moveNameDBit = require('../rawdata/lsddump/move_name_it.json');
const moveNameDBja = require('../rawdata/lsddump/move_name_ja.json');
const moveNameDBko = require('../rawdata/lsddump/move_name_ko.json');
const moveNameDBzh = require('../rawdata/lsddump/move_name_zh-TW.json');

const moveDescriptionDBde = require('../rawdata/lsddump/move_description_de.json');
const moveDescriptionDBen = require('../rawdata/lsddump/move_description_en.json');
const moveDescriptionDBes = require('../rawdata/lsddump/move_description_es.json');
const moveDescriptionDBfr = require('../rawdata/lsddump/move_description_fr.json');
const moveDescriptionDBit = require('../rawdata/lsddump/move_description_it.json');
const moveDescriptionDBja = require('../rawdata/lsddump/move_description_ja.json');
const moveDescriptionDBko = require('../rawdata/lsddump/move_description_ko.json');
const moveDescriptionDBzh = require('../rawdata/lsddump/move_description_zh-TW.json');

const moveDescriptionPartsDBde = require('../rawdata/lsddump/move_description_parts_de.json');
const moveDescriptionPartsDBen = require('../rawdata/lsddump/move_description_parts_en.json');
const moveDescriptionPartsDBes = require('../rawdata/lsddump/move_description_parts_es.json');
const moveDescriptionPartsDBfr = require('../rawdata/lsddump/move_description_parts_fr.json');
const moveDescriptionPartsDBit = require('../rawdata/lsddump/move_description_parts_it.json');
const moveDescriptionPartsDBja = require('../rawdata/lsddump/move_description_parts_ja.json');
const moveDescriptionPartsDBko = require('../rawdata/lsddump/move_description_parts_ko.json');
const moveDescriptionPartsDBzh = require('../rawdata/lsddump/move_description_parts_zh-TW.json');

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

const moveDescriptionDB = {
  de: moveDescriptionDBde,
  en: moveDescriptionDBen,
  es: moveDescriptionDBes,
  fr: moveDescriptionDBfr,
  it: moveDescriptionDBit,
  ja: moveDescriptionDBja,
  ko: moveDescriptionDBko,
  zh: moveDescriptionDBzh,
};

const moveDescriptionPartsDB = {
  de: moveDescriptionPartsDBde,
  en: moveDescriptionPartsDBen,
  es: moveDescriptionPartsDBes,
  fr: moveDescriptionPartsDBfr,
  it: moveDescriptionPartsDBit,
  ja: moveDescriptionPartsDBja,
  ko: moveDescriptionPartsDBko,
  zh: moveDescriptionPartsDBzh,
};

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

const getUpdatedMoveDescription = (language, moveId) => {
  let originalMoveDescription = moveDescriptionDB[language][moveId];
  if (originalMoveDescription && originalMoveDescription.includes('Idx')) {
    let iteratorOfIdx = originalMoveDescription.matchAll('Idx');
    let arrayOfIdxIndex = [];
    let arrayOfMoveDescriptionParts = [];
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
        originalMoveDescription.slice(Idx.index + 5, Idx.index + 11)
      );
    }
    for (const index of arrayOfIdxIndex) {
      let moveAndPassiveSkillDigitEntry;

      moveAndPassiveSkillDigitDB.entries.forEach((entry) => {
        if (entry.id.toString() === moveId.toString()) {
          moveAndPassiveSkillDigitEntry = entry;
        }
      });
      let finalMoveDescription = '';
      if (moveAndPassiveSkillDigitEntry) {
        finalMoveDescription = moveDescriptionPartsDB[language][index];
        finalMoveDescription = replaceDigit(
          finalMoveDescription,
          moveAndPassiveSkillDigitEntry,
          language
        );
      } else {
        finalMoveDescription = moveDescriptionPartsDB[language][index];
      }

      arrayOfMoveDescriptionParts.push(finalMoveDescription);
    }
    return arrayOfMoveDescriptionParts.join('\n');
  } else {
    return originalMoveDescription;
  }
};

const getUpdatedPassiveSkillDescription = (language, passiveId) => {
  let originalPassiveSkillDescription =
    passiveSkillDescriptionDB[language][passiveId];
  if (passiveId && originalPassiveSkillDescription) {
    if (originalPassiveSkillDescription.includes('Idx')) {
      let iteratorOfIdx = originalPassiveSkillDescription.matchAll('Idx');
      let arrayOfIdxIndex = [];
      let arrayOfPassiveSkillDescriptionParts = [];
      for (const Idx of iteratorOfIdx) {
        arrayOfIdxIndex.push(
          originalPassiveSkillDescription.slice(Idx.index + 5, Idx.index + 12)
        );
      }
      for (const index of arrayOfIdxIndex) {
        let moveAndPassiveSkillDigitEntry;

        moveAndPassiveSkillDigitDB.entries.forEach((entry) => {
          if (entry.id.toString() === passiveId.toString()) {
            moveAndPassiveSkillDigitEntry = entry;
          }
        });
        let finalSkillDescription = '';
        if (moveAndPassiveSkillDigitEntry) {
          finalSkillDescription =
            passiveSkillDescriptionPartsDB[language][index];
          finalSkillDescription = replaceDigit(
            finalSkillDescription,
            moveAndPassiveSkillDigitEntry,
            language
          );
        } else {
          finalSkillDescription =
            passiveSkillDescriptionPartsDB[language][index];
        }

        arrayOfPassiveSkillDescriptionParts.push(finalSkillDescription);
      }
      return arrayOfPassiveSkillDescriptionParts.join('\n');
    } else {
      return originalPassiveSkillDescription;
    }
  } else {
    return originalPassiveSkillDescription;
  }
};

const getUpdatedPassiveSkillName = (language, moveId, passiveId) => {
  let originalPassiveSkillName = passiveSkillNameDB[language][passiveId];
  if (passiveId && originalPassiveSkillName) {
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
            finalSkillName = passiveSkillNamePartsDB[language][
              index.toString()
            ].replace('[Name:PassiveSkillNameDigit ]', digit);
          } else {
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
      return arrayOfPassiveSkillNameParts.join('\n');
    } else {
      if (moveId.toString() === '0') {
        return originalPassiveSkillName;
      } else {
        return moveNameDB[language][moveId] + ' ' + originalPassiveSkillName;
      }
    }
  } else {
    finalSkillName = originalPassiveSkillName;
  }
};

const getUpdatedAbilityName = (language, moveId, passiveId) => {
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
          finalSkillName = passiveSkillNamePartsDB[language][
            index.toString()
          ].replace('[Name:PassiveSkillNameDigit ]', digit);
        } else {
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

    return arrayOfPassiveSkillNameParts.join('\n');
  } else {
    if (moveId.toString() === '0') {
      return originalPassiveSkillName;
    } else {
      return moveNameDB[language][moveId] + ' ' + originalPassiveSkillName;
    }
  }
};

module.exports = {
  getUpdatedMoveDescription,
  getUpdatedPassiveSkillDescription,
  getUpdatedPassiveSkillName,
  getUpdatedAbilityName,
};
