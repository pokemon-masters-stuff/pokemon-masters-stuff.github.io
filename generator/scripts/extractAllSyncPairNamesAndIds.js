const fs = require('fs');

const monsterDB = require('../rawdata/protodump/Monster.json');
const monsterBaseDB = require('../rawdata/protodump/MonsterBase.json');
const monsterEvolutionDB = require('../rawdata/protodump/MonsterEvolution.json');
const trainerDB = require('../rawdata/protodump/Trainer.json');
const trainerBaseDB = require('../rawdata/protodump/TrainerBase.json');

const oldTrainerDB = require('../rawdata/old/Trainer.json');

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

const roleTypeNameDBde = require('../rawdata/lsddump/role_type_name_de.json');
const roleTypeNameDBen = require('../rawdata/lsddump/role_type_name_en.json');
const roleTypeNameDBes = require('../rawdata/lsddump/role_type_name_es.json');
const roleTypeNameDBfr = require('../rawdata/lsddump/role_type_name_fr.json');
const roleTypeNameDBit = require('../rawdata/lsddump/role_type_name_it.json');
const roleTypeNameDBja = require('../rawdata/lsddump/role_type_name_ja.json');
const roleTypeNameDBko = require('../rawdata/lsddump/role_type_name_ko.json');
const roleTypeNameDBzh = require('../rawdata/lsddump/role_type_name_zh-TW.json');

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

const { languages } = require('../utils/constants');

// Update this list (of trainerBaseId) based on new datamine
const arrayOfGridedTrainers = [
  // trainerId
  10000000000, // Red & Charizard
  10001000000, // Kukui & Lycanroc
  10002000000, // Lyra & Meganium
  10002400000, // Lyra & Jigglypuff
  10003000000, // Calem & Meowstic
  10004000000, // Hilda & Emboar
  10006000000, // Flint & Infernape
  10007000000, // Acerola & Palossand
  10007400000, // Acerola & Mimikyu
  10008000000, // Erika & Vileplume
  10008400000, // Erika & Comfey
  10012000000, // Korrina & Lucario
  10015000000, // Brock & Onix
  10016000000, // Skyla & Swanna
  10016400000, // Skyla & Togekiss
  10017000000, // Leaf & Eevee
  10017100000, // Leaf & Venusaur
  10018000000, // Kris & Feraligatr
  10019000000, // Brendan & Sceptile
  10020000000, // Hilbert & Samurott
  10020400000, // Hilbert & Mightyena
  10021000000, // Blue & Pidgeot
  10021010000, // Blue & Blastoise
  10028000000, // Clair & Kingdra
  10029000000, // Flannery & Torkoal
  10032000000, // Pryce & Dewgong
  10039000000, // Viola & Masquerain
  10048000000, // Grimsley & Liepard
  10048100000, // Grimsley & Sharpedo
  10049000000, // Phoebe & Dusknoir
  10051000000, // Olivia & Lycanroc
  10054000000, // Koga & Crobat
  10062000000, // Karen & Houndoom
  10089000000, // N & Zekrom
  10090000000, // Steven & Metagross
  10090400000, // Steven & Sandslash
  10091000000, // Cynthia & Garchomp
  10091010000, // Cynthia & Kommo-o
  10092000000, // Iris & Haxorus
  10092800000, // Iris & Hydreigon
  10095000000, // Caitlin & Reuniclus
  10096100000, // Siebold & Octillery
  10098000000, // Hau & Raichu
  10099000000, // Barry & Empoleon
  10100000000, // Nate & Braviary
  10101000000, // Rosa & Serperior
  10101100000, // Rosa & Delibird
  10102000000, // Bianca & Musharna
  10106000000, // Elesa & Zebstrika
  10106100000, // Elesa & Rotom
  10110000000, // Misty & Starmie
  10111000000, // Lance & Dragonite
  10111400000, // Lance & Gyarados
  10112000000, // Ethan & Typhlosion
  10113000000, // Jasmine & Steelix
  10114000000, // Sabrina & Alakazam
  10115000000, // Volkner & Luxray
  10116000000, // Dawn & Torterra
  10116400000, // Dawn & Alcremie
  10118000000, // Lillie & Clefairy
  10118400000, // Lillie & Ribombee
  10119000000, // Gladion & Silvally
  10120000000, // Lusamine & Pheromosa
  10121000000, // Plumeria & Salazzle
  10122000000, // Elio & Primarina
  10123000000, // Selene & Decidueye
  10124000000, // Mallow & Tsareena
  10125000000, // Guzma & Golisopod
  10126000000, // May & Swampert
  10126400000, // May & Lopunny
  10127000000, // Wallace & Milotic
  10128000000, // Wally & Gallade
  10129000000, // Zinnia & Rayquaza
  10130000000, // Serena & Delphox
  10130400000, // Serena & Whimsicott
  10131000000, // Clemont & Heliolisk
  10132000000, // Alder & Volcarona
  10133000000, // Silver & Ho-Oh
  10136000000, // Professor Sycamore & Xerneas
  10137000000, // Professor Oak & Mew
  10148000000, // Morty & Drifblim
  10151000000, // Fantina & Mismagius
  10153000000, // Glacia & Glalie
  10158000000, // Diantha & Gardevoir
  10170000000, // Burgh & Leavanny
  10170400000, // Burgh & Togepi
  10194000000, // Cyrus & Palkia
  10195000000, // Ghetsis & Kyurem
  10196000000, // Lysandre & Yveltal
  10215000000, // Lisia & Altaria
  10243000000, // Gloria & Zacian
  10245000000, // Marnie & Morpeko
  10247000000, // Leon & Charizard
  10249000000, // Nessa & Drednaw
  10250000000, // Bea & Sirfetch’d
  10256000000, // Piers & Obstagoon
  10257000000, // Raihan & Duraludon
  18000000000, // Hero & Pikachu
  // Newly grided 5.27.2021
  10160000000, // Lana & Araquanid
  10161000000, // Hala & Crabominable
  10192000000, // Maxie & Groudon
  10193000000, // Archie & Kyogre
  10149000000, // Kiawe & Marowak
  18000120000, // Hero & Solgaleo
  18000020521, // Hero & Regirock
  18000020531, // Hero & Cobalion
  10035000001, // Lt. Surge & Raichu
  10148000001, // Morty & Mismagius
  10129000001, // Zinnia & Salamence
  10008000001, // Erika & Tangela
  10062000001, // Karen & Umbreon
  10117000000, // Kukui & Incineroar
  // 6/28
  10045900000, // Bugsy & Scyther
  10108000000, // Ingo & Excadrill
  10109000000, // Emmet & Archeops
  10243400000, // Gloria & Inteleon
  10245400000, // Marnie & Grimmsnarl
  10140000000, // Giovanni & Mewtwo
  // 7/28
  10066010000, // Lear & Hoopa
  10067010000, // Rachel & Umbreon
  10068010000, // Sawyer & Honchkrow
  10135000000, // Sidney & Absol
  10150000000, // Falkner & Swellow
  10205000000, // Evelyn & Entei
  10244000000, // Hop & Zamazenta
  10247100000, // Leon & Eternatus
  // 8/26
  10089400000, // N & Reshiram
  10090500000, // Steven & Rayquaza
  10110010000, // Misty & Psyduck
  10118500000, // Lillie & Lunala
  // 9/14
  10000800000, // Red & Snorlax
  10021800000, // Blue & Aerodactyl
];

/*
 * Usage i.e: node extractAllSyncPairNamesAndIds.js
 * */

const extractAllSyncPairNamesAndIds = () => {
  let isNew = false;
  let isEggmon = false;
  let isBP = false;
  let arrayOfOldTrainerIds = [];
  let syncPairNamesAndIds = {};
  let newSyncPairs = {};
  let newGridedSyncPairs = {};
  let allGridedSyncPairs = {};
  let pokemonImagesExportStatementsForIndex = '';

  let importStatements = ''; // for Pokemon images
  let exportStatements = ''; // for Pokemon images

  oldTrainerDB.entries.forEach((oldEntry) => {
    arrayOfOldTrainerIds.push(oldEntry.trainerId.toString());
  });

  //   console.log('arrayOfOldTrainerIds', arrayOfOldTrainerIds);

  trainerDB.entries.forEach((entry) => {
    let syncPairNameByLanguage = {
      de: {},
      en: {},
      es: {},
      fr: {},
      it: {},
      ja: {},
      ko: {},
      zh: {},
    };

    let pokemonNameByLanguage = {
      de: {},
      en: {},
      es: {},
      fr: {},
      it: {},
      ja: {},
      ko: {},
      zh: {},
    };

    let trainerNameByLanguage = {
      de: {},
      en: {},
      es: {},
      fr: {},
      it: {},
      ja: {},
      ko: {},
      zh: {},
    };
    let { trainerId, trainerBaseId, monsterId, type, rarity, role } = entry;
    let updatedMonsterBaseId;

    if (!arrayOfOldTrainerIds.includes(trainerId.toString())) {
      isNew = true;
    } else {
      isNew = false;
    }

    if (
      trainerBaseId.toString() === '10700000' && // Hero
      trainerId.toString() !== '18000000000' && // Hero & Pikachu
      trainerId.toString() !== '18000120000' && // Hero & Solgaleo
      trainerId.toString() !== '18000020521' && // Hero & Regirock
      trainerId.toString() !== '18000020531' && // Hero & Cobalion
      trainerId.toString() !== '18000020000' // Hero & Torchic
    ) {
      isEggmon = true;
    } else {
      isEggmon = false;
    }

    if (
      trainerId.toString() === '18000020521' || // Hero & Regirock
      trainerId.toString() === '18000020531' || // Hero & Cobalion
      trainerId.toString() === '10035000001' || // Lt. Surge & Raichu
      trainerId.toString() === '10148000001' || // Morty & Mismagius
      trainerId.toString() === '10129000001' || // Zinnia & Salamence
      trainerId.toString() === '10008000001' || // Erika & Tangela
      trainerId.toString() === '10062000001' || // Karen & Umbreon
      trainerId.toString() === '10045900000' || // Bugsy & Scyther
      trainerId.toString() === '10205000000' // Evelyn & Entei
    ) {
      isBP = true;
    } else {
      isBP = false;
    }

    // // ===================================================================
    // let thirdEvolvedFormMonsterId = monsterId.toString();
    // let secondEvolvedFormMonsterId = monsterId.toString();
    // let firstEvolvedFormMonsterId = monsterId.toString();

    // if (
    //   // BP pairs seem to end in "1":
    //   // 10035000001, // Lt. Surge & Raichu
    //   // 10148000001, // Morty & Mismagius
    //   // 10129000001, // Zinnia & Salamence
    //   // 10008000001, // Erika & Tangela
    //   // 10062000001, // Karen & Umbreon
    //   trainerId !== '10035000000' &&
    //   trainerId !== '10148000000' &&
    //   trainerId !== '10129000000' &&
    //   trainerId !== '10008000000' &&
    //   trainerId !== '10062000000'
    // ) {
    //   // Check if there is an evolved form. If so use the final evolved form's monsterId
    //   thirdEvolvedFormMonsterId =
    //     monsterId.toString().substring(0, monsterId.toString().length - 1) +
    //     '3'; // some pokemon eg. Beedrill's last digit is 3
    //   secondEvolvedFormMonsterId =
    //     monsterId.toString().substring(0, monsterId.toString().length - 1) +
    //     '2';
    //   firstEvolvedFormMonsterId =
    //     monsterId.toString().substring(0, monsterId.toString().length - 1) +
    //     '1';
    // }

    // if (trainerId.toString() === '10035000000') {
    //   // Lt. Surge and Electrode
    //   // Raichu uses 20035000002
    //   thirdEvolvedFormMonsterId = '20035000001';
    // }

    // if (
    //   monsterDB.entries.find(
    //     (monster) => monster.monsterId.toString() === thirdEvolvedFormMonsterId
    //   )
    // ) {
    //   monsterId = thirdEvolvedFormMonsterId;
    // } else if (
    //   monsterDB.entries.find(
    //     (monster) => monster.monsterId.toString() === secondEvolvedFormMonsterId
    //   )
    // ) {
    //   monsterId = secondEvolvedFormMonsterId;
    // } else if (
    //   monsterDB.entries.find(
    //     (monster) => monster.monsterId.toString() === firstEvolvedFormMonsterId
    //   )
    // ) {
    //   monsterId = firstEvolvedFormMonsterId;
    // }
    // // ===================================================================

    // Find last evolution form
    let arrayOfEvoluations = monsterEvolutionDB.entries.filter((entry) => {
      return entry.trainerId.toString() === trainerId.toString();
    });
    if (arrayOfEvoluations.length !== 0) {
      let sortedArrayOfEvoluations = arrayOfEvoluations.sort((a, b) => {
        let x = a.monsterIdNext;
        let y = b.monsterIdNext;
        return x < y ? -1 : x > y ? 1 : 0;
      });

      monsterId = sortedArrayOfEvoluations.pop().monsterIdNext;
    }

    // ===================================================================

    // Use monsterId to find monsterBaseId in Monster.json
    let monster = monsterDB.entries.find(
      (monster) => monster.monsterId.toString() === monsterId.toString()
    );
    let monsterBaseId = monster.monsterBaseId;

    // Use monsterBaseId to find actorId in MonsterBase.json
    let monsterBase = monsterBaseDB.entries.find(
      (monsterBase) =>
        monsterBase.monsterBaseId.toString() === monsterBaseId.toString()
    );
    let monsterActorId = monsterBase.actorId;

    // Use trainerBaseId to find trainerNameId in TrainerBase.json
    // 6/28 update - trainerBase.trainerBaseId => trainerBase.id
    trainerBase = trainerBaseDB.entries.find(
      (trainerBase) => trainerBase.id === trainerBaseId.toString()
    );
    // let trainerNameId = trainerBase.trainerNameId; // name changed on 9/28/2020
    // 6/28 update - trainerBase.trainerNameIdShort => trainerBase.trainerNameId
    let trainerNameId = trainerBase.trainerNameId;

    let isGrided = false;
    if (arrayOfGridedTrainers.includes(Number(trainerId))) {
      isGrided = true;
    }

    // Identify alts and give them a modified TrainerNameId to help link to their images
    let trainerActorId = trainerBase.actorId;
    let syncPairEnglishName = '';

    if (trainerId.toString() === '10117000000') {
      trainerNameId = 'ch0117'; // The Masked Royal
    }

    languages.forEach((language) => {
      updatedMonsterBaseId = monsterBaseId;

      if (monsterBaseId) {
        pokemonNameByLanguage[language] = pokemonNameDB[language][monsterBaseId]
          ? pokemonNameDB[language][monsterBaseId]
          : pokemonNameDB[language][
              monsterBaseId
                .toString()
                .substring(0, monsterBaseId.toString().length - 1) + '0'
            ];

        if (monsterBaseId.toString() === '21038400') {
          pokemonNameByLanguage[language] = pokemonNameDB[language]['20038400']; // Steven & Rayquaza
        }
      } else {
        console.log(`No monsterBaseId`);
      }

      trainerNameByLanguage[language] =
        trainerNameId === 'ch8000'
          ? 'Hero'
          : trainerNameDB[language][trainerNameId];

      syncPairNameByLanguage[
        language
      ] = `${trainerNameByLanguage[language]} & ${pokemonNameByLanguage[language]}`;

      syncPairEnglishName = syncPairNameByLanguage['en'];
    });

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

    // Add to output
    if (
      trainerBaseId.toString() === '10700000' // Hero
    ) {
      if (
        trainerId.toString() !== '18000000000' && // Hero & Pikachu
        trainerId.toString() !== '18000120000' && // Hero & Solgaleo
        trainerId.toString() !== '18000020521' && // Hero & Regirock
        trainerId.toString() !== '18000020531' // Hero & Cobalion
      ) {
        // eggmons
        if (trainerId.slice(-1) !== '6') {
          // those end in 6 are duplicates
          syncPairNamesAndIds[trainerId] = {
            syncPairEnglishName: syncPairEnglishName,
            trainerId: trainerId.toString(),
            trainerBaseId: trainerBaseId.toString(),
            trainerNameId: trainerNameId.toString(),
            trainerActorId: trainerActorId.toString(),
            monsterId: monsterId.toString(),
            monsterBaseId: updatedMonsterBaseId.toString(),
            monsterActorId: monsterActorId.toString(),
            pokemonNameByLanguage: pokemonNameByLanguage,
            trainerNameByLanguage: trainerNameByLanguage,
            syncPairNameByLanguage: syncPairNameByLanguage,
            type: type,
            rarity: rarity,
            role: role,
            roleTypeNameByLanguage: roleTypeNameByLanguage,
            isGrided: isGrided,
            isEggmon: isEggmon,
            isBP: isBP,
          };
        }
      } else {
        // MC but not eggs
        syncPairNamesAndIds[trainerId] = {
          syncPairEnglishName: syncPairEnglishName,
          trainerId: trainerId.toString(),
          trainerBaseId: trainerBaseId.toString(),
          trainerNameId: trainerNameId.toString(),
          trainerActorId: trainerActorId.toString(),
          monsterId: monsterId.toString(),
          monsterBaseId: updatedMonsterBaseId.toString(),
          monsterActorId: monsterActorId.toString(),
          pokemonNameByLanguage: pokemonNameByLanguage,
          trainerNameByLanguage: trainerNameByLanguage,
          syncPairNameByLanguage: syncPairNameByLanguage,
          type: type,
          rarity: rarity,
          role: role,
          roleTypeNameByLanguage: roleTypeNameByLanguage,
          isGrided: isGrided,
          isEggmon: isEggmon,
          isBP: isBP,
        };
      }
    } else {
      // Not MC
      if (
        trainerId.toString() !== '10074000000' && // Youngster & Cottonee
        trainerId.toString() !== '10066000001' && // Rival Lear & Hoopa
        trainerId.toString() !== '10066000002' && // Rival Lear & Hoopa
        trainerId.toString() !== '10067000001' && // Rival Rachel & Umbreon
        trainerId.toString() !== '10068000001' // Rival Sawyer & Honchkrow
      ) {
        syncPairNamesAndIds[trainerId] = {
          syncPairEnglishName: syncPairEnglishName,
          trainerId: trainerId.toString(),
          trainerBaseId: trainerBaseId.toString(),
          trainerNameId: trainerNameId.toString(),
          trainerActorId: trainerActorId.toString(),
          monsterId: monsterId.toString(),
          monsterBaseId: updatedMonsterBaseId.toString(),
          monsterActorId: monsterActorId.toString(),
          pokemonNameByLanguage: pokemonNameByLanguage,
          trainerNameByLanguage: trainerNameByLanguage,
          syncPairNameByLanguage: syncPairNameByLanguage,
          type: type,
          rarity: rarity,
          role: role,
          roleTypeNameByLanguage: roleTypeNameByLanguage,
          isGrided: isGrided,
          isEggmon: isEggmon,
          isBP: isBP,
        };
      }
    }

    if (isGrided) {
      allGridedSyncPairs[trainerId] = {
        syncPairEnglishName: syncPairEnglishName,
        trainerId: trainerId.toString(),
        trainerBaseId: trainerBaseId.toString(),
        monsterId: monsterId.toString(),
        monsterBaseId: updatedMonsterBaseId.toString(),
        isGrided: isGrided,
        isEggmon: isEggmon,
        isBP: isBP,
      };

      if (
        !importStatements.includes(monsterActorId.toString()) ||
        monsterActorId.toString() === 'pm0384_00_rayquaza'
      ) {
        importStatements += `${monsterActorId}_128,`;
        exportStatements += `${monsterActorId}_128,`;
        pokemonImagesExportStatementsForIndex += `export { default as ${monsterActorId}_128 } from './128px/${monsterActorId}_128.ktx.png'; // ${syncPairEnglishName}
        `;
      }
    }
    if (isNew) {
      // console.log(
      //   `{trainerId: ${trainerId.toString()}}, // ${syncPairEnglishName}`
      // );
      console.log(`${trainerId.toString()}, // ${syncPairEnglishName}`);
      newSyncPairs[trainerId] = {
        syncPairEnglishName: syncPairEnglishName,
        trainerId: trainerId.toString(),
        trainerBaseId: trainerBaseId.toString(),
        monsterId: monsterId.toString(),
        monsterBaseId: updatedMonsterBaseId.toString(),
        isGrided: isGrided,
        isEggmon: isEggmon,
        isBP: isBP,
      };

      if (isGrided) {
        newGridedSyncPairs[trainerId] = {
          syncPairEnglishName: syncPairEnglishName,
          trainerId: trainerId.toString(),
          trainerBaseId: trainerBaseId.toString(),
          monsterId: monsterId.toString(),
          monsterBaseId: updatedMonsterBaseId.toString(),
          isGrided: isGrided,
          isEggmon: isEggmon,
          isBP: isBP,
        };
      }
    }
  });

  syncPairNamesAndIds['18000020076'] = {
    syncPairEnglishName: 'Hero & Meowth',
    trainerId: '18000020076',
    trainerBaseId: '10700000',
    trainerNameId: 'ch8000',
    trainerActorId: 'hero',
    monsterId: '28000020076',
    monsterBaseId: '20005200',
    monsterActorId: 'pm0052_00_nyarth',
    pokemonNameByLanguage: {
      de: 'Mauzi',
      en: 'Meowth',
      es: 'Meowth',
      fr: 'Miaouss',
      it: 'Meowth',
      ja: 'ニャース',
      ko: '나옹',
      zh: '喵喵',
    },
    trainerNameByLanguage: {
      de: 'Hero',
      en: 'Hero',
      es: 'Hero',
      fr: 'Hero',
      it: 'Hero',
      ja: 'Hero',
      ko: 'Hero',
      zh: 'Hero',
    },
    syncPairNameByLanguage: {
      de: 'Hero & Mauzi',
      en: 'Hero & Meowth',
      es: 'Hero & Meowth',
      fr: 'Hero & Miaouss',
      it: 'Hero & Meowth',
      ja: 'Hero & ニャース',
      ko: 'Hero & 나옹',
      zh: 'Hero & 喵喵',
    },
    type: 1,
    rarity: 1,
    role: 2,
    roleTypeNameByLanguage: {
      de: 'Helfer',
      en: 'Support',
      es: 'Apoyo',
      fr: 'Soutien',
      it: 'Aiutante',
      ja: 'サポート',
      ko: '서포트',
      zh: '輔助型',
    },
    isGrided: false,
    isEggmon: true,
    isBP: false,
  };

  fs.writeFile(
    `${__dirname}/../../src/data/syncPairNamesAndIds.json`,
    JSON.stringify(syncPairNamesAndIds),
    (err) => {
      if (err) throw err;
      console.log('Successfully written to file');
    }
  );

  fs.writeFile(
    `${__dirname}/../data/newSyncPairs.json`,
    JSON.stringify(newSyncPairs),
    (err) => {
      if (err) throw err;
      console.log('Successfully written to file');
    }
  );

  fs.writeFile(
    `${__dirname}/../data/newGridedSyncPairs.json`,
    JSON.stringify(newGridedSyncPairs),
    (err) => {
      if (err) throw err;
      console.log('Successfully written to file');
    }
  );

  fs.writeFile(
    `${__dirname}/../data/allGridedSyncPairs.json`,
    JSON.stringify(allGridedSyncPairs),
    (err) => {
      if (err) throw err;
      console.log('Successfully written to file');
    }
  );

  fs.writeFile(
    `${__dirname}/../../src/images/Pokemon/index.js`,
    pokemonImagesExportStatementsForIndex,
    (err) => {
      if (err) throw err;
      console.log('Successfully written to file');
    }
  );

  fs.writeFile(
    `${__dirname}/../../src/images/Pokemon/exportImagesAsObject.js`,
    `import {
      // Grided only
      ` +
      importStatements +
      `} from '../Pokemon'; 
      export const pokemonPictures = {` +
      exportStatements +
      '}',
    (err) => {
      if (err) throw err;
      console.log('Successfully written to file');
    }
  );

  return syncPairNamesAndIds;
};

extractAllSyncPairNamesAndIds();
