const fs = require('fs');

const monsterDB = require('../rawdata/protodump/Monster.json');
const monsterBaseDB = require('../rawdata/protodump/MonsterBase.json');
const moveDB = require('../rawdata/protodump/ModifiedMove.json');
const trainerDB = require('../rawdata/protodump/Trainer.json');
const trainerBaseDB = require('../rawdata/protodump/TrainerBase.json');
const monsterVariationDB = require('../rawdata/protodump/MonsterVariation.json');
const moveAndPassiveSkillDigitDB = require('../rawdata/protodump/MoveAndPassiveSkillDigit.json');

const pokemonNameDBde = require('../rawdata/lsddump/monster_name_de.json');
const pokemonNameDBen = require('../rawdata/lsddump/monster_name_en.json');
const pokemonNameDBes = require('../rawdata/lsddump/monster_name_es.json');
const pokemonNameDBfr = require('../rawdata/lsddump/monster_name_fr.json');
const pokemonNameDBit = require('../rawdata/lsddump/monster_name_it.json');
const pokemonNameDBja = require('../rawdata/lsddump/monster_name_ja.json');
const pokemonNameDBko = require('../rawdata/lsddump/monster_name_ko.json');
const pokemonNameDBzh = require('../rawdata/lsddump/monster_name_zh-TW.json');

const trainerNameDBde = require('../rawdata/lsddump/trainer_name_de.json');
const trainerNameDBen = require('../rawdata/lsddump/trainer_name_en.json');
const trainerNameDBes = require('../rawdata/lsddump/trainer_name_es.json');
const trainerNameDBfr = require('../rawdata/lsddump/trainer_name_fr.json');
const trainerNameDBit = require('../rawdata/lsddump/trainer_name_it.json');
const trainerNameDBja = require('../rawdata/lsddump/trainer_name_ja.json');
const trainerNameDBko = require('../rawdata/lsddump/trainer_name_ko.json');
const trainerNameDBzh = require('../rawdata/lsddump/trainer_name_zh-TW.json');

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

const moveTargetTypeDBde = require('../rawdata/lsddump/move_target_type_de.json');
const moveTargetTypeDBen = require('../rawdata/lsddump/move_target_type_en.json');
const moveTargetTypeDBes = require('../rawdata/lsddump/move_target_type_es.json');
const moveTargetTypeDBfr = require('../rawdata/lsddump/move_target_type_fr.json');
const moveTargetTypeDBit = require('../rawdata/lsddump/move_target_type_it.json');
const moveTargetTypeDBja = require('../rawdata/lsddump/move_target_type_ja.json');
const moveTargetTypeDBko = require('../rawdata/lsddump/move_target_type_ko.json');
const moveTargetTypeDBzh = require('../rawdata/lsddump/move_target_type_zh-TW.json');

const passiveNameDBde = require('../rawdata/lsddump/passive_skill_name_de.json');
const passiveNameDBen = require('../rawdata/lsddump/passive_skill_name_en.json');
const passiveNameDBes = require('../rawdata/lsddump/passive_skill_name_es.json');
const passiveNameDBfr = require('../rawdata/lsddump/passive_skill_name_fr.json');
const passiveNameDBit = require('../rawdata/lsddump/passive_skill_name_it.json');
const passiveNameDBja = require('../rawdata/lsddump/passive_skill_name_ja.json');
const passiveNameDBko = require('../rawdata/lsddump/passive_skill_name_ko.json');
const passiveNameDBzh = require('../rawdata/lsddump/passive_skill_name_zh-TW.json');

const passiveDescriptionDBde = require('../rawdata/lsddump/passive_skill_description_de.json');
const passiveDescriptionDBen = require('../rawdata/lsddump/passive_skill_description_en.json');
const passiveDescriptionDBes = require('../rawdata/lsddump/passive_skill_description_es.json');
const passiveDescriptionDBfr = require('../rawdata/lsddump/passive_skill_description_fr.json');
const passiveDescriptionDBit = require('../rawdata/lsddump/passive_skill_description_it.json');
const passiveDescriptionDBja = require('../rawdata/lsddump/passive_skill_description_ja.json');
const passiveDescriptionDBko = require('../rawdata/lsddump/passive_skill_description_ko.json');
const passiveDescriptionDBzh = require('../rawdata/lsddump/passive_skill_description_zh-TW.json');

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

const passiveSkillNameDBde = require('../rawdata/lsddump/passive_skill_name_de.json');
const passiveSkillNameDBen = require('../rawdata/lsddump/passive_skill_name_en.json');
const passiveSkillNameDBes = require('../rawdata/lsddump/passive_skill_name_es.json');
const passiveSkillNameDBfr = require('../rawdata/lsddump/passive_skill_name_fr.json');
const passiveSkillNameDBit = require('../rawdata/lsddump/passive_skill_name_it.json');
const passiveSkillNameDBja = require('../rawdata/lsddump/passive_skill_name_ja.json');
const passiveSkillNameDBko = require('../rawdata/lsddump/passive_skill_name_ko.json');
const passiveSkillNameDBzh = require('../rawdata/lsddump/passive_skill_name_zh-TW.json');

const passiveSkillDescriptionPartsDBde = require('../rawdata/lsddump/passive_skill_description_parts_de.json');
const passiveSkillDescriptionPartsDBen = require('../rawdata/lsddump/passive_skill_description_parts_en.json');
const passiveSkillDescriptionPartsDBes = require('../rawdata/lsddump/passive_skill_description_parts_es.json');
const passiveSkillDescriptionPartsDBfr = require('../rawdata/lsddump/passive_skill_description_parts_fr.json');
const passiveSkillDescriptionPartsDBit = require('../rawdata/lsddump/passive_skill_description_parts_it.json');
const passiveSkillDescriptionPartsDBja = require('../rawdata/lsddump/passive_skill_description_parts_ja.json');
const passiveSkillDescriptionPartsDBko = require('../rawdata/lsddump/passive_skill_description_parts_ko.json');
const passiveSkillDescriptionPartsDBzh = require('../rawdata/lsddump/passive_skill_description_parts_zh-TW.json');

const pokemonNameDB = {
  de: pokemonNameDBde,
  en: pokemonNameDBen,
  es: pokemonNameDBes,
  fr: pokemonNameDBfr,
  it: pokemonNameDBit,
  ja: pokemonNameDBja,
  ko: pokemonNameDBko,
  zh: pokemonNameDBzh,
};

const trainerNameDB = {
  de: trainerNameDBde,
  en: trainerNameDBen,
  es: trainerNameDBes,
  fr: trainerNameDBfr,
  it: trainerNameDBit,
  ja: trainerNameDBja,
  ko: trainerNameDBko,
  zh: trainerNameDBzh,
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

const moveTargetTypeDB = {
  de: moveTargetTypeDBde,
  en: moveTargetTypeDBen,
  es: moveTargetTypeDBes,
  fr: moveTargetTypeDBfr,
  it: moveTargetTypeDBit,
  ja: moveTargetTypeDBja,
  ko: moveTargetTypeDBko,
  zh: moveTargetTypeDBzh,
};

const passiveNameDB = {
  de: passiveNameDBde,
  en: passiveNameDBen,
  es: passiveNameDBes,
  fr: passiveNameDBfr,
  it: passiveNameDBit,
  ja: passiveNameDBja,
  ko: passiveNameDBko,
  zh: passiveNameDBzh,
};

const passiveDescriptionDB = {
  de: passiveDescriptionDBde,
  en: passiveDescriptionDBen,
  es: passiveDescriptionDBes,
  fr: passiveDescriptionDBfr,
  it: passiveDescriptionDBit,
  ja: passiveDescriptionDBja,
  ko: passiveDescriptionDBko,
  zh: passiveDescriptionDBzh,
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

const languages = ['de', 'en', 'es', 'fr', 'it', 'ja', 'ko', 'zh'];

// Update this list (of trainerId) based on new datamine
const trainerList = [
  // Eggmons trainerId from Trainer.json
  '18000000000',
  '18000020000',
  '18000020011',
  '18000020021',
  '18000020026',
  '18000020031',
  '18000020036',
  '18000020051',
  '18000020056',
  '18000020061',
  '18000020071',
  '18000020076',
  '18000020081',
  '18000020086',
  '18000020101',
  '18000020106',
  '18000020111',
  '18000020116',
  '18000020121',
  '18000020131',
  '18000020136',
  '18000020141',
  '18000020146',
  '18000020151',
  '18000020156',
  '18000020161',
  '18000020166',
  '18000020171',
  '18000020176',
  '18000020181',
  '18000020186',
  '18000020191',
  '18000020196',
  '18000020201',
  '18000020206',
  '18000020211',
  '18000020216',
  '18000020221',
  '18000020226',
  '18000020231',
  '18000020236',
  '18000020241',
  '18000020246',
  '18000020251',
  '18000020261',
  '18000020266',
  '18000020271',
  '18000020276',
  '18000020281',
  '18000020286',
  '18000020291',
  '18000020296',
  '18000020301',
  '18000020306',
  '18000020371',
  '18000020376',
  '18000020381',
  '18000020386',
  '18000020391',
  '18000020401',
  '18000020411',
  '18000020416',
  '18000020421',
  '18000020426',
  '18000020431',
  '18000020441',
  '18000020446',
  '18000020451',
  '18000020456',
  '18000020461',
  '18000020476',
  '18000020481',
  '18000020486',
  '18000020491',
  '18000020496',
  '18000020501',
  '18000020506',
  '18000020511',
  '18000020516',
  '18000020521',
  '18000020531',
  '18000030011',
  '18000030021',
  '18000030026',
  '18000030031',
  '18000030036',
  '18000030051',
  '18000030056',
  '18000030061',
  '18000030071',
  '18000030076',
  '18000030081',
  '18000030086',
  '18000030101',
  '18000030106',
  '18000030111',
  '18000030116',
  '18000030121',
  '18000030131',
  '18000030136',
  '18000030141',
  '18000030146',
  '18000030151',
  '18000030156',
  '18000030161',
  '18000030166',
  '18000030171',
  '18000030176',
  '18000030181',
  '18000030186',
  '18000030191',
  '18000030196',
  '18000030201',
  '18000030206',
  '18000030211',
  '18000030216',
  '18000030221',
  '18000030226',
  '18000030231',
  '18000030236',
  '18000030241',
  '18000030246',
  '18000030251',
  '18000030261',
  '18000030266',
  '18000030271',
  '18000030276',
  '18000030281',
  '18000030286',
  '18000030291',
  '18000030296',
  '18000030301',
  '18000030306',
  '18000030371',
  '18000030376',
  '18000030381',
  '18000030386',
  '18000030391',
  '18000030401',
  '18000030411',
  '18000030416',
  '18000030421',
  '18000030426',
  '18000030431',
  '18000030441',
  '18000030446',
  '18000030451',
  '18000030456',
  '18000030461',
  '18000030476',
  '18000030481',
  '18000030486',
  '18000030491',
  '18000030496',
  '18000030501',
  '18000030506',
  '18000030511',
  '18000030516',
  '18000040001',
  '18000040004',
  '18000040007',
  '18000040011',
  '18000040021',
  '18000040026',
  '18000040031',
  '18000040036',
  '18000040051',
  '18000040056',
  '18000040061',
  '18000040071',
  '18000040076',
  '18000040081',
  '18000040086',
  '18000040101',
  '18000040106',
  '18000040111',
  '18000040116',
  '18000040121',
  '18000040131',
  '18000040136',
  '18000040141',
  '18000040146',
  '18000040151',
  '18000040156',
  '18000040161',
  '18000040166',
  '18000040171',
  '18000040176',
  '18000040181',
  '18000040186',
  '18000040191',
  '18000040196',
  '18000040201',
  '18000040206',
  '18000040211',
  '18000040216',
  '18000040221',
  '18000040226',
  '18000040231',
  '18000040236',
  '18000040241',
  '18000040246',
  '18000040251',
  '18000040261',
  '18000040266',
  '18000040271',
  '18000040276',
  '18000040281',
  '18000040286',
  '18000040291',
  '18000040296',
  '18000040301',
  '18000040306',
  '18000040371',
  '18000040376',
  '18000040381',
  '18000040386',
  '18000040391',
  '18000040401',
  '18000040411',
  '18000040416',
  '18000040421',
  '18000040426',
  '18000040431',
  '18000040441',
  '18000040446',
  '18000040451',
  '18000040456',
  '18000040461',
  '18000040476',
  '18000040481',
  '18000040486',
  '18000040491',
  '18000040496',
  '18000040501',
  '18000040506',
  '18000040511',
  '18000040516',
  '18000120000',
];

// On 5/25/2020 the following changes have been made to the .proto files:
// monsterId->monsterBaseId
// trainerId->monsterId
// characterId->trainerId

/*
 * Usage i.e: node extractEggPokemonDataByTrainerId.js
 * */

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
  // console.log('moveId', moveId);
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

        // if (finalMoveDescription.includes('EN:Qty')) {
        //   if (moveAndPassiveSkillDigitEntry.param1.toString() === '1') {
        //     finalMoveDescription = finalMoveDescription.replace(
        //       '[EN:Qty S="rank" P="ranks" ]',
        //       'rank'
        //     );

        //     finalMoveDescription = finalMoveDescription.replace(
        //       '[EN:Qty Ref="1" S="rank" P="ranks" ]',
        //       'rank'
        //     );
        //     finalMoveDescription = finalMoveDescription.replace(
        //       '[EN:Qty Ref="2" S="rank" P="ranks" ]',
        //       'rank'
        //     );
        //   } else {
        //     finalMoveDescription = finalMoveDescription.replace(
        //       '[EN:Qty S="rank" P="ranks" ]',
        //       'ranks'
        //     );

        //     finalMoveDescription = finalMoveDescription.replace(
        //       '[EN:Qty Ref="1" S="rank" P="ranks" ]',
        //       'ranks'
        //     );

        //     finalMoveDescription = finalMoveDescription.replace(
        //       '[EN:Qty Ref="2" S="rank" P="ranks" ]',
        //       'ranks'
        //     );
        //   }
        // }
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

const getUpdatedPassiveSkillName = (language, passiveId) => {
  // console.log('passiveId', passiveId);
  let originalPassiveSkillName = passiveSkillNameDB[language][passiveId];
  if (passiveId) {
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
          // if (moveId.toString() === '0') {
          //   // moveAndPassiveSkillDigitDB.entries.forEach((entry) => {
          //   //   if (entry.id.toString() === passiveId.toString()) {
          //   //     digit = entry.param1;
          //   //   } else {
          //   //     digit = passiveId.toString().slice(-1);
          //   //   }
          //   // });
          //   finalSkillName = passiveSkillNamePartsDB[language][
          //     index.toString()
          //   ].replace('[Name:PassiveSkillNameDigit ]', digit);
          // } else {
          // moveAndPassiveSkillDigitDB.entries.forEach((entry) => {
          //   if (entry.id.toString() === moveId.toString()) {
          //     digit = entry.param1;
          //   }
          // });
          finalSkillName =
            // moveNameDB[language][moveId] +
            // ' ' +
            passiveSkillNamePartsDB[language][index.toString()].replace(
              '[Name:PassiveSkillNameDigit ]',
              digit
            );
          // }
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
  } else {
    return originalPassiveSkillName;
  }
};

const getUpdatedPassiveSkillDescription = (language, passiveId) => {
  let originalPassiveSkillDescription =
    passiveSkillDescriptionDB[language][passiveId];
  if (passiveId) {
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
      // console.log(
      //   'arrayOfPassiveSkillDescriptionParts',
      //   arrayOfPassiveSkillDescriptionParts
      // );
      return arrayOfPassiveSkillDescriptionParts.join('\n');
    } else {
      return originalPassiveSkillDescription;
    }
  } else {
    return originalPassiveSkillDescription;
  }
};

const extractSyncPairDataByTrainerBaseId = () => {
  const syncPairDataArray = [];
  let monsterAndTrainerData = {};
  let monsterId = '';
  let monsterBaseId = '';
  // let syncMoveId = '';
  let trainerNameId = '';
  let trainerBaseId = '';
  let stats = {};
  let moves = {};
  let passives = {};
  let syncPairNames = {};

  trainerList.forEach((trainerIdFromList) => {
    if (
      // "18000000000", Pikachu
      // "18000020000", Torchic
      // "18000120000", Solgaleo
      trainerIdFromList !== '18000000000' &&
      trainerIdFromList !== '18000020000' &&
      trainerIdFromList !== '18000120000' &&
      trainerIdFromList !== '18000020521' && // Hero & Regirock
      trainerIdFromList !== '18000020531' && // Hero & Cobalion
      trainerIdFromList.slice(-1) !== '6' // Ids that end in '6' seem to be duplicates
    ) {
      // Find entry in Trainer.json
      let trainer = trainerDB.entries.find(
        (trainer) => trainer.trainerId.toString() === trainerIdFromList
      );

      if (trainer) {
        // Use trainerBaseId to find monsterId and trainerBaseId in Trainer.json
        monsterId = trainer.monsterId;
        // console.log('monsterId', monsterId);

        trainerBaseId = trainer.trainerBaseId;

        // If  the three starters, find the final evolution form
        // if (monsterId === 28000040001) {
        //   monsterId = 28000040003;
        // } else if (monsterId === 28000040004) {
        //   monsterId = 28000040006;
        // } else if (monsterId === 28000040007) {
        //   monsterId = 28000040009;
        // }
        if (monsterId === '28000040001') {
          monsterId = '28000040003';
        } else if (monsterId === '28000040004') {
          monsterId = '28000040006';
        } else if (monsterId === '28000040007') {
          monsterId = '28000040009';
        } else {
          // else check if there is an evolved form. If so use the final evolved form's monsterId
          let thirdEvolvedFormMonsterId =
            monsterId.toString().substring(0, monsterId.toString().length - 1) +
            '3'; // some pokemon eg. Beedrill's last digit is 3

          let secondEvolvedFormMonsterId =
            monsterId.toString().substring(0, monsterId.toString().length - 1) +
            '2';
          let firstEvolvedFormMonsterId =
            monsterId.toString().substring(0, monsterId.toString().length - 1) +
            '1';

          if (
            monsterDB.entries.find(
              (monster) =>
                monster.monsterId.toString() === thirdEvolvedFormMonsterId
            )
          ) {
            monsterId = thirdEvolvedFormMonsterId;
          } else if (
            monsterDB.entries.find(
              (monster) =>
                monster.monsterId.toString() === secondEvolvedFormMonsterId
            )
          ) {
            monsterId = secondEvolvedFormMonsterId;
          } else if (
            monsterDB.entries.find(
              (monster) =>
                monster.monsterId.toString() === firstEvolvedFormMonsterId
            )
          ) {
            monsterId = firstEvolvedFormMonsterId;
          }
        }

        // Use monsterId to find type, weakType, moveId and passiveId in Trainer.json
        let {
          move1Id,
          move2Id,
          move3Id,
          move4Id,
          passive1Id,
          passive2Id,
          passive3Id,
          type,
          weakType,
          rarity,
          role,
        } = trainer;

        // Use moveId to find move name lsddump move_name_xx.json
        // Use moveId to find move description lsddump move_description_xx.json
        let move1NameByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          move2NameByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          move3NameByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          move4NameByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          };

        let move1DescriptionByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          move2DescriptionByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          move3DescriptionByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          move4DescriptionByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          };

        let move1TargetTypeByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          move2TargetTypeByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          move3TargetTypeByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          move4TargetTypeByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          };

        // Use moveId to find move data, eg. power, accuracy, etc. from Move.json
        if (
          // Beedrill
          monsterId === '28000020053' ||
          monsterId === '28000030053' ||
          monsterId === '28000040053'
        ) {
          // console.log('Change moves for Beedrill');
          // Weedle changes its moveset when evolving into Beedrill
          move1Id = 42;
          if (role === 0) {
            move4Id = 398;
          } else {
            move4Id = 41;
          }
        } else if (
          // Alakazam
          monsterId === '28000020223' ||
          monsterId === '28000030223' ||
          monsterId === '28000040223'
        ) {
          // roles = { 'P.Strike': 0, 'S.Strike': 1, Support: 2, Tech: 3 };
          if (role === 1) {
            // strike
            move2Id = 19030;
            move4Id = 94;
          } else if (role === 2) {
            // support
            move3Id = 17106;
            move4Id = 113;
          } else if (role === 3) {
            // tech
            move2Id = 19110;
            move4Id = 60;
          }
        } else if (
          // Clefable
          monsterId === '28000020413' ||
          monsterId === '28000030413' ||
          monsterId === '28000040413'
        ) {
          // roles = { 'P.Strike': 0, 'S.Strike': 1, Support: 2, Tech: 3 };
          if (role === 1) {
            // strike- move4 = Moonblast
            move4Id = 585;
          } else if (role === 2) {
            // support - move4 = Play Rough
            move4Id = 583;
          } else if (role === 3) {
            // tech- move4 = Play Rough
            move4Id = 583;
          }
        } else if (
          // Wigglytuff
          monsterId === '28000020423' ||
          monsterId === '28000030423' ||
          monsterId === '28000040423'
        ) {
          // roles = { 'P.Strike': 0, 'S.Strike': 1, Support: 2, Tech: 3 };
          if (role === 0) {
            // strike
            move1Id = 574;
            move4Id = 38;
          } else if (role === 2) {
            // support
            move1Id = 574;
            move4Id = 577;
          } else if (role === 3) {
            // tech
            move1Id = 574;
            move4Id = 34;
          }
        }

        let move1 = moveDB.entries.find(
          (move) => move.moveId.toString() === move1Id.toString()
        );
        let move2 = moveDB.entries.find(
          (move) => move.moveId.toString() === move2Id.toString()
        );
        let move3 = moveDB.entries.find(
          (move) => move.moveId.toString() === move3Id.toString()
        );
        let move4 = moveDB.entries.find(
          (move) => move.moveId.toString() === move4Id.toString()
        );

        languages.forEach((language) => {
          move1NameByLanguage[language] = moveNameDB[language][move1Id];
          move2NameByLanguage[language] = moveNameDB[language][move2Id];
          move3NameByLanguage[language] = moveNameDB[language][move3Id];
          move4NameByLanguage[language] =
            move4Id !== -1 ? moveNameDB[language][move4Id] : '';
          move1DescriptionByLanguage[language] = getUpdatedMoveDescription(
            language,
            move1Id
          );
          move2DescriptionByLanguage[language] = getUpdatedMoveDescription(
            language,
            move2Id
          );
          move3DescriptionByLanguage[language] = getUpdatedMoveDescription(
            language,
            move3Id
          );
          move4DescriptionByLanguage[language] = getUpdatedMoveDescription(
            language,
            move4Id
          );
          move1TargetTypeByLanguage[language] =
            moveTargetTypeDB[language][move1.target];
          move2TargetTypeByLanguage[language] =
            moveTargetTypeDB[language][move2.target];
          move3TargetTypeByLanguage[language] =
            moveTargetTypeDB[language][move3.target];
          move4TargetTypeByLanguage[language] =
            move4Id !== -1 ? moveTargetTypeDB[language][move4.target] : '';
        });
        moves =
          move4Id !== -1
            ? {
                move1: {
                  id: move1Id,
                  name: move1NameByLanguage,
                  description: move1DescriptionByLanguage,
                  category: move1.category,
                  group: move1.group,
                  type: move1.type,
                  target: move1.target,
                  targetType: move1TargetTypeByLanguage,
                  gaugeDrain: move1.gaugeDrain,
                  power: move1.power,
                  accuracy: move1.accuracy,
                  maxUses: move1.maxUses,
                },
                move2: {
                  id: move2Id,
                  name: move2NameByLanguage,
                  description: move2DescriptionByLanguage,
                  category: move2.category,
                  group: move2.group,
                  type: move2.type,
                  target: move2.target,
                  targetType: move2TargetTypeByLanguage,
                  gaugeDrain: move2.gaugeDrain,
                  power: move2.power,
                  accuracy: move2.accuracy,
                  maxUses: move2.maxUses,
                },
                move3: {
                  id: move3Id,
                  name: move3NameByLanguage,
                  description: move3DescriptionByLanguage,
                  category: move3.category,
                  group: move3.group,
                  type: move3.type,
                  target: move3.target,
                  targetType: move3TargetTypeByLanguage,
                  gaugeDrain: move3.gaugeDrain,
                  power: move3.power,
                  accuracy: move3.accuracy,
                  maxUses: move3.maxUses,
                },
                move4: {
                  id: move4Id,
                  name: move4NameByLanguage,
                  description: move4DescriptionByLanguage,
                  category: move4.category,
                  group: move4.group,
                  type: move4.type,
                  target: move4.target,
                  targetType: move4TargetTypeByLanguage,
                  gaugeDrain: move4.gaugeDrain,
                  power: move4.power,
                  accuracy: move4.accuracy,
                  maxUses: move4.maxUses,
                },
              }
            : {
                move1: {
                  id: move1Id,
                  name: move1NameByLanguage,
                  description: move1DescriptionByLanguage,
                  category: move1.category,
                  group: move1.group,
                  type: move1.type,
                  target: move1.target,
                  targetType: move1TargetTypeByLanguage,
                  gaugeDrain: move1.gaugeDrain,
                  power: move1.power,
                  accuracy: move1.accuracy,
                  maxUses: move1.maxUses,
                },
                move2: {
                  id: move2Id,
                  name: move2NameByLanguage,
                  description: move2DescriptionByLanguage,
                  category: move2.category,
                  group: move2.group,
                  type: move2.type,
                  target: move2.target,
                  targetType: move2TargetTypeByLanguage,
                  gaugeDrain: move2.gaugeDrain,
                  power: move2.power,
                  accuracy: move2.accuracy,
                  maxUses: move2.maxUses,
                },
                move3: {
                  id: move3Id,
                  name: move3NameByLanguage,
                  description: move3DescriptionByLanguage,
                  category: move3.category,
                  group: move3.group,
                  type: move3.type,
                  target: move3.target,
                  targetType: move3TargetTypeByLanguage,
                  gaugeDrain: move3.gaugeDrain,
                  power: move3.power,
                  accuracy: move3.accuracy,
                  maxUses: move3.maxUses,
                },
                move4: {
                  id: move4Id,
                  name: move4NameByLanguage,
                  description: move4DescriptionByLanguage,
                  category: '',
                  group: '',
                  type: '',
                  target: '',
                  targetType: '',
                  gaugeDrain: '',
                  power: '',
                  accuracy: '',
                  maxUses: '',
                },
              };

        // Use passiveId to find passive skill name and description lsddump passive_skill_name_xx.json alsddump passive_skill_description_xx.json
        let passive1NameByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          passive2NameByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          passive3NameByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          };

        let passive1DescriptionByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          passive2DescriptionByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          passive3DescriptionByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          };

        languages.forEach((language) => {
          passive1NameByLanguage[language] = getUpdatedPassiveSkillName(
            language,
            passive1Id
          );
          passive2NameByLanguage[language] = getUpdatedPassiveSkillName(
            language,
            passive2Id
          );
          passive3NameByLanguage[language] = getUpdatedPassiveSkillName(
            language,
            passive3Id
          );
          passive1DescriptionByLanguage[language] =
            getUpdatedPassiveSkillDescription(language, passive1Id);
          passive2DescriptionByLanguage[language] =
            getUpdatedPassiveSkillDescription(language, passive2Id);
          passive3DescriptionByLanguage[language] =
            getUpdatedPassiveSkillDescription(language, passive3Id);
        });

        passive1Id !== 0 &&
          (passives = {
            passive1: {
              id: passive1Id,
              name: passive1NameByLanguage,
              description: passive1DescriptionByLanguage,
            },
          });
        passive2Id !== 0 &&
          (passives = {
            ...passives,
            passive2: {
              id: passive2Id,
              name: passive2NameByLanguage,
              description: passive2DescriptionByLanguage,
            },
          });
        passive3Id !== 0 &&
          (passives = {
            ...passives,
            passive3: {
              id: passive3Id,
              name: passive3NameByLanguage,
              description: passive3DescriptionByLanguage,
            },
          });

        // Use monsterId to find stats, syncMoveId and monsterBaseId in Monster.json
        let monster = monsterDB.entries.find(
          (monster) => monster.monsterId.toString() === monsterId.toString()
        );

        const {
          hpValues,
          atkValues,
          defValues,
          spaValues,
          spdValues,
          speValues,
          syncMoveId,
          monsterBaseId,
        } = monster;

        // Use monsterBaseId to find actorId in MonsterBase.json
        let monsterBase = monsterBaseDB.entries.find(
          (monsterBase) =>
            monsterBase.monsterBaseId.toString() === monsterBaseId.toString()
        );
        let monsterActorId = monsterBase.actorId;
        // prints out export statements for egg pokemon in console.
        let pokemonNameForConsoleLog = pokemonNameDB['en'][monsterBaseId]
          ? pokemonNameDB['en'][monsterBaseId]
          : pokemonNameDB['en'][
              monsterBaseId
                .toString()
                .substring(0, monsterBaseId.toString().length - 1) + '0'
            ];
        // console.log(
        //   `export { default as ${monsterActorId}_256 } from './256px/${monsterActorId}_256.ktx.png'; // ${pokemonNameForConsoleLog}`
        // );

        console.log(
          `trainerId: ${trainerIdFromList} | monsterId: ${monsterId} | monsterActorId: ${monsterActorId} // ${pokemonNameForConsoleLog}`
        );

        stats = {
          hpValues,
          atkValues,
          defValues,
          spaValues,
          spdValues,
          speValues,
        };

        // syncMoveId = monster.syncMoveId;

        // monsterBaseId = monster.monsterBaseId;

        // Use syncMoveId to find sync move data in Move.json
        let syncMoveNameByLanguage = {
          de: '',
          en: '',
          es: '',
          fr: '',
          it: '',
          ja: '',
          ko: '',
          zh: '',
        };

        let syncMoveDescriptionByLanguage = {
          de: '',
          en: '',
          es: '',
          fr: '',
          it: '',
          ja: '',
          ko: '',
          zh: '',
        };

        languages.forEach((language) => {
          syncMoveNameByLanguage[language] = moveNameDB[language][syncMoveId];
          syncMoveDescriptionByLanguage[language] =
            moveDescriptionDB[language][syncMoveId];
        });

        // Use moveId to find move data, eg. power, accuracy, etc. from Move.json
        let syncMoveEntry = moveDB.entries.find(
          (move) => move.moveId.toString() === syncMoveId.toString()
        );

        moves = {
          ...moves,
          syncMove: {
            id: syncMoveEntry.moveId,
            name: syncMoveNameByLanguage,
            description: syncMoveDescriptionByLanguage,
            category: syncMoveEntry.category,
            group: syncMoveEntry.group,
            type: syncMoveEntry.type,
            target: syncMoveEntry.target,
            gaugeDrain: syncMoveEntry.gaugeDrain,
            power: syncMoveEntry.power,
            accuracy: syncMoveEntry.accuracy,
            maxUses: syncMoveEntry.maxUses,
          },
        };

        //   // Use monsterBaseId to see if there is a mega form, i.e. monsterBaseId ends in '51'
        let monsterMegaFormBaseId;
        let monsterMegaFormEntry;
        //   let megaMoves;
        //   let megaPassives;
        //   let potentialMegaBaseId =
        //     monsterBaseId
        //       .toString()
        //       .substring(0, monsterBaseId.toString().length - 2) + '51';

        //   // do the same if pokemon is Mew
        //   if (monsterBaseId.toString() === '20015111') {
        //     potentialMegaBaseId = monsterBaseId.toString();
        //   }

        //   if (pokemonNameDBen[potentialMegaBaseId]) {
        //     monsterMegaFormBaseId = potentialMegaBaseId;

        //     monsterMegaFormEntry = monsterVariationDB.entries.find(
        //       (monster) => monster.monsterId.toString() === monsterId.toString()
        //     );

        //     const {
        //       atkScale,
        //       defScale,
        //       spaScale,
        //       spdScale,
        //       speScale,
        //     } = monsterMegaFormEntry;

        //     stats = {
        //       ...stats,
        //       atkScale,
        //       defScale,
        //       spaScale,
        //       spdScale,
        //       speScale,
        //     };

        //     // Use megaMoveId to find megaMove name lsddump move_name_xx.json
        //     // Use megaMoveId to find megaMove description lsddump move_description_xx.json
        //     let megaMove1NameByLanguage = {
        //         de: '',
        //         en: '',
        //         es: '',
        //         fr: '',
        //         it: '',
        //         ja: '',
        //         ko: '',
        //         zh: '',
        //       },
        //       megaMove2NameByLanguage = {
        //         de: '',
        //         en: '',
        //         es: '',
        //         fr: '',
        //         it: '',
        //         ja: '',
        //         ko: '',
        //         zh: '',
        //       },
        //       megaMove3NameByLanguage = {
        //         de: '',
        //         en: '',
        //         es: '',
        //         fr: '',
        //         it: '',
        //         ja: '',
        //         ko: '',
        //         zh: '',
        //       },
        //       megaMove4NameByLanguage = {
        //         de: '',
        //         en: '',
        //         es: '',
        //         fr: '',
        //         it: '',
        //         ja: '',
        //         ko: '',
        //         zh: '',
        //       };

        //     let megaMove1DescriptionByLanguage = {
        //         de: '',
        //         en: '',
        //         es: '',
        //         fr: '',
        //         it: '',
        //         ja: '',
        //         ko: '',
        //         zh: '',
        //       },
        //       megaMove2DescriptionByLanguage = {
        //         de: '',
        //         en: '',
        //         es: '',
        //         fr: '',
        //         it: '',
        //         ja: '',
        //         ko: '',
        //         zh: '',
        //       },
        //       megaMove3DescriptionByLanguage = {
        //         de: '',
        //         en: '',
        //         es: '',
        //         fr: '',
        //         it: '',
        //         ja: '',
        //         ko: '',
        //         zh: '',
        //       },
        //       megaMove4DescriptionByLanguage = {
        //         de: '',
        //         en: '',
        //         es: '',
        //         fr: '',
        //         it: '',
        //         ja: '',
        //         ko: '',
        //         zh: '',
        //       };

        //     let megaMove1TargetTypeByLanguage = {
        //         de: '',
        //         en: '',
        //         es: '',
        //         fr: '',
        //         it: '',
        //         ja: '',
        //         ko: '',
        //         zh: '',
        //       },
        //       megaMove2TargetTypeByLanguage = {
        //         de: '',
        //         en: '',
        //         es: '',
        //         fr: '',
        //         it: '',
        //         ja: '',
        //         ko: '',
        //         zh: '',
        //       },
        //       megaMove3TargetTypeByLanguage = {
        //         de: '',
        //         en: '',
        //         es: '',
        //         fr: '',
        //         it: '',
        //         ja: '',
        //         ko: '',
        //         zh: '',
        //       },
        //       megaMove4TargetTypeByLanguage = {
        //         de: '',
        //         en: '',
        //         es: '',
        //         fr: '',
        //         it: '',
        //         ja: '',
        //         ko: '',
        //         zh: '',
        //       };

        //     // Use megaMoveId to find megaMove data, eg. power, accuracy, etc. from Move.json
        //     let megaMove1, megaMove2, megaMove3, megaMove4;
        //     monsterMegaFormEntry.move1Id !== -1
        //       ? (megaMove1 = moveDB.entries.find(
        //           (move) =>
        //             move.moveId.toString() ===
        //             monsterMegaFormEntry.move1Id.toString()
        //         ))
        //       : null;
        //     monsterMegaFormEntry.move2Id !== -1
        //       ? (megaMove2 = moveDB.entries.find(
        //           (move) =>
        //             move.moveId.toString() ===
        //             monsterMegaFormEntry.move2Id.toString()
        //         ))
        //       : null;
        //     monsterMegaFormEntry.move3Id !== -1
        //       ? (megaMove3 = moveDB.entries.find(
        //           (move) =>
        //             move.moveId.toString() ===
        //             monsterMegaFormEntry.move3Id.toString()
        //         ))
        //       : null;
        //     monsterMegaFormEntry.move4Id !== -1
        //       ? (megaMove4 = moveDB.entries.find(
        //           (move) =>
        //             move.moveId.toString() ===
        //             monsterMegaFormEntry.move4Id.toString()
        //         ))
        //       : null;

        //     languages.forEach((language) => {
        //       megaMove1NameByLanguage[language] =
        //         moveNameDB[language][monsterMegaFormEntry.move1Id];
        //       megaMove2NameByLanguage[language] =
        //         moveNameDB[language][monsterMegaFormEntry.move2Id];
        //       megaMove3NameByLanguage[language] =
        //         moveNameDB[language][monsterMegaFormEntry.move3Id];
        //       megaMove4NameByLanguage[language] =
        //         moveNameDB[language][monsterMegaFormEntry.move4Id];
        //       megaMove1DescriptionByLanguage[language] =
        //         moveDescriptionDB[language][monsterMegaFormEntry.move1Id];
        //       megaMove2DescriptionByLanguage[language] =
        //         moveDescriptionDB[language][monsterMegaFormEntry.move2Id];
        //       megaMove3DescriptionByLanguage[language] =
        //         moveDescriptionDB[language][monsterMegaFormEntry.move3Id];
        //       megaMove4DescriptionByLanguage[language] =
        //         moveDescriptionDB[language][monsterMegaFormEntry.move4Id];
        //       megaMove1 &&
        //         (megaMove1TargetTypeByLanguage[language] =
        //           moveTargetTypeDB[language][megaMove1.target]);
        //       megaMove2 &&
        //         (megaMove2TargetTypeByLanguage[language] =
        //           moveTargetTypeDB[language][megaMove2.target]);
        //       megaMove3 &&
        //         (megaMove3TargetTypeByLanguage[language] =
        //           moveTargetTypeDB[language][megaMove3.target]);
        //       megaMove4 &&
        //         (megaMove4TargetTypeByLanguage[language] =
        //           moveTargetTypeDB[language][megaMove4.target]);
        //     });

        //     megaMove1 &&
        //       (megaMoves = {
        //         ...megaMoves,
        //         move1: {
        //           id: megaMove1.moveId,
        //           name: megaMove1NameByLanguage,
        //           description: megaMove1DescriptionByLanguage,
        //           category: megaMove1.category,
        //           group: megaMove1.group,
        //           type: megaMove1.type,
        //           target: megaMove1.target,
        //           targetType: megaMove1TargetTypeByLanguage,
        //           gaugeDrain: megaMove1.gaugeDrain,
        //           power: megaMove1.power,
        //           accuracy: megaMove1.accuracy,
        //           maxUses: megaMove1.maxUses,
        //         },
        //       });
        //     megaMove2 &&
        //       (megaMoves = {
        //         ...megaMoves,
        //         move2: {
        //           id: megaMove2.moveId,
        //           name: megaMove2NameByLanguage,
        //           description: megaMove2DescriptionByLanguage,
        //           category: megaMove2.category,
        //           group: megaMove2.group,
        //           type: megaMove2.type,
        //           target: megaMove2.target,
        //           targetType: megaMove2TargetTypeByLanguage,
        //           gaugeDrain: megaMove2.gaugeDrain,
        //           power: megaMove2.power,
        //           accuracy: megaMove2.accuracy,
        //           maxUses: megaMove2.maxUses,
        //         },
        //       });
        //     megaMove3 &&
        //       (megaMoves = {
        //         ...megaMoves,
        //         move3: {
        //           id: megaMove3.moveId,
        //           name: megaMove3NameByLanguage,
        //           description: megaMove3DescriptionByLanguage,
        //           category: megaMove3.category,
        //           group: megaMove3.group,
        //           type: megaMove3.type,
        //           target: megaMove3.target,
        //           targetType: megaMove3TargetTypeByLanguage,
        //           gaugeDrain: megaMove3.gaugeDrain,
        //           power: megaMove3.power,
        //           accuracy: megaMove3.accuracy,
        //           maxUses: megaMove3.maxUses,
        //         },
        //       });
        //     megaMove4 &&
        //       (megaMoves = {
        //         ...megaMoves,
        //         move4: {
        //           id: megaMove4.moveId,
        //           name: megaMove4NameByLanguage,
        //           description: megaMove4DescriptionByLanguage,
        //           category: megaMove4.category,
        //           group: megaMove4.group,
        //           type: megaMove4.type,
        //           target: megaMove4.target,
        //           targetType: megaMove4TargetTypeByLanguage,
        //           gaugeDrain: megaMove4.gaugeDrain,
        //           power: megaMove4.power,
        //           accuracy: megaMove4.accuracy,
        //           maxUses: megaMove4.maxUses,
        //         },
        //       });

        //     // Use passiveId to find passive skill name and description lsddump passive_skill_name_xx.json alsddump passive_skill_description_xx.json
        //     let megaPassive1NameByLanguage = {
        //         de: '',
        //         en: '',
        //         es: '',
        //         fr: '',
        //         it: '',
        //         ja: '',
        //         ko: '',
        //         zh: '',
        //       },
        //       megaPassive2NameByLanguage = {
        //         de: '',
        //         en: '',
        //         es: '',
        //         fr: '',
        //         it: '',
        //         ja: '',
        //         ko: '',
        //         zh: '',
        //       },
        //       megaPassive3NameByLanguage = {
        //         de: '',
        //         en: '',
        //         es: '',
        //         fr: '',
        //         it: '',
        //         ja: '',
        //         ko: '',
        //         zh: '',
        //       };

        //     let megaPassive1DescriptionByLanguage = {
        //         de: '',
        //         en: '',
        //         es: '',
        //         fr: '',
        //         it: '',
        //         ja: '',
        //         ko: '',
        //         zh: '',
        //       },
        //       megaPassive2DescriptionByLanguage = {
        //         de: '',
        //         en: '',
        //         es: '',
        //         fr: '',
        //         it: '',
        //         ja: '',
        //         ko: '',
        //         zh: '',
        //       },
        //       megaPassive3DescriptionByLanguage = {
        //         de: '',
        //         en: '',
        //         es: '',
        //         fr: '',
        //         it: '',
        //         ja: '',
        //         ko: '',
        //         zh: '',
        //       };

        //     languages.forEach((language) => {
        //       megaPassive1NameByLanguage[language] =
        //         passiveNameDB[language][monsterMegaFormEntry.passive1Id];
        //       megaPassive2NameByLanguage[language] =
        //         passiveNameDB[language][monsterMegaFormEntry.passive2Id];
        //       megaPassive3NameByLanguage[language] =
        //         passiveNameDB[language][monsterMegaFormEntry.passive3Id];
        //       megaPassive1DescriptionByLanguage[language] =
        //         passiveDescriptionDB[language][monsterMegaFormEntry.passive1Id];
        //       megaPassive2DescriptionByLanguage[language] =
        //         passiveDescriptionDB[language][monsterMegaFormEntry.passive2Id];
        //       megaPassive3DescriptionByLanguage[language] =
        //         passiveDescriptionDB[language][monsterMegaFormEntry.passive3Id];
        //     });

        //     monsterMegaFormEntry.passive1Id !== 0 &&
        //       (megaPassives = {
        //         ...megaPassives,
        //         passive1: {
        //           id: passive1Id,
        //           name: megaPassive1NameByLanguage,
        //           description: megaPassive1DescriptionByLanguage,
        //         },
        //       });
        //     monsterMegaFormEntry.passive2Id !== 0 &&
        //       (megaPassives = {
        //         ...megaPassives,
        //         passive2: {
        //           id: passive2Id,
        //           name: megaPassive2NameByLanguage,
        //           description: megaPassive2DescriptionByLanguage,
        //         },
        //       });
        //     monsterMegaFormEntry.passive3Id !== 0 &&
        //       (megaPassives = {
        //         ...megaPassives,
        //         passive3: {
        //           id: passive3Id,
        //           name: megaPassive3NameByLanguage,
        //           description: megaPassive3DescriptionByLanguage,
        //         },
        //       });
        //   }

        // Use trainerBaseId to find trainerNameId in TrainerBase.json
        // console.log(trainerBaseId);
        // trainerBase = trainerBaseDB.entries.find(
        //   (trainerBase) => trainerBase.trainerBaseId === trainerBaseId
        // );

        // trainerNameId = trainerBase.trainerNameId;

        // Push to syncPairDataArray
        monsterMegaFormBaseId
          ? (monsterAndTrainerData = {
              monsterBaseId: monsterBaseId.toString(),
              monsterMegaFormBaseId,
              monsterId: monsterId.toString(),
              monsterActorId: monsterActorId,
              trainerId: trainerIdFromList,
              trainerBaseId: trainerBaseId.toString(),
              trainerNameId: 'ch8000',
              stats,
              moves,
              passives,
              type,
              weakType,
              rarity,
              role,
              megaForm: { moves: megaMoves, passives: megaPassives },
            })
          : (monsterAndTrainerData = {
              monsterBaseId: monsterBaseId.toString(),
              monsterId: monsterId.toString(),
              monsterActorId: monsterActorId,
              trainerId: trainerIdFromList,
              trainerBaseId: trainerBaseId.toString(),
              trainerNameId: 'ch8000',
              stats,
              moves,
              passives,
              type,
              weakType,
              rarity,
              role,
            });
        syncPairDataArray.push(monsterAndTrainerData);
      } else {
        let newMonsterId =
          monsterId.toString().substring(0, monsterId.toString().length - 1) +
          '0';

        let trainer = trainerDB.entries.find(
          (trainer) => trainer.monsterId.toString() === newMonsterId
        );

        if (trainer) {
          trainerBaseId = trainer.trainerBaseId;

          // Use trainerBaseId to find trainerNameId
          // trainerBase = trainerBaseDB.entries.find(
          //   (trainerBase) => trainerBase.trainerBaseId === trainerBaseId
          // );

          // trainerNameId = trainerBase.trainerNameId;
          // Push to syncPairDataArray
          monsterMegaFormBaseId
            ? (monsterAndTrainerData = {
                monsterBaseId: monsterBaseId.toString(),
                monsterMegaFormBaseId,
                monsterId: monsterId.toString(),
                monsterActorId: monsterActorId,
                trainerId: trainerIdFromList,
                trainerBaseId: trainerBaseId.toString(),
                trainerNameId: 'ch8000',
                stats,
                moves,
                passives,
                type,
                weakType,
                rarity,
                role,
                megaForm: { moves: megaMoves, passives: megaPassives },
              })
            : (monsterAndTrainerData = {
                monsterBaseId: monsterBaseId.toString(),
                monsterId: monsterId.toString(),
                monsterActorId: monsterActorId,
                trainerId: trainerIdFromList,
                trainerBaseId: trainerBaseId.toString(),
                trainerNameId: 'ch8000',
                stats,
                moves,
                passives,
                type,
                weakType,
                rarity,
                role,
              });
          syncPairDataArray.push(monsterAndTrainerData);
        } else {
          monsterMegaFormBaseId
            ? (monsterAndTrainerData = {
                monsterBaseId: monsterBaseId.toString(),
                monsterMegaFormBaseId,
                monsterId: monsterId.toString(),
                monsterActorId: monsterActorId,
                trainerId: trainerIdFromList,
                trainerBaseId: trainerBaseId.toString(),
                trainerNameId: 'No Trainer',
                stats,
                moves,
                passives,
                type,
                weakType,
                rarity,
                role,
                megaForm: { moves: megaMoves, passives: megaPassives },
              })
            : (monsterAndTrainerData = {
                monsterBaseId: monsterBaseId.toString(),
                monsterId: monsterId.toString(),
                monsterActorId: monsterActorId,
                trainerId: trainerIdFromList,
                trainerBaseId: trainerBaseId.toString(),
                trainerNameId: 'No Trainer',
                stats,
                moves,
                passives,
                type,
                weakType,
                rarity,
                role,
              });
          syncPairDataArray.push(monsterAndTrainerData);
        }
      }
    }
  });

  syncPairDataArray.forEach((entry) => {
    let pokemonNameByLanguage = {
      de: '',
      en: '',
      es: '',
      fr: '',
      it: '',
      ja: '',
      ko: '',
      zh: '',
    };
    let trainerNameByLanguage = {
      de: '',
      en: '',
      es: '',
      fr: '',
      it: '',
      ja: '',
      ko: '',
      zh: '',
    };
    let syncPairNameByLanguage = {
      de: '',
      en: '',
      es: '',
      fr: '',
      it: '',
      ja: '',
      ko: '',
      zh: '',
    };
    languages.forEach((language) => {
      if (entry.monsterBaseId) {
        pokemonNameByLanguage[language] = pokemonNameDB[language][
          entry.monsterBaseId
        ]
          ? pokemonNameDB[language][entry.monsterBaseId]
          : pokemonNameDB[language][
              entry.monsterBaseId
                .toString()
                .substring(0, entry.monsterBaseId.toString().length - 1) + '0'
            ];
      }
      if (entry.trainerNameId) {
        trainerNameByLanguage[language] =
          trainerNameDB[language][entry.trainerNameId];
      }
      if (entry.trainerNameId === 'ch8000') {
        trainerNameByLanguage[language] = 'Hero';
      }
      if (entry.monsterBaseId && entry.trainerNameId) {
        syncPairNameByLanguage[
          language
        ] = `${trainerNameByLanguage[language]}_${pokemonNameByLanguage[language]}`;
      }

      // if (entry.monsterBaseId) {
      //   entry.monsterEnglishName = pokemonNameDBen[entry.monsterBaseId];
      // }
      // if (entry.trainerNameId) {
      //   entry.trainerEnglishName = trainerNameDBen[entry.trainerNameId];
      // }
      // if (entry.trainerNameId === 'ch8000') {
      //   entry.trainerEnglishName = 'Hero';
      // }
      // if (entry.monsterBaseId && entry.trainerNameId) {
      //   entry.syncPairEnglishName = `${entry.trainerEnglishName}&${entry.monsterEnglishName}`;
      // }

      if (
        // OG starters
        entry.monsterId === '28000040003' ||
        entry.monsterId === '28000040006' ||
        entry.monsterId === '28000040009'
      ) {
        pokemonNameByLanguage[language] =
          'OG_' + pokemonNameByLanguage[language];
        syncPairNameByLanguage[language] =
          'OG_' + syncPairNameByLanguage[language];
      }
    });
    entry.pokemonNameByLanguage = pokemonNameByLanguage;
    entry.trainerNameByLanguage = trainerNameByLanguage;
    entry.syncPairNameByLanguage = syncPairNameByLanguage;
  });
  fs.writeFile(
    `${__dirname}/../../src/data/eggPokemonData.json`,
    JSON.stringify(syncPairDataArray),
    (err) => {
      if (err) throw err;
      console.log('Successfully written to file');
    }
  );

  return syncPairDataArray;
};

extractSyncPairDataByTrainerBaseId();
