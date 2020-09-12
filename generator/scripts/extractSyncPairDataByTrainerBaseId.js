const fs = require('fs');

const monsterDB = require('../rawdata/Monster.json');
const moveDB = require('../rawdata/ModifiedMove.json');
const trainerDB = require('../rawdata/Trainer.json');
const trainerBaseDB = require('../rawdata/TrainerBase.json');
const monsterVariationDB = require('../rawdata/MonsterVariation.json');

const pokemonNameDBde = require('../rawdata/de/monster_name_de.json');
const pokemonNameDBen = require('../rawdata/en/monster_name_en.json');
const pokemonNameDBes = require('../rawdata/es/monster_name_es.json');
const pokemonNameDBfr = require('../rawdata/fr/monster_name_fr.json');
const pokemonNameDBit = require('../rawdata/it/monster_name_it.json');
const pokemonNameDBja = require('../rawdata/ja/monster_name_ja.json');
const pokemonNameDBko = require('../rawdata/ko/monster_name_ko.json');
const pokemonNameDBzh = require('../rawdata/zh/monster_name_zh-TW.json');

const trainerNameDBde = require('../rawdata/de/trainer_name_de.json');
const trainerNameDBen = require('../rawdata/en/trainer_name_en.json');
const trainerNameDBes = require('../rawdata/es/trainer_name_es.json');
const trainerNameDBfr = require('../rawdata/fr/trainer_name_fr.json');
const trainerNameDBit = require('../rawdata/it/trainer_name_it.json');
const trainerNameDBja = require('../rawdata/ja/trainer_name_ja.json');
const trainerNameDBko = require('../rawdata/ko/trainer_name_ko.json');
const trainerNameDBzh = require('../rawdata/zh/trainer_name_zh-TW.json');

const moveNameDBde = require('../rawdata/de/move_name_de.json');
const moveNameDBen = require('../rawdata/en/move_name_en.json');
const moveNameDBes = require('../rawdata/es/move_name_es.json');
const moveNameDBfr = require('../rawdata/fr/move_name_fr.json');
const moveNameDBit = require('../rawdata/it/move_name_it.json');
const moveNameDBja = require('../rawdata/ja/move_name_ja.json');
const moveNameDBko = require('../rawdata/ko/move_name_ko.json');
const moveNameDBzh = require('../rawdata/zh/move_name_zh-TW.json');

const moveDescriptionDBde = require('../rawdata/de/move_description_de.json');
const moveDescriptionDBen = require('../rawdata/en/move_description_en.json');
const moveDescriptionDBes = require('../rawdata/es/move_description_es.json');
const moveDescriptionDBfr = require('../rawdata/fr/move_description_fr.json');
const moveDescriptionDBit = require('../rawdata/it/move_description_it.json');
const moveDescriptionDBja = require('../rawdata/ja/move_description_ja.json');
const moveDescriptionDBko = require('../rawdata/ko/move_description_ko.json');
const moveDescriptionDBzh = require('../rawdata/zh/move_description_zh-TW.json');

const moveTargetTypeDBde = require('../rawdata/de/move_target_type_de.json');
const moveTargetTypeDBen = require('../rawdata/en/move_target_type_en.json');
const moveTargetTypeDBes = require('../rawdata/es/move_target_type_es.json');
const moveTargetTypeDBfr = require('../rawdata/fr/move_target_type_fr.json');
const moveTargetTypeDBit = require('../rawdata/it/move_target_type_it.json');
const moveTargetTypeDBja = require('../rawdata/ja/move_target_type_ja.json');
const moveTargetTypeDBko = require('../rawdata/ko/move_target_type_ko.json');
const moveTargetTypeDBzh = require('../rawdata/zh/move_target_type_zh-TW.json');

const passiveNameDBde = require('../rawdata/de/passive_skill_name_de.json');
const passiveNameDBen = require('../rawdata/en/passive_skill_name_en.json');
const passiveNameDBes = require('../rawdata/es/passive_skill_name_es.json');
const passiveNameDBfr = require('../rawdata/fr/passive_skill_name_fr.json');
const passiveNameDBit = require('../rawdata/it/passive_skill_name_it.json');
const passiveNameDBja = require('../rawdata/ja/passive_skill_name_ja.json');
const passiveNameDBko = require('../rawdata/ko/passive_skill_name_ko.json');
const passiveNameDBzh = require('../rawdata/zh/passive_skill_name_zh-TW.json');

const passiveDescriptionDBde = require('../rawdata/de/passive_skill_description_de.json');
const passiveDescriptionDBen = require('../rawdata/en/passive_skill_description_en.json');
const passiveDescriptionDBes = require('../rawdata/es/passive_skill_description_es.json');
const passiveDescriptionDBfr = require('../rawdata/fr/passive_skill_description_fr.json');
const passiveDescriptionDBit = require('../rawdata/it/passive_skill_description_it.json');
const passiveDescriptionDBja = require('../rawdata/ja/passive_skill_description_ja.json');
const passiveDescriptionDBko = require('../rawdata/ko/passive_skill_description_ko.json');
const passiveDescriptionDBzh = require('../rawdata/zh/passive_skill_description_zh-TW.json');

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

const languages = ['de', 'en', 'es', 'fr', 'it', 'ja', 'ko', 'zh'];

// Update this list (of trainerBaseId) based on new datamine
const gridedTrainerList = [
  // trainerBaseId
  '10700000',
  '10002900',
  '10000600',
  '10003200',
  '10009200',
  '10002800',
  '10010100',
  '10000800',
  '10013700',
  '10009000',
  '10000000',
  '10000700',
  '10004800',
  '10006200',
  '10009800',
  '10010610',
  '10011400',
  '10009500',
  '10000300',
  '10003900',
  '10012100',
  '10012500',
  '10013100',
  '10001600',
  '10001200',
  '10009100',
  '10012700',
  '10011300',
  '10012800',
  '10011001',
  '10011600',
  '10017000',
  '10009900',
  '10004810',
  // 6/25/2020
  '10000400',
  '10014800',
  '10013000',
  '10005400',
  // 7/29/2020
  '10009101', // kommo-o
  '10009040', // alolan sandslash
  '10000240', // jigglypuff
  '10011100', // dragonite
  '10001500', // onix
  '10000100', // lycanroc midday
  // 8/14/2020 test
  // "10005100", // lycanroc midnight
  // 8/25/2020
  '10000200', // Meganium
  '10011200', // Typhlosion
  '10001800', // Feraligatr
  '10001710', // Venusaur
  '10002101', // Blastoise
  // 9/7/2020
  '10011800', // clefairy
  '10011900', // silvally
  '10012000', // pheromosa
];

const newTrainerBaseIdArray = [
  // Copy paste from the other array. Used to generate a list of monsterBaseId for the import and export script.
  '10011800', // clefairy
  '10011900', // silvally
  '10012000', // pheromosa
];

// On 5/25/2020 the following changes have been made to the .proto files:
// monsterId->monsterBaseId
// trainerId->monsterId
// characterId->trainerId

/*
 * Usage i.e: node extractSyncPairDataByTrainerBaseId.js
 * */

const extractSyncPairDataByTrainerBaseId = () => {
  const gridedSyncPairDataArray = [];
  let monsterAndTrainerData = {};
  let monsterId = '';
  let monsterBaseId = '';
  // let syncMoveId = '';
  let trainerNameId = '';
  let stats = {};
  let moves = {};
  let passives = {};
  let syncPairNames = {};

  gridedTrainerList.forEach((trainerBaseIdFromList) => {
    console.log('trainerBaseIdFromList', trainerBaseIdFromList);
    // Find entry in Trainer.json
    let trainer = trainerDB.entries.find(
      (trainer) => trainer.trainerBaseId.toString() === trainerBaseIdFromList
    );

    if (trainer) {
      console.log('trainer exists');
      // Use trainerBaseId to find monsterId in Trainer.json
      monsterId = trainer.monsterId;

      // Check if there is an evolved form. If so use the final evolved form's monsterId
      let secondEvolvedFormMonsterId =
        monsterId.toString().substring(0, monsterId.toString().length - 1) +
        '2';
      let firstEvolvedFormMonsterId =
        monsterId.toString().substring(0, monsterId.toString().length - 1) +
        '1';

      if (
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

      // Use monsterId to find type, weakType, moveId and passiveId in Trainer.json
      const {
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

      // Use moveId to find move name in move_name_xx.json
      // Use moveId to find move description in move_description_xx.json
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
        move4NameByLanguage[language] = moveNameDB[language][move4Id];
        move1DescriptionByLanguage[language] =
          moveDescriptionDB[language][move1Id];
        move2DescriptionByLanguage[language] =
          moveDescriptionDB[language][move2Id];
        move3DescriptionByLanguage[language] =
          moveDescriptionDB[language][move3Id];
        move4DescriptionByLanguage[language] =
          moveDescriptionDB[language][move4Id];
        move1TargetTypeByLanguage[language] =
          moveTargetTypeDB[language][move1.target];
        move2TargetTypeByLanguage[language] =
          moveTargetTypeDB[language][move2.target];
        move3TargetTypeByLanguage[language] =
          moveTargetTypeDB[language][move3.target];
        move4TargetTypeByLanguage[language] =
          moveTargetTypeDB[language][move4.target];
      });
      moves = {
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
      };

      // Use passiveId to find passive skill name and description in passive_skill_name_xx.json and passive_skill_description_xx.json
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
        passive1NameByLanguage[language] = passiveNameDB[language][passive1Id];
        passive2NameByLanguage[language] = passiveNameDB[language][passive2Id];
        passive3NameByLanguage[language] = passiveNameDB[language][passive3Id];
        passive1DescriptionByLanguage[language] =
          passiveDescriptionDB[language][passive1Id];
        passive2DescriptionByLanguage[language] =
          passiveDescriptionDB[language][passive2Id];
        passive3DescriptionByLanguage[language] =
          passiveDescriptionDB[language][passive3Id];
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

      // Use monsterBaseId to see if there is a mega form, i.e. monsterBaseId ends in '51'
      let monsterMegaFormBaseId;
      let monsterMegaFormEntry;
      let megaMoves;
      let megaPassives;
      let potentialMegaBaseId =
        monsterBaseId
          .toString()
          .substring(0, monsterBaseId.toString().length - 2) + '51';

      // do the same if pokemon is Mew
      if (monsterBaseId.toString() === '20015111') {
        potentialMegaBaseId = monsterBaseId.toString();
      }

      if (pokemonNameDBen[potentialMegaBaseId]) {
        monsterMegaFormBaseId = potentialMegaBaseId;

        monsterMegaFormEntry = monsterVariationDB.entries.find(
          (monster) => monster.monsterId.toString() === monsterId.toString()
        );

        const {
          atkScale,
          defScale,
          spaScale,
          spdScale,
          speScale,
        } = monsterMegaFormEntry;

        stats = {
          ...stats,
          atkScale,
          defScale,
          spaScale,
          spdScale,
          speScale,
        };

        // Use megaMoveId to find megaMove name in move_name_xx.json
        // Use megaMoveId to find megaMove description in move_description_xx.json
        let megaMove1NameByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          megaMove2NameByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          megaMove3NameByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          megaMove4NameByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          };

        let megaMove1DescriptionByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          megaMove2DescriptionByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          megaMove3DescriptionByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          megaMove4DescriptionByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          };

        let megaMove1TargetTypeByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          megaMove2TargetTypeByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          megaMove3TargetTypeByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          megaMove4TargetTypeByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          };

        // Use megaMoveId to find megaMove data, eg. power, accuracy, etc. from Move.json
        let megaMove1, megaMove2, megaMove3, megaMove4;
        monsterMegaFormEntry.move1Id !== -1
          ? (megaMove1 = moveDB.entries.find(
              (move) =>
                move.moveId.toString() ===
                monsterMegaFormEntry.move1Id.toString()
            ))
          : null;
        monsterMegaFormEntry.move2Id !== -1
          ? (megaMove2 = moveDB.entries.find(
              (move) =>
                move.moveId.toString() ===
                monsterMegaFormEntry.move2Id.toString()
            ))
          : null;
        monsterMegaFormEntry.move3Id !== -1
          ? (megaMove3 = moveDB.entries.find(
              (move) =>
                move.moveId.toString() ===
                monsterMegaFormEntry.move3Id.toString()
            ))
          : null;
        monsterMegaFormEntry.move4Id !== -1
          ? (megaMove4 = moveDB.entries.find(
              (move) =>
                move.moveId.toString() ===
                monsterMegaFormEntry.move4Id.toString()
            ))
          : null;

        languages.forEach((language) => {
          megaMove1NameByLanguage[language] =
            moveNameDB[language][monsterMegaFormEntry.move1Id];
          megaMove2NameByLanguage[language] =
            moveNameDB[language][monsterMegaFormEntry.move2Id];
          megaMove3NameByLanguage[language] =
            moveNameDB[language][monsterMegaFormEntry.move3Id];
          megaMove4NameByLanguage[language] =
            moveNameDB[language][monsterMegaFormEntry.move4Id];
          megaMove1DescriptionByLanguage[language] =
            moveDescriptionDB[language][monsterMegaFormEntry.move1Id];
          megaMove2DescriptionByLanguage[language] =
            moveDescriptionDB[language][monsterMegaFormEntry.move2Id];
          megaMove3DescriptionByLanguage[language] =
            moveDescriptionDB[language][monsterMegaFormEntry.move3Id];
          megaMove4DescriptionByLanguage[language] =
            moveDescriptionDB[language][monsterMegaFormEntry.move4Id];
          megaMove1 &&
            (megaMove1TargetTypeByLanguage[language] =
              moveTargetTypeDB[language][megaMove1.target]);
          megaMove2 &&
            (megaMove2TargetTypeByLanguage[language] =
              moveTargetTypeDB[language][megaMove2.target]);
          megaMove3 &&
            (megaMove3TargetTypeByLanguage[language] =
              moveTargetTypeDB[language][megaMove3.target]);
          megaMove4 &&
            (megaMove4TargetTypeByLanguage[language] =
              moveTargetTypeDB[language][megaMove4.target]);
        });

        megaMove1 &&
          (megaMoves = {
            ...megaMoves,
            move1: {
              id: megaMove1.moveId,
              name: megaMove1NameByLanguage,
              description: megaMove1DescriptionByLanguage,
              category: megaMove1.category,
              group: megaMove1.group,
              type: megaMove1.type,
              target: megaMove1.target,
              targetType: megaMove1TargetTypeByLanguage,
              gaugeDrain: megaMove1.gaugeDrain,
              power: megaMove1.power,
              accuracy: megaMove1.accuracy,
              maxUses: megaMove1.maxUses,
            },
          });
        megaMove2 &&
          (megaMoves = {
            ...megaMoves,
            move2: {
              id: megaMove2.moveId,
              name: megaMove2NameByLanguage,
              description: megaMove2DescriptionByLanguage,
              category: megaMove2.category,
              group: megaMove2.group,
              type: megaMove2.type,
              target: megaMove2.target,
              targetType: megaMove2TargetTypeByLanguage,
              gaugeDrain: megaMove2.gaugeDrain,
              power: megaMove2.power,
              accuracy: megaMove2.accuracy,
              maxUses: megaMove2.maxUses,
            },
          });
        megaMove3 &&
          (megaMoves = {
            ...megaMoves,
            move3: {
              id: megaMove3.moveId,
              name: megaMove3NameByLanguage,
              description: megaMove3DescriptionByLanguage,
              category: megaMove3.category,
              group: megaMove3.group,
              type: megaMove3.type,
              target: megaMove3.target,
              targetType: megaMove3TargetTypeByLanguage,
              gaugeDrain: megaMove3.gaugeDrain,
              power: megaMove3.power,
              accuracy: megaMove3.accuracy,
              maxUses: megaMove3.maxUses,
            },
          });
        megaMove4 &&
          (megaMoves = {
            ...megaMoves,
            move4: {
              id: megaMove4.moveId,
              name: megaMove4NameByLanguage,
              description: megaMove4DescriptionByLanguage,
              category: megaMove4.category,
              group: megaMove4.group,
              type: megaMove4.type,
              target: megaMove4.target,
              targetType: megaMove4TargetTypeByLanguage,
              gaugeDrain: megaMove4.gaugeDrain,
              power: megaMove4.power,
              accuracy: megaMove4.accuracy,
              maxUses: megaMove4.maxUses,
            },
          });

        // Use passiveId to find passive skill name and description in passive_skill_name_xx.json and passive_skill_description_xx.json
        let megaPassive1NameByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          megaPassive2NameByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          megaPassive3NameByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          };

        let megaPassive1DescriptionByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          megaPassive2DescriptionByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          megaPassive3DescriptionByLanguage = {
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
          megaPassive1NameByLanguage[language] =
            passiveNameDB[language][monsterMegaFormEntry.passive1Id];
          megaPassive2NameByLanguage[language] =
            passiveNameDB[language][monsterMegaFormEntry.passive2Id];
          megaPassive3NameByLanguage[language] =
            passiveNameDB[language][monsterMegaFormEntry.passive3Id];
          megaPassive1DescriptionByLanguage[language] =
            passiveDescriptionDB[language][monsterMegaFormEntry.passive1Id];
          megaPassive2DescriptionByLanguage[language] =
            passiveDescriptionDB[language][monsterMegaFormEntry.passive2Id];
          megaPassive3DescriptionByLanguage[language] =
            passiveDescriptionDB[language][monsterMegaFormEntry.passive3Id];
        });

        monsterMegaFormEntry.passive1Id !== 0 &&
          (megaPassives = {
            ...megaPassives,
            passive1: {
              id: passive1Id,
              name: megaPassive1NameByLanguage,
              description: megaPassive1DescriptionByLanguage,
            },
          });
        monsterMegaFormEntry.passive2Id !== 0 &&
          (megaPassives = {
            ...megaPassives,
            passive2: {
              id: passive2Id,
              name: megaPassive2NameByLanguage,
              description: megaPassive2DescriptionByLanguage,
            },
          });
        monsterMegaFormEntry.passive3Id !== 0 &&
          (megaPassives = {
            ...megaPassives,
            passive3: {
              id: passive3Id,
              name: megaPassive3NameByLanguage,
              description: megaPassive3DescriptionByLanguage,
            },
          });
      }

      // Use trainerBaseId to find trainerNameId in TrainerBase.json
      trainerBase = trainerBaseDB.entries.find(
        (trainerBase) =>
          trainerBase.trainerBaseId.toString() === trainerBaseIdFromList
      );

      trainerNameId = trainerBase.trainerNameId;

      // Push to gridedSyncPairDataArray
      monsterMegaFormBaseId
        ? (monsterAndTrainerData = {
            monsterBaseId: monsterBaseId.toString(),
            monsterMegaFormBaseId,
            monsterId: monsterId.toString(),
            trainerBaseId: trainerBaseIdFromList,
            trainerNameId,
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
            trainerBaseId: trainerBaseIdFromList,
            trainerNameId,
            stats,
            moves,
            passives,
            type,
            weakType,
            rarity,
            role,
          });
      gridedSyncPairDataArray.push(monsterAndTrainerData);
    } else {
      let newMonsterId =
        monsterId.toString().substring(0, monsterId.toString().length - 1) +
        '0';

      let trainer = trainerDB.entries.find(
        (trainer) => trainer.monsterId.toString() === newMonsterId.toString()
      );
      console.log('trainer', trainer);

      if (trainer) {
        trainerBaseId = trainer.trainerBaseId;

        // Use trainerBaseId to find trainerNameId
        trainerBase = trainerBaseDB.entries.find(
          (trainerBase) =>
            trainerBase.trainerBaseId.toString() === trainerBaseId.toString()
        );

        trainerNameId = trainerBase.trainerNameId;
        // Push to gridedSyncPairDataArray
        monsterMegaFormBaseId
          ? (monsterAndTrainerData = {
              monsterBaseId: monsterBaseId.toString(),
              monsterMegaFormBaseId,
              monsterId: monsterId.toString(),
              trainerBaseId: trainerBaseIdFromList,
              trainerNameId,
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
              trainerBaseId: trainerBaseIdFromList,
              trainerNameId,
              stats,
              moves,
              passives,
              type,
              weakType,
              rarity,
              role,
            });
        gridedSyncPairDataArray.push(monsterAndTrainerData);
      } else {
        monsterMegaFormBaseId
          ? (monsterAndTrainerData = {
              monsterBaseId: monsterBaseId.toString(),
              monsterMegaFormBaseId,
              monsterId: monsterId.toString(),
              trainerBaseId: trainerBaseIdFromList,
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
              trainerBaseId: trainerBaseIdFromList,
              trainerNameId: 'No Trainer',
              stats,
              moves,
              passives,
              type,
              weakType,
              rarity,
              role,
            });
        gridedSyncPairDataArray.push(monsterAndTrainerData);
      }
    }
  });

  gridedSyncPairDataArray.forEach((entry) => {
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
      // 20003901 is Jigglypuff. Its monsterBaseId is off by 1 in monster_name for some reason.
      // 20003501 is Clefairy, but same as above its id is off by 1
      if (entry.monsterBaseId) {
        if (entry.monsterBaseId === '20003901') {
          pokemonNameByLanguage[language] = pokemonNameDB[language]['20003900'];
        } else if (entry.monsterBaseId === '20003501') {
          pokemonNameByLanguage[language] = pokemonNameDB[language]['20003500'];
        } else {
          pokemonNameByLanguage[language] =
            pokemonNameDB[language][entry.monsterBaseId];
        }
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
    });
    entry.pokemonNameByLanguage = pokemonNameByLanguage;
    entry.trainerNameByLanguage = trainerNameByLanguage;
    entry.syncPairNameByLanguage = syncPairNameByLanguage;

    if (newTrainerBaseIdArray.includes(entry.trainerBaseId)) {
      console.log(
        `"${entry.monsterBaseId}", // ${entry.pokemonNameByLanguage['en']} (${entry.trainerNameByLanguage['en']})`
      );
      console.log(
        `node extractGridByTrainerBaseId.js --trainerBaseId=${
          entry.trainerBaseId
        } --filename=${entry.pokemonNameByLanguage['en'].toLowerCase()}`
      );
    }
  });
  fs.writeFile(
    `${__dirname}/../../src/data/allGridedPokemon.json`,
    JSON.stringify(gridedSyncPairDataArray),
    (err) => {
      if (err) throw err;
      console.log('Successfully written to file');
    }
  );

  return gridedSyncPairDataArray;
};

extractSyncPairDataByTrainerBaseId();
