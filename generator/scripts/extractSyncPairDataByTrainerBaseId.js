const fs = require('fs');

const monsterDB = require('../rawdata/protodump/Monster.json');
const monsterBaseDB = require('../rawdata/protodump/MonsterBase.json');
const monsterVariationDB = require('../rawdata/protodump/MonsterVariation.json');
const trainerDB = require('../rawdata/protodump/Trainer.json');
const trainerBaseDB = require('../rawdata/protodump/TrainerBase.json');
const moveDB = require('../rawdata/protodump/ModifiedMove.json');

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
  // '10002101', // Blastoise
  // 9/7/2020
  '10011800', // clefairy
  '10011900', // silvally
  '10012000', // pheromosa
  // 9/28/2020
  '10011500', // luxray
  '10002040', // mightyena
  '10000740', // mimikyu
  '10010600', // zebstrika
  '10015100', // mismagius
  '10015300', // glalie
  '10002101', // blastoise_new
  // 10/28/2020
  '10021500', // altaria
  '10005100', // lycanroc midnight
  '10010000', // braviary
  '10009610', // octillery
  '10010110', // delibird
  '10010200', // musharna
  '10002100', // pigeot
  // 11/4/2020
  '10013200', // volcarona
  // 11/26/2020
  '10024300', // Gloria/Zacian
  '10000840', // Holiday Erika
  '10001640', // Holiday Skyla
  '10001900', // Brendan
  // 12/21/2020
  '10008900', // N
  '10011140', // Lance
  '10011840', // Lillie
  '10012400', // Mallow
  '10012600', // May
  '10004900', // Phoebe
  // 1/26/2021
  '10011640', // V!Dawn
  '10013040', // V!Serena
  '10013600', // Sycamore
  '10019600', // Lysandre
  '10025600', // Piers
  // 2/24/2021
  '10024500', // Marnie
  '10024700', // Leon
  '10015800', // Diantha
  '10019400', // Cyrus
  '10009280', // SS Iris
  '10002000', // Hilbert
];

const newTrainerBaseIdArray = [
  // Copy paste from the other array. Used to generate a list of monsterBaseId for the import and export script.
  // 2/24/2021
  '10024500', // Marnie
  '10024700', // Leon
  '10015800', // Diantha
  '10019400', // Cyrus
  '10009280', // SS Iris
  '10002000', // Hilbert
];

// On 5/25/2020 the following changes have been made to the .proto files:
// monsterId->monsterBaseId
// trainerId->monsterId
// characterId->trainerId

/*
 * Usage i.e: node extractSyncPairDataByTrainerBaseId.js
 * */

const getUpdatedMoveDescription = (language, moveId) => {
  // To refactor
  if (moveId === 219) {
    return moveDescriptionPartsDB[language]['999997'];
  } else if (moveId === 407) {
    return moveDescriptionPartsDB[language]['999996'];
  } else if (moveId === 517) {
    return moveDescriptionPartsDB[language]['999995'];
  } else if (moveId === 643) {
    return moveDescriptionPartsDB[language]['999994'];
  } else if (moveId === 783) {
    return (
      moveDescriptionPartsDB[language]['999993'] +
      '\n' +
      moveDescriptionPartsDB[language]['999969'] +
      '\n' +
      moveDescriptionPartsDB[language]['999968']
    );
  } else if (moveId === 784) {
    return moveDescriptionPartsDB[language]['999992'];
  } else if (moveId === 10928) {
    return (
      moveDescriptionPartsDB[language]['999991'] +
      '\n' +
      moveDescriptionPartsDB[language]['999990'] +
      '\n' +
      moveDescriptionPartsDB[language]['999989'] +
      '\n' +
      moveDescriptionPartsDB[language]['999988']
    );
  } else if (moveId === 11580) {
    return (
      moveDescriptionPartsDB[language]['999987'] +
      '\n' +
      moveDescriptionPartsDB[language]['999967']
    );
  } else if (moveId === 12450) {
    return (
      moveDescriptionPartsDB[language]['999986'] +
      '\n' +
      moveDescriptionPartsDB[language]['999966'] +
      '\n' +
      moveDescriptionPartsDB[language]['999965'] +
      '\n' +
      moveDescriptionPartsDB[language]['999964']
    );
  } else if (moveId === 12470) {
    return (
      moveDescriptionPartsDB[language]['999990'] +
      '\n' +
      moveDescriptionPartsDB[language]['999985'] +
      '\n' +
      moveDescriptionPartsDB[language]['999988'] +
      '\n' +
      moveDescriptionPartsDB[language]['999984'] +
      '\n' +
      moveDescriptionPartsDB[language]['999983']
    );
  } else if (moveId === 61500) {
    return moveDescriptionPartsDB[language]['999963'];
  } else if (moveId === 81800) {
    return moveDescriptionPartsDB[language]['999999'];
  } else if (moveId === 81900) {
    return (
      moveDescriptionPartsDB[language]['999962'] +
      '\n' +
      moveDescriptionPartsDB[language]['999982']
    );
  } else if (moveId === 83200) {
    return moveDescriptionPartsDB[language]['999981'];
  } else {
    return moveDescriptionDB[language][moveId];
  }
};

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
      console.log('Trainer exists');
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
      let {
        move1Id,
        move2Id,
        move3Id,
        move4Id,
        passive1Id,
        passive2Id,
        passive3Id,
        passive4Id,
        type,
        weakType,
        rarity,
        role,
      } = trainer;

      if (trainerBaseIdFromList === '10012600') {
        // Swampert's first move is Muddy Water not Water Gun
        move1Id = 330;
      }
      if (trainerBaseIdFromList === '10024500') {
        // Morpeko has Hunger Switch as a "form passive"
        passive3Id = 99010601;
      }

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
        },
        passive4NameByLanguage = {
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
        },
        passive4DescriptionByLanguage = {
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
        passive4NameByLanguage[language] = passiveNameDB[language][passive4Id];
        passive1DescriptionByLanguage[language] =
          passiveDescriptionDB[language][passive1Id];
        passive2DescriptionByLanguage[language] =
          passiveDescriptionDB[language][passive2Id];
        passive3DescriptionByLanguage[language] =
          passiveDescriptionDB[language][passive3Id];
        passive4DescriptionByLanguage[language] =
          passiveDescriptionDB[language][passive4Id];
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
      passive4Id !== 0 &&
        (passives = {
          ...passives,
          passive4: {
            id: passive4Id,
            name: passive4NameByLanguage,
            description: passive4DescriptionByLanguage,
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
        syncMoveDescriptionByLanguage[language] = getUpdatedMoveDescription(
          language,
          syncMoveId
        );
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

      if (
        pokemonNameDBen[potentialMegaBaseId] &&
        trainerBaseIdFromList !== '10024700'
      ) {
        monsterMegaFormBaseId = potentialMegaBaseId;

        monsterMegaFormEntry = monsterVariationDB.entries.find(
          (monster) => monster.monsterId.toString() === monsterId.toString()
        );

        console.log('monsterBaseId', monsterBaseId);

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
          },
          megaPassive4NameByLanguage = {
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
          },
          megaPassive4DescriptionByLanguage = {
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
          megaPassive4NameByLanguage[language] =
            passiveNameDB[language][monsterMegaFormEntry.passive4Id];
          megaPassive1DescriptionByLanguage[language] =
            passiveDescriptionDB[language][monsterMegaFormEntry.passive1Id];
          megaPassive2DescriptionByLanguage[language] =
            passiveDescriptionDB[language][monsterMegaFormEntry.passive2Id];
          megaPassive3DescriptionByLanguage[language] =
            passiveDescriptionDB[language][monsterMegaFormEntry.passive3Id];
          megaPassive4DescriptionByLanguage[language] =
            passiveDescriptionDB[language][monsterMegaFormEntry.passive4Id];
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

        monsterMegaFormEntry.passive4Id &&
          monsterMegaFormEntry.passive4Id !== 0 &&
          (megaPassives = {
            ...megaPassives,
            passive4: {
              id: passive4Id,
              name: megaPassive4NameByLanguage,
              description: megaPassive4DescriptionByLanguage,
            },
          });
      }

      // Use trainerBaseId to find trainerNameId in TrainerBase.json
      trainerBase = trainerBaseDB.entries.find(
        (trainerBase) =>
          trainerBase.trainerBaseId.toString() === trainerBaseIdFromList
      );

      // trainerNameId = trainerBase.trainerNameId;
      trainerNameId = trainerBase.trainerNameIdShort;

      // let trainerActorId = trainerBase.actorId; // name changed on 9/28/2020
      let trainerActorId = trainerBase.trainerNameId;

      // Push to gridedSyncPairDataArray
      monsterMegaFormBaseId
        ? (monsterAndTrainerData = {
            monsterBaseId: monsterBaseId.toString(),
            monsterMegaFormBaseId,
            monsterId: monsterId.toString(),
            monsterActorId: monsterActorId,
            trainerBaseId: trainerBaseIdFromList,
            trainerNameId,
            trainerActorId: trainerActorId,
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
            trainerBaseId: trainerBaseIdFromList,
            trainerNameId,
            trainerActorId: trainerActorId,
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
      console.log(
        'Trainer doesn not exists. Modifying monsterId to find trainer'
      );
      let newMonsterId =
        monsterId.toString().substring(0, monsterId.toString().length - 1) +
        '0';

      let trainer = trainerDB.entries.find(
        (trainer) => trainer.monsterId.toString() === newMonsterId.toString()
      );
      console.log('Found trainer', trainer);

      if (trainer) {
        trainerBaseId = trainer.trainerBaseId;

        // Use trainerBaseId to find trainerNameId
        trainerBase = trainerBaseDB.entries.find(
          (trainerBase) =>
            trainerBase.trainerBaseId.toString() === trainerBaseId.toString()
        );

        // trainerNameId = trainerBase.trainerNameId; // name changed on 9/28/2020
        trainerNameId = trainerBase.trainerNameIdShort;
        // Push to gridedSyncPairDataArray
        monsterMegaFormBaseId
          ? (monsterAndTrainerData = {
              monsterBaseId: monsterBaseId.toString(),
              monsterMegaFormBaseId,
              monsterId: monsterId.toString(),
              monsterActorId: monsterActorId,
              trainerBaseId: trainerBaseIdFromList,
              trainerNameId,
              trainerActorId: trainerActorId,
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
              trainerBaseId: trainerBaseIdFromList,
              trainerNameId,
              trainerActorId: trainerActorId,
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
              monsterActorId: monsterActorId,
              trainerBaseId: trainerBaseIdFromList,
              trainerNameId: 'No Trainer',
              trainerActorId: trainerActorId,
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
              trainerBaseId: trainerBaseIdFromList,
              trainerNameId: 'No Trainer',
              trainerActorId: trainerActorId,
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
      // 20051801 is Musharna
      // 20086301 is Comfey
      // 2008771101 Morpeko
      // 20028201 Gardevoir
      // 20063501 Hydreigon
      if (entry.monsterBaseId) {
        if (entry.monsterBaseId === '20003901') {
          pokemonNameByLanguage[language] = pokemonNameDB[language]['20003900'];
        } else if (entry.monsterBaseId === '20003501') {
          pokemonNameByLanguage[language] = pokemonNameDB[language]['20003500'];
        } else if (entry.monsterBaseId === '20051801') {
          pokemonNameByLanguage[language] = pokemonNameDB[language]['20051800'];
        } else if (entry.monsterBaseId === '20086301') {
          pokemonNameByLanguage[language] = pokemonNameDB[language]['20086300'];
        } else if (entry.monsterBaseId === '2008771101') {
          pokemonNameByLanguage[language] =
            pokemonNameDB[language]['2008771100'];
        } else if (entry.monsterBaseId === '20028201') {
          pokemonNameByLanguage[language] = pokemonNameDB[language]['20028200'];
        } else if (entry.monsterBaseId === '20063501') {
          pokemonNameByLanguage[language] = pokemonNameDB[language]['20063500'];
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

      if (entry.trainerBaseId === '10002101') {
        // New Blastoise Grid
        pokemonNameByLanguage[language] =
          pokemonNameByLanguage[language] + '_new';
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

  // template
  gridedSyncPairDataArray.push({
    monsterBaseId: '',
    monsterMegaFormBaseId: '',
    monsterId: '',
    monsterActorId: '',
    trainerBaseId: '',
    trainerNameId: '',
    trainerActorId: '',
    stats: {
      hpValues: [0, 0, 0, 0, 0, 0],
      atkValues: [0, 0, 0, 0, 0, 0],
      defValues: [0, 0, 0, 0, 0, 0],
      spaValues: [0, 0, 0, 0, 0, 0],
      spdValues: [0, 0, 0, 0, 0, 0],
      speValues: [0, 0, 0, 0, 0, 0],
      atkScale: 100,
      defScale: 100,
      spaScale: 100,
      spdScale: 100,
      speScale: 100,
    },
    moves: {
      move1: {
        id: -1,
        name: {
          de: '',
          en: '',
          es: '',
          fr: '',
          it: '',
          ja: '',
          ko: '',
          zh: '',
        },
        description: {},
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
      move2: {
        id: -1,
        name: {
          de: '',
          en: '',
          es: '',
          fr: '',
          it: '',
          ja: '',
          ko: '',
          zh: '',
        },
        description: {},
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
      move3: {
        id: -1,
        name: {
          de: '',
          en: '',
          es: '',
          fr: '',
          it: '',
          ja: '',
          ko: '',
          zh: '',
        },
        description: {},
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
      move4: {
        id: -1,
        name: {
          de: '',
          en: '',
          es: '',
          fr: '',
          it: '',
          ja: '',
          ko: '',
          zh: '',
        },
        description: {},
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
      syncMove: {
        id: -1,
        name: {
          de: '',
          en: '',
          es: '',
          fr: '',
          it: '',
          ja: '',
          ko: '',
          zh: '',
        },
        description: {},
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
    },
    passives: {
      passive1: {
        id: -1,
        name: {
          de: '',
          en: '',
          es: '',
          fr: '',
          it: '',
          ja: '',
          ko: '',
          zh: '',
        },
        description: {},
      },
      passive2: {
        id: -1,
        name: {
          de: '',
          en: '',
          es: '',
          fr: '',
          it: '',
          ja: '',
          ko: '',
          zh: '',
        },
        description: {},
      },
      passive3: {
        id: -1,
        name: {
          de: '',
          en: '',
          es: '',
          fr: '',
          it: '',
          ja: '',
          ko: '',
          zh: '',
        },
        description: {},
      },
    },
    // type: 3,
    // weakType: 4,
    rarity: 5,
    // role: 2,
    megaForm: {},
    pokemonNameByLanguage: {
      de: '',
      en: '',
      es: '',
      fr: '',
      it: '',
      ja: '',
      ko: '',
      zh: '',
    },
    trainerNameByLanguage: {
      de: '',
      en: '',
      es: '',
      fr: '',
      it: '',
      ja: '',
      ko: '',
      zh: '',
    },
    syncPairNameByLanguage: {
      de: '',
      en: '',
      es: '',
      fr: '',
      it: '',
      ja: '',
      ko: '',
      zh: '',
    },
  });

  // Old Blastoise data
  // gridedSyncPairDataArray.push({
  //   monsterBaseId: '20000900',
  //   monsterMegaFormBaseId: '20000951',
  //   monsterId: '20021010000',
  //   monsterActorId: 'pm0009_00_kamex',
  //   trainerBaseId: '10002101',
  //   trainerNameId: 'ch0021',
  //   trainerActorId: 'ch0021_01_green',
  //   stats: {
  //     hpValues: [89, 170, 248, 556, 620, 684],
  //     atkValues: [14, 36, 57, 134, 150, 166],
  //     defValues: [25, 63, 99, 242, 270, 298],
  //     spaValues: [13, 38, 62, 150, 170, 190],
  //     spdValues: [25, 63, 99, 242, 270, 298],
  //     speValues: [14, 36, 57, 134, 150, 166],
  //     atkScale: 100,
  //     defScale: 120,
  //     spaScale: 100,
  //     spdScale: 120,
  //     speScale: 100,
  //   },
  //   moves: {
  //     move1: {
  //       id: 352,
  //       name: {
  //         de: 'Aquawelle',
  //         en: 'Water Pulse',
  //         es: 'Hidropulso',
  //         fr: 'Vibraqua',
  //         it: 'Idropulsar',
  //         ja: 'みずのはどう',
  //         ko: '물의파동',
  //         zh: '水之波動',
  //       },
  //       description: {
  //         de: 'Verwirrt das Ziel in\nseltenen Fällen.',
  //         en: 'Has a small chance of leaving the target confused.',
  //         es: 'Rara vez confunde al\nobjetivo.',
  //         fr: "Rend l'ennemi confus\n(rarement).",
  //         it: 'Raramente confonde\nil bersaglio.',
  //         ja: 'まれに相手をこんらん状態にする',
  //         ko: '드물게 상대를 혼란 상태로 만든다',
  //         zh: '少數情況下會讓對手陷入混亂狀態。',
  //       },
  //       category: 2,
  //       group: 2,
  //       type: 3,
  //       target: 2,
  //       targetType: {
  //         de: '1 Gegner',
  //         en: 'An opponent',
  //         es: 'Un rival',
  //         fr: '1 ennemi',
  //         it: 'Un nemico',
  //         ja: '相手１体',
  //         ko: '상대 1마리',
  //         zh: '對手１對拍組',
  //       },
  //       gaugeDrain: 2,
  //       power: 47,
  //       accuracy: 100,
  //       maxUses: 0,
  //     },
  //     move2: {
  //       id: 19021,
  //       name: {
  //         de: 'X-Abwehr\n(Team)',
  //         en: 'X Defense All',
  //         es: 'Defensa X\nMúltiple',
  //         fr: 'Omni-Défense +',
  //         it: 'Difesa X-G',
  //         ja: 'ディフェンダーＧ',
  //         ko: '디펜드업G',
  //         zh: '防禦強化Ｇ',
  //       },
  //       description: {
  //         de: 'Erhöht die Verteidigung\naller Gefährten im Team\nstark.',
  //         en: 'Sharply raises the Defense of all allied sync pairs.',
  //         es: 'Aumenta bastante la\nDefensa del bando del\nusuario.',
  //         fr: 'Augmente modérément\nla Défense de tous les\nalliés.',
  //         it: 'Aumenta di molto\nla Difesa di tutte le Unità\nalleate.',
  //         ja: '味方のバディーズ全員の防御をぐーんとあげる',
  //         ko: '같은 편 버디즈 전원의 방어가 크게 오른다',
  //         zh: '大幅提高我方全體拍組的防禦。',
  //       },
  //       category: 3,
  //       group: 2,
  //       type: 0,
  //       target: 1,
  //       targetType: {
  //         de: 'Alle Gefährten',
  //         en: 'All allies',
  //         es: 'Todos los aliados',
  //         fr: 'Tous les alliés',
  //         it: 'Tutti gli alleati',
  //         ja: '味方全員',
  //         ko: '같은 편 전원',
  //         zh: '我方全體拍組',
  //       },
  //       gaugeDrain: 0,
  //       power: 0,
  //       accuracy: 0,
  //       maxUses: 2,
  //     },
  //     move3: {
  //       id: 10211,
  //       name: {
  //         de: 'Ich bin der\nGrößte!',
  //         en: 'To the Top!',
  //         es: '¡Hasta lo\nmás alto!',
  //         fr: 'Je serai le\nmeilleur !',
  //         it: 'Sarò io\na trionfare!',
  //         ja: '頂点に立つ！',
  //         ko: '정점에설거야!',
  //         zh: '站上頂點！',
  //       },
  //       description: {
  //         de:
  //           'Beschleunigt das Auffüllen\nder Attackenleiste auf der\nAnwender-Seite. Erhöht\ndie Volltrefferquote aller\nGefährten im Team.',
  //         en:
  //           'Makes move gauges accelerate on the allied field of play. Raises the critical-hit rate of all allied sync pairs.',
  //         es:
  //           'Aumenta la velocidad a la que se llenan las barras de movimientos del bando del usuario.\nAumenta la probabilidad de asestar golpes críticos del bando del usuario.',
  //         fr:
  //           'Augmente la vitesse\nà laquelle la Jauge\nCapacité du côté allié\nse remplit.\nAugmente légèrement\nle taux de critiques de\ntous les alliés.',
  //         it:
  //           'Accelera la barra mosse nel campo alleato e rende più probabili i brutti colpi per tutte le Unità alleate.',
  //         ja:
  //           '味方全体の場をわざゲージ加速状態にする\n味方のバディーズ全員の急所率をあげる',
  //         ko:
  //           '같은 편 전원의 필드를 기술게이지 가속 상태로 만든다\n같은 편 버디즈 전원의 급소율이 오른다',
  //         zh:
  //           '讓我方場地變成招式計量槽加速狀態。\n提高我方全體拍組的擊中要害率。',
  //       },
  //       category: 3,
  //       group: 2,
  //       type: 0,
  //       target: 7,
  //       targetType: {
  //         de: 'Gefährten-Seite',
  //         en: 'Allied side',
  //         es: 'Bando aliado',
  //         fr: 'Côté allié',
  //         it: 'Campo alleato',
  //         ja: '味方全体の場',
  //         ko: '같은 편 전원의 필드',
  //         zh: '我方場地',
  //       },
  //       gaugeDrain: 0,
  //       power: 0,
  //       accuracy: 0,
  //       maxUses: 2,
  //     },
  //     move4: {
  //       id: 308,
  //       name: {
  //         de: 'Aquahaubitze',
  //         en: 'Hydro Cannon',
  //         es: 'Hidrocañón',
  //         fr: 'Hydroblast',
  //         it: 'Idrocannone',
  //         ja: 'ハイドロカノン',
  //         ko: '하이드로캐논',
  //         zh: '加農水炮',
  //       },
  //       description: {
  //         de: 'Hat keinen Zusatzeffekt.',
  //         en: 'No additional effect.',
  //         es: 'Sin efectos secundarios.',
  //         fr: 'Aucun effet additionnel.',
  //         it: 'Non ha effetti aggiuntivi.',
  //         ja: '追加効果なし',
  //         ko: '추가 효과 없음',
  //         zh: '沒有追加效果。',
  //       },
  //       category: 2,
  //       group: 2,
  //       type: 3,
  //       target: 2,
  //       targetType: {
  //         de: '1 Gegner',
  //         en: 'An opponent',
  //         es: 'Un rival',
  //         fr: '1 ennemi',
  //         it: 'Un nemico',
  //         ja: '相手１体',
  //         ko: '상대 1마리',
  //         zh: '對手１對拍組',
  //       },
  //       gaugeDrain: 4,
  //       power: 178,
  //       accuracy: 90,
  //       maxUses: 0,
  //     },
  //     syncMove: {
  //       id: 61600,
  //       name: {
  //         de: 'Aquahaubitze des\nUnübertrefflichen',
  //         en: 'Triumphant\nHydro Cannon',
  //         es: 'Hidrocañón\nSuperalímites',
  //         fr: 'Le top du top !\nHydroblast !',
  //         it: 'Idrocannone oltre ogni limite',
  //         ja: '頂点を飛びこえる\nハイドロカノン',
  //         ko: '정점을 넘어서는\n하이드로캐논',
  //         zh: '飛越巔峰之\n加農水炮',
  //       },
  //       description: {
  //         de:
  //           'Löst bei Turtok bis zum\nEnde des Kampfes die\nMega-Entwicklung zu\nMega-Turtok aus. Die\nStärke dieser Attacke ist\numso höher, je höher die\nVerteidigung des\nAnwenders erhöht\nwurde.',
  //         en:
  //           'Become Mega Blastoise until the end of battle. The more the user’s Defense has been raised, the greater the power of this move.',
  //         es:
  //           'Evoluciona a Mega-Blastoise.\nVuelve a la normalidad tras terminar el combate.\nCausa más daño cuanto más haya aumentado la Defensa del usuario.',
  //         fr:
  //           "Permet à Tortank de\ndevenir Méga-Tortank\njusqu'à la fin du combat.\nPlus la Défense du\nlanceur a été augmentée,\nplus cette capacité est\npuissante.",
  //         it:
  //           "Permette a Blastoise di megaevolversi. L'effetto svanisce al termine della lotta. Più è stata aumentata la Difesa di chi la usa, più questa mossa è potente.",
  //         ja:
  //           'バトル終了までメガカメックスになる\n自分の防御があがっているほど威力があがる',
  //         ko:
  //           '배틀이 끝날 때까지 메가거북왕이 된다\n자신의 방어가 올라가 있는 만큼 위력이 오른다',
  //         zh:
  //           '變成超級水箭龜直到對戰結束。\n自己的防禦提高得越多，威力就越大。',
  //       },
  //       category: 2,
  //       group: 3,
  //       type: 3,
  //       target: 2,
  //       gaugeDrain: 0,
  //       power: 160,
  //       accuracy: 0,
  //       maxUses: 0,
  //     },
  //   },
  //   passives: {
  //     passive1: {
  //       id: 18043704,
  //       name: {
  //         de: 'P-Attacken-Sp.-Vert.↑ T 4',
  //         en: 'Force Field 4',
  //         es: 'Acción Defensa Especial ↑ M +4',
  //         fr: 'Coach Déf. Spé. 4',
  //         it: 'Migliortenacia-G 4',
  //         ja: 'Ｐ技後特防アップＧ４',
  //         ko: 'P기술후특수방어업G4',
  //         zh: '寶可夢出招後特防↑Ｇ４',
  //       },
  //       description: {
  //         de:
  //           'Erhöht nach Einsatz einer Attacke des Pokémon\noftmals die Spezial-Verteidigung aller Gefährten\nim Team.',
  //         en:
  //           'Has a good chance of raising the Sp. Def of all allied sync pairs when the user’s Pokémon uses a move.',
  //         es:
  //           'Es muy probable que aumente la Defensa\nEspecial del bando del usuario después de que\nel Pokémon use un movimiento.',
  //         fr:
  //           'Augmente légèrement la Défense Spéciale de\ntous les alliés quand le Pokémon utilise une\ncapacité (assez souvent).',
  //         it:
  //           'Quando il Pokémon usa una mossa, spesso\naumenta la Difesa Speciale di tutte le Unità\nalleate.',
  //         ja:
  //           'ポケモンが技をつかったときにときどき\n味方のバディーズ全員の特防をあげる',
  //         ko:
  //           '포켓몬이 기술을 사용하면 종종\n같은 편 버디즈 전원의 특수방어가 오른다',
  //         zh: '在寶可夢使出招式時，有時會\n提高我方全體拍組的特防。',
  //       },
  //     },
  //     passive2: {
  //       id: 18091009,
  //       name: {
  //         de: 'Gegentr.-Ang.-Sp.-Ang.↑ T 9',
  //         en: 'Team Shout 9',
  //         es: 'Daño Aumentataques M +9',
  //         fr: 'Réflexe Coach Atq. Atq. Spé. 9',
  //         it: 'Reazione iperoffensiva-G 9',
  //         ja: '被攻撃時攻撃特攻↑Ｇ９',
  //         ko: '피격시공격특수공격↑G9',
  //         zh: '被攻擊時攻擊特攻提升Ｇ９',
  //       },
  //       description: {
  //         de:
  //           'Erhöht den Angriff, den Spezial-Angriff oder\nsogar beide Werte aller Gefährten im Team,\nwenn das Pokémon von einer Attacke getroffen\nwird.',
  //         en:
  //           'Raises the Attack or Sp. Atk—or both—of all allied sync pairs when the user is hit by an attack move.',
  //         es:
  //           'Siempre aumenta el Ataque, el Ataque Especial\no ambos del bando del usuario si el usuario es\natacado.',
  //         fr:
  //           "Quand le Duo subit une attaque, augmente\nlégèrement l'Attaque ou l'Attaque Spéciale, ou\nles deux, de tous les alliés (à coup sûr).",
  //         it:
  //           "Quando l'Unità subisce un attacco semplice,\nl'Attacco o l'Attacco Speciale di tutte le Unità\nalleate aumenta, oppure aumentano entrambi.",
  //         ja:
  //           '技で攻撃を受けたときに\n味方のバディーズ全員の攻撃か特攻\nまたはその両方をあげる',
  //         ko:
  //           '기술로 공격받았을 때\n같은 편 버디즈 전원의 공격이나 특수공격\n혹은 공격과 특수공격이 모두 오른다',
  //         zh:
  //           '受到招式攻擊時，\n會提高我方全體拍組的攻擊或特攻，\n或是兩種皆會提高。',
  //       },
  //     },
  //     passive3: {
  //       id: 17042101,
  //       name: {
  //         de: 'GA-Ausdauer T',
  //         en: 'Safety Net',
  //         es: 'Movimiento Compi Protector M',
  //         fr: 'Duo Coach Encaissement',
  //         it: 'Uniresistenza-G',
  //         ja: 'Ｂ技後こらえるＧ',
  //         ko: 'B기술후버티기G',
  //         zh: '拍組招式後挺住Ｇ',
  //       },
  //       description: {
  //         de:
  //           'Nach dem ersten Einsatz der Gefährtenattacke\nüberstehen alle Gefährten im Team den nächsten\nAngriff.',
  //         en:
  //           'Makes all allied sync pairs able to endure the next hit they take when a sync move is used for the first time.',
  //         es:
  //           'Hace que el bando del usuario resista el\nsiguiente ataque y se quede con, al menos,\n1 PS la primera vez que usa un movimiento\ncompi.',
  //         fr:
  //           'La première fois que le Duo utilise sa capacité\nDuo, tous les alliés se préparent à encaisser la\nprochaine attaque.',
  //         it:
  //           "Una sola volta per lotta, quando l'Unità usa\nun'Unimossa, tutte le Unità alleate si preparano\na resistere a un colpo micidiale.",
  //         ja:
  //           '初めてバディーズわざを使ったときだけ\n味方のバディーズ全員をこらえる状態にする',
  //         ko:
  //           '처음 버디즈기술을 사용했을 때만\n같은 편 버디즈 전원을 버티기 상태로 만든다',
  //         zh: '首次使出拍組招式時，\n會讓我方全體拍組變成挺住狀態。',
  //       },
  //     },
  //   },
  //   type: 3,
  //   weakType: 4,
  //   rarity: 5,
  //   role: 2,
  //   megaForm: {},
  //   pokemonNameByLanguage: {
  //     de: 'Turtok',
  //     en: 'Blastoise',
  //     es: 'Blastoise',
  //     fr: 'Tortank',
  //     it: 'Blastoise',
  //     ja: 'カメックス',
  //     ko: '거북왕',
  //     zh: '水箭龜',
  //   },
  //   trainerNameByLanguage: {
  //     de: 'Blau',
  //     en: 'Blue',
  //     es: 'Azul',
  //     fr: 'Blue',
  //     it: 'Blu',
  //     ja: 'グリーン',
  //     ko: '그린',
  //     zh: '青綠',
  //   },
  //   syncPairNameByLanguage: {
  //     de: 'Blau_Turtok',
  //     en: 'Blue_Blastoise',
  //     es: 'Azul_Blastoise',
  //     fr: 'Blue_Tortank',
  //     it: 'Blu_Blastoise',
  //     ja: 'グリーン_カメックス',
  //     ko: '그린_거북왕',
  //     zh: '青綠_水箭龜',
  //   },
  // });

  fs.writeFile(
    `${__dirname}/../../src/data/gridedSyncPairData.json`,
    JSON.stringify(gridedSyncPairDataArray),
    (err) => {
      if (err) throw err;
      console.log('Successfully written to file');
    }
  );

  return gridedSyncPairDataArray;
};

extractSyncPairDataByTrainerBaseId();
