const fs = require('fs');

const monsterDB = require('../rawdata/protodump/Monster.json');
const monsterBaseDB = require('../rawdata/protodump/MonsterBase.json');
const monsterVariationDB = require('../rawdata/protodump/MonsterVariation.json');
const monsterEvolutionDB = require('../rawdata/protodump/MonsterEvolution.json');
const trainerDB = require('../rawdata/protodump/Trainer.json');
const trainerAbilityDB = require('../rawdata/protodump/TrainerAbility.json');
const trainerBaseDB = require('../rawdata/protodump/TrainerBase.json');
const moveDB = require('../rawdata/protodump/ModifiedMove.json');

const monsterFormDBde = require('../rawdata/lsddump/dl/monster_form_de.json');
const monsterFormDBen = require('../rawdata/lsddump/dl/monster_form_en.json');
const monsterFormDBes = require('../rawdata/lsddump/dl/monster_form_es.json');
const monsterFormDBfr = require('../rawdata/lsddump/dl/monster_form_fr.json');
const monsterFormDBit = require('../rawdata/lsddump/dl/monster_form_it.json');
const monsterFormDBja = require('../rawdata/lsddump/dl/monster_form_ja.json');
const monsterFormDBko = require('../rawdata/lsddump/dl/monster_form_ko.json');
const monsterFormDBzh = require('../rawdata/lsddump/dl/monster_form_zh-TW.json');

const motifTypeNameDBde = require('../rawdata/lsddump/dl/motif_type_name_de.json');
const motifTypeNameDBen = require('../rawdata/lsddump/dl/motif_type_name_en.json');
const motifTypeNameDBes = require('../rawdata/lsddump/dl/motif_type_name_es.json');
const motifTypeNameDBfr = require('../rawdata/lsddump/dl/motif_type_name_fr.json');
const motifTypeNameDBit = require('../rawdata/lsddump/dl/motif_type_name_it.json');
const motifTypeNameDBja = require('../rawdata/lsddump/dl/motif_type_name_ja.json');
const motifTypeNameDBko = require('../rawdata/lsddump/dl/motif_type_name_ko.json');
const motifTypeNameDBzh = require('../rawdata/lsddump/dl/motif_type_name_zh-TW.json');

const pokemonNameDBde = require('../rawdata/lsddump/dl/monster_name_de.json');
const pokemonNameDBen = require('../rawdata/lsddump/dl/monster_name_en.json');
const pokemonNameDBes = require('../rawdata/lsddump/dl/monster_name_es.json');
const pokemonNameDBfr = require('../rawdata/lsddump/dl/monster_name_fr.json');
const pokemonNameDBit = require('../rawdata/lsddump/dl/monster_name_it.json');
const pokemonNameDBja = require('../rawdata/lsddump/dl/monster_name_ja.json');
const pokemonNameDBko = require('../rawdata/lsddump/dl/monster_name_ko.json');
const pokemonNameDBzh = require('../rawdata/lsddump/dl/monster_name_zh-TW.json');

const trainerNameDBde = require('../rawdata/lsddump/apk/trainer_name_de.json');
const trainerNameDBen = require('../rawdata/lsddump/apk/trainer_name_en.json');
const trainerNameDBes = require('../rawdata/lsddump/apk/trainer_name_es.json');
const trainerNameDBfr = require('../rawdata/lsddump/apk/trainer_name_fr.json');
const trainerNameDBit = require('../rawdata/lsddump/apk/trainer_name_it.json');
const trainerNameDBja = require('../rawdata/lsddump/apk/trainer_name_ja.json');
const trainerNameDBko = require('../rawdata/lsddump/apk/trainer_name_ko.json');
const trainerNameDBzh = require('../rawdata/lsddump/apk/trainer_name_zh-TW.json');

const roleTypeNameDBde = require('../rawdata/lsddump/dl/role_type_name_de.json');
const roleTypeNameDBen = require('../rawdata/lsddump/dl/role_type_name_en.json');
const roleTypeNameDBes = require('../rawdata/lsddump/dl/role_type_name_es.json');
const roleTypeNameDBfr = require('../rawdata/lsddump/dl/role_type_name_fr.json');
const roleTypeNameDBit = require('../rawdata/lsddump/dl/role_type_name_it.json');
const roleTypeNameDBja = require('../rawdata/lsddump/dl/role_type_name_ja.json');
const roleTypeNameDBko = require('../rawdata/lsddump/dl/role_type_name_ko.json');
const roleTypeNameDBzh = require('../rawdata/lsddump/dl/role_type_name_zh-TW.json');

const moveNameDBde = require('../rawdata/lsddump/dl/move_name_de.json');
const moveNameDBen = require('../rawdata/lsddump/dl/move_name_en.json');
const moveNameDBes = require('../rawdata/lsddump/dl/move_name_es.json');
const moveNameDBfr = require('../rawdata/lsddump/dl/move_name_fr.json');
const moveNameDBit = require('../rawdata/lsddump/dl/move_name_it.json');
const moveNameDBja = require('../rawdata/lsddump/dl/move_name_ja.json');
const moveNameDBko = require('../rawdata/lsddump/dl/move_name_ko.json');
const moveNameDBzh = require('../rawdata/lsddump/dl/move_name_zh-TW.json');

const moveTargetTypeDBde = require('../rawdata/lsddump/dl/move_target_type_de.json');
const moveTargetTypeDBen = require('../rawdata/lsddump/dl/move_target_type_en.json');
const moveTargetTypeDBes = require('../rawdata/lsddump/dl/move_target_type_es.json');
const moveTargetTypeDBfr = require('../rawdata/lsddump/dl/move_target_type_fr.json');
const moveTargetTypeDBit = require('../rawdata/lsddump/dl/move_target_type_it.json');
const moveTargetTypeDBja = require('../rawdata/lsddump/dl/move_target_type_ja.json');
const moveTargetTypeDBko = require('../rawdata/lsddump/dl/move_target_type_ko.json');
const moveTargetTypeDBzh = require('../rawdata/lsddump/dl/move_target_type_zh-TW.json');

const motifTypeNameDB = {
  de: motifTypeNameDBde,
  en: motifTypeNameDBen,
  es: motifTypeNameDBes,
  fr: motifTypeNameDBfr,
  it: motifTypeNameDBit,
  ja: motifTypeNameDBja,
  ko: motifTypeNameDBko,
  zh: motifTypeNameDBzh,
};

const monsterFormDB = {
  de: monsterFormDBde,
  en: monsterFormDBen,
  es: monsterFormDBes,
  fr: monsterFormDBfr,
  it: monsterFormDBit,
  ja: monsterFormDBja,
  ko: monsterFormDBko,
  zh: monsterFormDBzh,
};

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

const roleTypeNameDB = {
  de: roleTypeNameDBde,
  en: roleTypeNameDBen,
  es: roleTypeNameDBes,
  fr: roleTypeNameDBfr,
  it: roleTypeNameDBit,
  ja: roleTypeNameDBja,
  ko: roleTypeNameDBko,
  zh: roleTypeNameDBzh,
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

const {
  gridedTrainerList,
  dynamaxTrainerList,
  languages,
  modifiedMonsterBaseId,
  modifiedMonsterVariationFormBaseId,
} = require('../utils/constants');

const {
  getUpdatedMoveDescription,
  getUpdatedPassiveSkillName,
  getUpdatedPassiveSkillDescription,
} = require('../utils/functions');

// On 5/25/2020 the following changes have been made to the .proto files:
// monsterId->monsterBaseId
// trainerId->monsterId
// characterId->trainerId

/*
 * Usage i.e: node extractSyncPairData.js
 * */

const extractSyncPairData = () => {
  const syncPairData = {};
  let monsterAndTrainerData = {};
  let monsterId = '';
  // let monsterBaseId = '';
  // let syncMoveId = '';
  let stats = {};
  let moves = {};
  let passives = {};
  // let syncPairNames = {};

  let trainerNameId = '';

  let trainerList = [];

  trainerAbilityDB.entries.forEach((entry) => {
    trainerList.push(entry.trainerId);
  });

  trainerList.forEach((trainerIdFromList) => {
    let hasVariationForm = false;
    let isMega = false;
    let isDynamax = false;
    let isGrided = false;
    let monsterVariationFormBaseId;
    let monsterVariationFormEntry;
    let variationMoves;
    let variationPassives;
    let variationSyncMove;
    let variationFormPassiveId;
    let variationFormId;

    if (gridedTrainerList.includes(trainerIdFromList)) {
      isGrided = true;
    }

    if (dynamaxTrainerList.includes(trainerIdFromList)) {
      isDynamax = true;
    }

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
    // Find entry in Trainer.json
    let trainer = trainerDB.entries.find(
      (trainer) => trainer.trainerId.toString() === trainerIdFromList.toString()
    );

    if (trainer) {
      // console.log('Trainer exists');

      let trainerBaseId = trainer.trainerBaseId;

      // Use trainerId to find monsterId in Trainer.json
      monsterId = trainer.monsterId;

      // Find last evolution form
      let arrayOfEvoluations = monsterEvolutionDB.entries.filter((entry) => {
        return entry.trainerId.toString() === trainerIdFromList.toString();
      });
      if (arrayOfEvoluations.length !== 0) {
        let sortedArrayOfEvoluations = arrayOfEvoluations.sort((a, b) => {
          let x = a.monsterIdNext;
          let y = b.monsterIdNext;
          return x < y ? -1 : x > y ? 1 : 0;
        });

        monsterId = sortedArrayOfEvoluations.pop().monsterIdNext;
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

      // if (trainerIdFromList.toString() === '10126000000') {
      //   // Swampert's first move is Muddy Water not Water Gun
      //   move1Id = 330;
      // }
      // if (trainerIdFromList.toString() === '10123000000') {
      //   // Decidueye first move is Spirit Shackle
      //   move1Id = 624;
      // }
      // if (trainerIdFromList.toString() === '10122000000') {
      //   // Primarina first move is Sparkling Aria
      //   move1Id = 626;
      // }
      // if (trainerIdFromList.toString() === '10245000000') {
      //   // Morpeko has Hunger Switch as a "form passive"
      //   passive3Id = 99010601;
      // }
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

      move1Id = monster.move1ChangeId !== -1 ? monster.move1ChangeId : move1Id;
      move2Id = monster.move2ChangeId !== -1 ? monster.move2ChangeId : move2Id;
      move3Id = monster.move3ChangeId !== -1 ? monster.move3ChangeId : move3Id;
      move4Id = monster.move4ChangeId !== -1 ? monster.move4ChangeId : move4Id;

      // Use monsterBaseId to find actorId in MonsterBase.json
      let monsterBase = monsterBaseDB.entries.find(
        (monsterBase) =>
          monsterBase.monsterBaseId.toString() === monsterBaseId.toString()
      );

      const { actorId, formPassiveId, formId } = monsterBase;

      let monsterActorId = actorId;
      let monsterVariationFormByLanguage;
      let monsterFormByLanguage = {
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
        monsterFormByLanguage[language] = monsterFormDB[language][formId];
      });

      stats = {
        hpValues,
        atkValues,
        defValues,
        spaValues,
        spdValues,
        speValues,
      };
      // find role type
      let roleTypeNameByLanguage = {
        de: '',
        en: '',
        es: '',
        fr: '',
        it: '',
        ja: '',
        ko: '',
        zh: '',
      };

      const updateRoleTable = {
        0: '100',
        1: '101',
        2: '103',
        3: '102',
      };

      languages.forEach((language) => {
        roleTypeNameByLanguage[language] =
          roleTypeNameDB[language][updateRoleTable[role]];
      });

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
      let move1TypeNameByLanguage = {
          de: '',
          en: '',
          es: '',
          fr: '',
          it: '',
          ja: '',
          ko: '',
          zh: '',
        },
        move2TypeNameByLanguage = {
          de: '',
          en: '',
          es: '',
          fr: '',
          it: '',
          ja: '',
          ko: '',
          zh: '',
        },
        move3TypeNameByLanguage = {
          de: '',
          en: '',
          es: '',
          fr: '',
          it: '',
          ja: '',
          ko: '',
          zh: '',
        },
        move4TypeNameByLanguage = {
          de: '',
          en: '',
          es: '',
          fr: '',
          it: '',
          ja: '',
          ko: '',
          zh: '',
        };
      syncMoveTypeNameByLanguage = {
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
        move1TypeNameByLanguage[language] =
          motifTypeNameDB[language][move1.type];
        move2TypeNameByLanguage[language] =
          motifTypeNameDB[language][move2.type];
        move3TypeNameByLanguage[language] =
          motifTypeNameDB[language][move3.type];
        move4TypeNameByLanguage[language] =
          motifTypeNameDB[language][move4.type];
      });
      moves = {
        move1: {
          id: move1Id,
          name: move1NameByLanguage,
          description: move1DescriptionByLanguage,
          category: move1.category,
          group: move1.group,
          type: move1.type,
          typeName: move1TypeNameByLanguage,
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
          typeName: move2TypeNameByLanguage,
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
          typeName: move3TypeNameByLanguage,
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
          typeName: move4TypeNameByLanguage,
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
        },
        formPassiveNameByLanguage = {
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
        },
        formPassiveDescriptionByLanguage = {
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
        formPassiveId &&
          (formPassiveNameByLanguage[language] = getUpdatedPassiveSkillName(
            language,
            0, // moveId
            formPassiveId
          ));
        passive1Id &&
          (passive1NameByLanguage[language] = getUpdatedPassiveSkillName(
            language,
            0, // moveId
            passive1Id
          ));
        passive2Id &&
          (passive2NameByLanguage[language] = getUpdatedPassiveSkillName(
            language,
            0, // moveId
            passive2Id
          ));
        passive3Id &&
          (passive3NameByLanguage[language] = getUpdatedPassiveSkillName(
            language,
            0, // moveId
            passive3Id
          ));
        passive4Id &&
          (passive4NameByLanguage[language] = getUpdatedPassiveSkillName(
            language,
            0, // moveId
            passive4Id
          ));
        formPassiveId &&
          (formPassiveDescriptionByLanguage[language] =
            getUpdatedPassiveSkillDescription(language, formPassiveId));
        passive1Id &&
          (passive1DescriptionByLanguage[language] =
            getUpdatedPassiveSkillDescription(language, passive1Id));
        passive2Id &&
          (passive2DescriptionByLanguage[language] =
            getUpdatedPassiveSkillDescription(language, passive2Id));
        passive3Id &&
          (passive3DescriptionByLanguage[language] =
            getUpdatedPassiveSkillDescription(language, passive3Id));
        passive4Id &&
          (passive4DescriptionByLanguage[language] =
            getUpdatedPassiveSkillDescription(language, passive4Id));
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
      formPassiveId !== 0 &&
        formPassiveId !== 99010401 && // 99010401 is Silvally's form passive
        (passives = {
          ...passives,
          formPassive: {
            id: formPassiveId,
            name: formPassiveNameByLanguage,
            description: formPassiveDescriptionByLanguage,
          },
        });
      let hasHitTheGas5InBaseForm = false;
      let hasTypeShiftInBaseForm = false;
      let typeShiftPassiveId;
      Object.values(passives).forEach((passive) => {
        if (passive.id.toString() === '13014505') {
          // Hit the Gas 5
          // console.log('Hit the Gas 5');

          hasHitTheGas5InBaseForm = true;

          Object.values(moves).forEach((move) => {
            move.gaugeDrain =
              move.gaugeDrain !== 0 ? move.gaugeDrain + 1 : move.gaugeDrain;
            move.power =
              move.power !== 0 ? Math.floor(move.power * 1.5) : move.power;
          });
        }

        if (passive.id.toString().substring(0, 4) === '1305') {
          // Type Shift
          // console.log('Type Shift');
          hasTypeShiftInBaseForm = true;
          typeShiftPassiveId = passive.id;

          let convertTypeShiftToType = {
            0: 0,
            1: 1,
            2: 10, // flying
            3: 3,
            4: 2, // fire
            5: 5,
            6: 6,
            7: 13, // rock
            8: 9, // ground
            9: 9,
            10: 12, // bug
            11: 11,
            12: 16, // dark
            13: 13,
            14: 14,
            15: 15,
            16: 16,
            17: 15, // dragon
            18: 18,
          };
          // "id": 13051001,
          // "name": {
          //   "de": "Käfer-Wechsel",
          //   "en": "Bug Shift",
          //   "es": "Cambio Bicho",
          //   "fr": "Conversion Insecte",
          //   "it": "Mutainsetto",
          //   "ja": "むしチェンジ",
          //   "ko": "벌레체인지",
          //   "zh": "蟲屬性替換"
          // },
          // "id": 13050201,
          // "name": {
          //   "de": "Flug-Wechsel",
          //   "en": "Flying Shift",
          //   "es": "Cambio Volador",
          //   "fr": "Conversion Vol",
          //   "it": "Mutavolante",
          //   "ja": "ひこうチェンジ",
          //   "ko": "비행체인지",
          //   "zh": "飛行屬性替換"
          // },
          // "id": 13050301,
          // "name": {
          //   "de": "Wasser-Wechsel",
          //   "en": "Water Shift",
          //   "es": "Cambio Agua",
          //   "fr": "Conversion Eau",
          //   "it": "Mutacqua",
          //   "ja": "みずチェンジ",
          //   "ko": "물체인지",
          //   "zh": "水屬性替換"
          // },
          // "id": 13051201,
          // "name": {
          //   "de": "Unlicht-Wechsel",
          //   "en": "Dark Shift",
          //   "es": "Cambio Siniestro",
          //   "fr": "Conversion Ténèbres",
          //   "it": "Mutabuio",
          //   "ja": "あくチェンジ",
          //   "ko": "악체인지",
          //   "zh": "惡屬性替換"
          // },
          // "id": 13051701,
          // "name": {
          //   "de": "Drachen-Wechsel",
          //   "en": "Dragon Shift",
          //   "es": "Cambio Dragón",
          //   "fr": "Conversion Dragon",
          //   "it": "Mutadrago",
          //   "ja": "ドラゴンチェンジ",
          //   "ko": "드래곤체인지",
          //   "zh": "龍屬性替換"
          // },
          Object.values(moves).forEach((move) => {
            move.type =
              move.power !== 0 && move.type === 1
                ? convertTypeShiftToType[
                    Number(passive.id.toString().substring(4, 6))
                  ]
                : move.type;
          });
        }
      });
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

      // Use moveId to find move data, eg. power, accuracy, etc. from Move.json
      let syncMoveEntry = moveDB.entries.find(
        (move) => move.moveId.toString() === syncMoveId.toString()
      );

      languages.forEach((language) => {
        syncMoveNameByLanguage[language] = moveNameDB[language][syncMoveId];
        syncMoveDescriptionByLanguage[language] = getUpdatedMoveDescription(
          language,
          syncMoveId
        );
        syncMoveTypeNameByLanguage[language] =
          motifTypeNameDB[language][syncMoveEntry.type];
      });

      moves = {
        ...moves,
        syncMove: {
          id: syncMoveEntry.moveId,
          name: syncMoveNameByLanguage,
          description: syncMoveDescriptionByLanguage,
          category: syncMoveEntry.category,
          group: syncMoveEntry.group,
          type: syncMoveEntry.type,
          typeName: syncMoveTypeNameByLanguage,
          target: syncMoveEntry.target,
          gaugeDrain: syncMoveEntry.gaugeDrain,
          power: syncMoveEntry.power,
          accuracy: syncMoveEntry.accuracy,
          maxUses: syncMoveEntry.maxUses,
        },
      };

      if (
        monsterId.toString() === '20140000000' || // Mewtwo
        (monsterVariationDB.entries.find(
          (monster) => monster.monsterId.toString() === monsterId.toString()
        ) &&
          trainerIdFromList.toString() !== '10247000000') // Leon's Charizard doesn't mega evolve
      ) {
        console.log(
          `trainerId ${trainerIdFromList} & monsterId ${monsterId} have variation`
        );
        hasVariationForm = true;

        // Use monsterBaseId to see if there is a variation form, i.e. monsterBaseId ends in '51'

        let potentialMegaBaseId =
          monsterBaseId
            .toString()
            .substring(0, monsterBaseId.toString().length - 2) + '51';

        // do the same if pokemon is Mew
        // if (monsterBaseId.toString() === '20015111') {
        //   potentialMegaBaseId = monsterBaseId.toString();
        // }

        if (
          (monsterBaseId.toString() === '21038400' ||
            (pokemonNameDBen[potentialMegaBaseId] &&
              trainerIdFromList.toString() !== '10247000000')) && // Leon's Charizard doesn't mega evolve
          !isDynamax
        ) {
          console.log('variation is mega');
          isMega = true;
          monsterVariationFormBaseId = potentialMegaBaseId;

          if (monsterBaseId.toString() === '20030301') {
            monsterVariationFormBaseId = '20030352'; // Marnie & Mawile
          }
        } else if (monsterBaseId.toString() === '20015000') {
          // Mewtwo
          console.log('variation is mega');
          isMega = true;
          monsterVariationFormBaseId = '20015000';
        } else {
          console.log('variation is not mega');
          isMega = false;
        }

        // let maxMove1Id;
        // let maxMove2Id;
        // let maxMove3Id;
        // let maxMove4Id;

        // if (trainerIdFromList.toString() === '10247100000') {
        //   // SS Leon & Eternatus
        //   console.log('variation is dynamax');
        //   isDynamax = true;
        //   maxMove1Id = 7002;
        // } else if (trainerIdFromList.toString() === '10000800000') {
        //   // Red & Snorlax
        //   console.log('variation is dynamax');
        //   isDynamax = true;
        //   maxMove1Id = 7000;
        //   maxMove2Id = 7005;
        // } else if (trainerIdFromList.toString() === '10251000000') {
        //   // Allister & Gengar
        //   console.log('variation is dynamax');
        //   isDynamax = true;
        //   maxMove1Id = 7001;
        //   maxMove2Id = 7005;
        //   maxMove3Id = 7010;
        // } else if (trainerIdFromList.toString() === '10106800000') {
        //   // Elesa & Emolga
        //   console.log('variation is dynamax');
        //   isDynamax = true;
        //   maxMove1Id = 7028;
        //   maxMove2Id = 7027;
        //   maxMove3Id = 7039;
        // } else {
        //   console.log('variation is not dynamax');
        //   isDynamax = false;
        // }
        if (isDynamax) {
          monsterVariationFormBaseId = monsterBaseId.toString();
        }
        if (!isMega && !isDynamax) {
          // Non-Mega, Non-Dynamax variation
          if (modifiedMonsterVariationFormBaseId[monsterBaseId]) {
            monsterVariationFormBaseId =
              modifiedMonsterVariationFormBaseId[monsterBaseId];
          }
          // if (monsterBaseId.toString() === '2008771101') {
          //   // Morpeko
          //   monsterVariationFormBaseId = '2008771201';
          // } else if (monsterBaseId.toString() === '20086512') {
          //   // Lusamine & Necrozma
          //   monsterVariationFormBaseId = '20086514';
          // } else if (monsterBaseId.toString() === '2008751100') {
          //   // Nessa & Eiscue
          //   monsterVariationFormBaseId = '2008751200';
          // } else if (monsterBaseId.toString() === '20077000') {
          //   // Zygarde
          //   monsterVariationFormBaseId = '20077015';
          // }
          else {
            monsterVariationFormBaseId = (Number(monsterBaseId) + 1).toString(); // either ends in 51 or original number +1, even for Silvali and Mew
          }
        }
        // monsterVariationFormBaseId = potentialMegaBaseId
        //   ? potentialMegaBaseId
        //   : (Number(monsterBaseId) + 1).toString(); // either ends in 51 or original number +1, even for Silvali and Mew

        monsterVariationFormEntry = monsterVariationDB.entries.find(
          (monster) => monster.monsterId.toString() === monsterId.toString()
        );

        // // Steven & Rayquaza
        // if (monsterBaseId.toString() === '21038400') {
        //   monsterVariationFormEntry = monsterVariationDB.entries.find(
        //     (monster) => monster.monsterId.toString() === '20090500000'
        //   );
        // }

        // Giovanni & Mewtwo;
        if (monsterBaseId.toString() === '20015000') {
          monsterVariationFormEntry = monsterVariationDB.entries.find(
            (monster) => monster.monsterId.toString() === '20140000001'
          );
        }
        // if (monsterBaseId.toString() === '20086512') {
        //   // Lusamine & Necrozma
        //   monsterVariationFormEntry = monsterVariationDB.entries.find(
        //     (monster) => monster.monsterId.toString() === '20120100000'
        //   );
        // }
        // if (monsterBaseId.toString() === '2008751100') {
        //   // Nessa & Eiscue
        //   monsterVariationFormEntry = monsterVariationDB.entries.find(
        //     (monster) => monster.monsterId.toString() === '20249400000'
        //   );
        // }

        const { atkScale, defScale, spaScale, spdScale, speScale } =
          monsterVariationFormEntry;

        stats = {
          ...stats,
          atkScale,
          defScale,
          spaScale,
          spdScale,
          speScale,
        };

        // Use monsterBaseId to find actorId in MonsterBase.json
        console.log('monsterBaseId', monsterBaseId);
        let variationMonsterBase = monsterBaseDB.entries.find(
          (monsterBase) =>
            monsterBase.monsterBaseId.toString() ===
            monsterVariationFormBaseId.toString()
        );
        console.log('monsterVariationFormBaseId', monsterVariationFormBaseId);
        variationFormPassiveId = variationMonsterBase.formPassiveId;
        variationFormId = variationMonsterBase.formId;

        monsterVariationFormByLanguage = {
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
          monsterVariationFormByLanguage[language] =
            monsterFormDB[language][variationFormId];
        });

        // Use variationMoveId to find variationMove name in move_name_xx.json
        // Use variationMoveId to find variationMove description in move_description_xx.json
        let variationMove1NameByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          variationMove2NameByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          variationMove3NameByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          variationMove4NameByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          maxMove1NameByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          maxMove2NameByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          maxMove3NameByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          maxMove4NameByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          };

        let variationMove1DescriptionByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          variationMove2DescriptionByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          variationMove3DescriptionByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          variationMove4DescriptionByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          maxMove1DescriptionByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          maxMove2DescriptionByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          maxMove3DescriptionByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          maxMove4DescriptionByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          };

        let variationMove1TargetTypeByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          variationMove2TargetTypeByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          variationMove3TargetTypeByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          variationMove4TargetTypeByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          maxMove1TargetTypeByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          maxMove2TargetTypeByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          maxMove3TargetTypeByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          maxMove4TargetTypeByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          };

        let variationMove1TypeNameByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          variationMove2TypeNameByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          variationMove3TypeNameByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          variationMove4TypeNameByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          maxMove1TypeNameByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          maxMove2TypeNameByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          maxMove3TypeNameByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          maxMove4TypeNameByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          };
        // Use variationMoveId to find variationMove data, eg. power, accuracy, etc. from Move.json
        let variationMove1,
          variationMove2,
          variationMove3,
          variationMove4,
          maxMove1,
          maxMove2,
          maxMove3,
          maxMove4;

        // if (isDynamax) {
        //   if (trainerIdFromList.toString() === '10247100000') {
        //     // SS Leon & Eternatus
        //     maxMove1 = moveDB.entries.find(
        //       (move) => move.moveId.toString() === '7002' // Eternabeam
        //     );
        //   }

        //   if (trainerIdFromList.toString() === '10000800000') {
        //     // Red & Snorlax
        //     maxMove1 = moveDB.entries.find(
        //       (move) => move.moveId.toString() === '7000'
        //     );
        //     maxMove2 = moveDB.entries.find(
        //       (move) => move.moveId.toString() === '7005'
        //     );
        //   }

        //   if (trainerIdFromList.toString() === '10251000000') {
        //     // Allister & Gengar
        //     maxMove1 = moveDB.entries.find(
        //       (move) => move.moveId.toString() === '7001'
        //     );
        //     maxMove2 = moveDB.entries.find(
        //       (move) => move.moveId.toString() === '7005'
        //     );
        //     maxMove3 = moveDB.entries.find(
        //       (move) => move.moveId.toString() === '7010'
        //     );
        //   }

        //   if (trainerIdFromList.toString() === '10106800000') {
        //     // Elesa & Emolga
        //     maxMove1 = moveDB.entries.find(
        //       (move) => move.moveId.toString() === '7028'
        //     );
        //     maxMove2 = moveDB.entries.find(
        //       (move) => move.moveId.toString() === '7027'
        //     );
        //     maxMove3 = moveDB.entries.find(
        //       (move) => move.moveId.toString() === '7039'
        //     );
        //   }
        // }

        monsterVariationFormEntry.move1Id !== -1
          ? (variationMove1 = moveDB.entries.find(
              (move) =>
                move.moveId.toString() ===
                monsterVariationFormEntry.move1Id.toString()
            ))
          : null;
        monsterVariationFormEntry.move2Id !== -1
          ? (variationMove2 = moveDB.entries.find(
              (move) =>
                move.moveId.toString() ===
                monsterVariationFormEntry.move2Id.toString()
            ))
          : null;
        monsterVariationFormEntry.move3Id !== -1
          ? (variationMove3 = moveDB.entries.find(
              (move) =>
                move.moveId.toString() ===
                monsterVariationFormEntry.move3Id.toString()
            ))
          : null;
        monsterVariationFormEntry.move4Id !== -1
          ? (variationMove4 = moveDB.entries.find(
              (move) =>
                move.moveId.toString() ===
                monsterVariationFormEntry.move4Id.toString()
            ))
          : null;

        monsterVariationFormEntry.moveDynamax1Id !== -1
          ? (maxMove1 = moveDB.entries.find(
              (move) =>
                move.moveId.toString() ===
                monsterVariationFormEntry.moveDynamax1Id.toString()
            ))
          : null;
        monsterVariationFormEntry.moveDynamax2Id !== -1
          ? (maxMove2 = moveDB.entries.find(
              (move) =>
                move.moveId.toString() ===
                monsterVariationFormEntry.moveDynamax2Id.toString()
            ))
          : null;
        monsterVariationFormEntry.moveDynamax3Id !== -1
          ? (maxMove3 = moveDB.entries.find(
              (move) =>
                move.moveId.toString() ===
                monsterVariationFormEntry.moveDynamax3Id.toString()
            ))
          : null;
        monsterVariationFormEntry.moveDynamax4Id !== -1
          ? (maxMove4 = moveDB.entries.find(
              (move) =>
                move.moveId.toString() ===
                monsterVariationFormEntry.moveDynamax4Id.toString()
            ))
          : null;

        languages.forEach((language) => {
          variationMove1NameByLanguage[language] =
            moveNameDB[language][monsterVariationFormEntry.move1Id];
          variationMove2NameByLanguage[language] =
            moveNameDB[language][monsterVariationFormEntry.move2Id];
          variationMove3NameByLanguage[language] =
            moveNameDB[language][monsterVariationFormEntry.move3Id];
          variationMove4NameByLanguage[language] =
            moveNameDB[language][monsterVariationFormEntry.move4Id];
          variationMove1DescriptionByLanguage[language] =
            getUpdatedMoveDescription(
              language,
              monsterVariationFormEntry.move1Id
            );
          variationMove2DescriptionByLanguage[language] =
            getUpdatedMoveDescription(
              language,
              monsterVariationFormEntry.move2Id
            );
          variationMove3DescriptionByLanguage[language] =
            getUpdatedMoveDescription(
              language,
              monsterVariationFormEntry.move3Id
            );
          variationMove4DescriptionByLanguage[language] =
            getUpdatedMoveDescription(
              language,
              monsterVariationFormEntry.move4Id
            );
          variationMove1 &&
            (variationMove1TargetTypeByLanguage[language] =
              moveTargetTypeDB[language][variationMove1.target]);
          variationMove2 &&
            (variationMove2TargetTypeByLanguage[language] =
              moveTargetTypeDB[language][variationMove2.target]);
          variationMove3 &&
            (variationMove3TargetTypeByLanguage[language] =
              moveTargetTypeDB[language][variationMove3.target]);
          variationMove4 &&
            (variationMove4TargetTypeByLanguage[language] =
              moveTargetTypeDB[language][variationMove4.target]);

          variationMove1 &&
            (variationMove1TypeNameByLanguage[language] =
              motifTypeNameDB[language][variationMove1.type]);
          variationMove2 &&
            (variationMove2TypeNameByLanguage[language] =
              motifTypeNameDB[language][variationMove2.type]);
          variationMove3 &&
            (variationMove3TypeNameByLanguage[language] =
              motifTypeNameDB[language][variationMove3.type]);
          variationMove4 &&
            (variationMove4TypeNameByLanguage[language] =
              motifTypeNameDB[language][variationMove4.type]);

          // max move
          maxMove1 &&
            (maxMove1NameByLanguage[language] =
              moveNameDB[language][maxMove1.moveId]);

          maxMove1 &&
            (maxMove1DescriptionByLanguage[language] =
              getUpdatedMoveDescription(language, maxMove1.moveId));

          maxMove1 &&
            (maxMove1TargetTypeByLanguage[language] =
              moveTargetTypeDB[language][maxMove1.target]);

          maxMove1 &&
            (maxMove1TypeNameByLanguage[language] =
              motifTypeNameDB[language][maxMove1.type]);

          maxMove2 &&
            (maxMove2NameByLanguage[language] =
              moveNameDB[language][maxMove2.moveId]);

          maxMove2 &&
            (maxMove2DescriptionByLanguage[language] =
              getUpdatedMoveDescription(language, maxMove2.moveId));

          maxMove2 &&
            (maxMove2TargetTypeByLanguage[language] =
              moveTargetTypeDB[language][maxMove2.target]);

          maxMove2 &&
            (maxMove2TypeNameByLanguage[language] =
              motifTypeNameDB[language][maxMove2.type]);

          maxMove3 &&
            (maxMove3NameByLanguage[language] =
              moveNameDB[language][maxMove3.moveId]);

          maxMove3 &&
            (maxMove3DescriptionByLanguage[language] =
              getUpdatedMoveDescription(language, maxMove3.moveId));

          maxMove3 &&
            (maxMove3TargetTypeByLanguage[language] =
              moveTargetTypeDB[language][maxMove3.target]);

          maxMove3 &&
            (maxMove3TypeNameByLanguage[language] =
              motifTypeNameDB[language][maxMove3.type]);

          maxMove4 &&
            (maxMove4NameByLanguage[language] =
              moveNameDB[language][maxMove4.moveId]);

          maxMove4 &&
            (maxMove4DescriptionByLanguage[language] =
              getUpdatedMoveDescription(language, maxMove4.moveId));

          maxMove4 &&
            (maxMove4TargetTypeByLanguage[language] =
              moveTargetTypeDB[language][maxMove4.target]);

          maxMove4 &&
            (maxMove4TypeNameByLanguage[language] =
              motifTypeNameDB[language][maxMove4.type]);
        });

        variationMove1 &&
          (variationMoves = {
            ...variationMoves,
            move1: {
              id: variationMove1.moveId,
              name: variationMove1NameByLanguage,
              description: variationMove1DescriptionByLanguage,
              category: variationMove1.category,
              group: variationMove1.group,
              type: variationMove1.type,
              typeName: variationMove1TypeNameByLanguage,
              target: variationMove1.target,
              targetType: variationMove1TargetTypeByLanguage,
              gaugeDrain: variationMove1.gaugeDrain,
              power: variationMove1.power,
              accuracy: variationMove1.accuracy,
              maxUses: variationMove1.maxUses,
            },
          });
        variationMove2 &&
          (variationMoves = {
            ...variationMoves,
            move2: {
              id: variationMove2.moveId,
              name: variationMove2NameByLanguage,
              description: variationMove2DescriptionByLanguage,
              category: variationMove2.category,
              group: variationMove2.group,
              type: variationMove2.type,
              typeName: variationMove2TypeNameByLanguage,
              target: variationMove2.target,
              targetType: variationMove2TargetTypeByLanguage,
              gaugeDrain: variationMove2.gaugeDrain,
              power: variationMove2.power,
              accuracy: variationMove2.accuracy,
              maxUses: variationMove2.maxUses,
            },
          });
        variationMove3 &&
          (variationMoves = {
            ...variationMoves,
            move3: {
              id: variationMove3.moveId,
              name: variationMove3NameByLanguage,
              description: variationMove3DescriptionByLanguage,
              category: variationMove3.category,
              group: variationMove3.group,
              type: variationMove3.type,
              typeName: variationMove3TypeNameByLanguage,
              target: variationMove3.target,
              targetType: variationMove3TargetTypeByLanguage,
              gaugeDrain: variationMove3.gaugeDrain,
              power: variationMove3.power,
              accuracy: variationMove3.accuracy,
              maxUses: variationMove3.maxUses,
            },
          });
        variationMove4 &&
          (variationMoves = {
            ...variationMoves,
            move4: {
              id: variationMove4.moveId,
              name: variationMove4NameByLanguage,
              description: variationMove4DescriptionByLanguage,
              category: variationMove4.category,
              group: variationMove4.group,
              type: variationMove4.type,
              typeName: variationMove4TypeNameByLanguage,
              target: variationMove4.target,
              targetType: variationMove4TargetTypeByLanguage,
              gaugeDrain: variationMove4.gaugeDrain,
              power: variationMove4.power,
              accuracy: variationMove4.accuracy,
              maxUses: variationMove4.maxUses,
            },
          });
        maxMove1 &&
          (variationMoves = {
            ...variationMoves,
            maxMove1: {
              id: maxMove1.moveId,
              name: maxMove1NameByLanguage,
              description: maxMove1DescriptionByLanguage,
              category: maxMove1.category,
              group: maxMove1.group,
              type: maxMove1.type,
              typeName: maxMove1TypeNameByLanguage,
              target: maxMove1.target,
              targetType: maxMove1TargetTypeByLanguage,
              gaugeDrain: maxMove1.gaugeDrain,
              power: maxMove1.power,
              accuracy: maxMove1.accuracy,
              maxUses: maxMove1.maxUses,
            },
          });
        maxMove2 &&
          (variationMoves = {
            ...variationMoves,
            maxMove2: {
              id: maxMove2.moveId,
              name: maxMove2NameByLanguage,
              description: maxMove2DescriptionByLanguage,
              category: maxMove2.category,
              group: maxMove2.group,
              type: maxMove2.type,
              typeName: maxMove2TypeNameByLanguage,
              target: maxMove2.target,
              targetType: maxMove2TargetTypeByLanguage,
              gaugeDrain: maxMove2.gaugeDrain,
              power: maxMove2.power,
              accuracy: maxMove2.accuracy,
              maxUses: maxMove2.maxUses,
            },
          });
        maxMove3 &&
          (variationMoves = {
            ...variationMoves,
            maxMove3: {
              id: maxMove3.moveId,
              name: maxMove3NameByLanguage,
              description: maxMove3DescriptionByLanguage,
              category: maxMove3.category,
              group: maxMove3.group,
              type: maxMove3.type,
              typeName: maxMove3TypeNameByLanguage,
              target: maxMove3.target,
              targetType: maxMove3TargetTypeByLanguage,
              gaugeDrain: maxMove3.gaugeDrain,
              power: maxMove3.power,
              accuracy: maxMove3.accuracy,
              maxUses: maxMove3.maxUses,
            },
          });
        maxMove4 &&
          (variationMoves = {
            ...variationMoves,
            maxMove4: {
              id: maxMove4.moveId,
              name: maxMove4NameByLanguage,
              description: maxMove4DescriptionByLanguage,
              category: maxMove4.category,
              group: maxMove4.group,
              type: maxMove4.type,
              typeName: maxMove4TypeNameByLanguage,
              target: maxMove4.target,
              targetType: maxMove4TargetTypeByLanguage,
              gaugeDrain: maxMove4.gaugeDrain,
              power: maxMove4.power,
              accuracy: maxMove4.accuracy,
              maxUses: maxMove4.maxUses,
            },
          });

        if (trainerIdFromList.toString() === '10245000000') {
          // Morpeko's Auro Wheel changes type after switching mode
          variationMoves = {
            ...variationMoves,
            move3: {
              id: 783,
              name: {
                de: 'Aura-Rad',
                en: 'Aura Wheel',
                es: 'Rueda Aural',
                fr: 'Roue Libre',
                it: "Ruota d'Aura",
                ja: 'オーラぐるま',
                ko: '오라휠',
                zh: '氣場輪',
              },
              description: {
                de: 'Erhöht die Initiative des Anwenders um 1.\nDiese Attacke wird zum Typ Elektro, wenn der Anwender im Pappsattmuster ist.\nDiese Attacke wird zum Typ Unlicht, wenn der Anwender im Kohldampfmuster ist.',
                en: 'Raises the user’s Speed by 1 stat rank.\nWhen the user is in Full Belly Mode, this attack becomes Electric type.\nWhen the user is in Hangry Mode, this attack becomes Dark type.',
                es: 'Aumenta la Velocidad del usuario en 1 nivel.\nEn su Forma Saciada, el ataque es de tipo Eléctrico.\nEn su Forma Voraz, el ataque es de tipo Siniestro.',
                fr: 'Augmente la Vitesse du lanceur de 1 rang.\nLorsque le lanceur est en Mode Rassasié, cette attaque devient de type Électrik.\nLorsque le lanceur est en Mode Affamé, cette attaque est de type Ténèbres.',
                it: 'Aumenta la Velocità di chi la usa di 1 grado.\nQuesto attacco diventa di tipo Elettro quando è attivo il Motivo Panciapiena.\nQuesto attacco diventa di tipo Buio quando è attivo il Motivo Panciavuota.',
                ja: '自分の素早さを1段階あげる\n自分がまんぷくもようのときはでんきタイプで攻撃する\n自分がはらぺこもようのときはあくタイプで攻撃する',
                ko: '자신의 스피드가 1단계 오른다\n자신이 배부른 모양일 때는 전기타입으로 공격한다\n자신이 배고픈 모양일 때는 악타입으로 공격한다',
                zh: '提高自己的速度1階段。\n當自己為滿腹花紋時，會以電屬性進行攻擊。\n當自己為空腹花紋時，會以惡屬性進行攻擊。',
              },
              category: 1,
              group: 2,
              type: 16,
              typeName: {
                de: 'Unlicht',
                en: 'Dark',
                es: 'Siniestro',
                fr: 'Ténèbres',
                it: 'Buio',
                ja: 'あく',
                ko: '악',
                zh: '惡',
              },
              target: 2,
              targetType: {
                de: '1 Gegner',
                en: 'An opponent',
                es: 'Un rival',
                fr: '1 ennemi',
                it: 'Un nemico',
                ja: '相手１体',
                ko: '상대 1마리',
                zh: '對手１對拍組',
              },
              gaugeDrain: 3,
              power: 80,
              accuracy: 100,
              maxUses: 0,
            },
          };
        }

        if (trainerIdFromList.toString() === '10126400000') {
          // May & Lopunny changes sync move after evolving
          let variationSyncMoveId = 84200;
          // Use syncMoveId to find sync move data in Move.json
          let variationSyncMoveNameByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          };

          let variationSyncMoveDescriptionByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          };
          let variationSyncMoveTypeNameByLanguage = {
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
          let syncMoveEntry = moveDB.entries.find(
            (move) => move.moveId.toString() === variationSyncMoveId.toString()
          );

          languages.forEach((language) => {
            variationSyncMoveNameByLanguage[language] =
              moveNameDB[language][variationSyncMoveId];
            variationSyncMoveDescriptionByLanguage[language] =
              getUpdatedMoveDescription(language, variationSyncMoveId);
            variationSyncMoveTypeNameByLanguage[language] =
              motifTypeNameDB[language][syncMoveEntry.type];
          });

          variationSyncMove = {
            id: syncMoveEntry.moveId,
            name: variationSyncMoveNameByLanguage,
            description: variationSyncMoveDescriptionByLanguage,
            category: syncMoveEntry.category,
            group: syncMoveEntry.group,
            type: syncMoveEntry.type,
            typeName: variationSyncMoveTypeNameByLanguage,
            target: syncMoveEntry.target,
            gaugeDrain: syncMoveEntry.gaugeDrain,
            power: syncMoveEntry.power,
            accuracy: syncMoveEntry.accuracy,
            maxUses: syncMoveEntry.maxUses,
          };
        } else {
          variationSyncMove = null;
        }

        variationSyncMove &&
          (variationMoves = {
            ...variationMoves,
            syncMove: variationSyncMove,
          });

        // Use passiveId to find passive skill name and description in passive_skill_name_xx.json and passive_skill_description_xx.json
        let variationPassive1NameByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          variationPassive2NameByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          variationPassive3NameByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          variationPassive4NameByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          };

        let variationPassive1DescriptionByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          variationPassive2DescriptionByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          variationPassive3DescriptionByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          variationPassive4DescriptionByLanguage = {
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
          monsterVariationFormEntry.passive1Id &&
            (variationPassive1NameByLanguage[language] =
              getUpdatedPassiveSkillName(
                language,
                0, // moveId
                monsterVariationFormEntry.passive1Id
              ));

          monsterVariationFormEntry.passive2Id &&
            (variationPassive2NameByLanguage[language] =
              getUpdatedPassiveSkillName(
                language,
                0, // moveId
                monsterVariationFormEntry.passive2Id
              ));

          monsterVariationFormEntry.passive3Id &&
            (variationPassive3NameByLanguage[language] =
              getUpdatedPassiveSkillName(
                language,
                0, // moveId
                monsterVariationFormEntry.passive3Id
              ));

          monsterVariationFormEntry.passive4Id &&
            (variationPassive4NameByLanguage[language] =
              getUpdatedPassiveSkillName(
                language,
                0, // moveId
                monsterVariationFormEntry.passive4Id
              ));

          monsterVariationFormEntry.passive1Id &&
            (variationPassive1DescriptionByLanguage[language] =
              getUpdatedPassiveSkillDescription(
                language,
                monsterVariationFormEntry.passive1Id
              ));
          monsterVariationFormEntry.passive2Id &&
            (variationPassive2DescriptionByLanguage[language] =
              getUpdatedPassiveSkillDescription(
                language,
                monsterVariationFormEntry.passive2Id
              ));
          monsterVariationFormEntry.passive3Id &&
            (variationPassive3DescriptionByLanguage[language] =
              getUpdatedPassiveSkillDescription(
                language,
                monsterVariationFormEntry.passive3Id
              ));
          monsterVariationFormEntry.passive4Id &&
            (variationPassive4DescriptionByLanguage[language] =
              getUpdatedPassiveSkillDescription(
                language,
                monsterVariationFormEntry.passive4Id
              ));
        });

        monsterVariationFormEntry.passive1Id !== 0 &&
          (variationPassives = {
            ...variationPassives,
            passive1: {
              id: monsterVariationFormEntry.passive1Id,
              name: variationPassive1NameByLanguage,
              description: variationPassive1DescriptionByLanguage,
            },
          });
        monsterVariationFormEntry.passive2Id !== 0 &&
          (variationPassives = {
            ...variationPassives,
            passive2: {
              id: monsterVariationFormEntry.passive2Id,
              name: variationPassive2NameByLanguage,
              description: variationPassive2DescriptionByLanguage,
            },
          });
        monsterVariationFormEntry.passive3Id !== 0 &&
          (variationPassives = {
            ...variationPassives,
            passive3: {
              id: monsterVariationFormEntry.passive3Id,
              name: variationPassive3NameByLanguage,
              description: variationPassive3DescriptionByLanguage,
            },
          });
        monsterVariationFormEntry.passive4Id &&
          monsterVariationFormEntry.passive4Id !== 0 &&
          (variationPassives = {
            ...variationPassives,
            passive4: {
              id: monsterVariationFormEntry.passive4Id,
              name: variationPassive4NameByLanguage,
              description: variationPassive4DescriptionByLanguage,
            },
          });

        if (variationPassives) {
          Object.values(variationPassives).forEach((passive) => {
            if (passive.id.toString() === '13014505') {
              // Hit the Gas 5
              // console.log('Hit the Gas 5 in variation form');

              if (hasHitTheGas5InBaseForm === false) {
                Object.values(variationMoves).forEach((move) => {
                  move.gaugeDrain =
                    move.gaugeDrain !== 0
                      ? move.gaugeDrain + 1
                      : move.gaugeDrain;
                  move.power =
                    move.power !== 0
                      ? Math.floor(move.power * 1.5)
                      : move.power;
                });
              }
            }

            let convertTypeShiftToType = {
              0: 0,
              1: 1,
              2: 10, // flying
              3: 3,
              4: 2, // fire
              5: 5,
              6: 6,
              7: 13, // rock
              8: 9, // ground
              9: 9,
              10: 12, // bug
              11: 11,
              12: 16, // dark
              13: 13,
              14: 14,
              15: 15,
              16: 16,
              17: 15, // dragon
              18: 18,
            };
            Object.values(variationPassives).forEach((passive) => {
              if (hasTypeShiftInBaseForm) {
                Object.values(variationMoves).forEach((move) => {
                  move.type =
                    move.power !== 0 && move.type === 1
                      ? convertTypeShiftToType[
                          Number(typeShiftPassiveId.toString().substring(4, 6))
                        ]
                      : move.type;
                });
              } else if (passive.id.toString().substring(0, 4) === '1305') {
                // Type Shift
                // console.log('Type Shift');
                typeShiftPassiveId = passive.id; // to use his id for below.

                Object.values(variationMoves).forEach((move) => {
                  move.type =
                    move.power !== 0 && move.type === 1
                      ? convertTypeShiftToType[
                          Number(passive.id.toString().substring(4, 6))
                        ]
                      : move.type;
                });
              }
            });
          });
        }
      } else {
        hasVariationForm = false;
      }

      // Use trainerId to find trainerBaseId in Trainer.json

      // Use trainerBaseId to find trainerNameId in TrainerBase.json
      // 6/28 update - trainerBase.trainerBaseId => trainerBase.id
      trainerBase = trainerBaseDB.entries.find(
        (trainerBase) =>
          trainerBase.id.toString() === trainer.trainerBaseId.toString()
      );

      // trainerNameId = trainerBase.trainerNameId;
      // 6/28 update - trainerBase.trainerNameIdShort => trainerBase.trainerNameId
      trainerNameId = trainerBase.trainerNameId;

      // let trainerActorId = trainerBase.actorId; // name changed on 9/28/2020
      // 6/28 update - trainerBase.trainerNameId => trainerBase.actorId
      let trainerActorId = trainerBase.actorId;

      languages.forEach((language) => {
        if (monsterBaseId) {
          pokemonNameByLanguage[language] = pokemonNameDB[language][
            monsterBaseId
          ]
            ? pokemonNameDB[language][monsterBaseId]
            : pokemonNameDB[language][
                monsterBaseId
                  .toString()
                  .substring(0, monsterBaseId.toString().length - 1) + '0'
              ];

          if (modifiedMonsterBaseId[monsterBaseId]) {
            pokemonNameByLanguage[language] =
              pokemonNameDB[language][modifiedMonsterBaseId[monsterBaseId]];
          }
          // if (monsterBaseId.toString() === '21038400') {
          //   pokemonNameByLanguage[language] =
          //     pokemonNameDB[language]['20038400']; // Steven & Rayquaza
          // }
        } else {
          console.log(
            `trainerId ${trainerIdFromList} has no matching monsterBaseId`
          );
        }

        if (trainerNameId) {
          trainerNameByLanguage[language] =
            trainerNameDB[language][trainerNameId];
        }
        if (trainerNameId === 'ch8000') {
          trainerNameByLanguage[language] = 'Hero';
        }
        if (monsterBaseId && trainerNameId) {
          syncPairNameByLanguage[
            language
          ] = `${trainerNameByLanguage[language]}_${pokemonNameByLanguage[language]}`;
        }

        if (trainerNameId.toString() === '10021010000') {
          // New Blastoise Grid
          pokemonNameByLanguage[language] =
            pokemonNameByLanguage[language] + '_new';
        }
      });

      // Push to syncPairData
      hasVariationForm
        ? (monsterAndTrainerData = {
            pokemonNameByLanguage: pokemonNameByLanguage,
            trainerNameByLanguage: trainerNameByLanguage,
            syncPairNameByLanguage: syncPairNameByLanguage,
            monsterBaseId: monsterBaseId.toString(),
            monsterId: monsterId.toString(),
            monsterActorId: monsterActorId,
            trainerId: trainerIdFromList,
            trainerBaseId: trainerBaseId.toString(),
            trainerNameId,
            trainerActorId: trainerActorId,
            isGrided: isGrided,
            stats,
            moves,
            passives,
            type,
            weakType,
            rarity,
            role,
            roleTypeNameByLanguage,
            formPassiveId,
            formId,
            monsterFormByLanguage,
            variationForm: variationSyncMove
              ? {
                  monsterVariationFormBaseId,
                  isMega,
                  isDynamax,
                  moves: variationMoves,
                  passives: variationPassives,
                  syncMove: variationSyncMove,
                  formPassiveId: variationFormPassiveId,
                  formId: variationFormId,
                  monsterFormByLanguage: monsterVariationFormByLanguage,
                }
              : {
                  monsterVariationFormBaseId,
                  isMega,
                  isDynamax,
                  moves: variationMoves,
                  passives: variationPassives,
                  formPassiveId: variationFormPassiveId,
                  formId: variationFormId,
                  monsterFormByLanguage: monsterVariationFormByLanguage,
                },
          })
        : (monsterAndTrainerData = {
            pokemonNameByLanguage: pokemonNameByLanguage,
            trainerNameByLanguage: trainerNameByLanguage,
            syncPairNameByLanguage: syncPairNameByLanguage,
            monsterBaseId: monsterBaseId.toString(),
            monsterId: monsterId.toString(),
            monsterActorId: monsterActorId,
            trainerId: trainerIdFromList,
            trainerBaseId: trainerBaseId.toString(),
            trainerNameId,
            trainerActorId: trainerActorId,
            isGrided: isGrided,
            stats,
            moves,
            passives,
            type,
            weakType,
            rarity,
            role,
            roleTypeNameByLanguage,
            formPassiveId,
            formId,
            monsterFormByLanguage,
          });

      syncPairData[trainerIdFromList] = monsterAndTrainerData;
    } else {
      console.log('Trainer does not exists.', trainerIdFromList);
    }
  });

  fs.writeFile(
    `${__dirname}/../../src/data/syncPairData.json`,
    JSON.stringify(syncPairData),
    (err) => {
      if (err) throw err;
      console.log('Successfully written to file');
    }
  );

  return syncPairData;
};

extractSyncPairData();
