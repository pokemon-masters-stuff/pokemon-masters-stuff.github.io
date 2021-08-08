const fs = require('fs');

const abilityPanelDB = require('../rawdata/protodump/AbilityPanel.json');
const abilityDB = require('../rawdata/protodump/Ability.json');
const monsterDB = require('../rawdata/protodump/Monster.json');
const monsterBaseDB = require('../rawdata/protodump/MonsterBase.json');
const monsterVariationDB = require('../rawdata/protodump/MonsterVariation.json');
const trainerDB = require('../rawdata/protodump/Trainer.json');

const moveNameDBde = require('../rawdata/lsddump/move_name_de.json');
const moveNameDBen = require('../rawdata/lsddump/move_name_en.json');
const moveNameDBes = require('../rawdata/lsddump/move_name_es.json');
const moveNameDBfr = require('../rawdata/lsddump/move_name_fr.json');
const moveNameDBit = require('../rawdata/lsddump/move_name_it.json');
const moveNameDBja = require('../rawdata/lsddump/move_name_ja.json');
const moveNameDBko = require('../rawdata/lsddump/move_name_ko.json');
const moveNameDBzh = require('../rawdata/lsddump/move_name_zh-TW.json');

const passiveSkillNameDBen = require('../rawdata/lsddump/passive_skill_name_en.json');

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
 * Usage i.e: node extractSkills.js
 * */

const { languages } = require('../utils/constants');

const { getUpdatedPassiveSkillName } = require('../utils/functions');

const extractSkills = () => {
  let movesAndPassives = {};

  // loop through moves and find pokemon with move
  Object.keys(moveNameDBen).forEach((moveId) => {
    let skillNameByLanguage = {
      de: '',
      en: '',
      es: '',
      fr: '',
      it: '',
      ja: '',
      ko: '',
      zh: '',
    };
    let trainers = {};
    languages.forEach((language) => {
      skillNameByLanguage[language] = moveNameDB[language][moveId];
    });

    // Loop through all sync pairs to see who have this move
    trainerDB.entries.forEach((entry) => {
      if (
        entry.move1Id.toString() === moveId.toString() ||
        entry.move2Id.toString() === moveId.toString() ||
        entry.move3Id.toString() === moveId.toString() ||
        (entry.move4Id ? entry.move4Id.toString() === moveId.toString() : false)
      ) {
        trainers = {
          ...trainers,
          [entry.trainerId]: {
            // variation: false,
            trainerId: entry.trainerId,
            grid: false,
          },
        };
      }
    });

    // Loop through sync moves
    monsterDB.entries.forEach((monsterEntry) => {
      if (monsterEntry.syncMoveId.toString() === moveId.toString()) {
        trainerDB.entries.forEach((trainer) => {
          if (
            trainer.monsterId.toString() === monsterEntry.monsterId.toString()
          ) {
            trainers = {
              ...trainers,
              [trainer.trainerId]: {
                // variation: false,
                trainerId: trainer.trainerId,
                grid: false,
              },
            };
          }
        });
      }
    });

    // Loop through variation forms to see who have this move
    monsterVariationDB.entries.forEach((entry) => {
      if (
        entry.move1Id.toString() === moveId.toString() ||
        entry.move2Id.toString() === moveId.toString() ||
        entry.move3Id.toString() === moveId.toString() ||
        (entry.move4Id ? entry.move4Id.toString() === moveId.toString() : false)
      ) {
        // use entry.monsterId to find trainerId
        trainerDB.entries.forEach((trainer) => {
          if (trainer.monsterId === entry.monsterId) {
            trainers = {
              ...trainers,
              [trainer.trainerId]: {
                // variation: true,
                trainerId: trainer.trainerId,
                grid: false,
              },
            };
          }
        });
      }
    });

    movesAndPassives = {
      ...movesAndPassives,
      [moveId]: {
        skillId: moveId,
        skillNameByLanguage,
        // skillType: 'move',
        trainers,
      },
    };
  });

  // Should loop through ability Id, because moves can have multiple abilities, and the latter ones will overwrite the first ones
  abilityDB.entries.forEach((abilityEntry) => {
    let skillNameByLanguage = {
      de: '',
      en: '',
      es: '',
      fr: '',
      it: '',
      ja: '',
      ko: '',
      zh: '',
    };
    let trainers = {};
    let abilityId = abilityEntry.abilityId;
    if (
      // abilityEntry.moveId.toString() === moveId.toString() &&
      abilityEntry.moveId.toString() !== '0' &&
      abilityEntry.passiveId.toString() !== '0'
    ) {
      abilityPanelDB.entries.forEach((abilityPanelEntry) => {
        if (
          abilityPanelEntry.abilityId.toString() ===
          abilityEntry.abilityId.toString()
        ) {
          languages.forEach((language) => {
            skillNameByLanguage[language] = getUpdatedPassiveSkillName(
              language,
              abilityEntry.moveId,
              abilityEntry.passiveId
            );
          });

          trainers = {
            ...trainers,
            [abilityPanelEntry.trainerId]: {
              // variation: false,
              trainerId: abilityPanelEntry.trainerId,
              grid: true,
            },
          };
        }
      });
    }
    movesAndPassives = {
      ...movesAndPassives,
      [abilityId]: {
        skillId: abilityId,
        skillNameByLanguage,
        // skillType: 'ability',
        trainers,
      },
    };
  });

  // loop through passives
  Object.keys(passiveSkillNameDBen).forEach((passiveId) => {
    let skillNameByLanguage = {
      de: '',
      en: '',
      es: '',
      fr: '',
      it: '',
      ja: '',
      ko: '',
      zh: '',
    };
    let trainers = {};
    languages.forEach((language) => {
      skillNameByLanguage[language] = getUpdatedPassiveSkillName(
        language,
        0, // moveId
        passiveId
      );
    });

    // Loop through all sync pairs to see who have this passive
    trainerDB.entries.forEach((entry) => {
      if (
        entry.passive1Id.toString() === passiveId.toString() ||
        entry.passive2Id.toString() === passiveId.toString() ||
        entry.passive3Id.toString() === passiveId.toString() ||
        (entry.passive4Id
          ? entry.passive4Id.toString() === passiveId.toString()
          : false)
      ) {
        trainers = {
          ...trainers,
          [entry.trainerId]: {
            // variation: false,
            trainerId: entry.trainerId,
            grid: false,
          },
        };
      }
    });

    // Loop through variation forms to see who have this passive
    monsterVariationDB.entries.forEach((entry) => {
      if (
        entry.passive1Id.toString() === passiveId.toString() ||
        entry.passive2Id.toString() === passiveId.toString() ||
        entry.passive3Id.toString() === passiveId.toString() ||
        (entry.passive4Id
          ? entry.passive4Id.toString() === passiveId.toString()
          : false)
      ) {
        // use entry.monsterId to find trainerId
        trainerDB.entries.forEach((trainer) => {
          if (trainer.monsterId === entry.monsterId) {
            trainers = {
              ...trainers,
              [trainer.trainerId]: {
                // variation: true,
                trainerId: trainer.trainerId,
                grid: false,
              },
            };
          }
        });
      }
    });

    // Loop through grid and go through the abilities that have passiveId but no moveId
    abilityDB.entries.forEach((abilityEntry) => {
      if (
        abilityEntry.passiveId.toString() === passiveId.toString() &&
        abilityEntry.moveId.toString() === '0'
      ) {
        abilityPanelDB.entries.forEach((abilityPanelEntry) => {
          if (
            abilityPanelEntry.abilityId.toString() ===
            abilityEntry.abilityId.toString()
          ) {
            trainers = {
              ...trainers,
              [abilityPanelEntry.trainerId]: {
                // variation: false,
                trainerId: abilityPanelEntry.trainerId,
                grid: true,
              },
            };
          }
        });
      }
    });

    movesAndPassives = {
      ...movesAndPassives,
      [passiveId]: {
        skillId: passiveId,
        skillNameByLanguage,
        // skillType: 'passive',
        trainers,
      },
    };
  });

  // Loop through monsterBase formPassiveId to see who have this passive
  monsterBaseDB.entries.forEach((entry) => {
    if (entry.formPassiveId !== 0) {
      let skillNameByLanguage = {
        de: '',
        en: '',
        es: '',
        fr: '',
        it: '',
        ja: '',
        ko: '',
        zh: '',
      };
      let trainers = {};
      languages.forEach((language) => {
        skillNameByLanguage[language] = getUpdatedPassiveSkillName(
          language,
          0, // moveId
          entry.formPassiveId
        );
      });

      monsterDB.entries.forEach((monsterEntry) => {
        if (
          monsterEntry.monsterBaseId.toString() ===
          entry.monsterBaseId.toString()
        ) {
          trainerDB.entries.forEach((trainer) => {
            if (
              trainer.monsterId.toString() === monsterEntry.monsterId.toString()
            ) {
              trainers = {
                ...trainers,
                [trainer.trainerId]: {
                  // variation: true,
                  trainerId: trainer.trainerId,
                  grid: false,
                },
              };
            }
          });
        }
      });

      movesAndPassives = {
        ...movesAndPassives,
        [entry.formPassiveId]: {
          skillId: entry.formPassiveId,
          skillNameByLanguage,
          // skillType: 'formPassive',
          trainers,
        },
      };
    }
  });

  // Remove those that have no trainer
  for (const key in movesAndPassives) {
    if (Object.entries(movesAndPassives[key]['trainers']).length === 0) {
      delete movesAndPassives[key];
    }
  }
  // Remove duplicate eggmons
  for (const key in movesAndPassives) {
    for (const trainerId in movesAndPassives[key]['trainers']) {
      if (
        trainerId.toString().slice(-1) === '6' &&
        trainerId.toString().includes('18000')
      ) {
        delete movesAndPassives[key]['trainers'][trainerId.toString()];
      }
    }
  }

  // Remove skills from unobtainable sync pairs
  for (const key in movesAndPassives) {
    for (const trainerId in movesAndPassives[key]['trainers']) {
      if (
        trainerId.toString() === '10074000000' || // Youngster & Cottonee
        trainerId.toString() === '10066000001' || // Lear & Hoopa
        trainerId.toString() === '10066000002' || // Lear & Hoopa
        trainerId.toString() === '10067000001' || // Rachel & Umbreon
        trainerId.toString() === '10068000001' // Sawyer & Honchkrow
      ) {
        delete movesAndPassives[key]['trainers'][trainerId.toString()];
      }
    }
  }

  // Check if Leon/Red is marked in variation

  fs.writeFile(
    `${__dirname}/../../src/data/movesAndPassives.json`,
    JSON.stringify(movesAndPassives),
    (err) => {
      if (err) throw err;
      console.log('Successfully written to file');
    }
  );

  return movesAndPassives;
};

extractSkills();
