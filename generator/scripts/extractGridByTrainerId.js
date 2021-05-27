const args = require('yargs').argv;
const fs = require('fs');

const trainerDB = require('../rawdata/protodump/Trainer.json');
const abilityPanelDB = require('../rawdata/protodump/AbilityPanel.json');
const abilityDB = require('../rawdata/protodump/Ability.json');
const moveDB = require('../rawdata/protodump/ModifiedMove.json');
const triangularCoordsToCollumns = require('../utils/triangularCoordsToCollumns');

const abilityDescriptionDBde = require('../rawdata/lsddump/ability_description_de.json');
const abilityDescriptionDBen = require('../rawdata/lsddump/ability_description_en.json');
const abilityDescriptionDBes = require('../rawdata/lsddump/ability_description_es.json');
const abilityDescriptionDBfr = require('../rawdata/lsddump/ability_description_fr.json');
const abilityDescriptionDBit = require('../rawdata/lsddump/ability_description_it.json');
const abilityDescriptionDBja = require('../rawdata/lsddump/ability_description_ja.json');
const abilityDescriptionDBko = require('../rawdata/lsddump/ability_description_ko.json');
const abilityDescriptionDBzh = require('../rawdata/lsddump/ability_description_zh-TW.json');

const passiveAbilityDescriptionDBde = require('../rawdata/lsddump/passive_skill_name_de.json');
const passiveAbilityDescriptionDBen = require('../rawdata/lsddump/passive_skill_name_en.json');
const passiveAbilityDescriptionDBes = require('../rawdata/lsddump/passive_skill_name_es.json');
const passiveAbilityDescriptionDBfr = require('../rawdata/lsddump/passive_skill_name_fr.json');
const passiveAbilityDescriptionDBit = require('../rawdata/lsddump/passive_skill_name_it.json');
const passiveAbilityDescriptionDBja = require('../rawdata/lsddump/passive_skill_name_ja.json');
const passiveAbilityDescriptionDBko = require('../rawdata/lsddump/passive_skill_name_ko.json');
const passiveAbilityDescriptionDBzh = require('../rawdata/lsddump/passive_skill_name_zh-TW.json');

const passiveSkillDescriptionDBde = require('../rawdata/lsddump/passive_skill_description_de.json');
const passiveSkillDescriptionDBen = require('../rawdata/lsddump/passive_skill_description_en.json');
const passiveSkillDescriptionDBes = require('../rawdata/lsddump/passive_skill_description_es.json');
const passiveSkillDescriptionDBfr = require('../rawdata/lsddump/passive_skill_description_fr.json');
const passiveSkillDescriptionDBit = require('../rawdata/lsddump/passive_skill_description_it.json');
const passiveSkillDescriptionDBja = require('../rawdata/lsddump/passive_skill_description_ja.json');
const passiveSkillDescriptionDBko = require('../rawdata/lsddump/passive_skill_description_ko.json');
const passiveSkillDescriptionDBzh = require('../rawdata/lsddump/passive_skill_description_zh-TW.json');

const moveNameDBde = require('../rawdata/lsddump/move_name_de.json');
const moveNameDBen = require('../rawdata/lsddump/move_name_en.json');
const moveNameDBes = require('../rawdata/lsddump/move_name_es.json');
const moveNameDBfr = require('../rawdata/lsddump/move_name_fr.json');
const moveNameDBit = require('../rawdata/lsddump/move_name_it.json');
const moveNameDBja = require('../rawdata/lsddump/move_name_ja.json');
const moveNameDBko = require('../rawdata/lsddump/move_name_ko.json');
const moveNameDBzh = require('../rawdata/lsddump/move_name_zh-TW.json');

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
 * Usage i.e: node extractGridByTrainerId.js --trainerId=10062000001 --filename=umbreon
 * */
const languages = ['de', 'en', 'es', 'fr', 'it', 'ja', 'ko', 'zh'];

const extractGridByTrainerId = () => {
  if (!args.trainerId) return null;

  let trainerId = args.trainerId;

  languages.forEach((language) => {
    const abilities = [];
    let ability = {};

    // if (!args.trainerId) return null;

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

extractGridByTrainerId();
