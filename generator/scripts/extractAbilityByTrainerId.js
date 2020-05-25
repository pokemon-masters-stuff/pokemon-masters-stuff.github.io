const args = require('yargs').argv;
const fs = require('fs');

const abilityPanelDB = require('../rawdata/AbilityPanel.json');
const abilityDB = require('../rawdata/Ability.json');
const moveDB = require('../rawdata/Move.json');
const triangularCoordsToCollumns = require('../utils/triangularCoordsToCollumns');

const abilityDescriptionDBde = require('../rawdata/de/ability_description_de.lsd.json');
const abilityDescriptionDBen = require('../rawdata/en/ability_description_en.lsd.json');
const abilityDescriptionDBes = require('../rawdata/es/ability_description_es.lsd.json');
const abilityDescriptionDBfr = require('../rawdata/fr/ability_description_fr.lsd.json');
const abilityDescriptionDBit = require('../rawdata/it/ability_description_it.lsd.json');
const abilityDescriptionDBja = require('../rawdata/ja/ability_description_ja.lsd.json');
const abilityDescriptionDBko = require('../rawdata/ko/ability_description_ko.lsd.json');
const abilityDescriptionDBzh = require('../rawdata/zh/ability_description_zh-TW.lsd.json');

const passiveAbilityDescriptionDBde = require('../rawdata/de/passive_skill_name_de.lsd.json');
const passiveAbilityDescriptionDBen = require('../rawdata/en/passive_skill_name_en.lsd.json');
const passiveAbilityDescriptionDBes = require('../rawdata/es/passive_skill_name_es.lsd.json');
const passiveAbilityDescriptionDBfr = require('../rawdata/fr/passive_skill_name_fr.lsd.json');
const passiveAbilityDescriptionDBit = require('../rawdata/it/passive_skill_name_it.lsd.json');
const passiveAbilityDescriptionDBja = require('../rawdata/ja/passive_skill_name_ja.lsd.json');
const passiveAbilityDescriptionDBko = require('../rawdata/ko/passive_skill_name_ko.lsd.json');
const passiveAbilityDescriptionDBzh = require('../rawdata/zh/passive_skill_name_zh-TW.lsd.json');

const passiveSkillDescriptionDBde = require('../rawdata/de/passive_skill_description_de.lsd.json');
const passiveSkillDescriptionDBen = require('../rawdata/en/passive_skill_description_en.lsd.json');
const passiveSkillDescriptionDBes = require('../rawdata/es/passive_skill_description_es.lsd.json');
const passiveSkillDescriptionDBfr = require('../rawdata/fr/passive_skill_description_fr.lsd.json');
const passiveSkillDescriptionDBit = require('../rawdata/it/passive_skill_description_it.lsd.json');
const passiveSkillDescriptionDBja = require('../rawdata/ja/passive_skill_description_ja.lsd.json');
const passiveSkillDescriptionDBko = require('../rawdata/ko/passive_skill_description_ko.lsd.json');
const passiveSkillDescriptionDBzh = require('../rawdata/zh/passive_skill_description_zh-TW.lsd.json');

const moveNameDBde = require('../rawdata/de/move_name_de.lsd.json');
const moveNameDBen = require('../rawdata/en/move_name_en.lsd.json');
const moveNameDBes = require('../rawdata/es/move_name_es.lsd.json');
const moveNameDBfr = require('../rawdata/fr/move_name_fr.lsd.json');
const moveNameDBit = require('../rawdata/it/move_name_it.lsd.json');
const moveNameDBja = require('../rawdata/ja/move_name_ja.lsd.json');
const moveNameDBko = require('../rawdata/ko/move_name_ko.lsd.json');
const moveNameDBzh = require('../rawdata/zh/move_name_zh-TW.lsd.json');

// const moveDescriptionDB = require('../rawdata/de/move_description_de.lsd.json');

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

const passiveAbilityDescriptionDB = {
  de: passiveAbilityDescriptionDBde,
  en: passiveAbilityDescriptionDBen,
  es: passiveAbilityDescriptionDBes,
  fr: passiveAbilityDescriptionDBfr,
  it: passiveAbilityDescriptionDBit,
  ja: passiveAbilityDescriptionDBja,
  ko: passiveAbilityDescriptionDBko,
  zh: passiveAbilityDescriptionDBzh,
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

// On 5/25/2020 the following changes have been made to the .proto files:
// monsterId->monsterBaseId
// trainerId->monsterId
// characterId->trainerId

/*
 * Usage i.e: node extractAbilityByTrainerId.js --trainerId=18000000000 --filename=pikachu
 * */
const languages = ['de', 'en', 'es', 'fr', 'it', 'ja', 'ko', 'zh'];

const extractAbilityByTrainerId = () => {
  languages.forEach((language) => {
    const abilities = [];
    let ability = {};

    if (!args.trainerId) return null;

    abilityPanelDB.entries.forEach((entry) => {
      if (entry.trainerId === args.trainerId) {
        const { cellId, energyCost, orbCost, x, y, z, abilityId } = entry;
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
          move = {
            ...move,
            name: move.name.replace(
              '[Name:AbilityDescription ]',
              passiveAbilityDescriptionDB[language][ability.passiveId]
            ),
            description: passiveSkillDescriptionDB[language][ability.passiveId],
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

    if (args.filename) {
      fs.writeFile(
        `${__dirname}/../../src/data/grids/${language}/${args.filename}.json`,
        JSON.stringify(abilities),
        (err) => {
          if (err) throw err;
          console.log('Successfully written to file');
        }
      );
    }

    return abilities;
  });
};

extractAbilityByTrainerId();
