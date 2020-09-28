const fs = require('fs');

const monsterDB = require('../rawdata/protodump/Monster.json');
const monsterBaseDB = require('../rawdata/protodump/MonsterBase.json');
const trainerDB = require('../rawdata/protodump/Trainer.json');
const trainerBaseDB = require('../rawdata/protodump/TrainerBase.json');

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
  // 9/28/2020
  '10000740', // mimikyu
  '10002040', // mightyena
  '10011500', // luxray
  '10002101', // blastoise_new
  '10010600', // zebstrika
  '10015100', // mismagius
  '10015300', // glalie
];

const newTrainerBaseIdArray = [
  // Copy paste from the other array. Used to generate a list of monsterBaseId for the import and export script.
  // 9/28/2020
  '10000740', // mimikyu
  '10002040', // mightyena
  '10011500', // luxray
  '10002101', // blastoise_new
  '10010600', // zebstrika
  '10015100', // mismagius
  '10015300', // glalie
];
/*
 * Usage i.e: node extractAllSyncPairNamesAndIds.js
 * */

const extractAllSyncPairNamesAndIds = () => {
  let syncPairNames = {
    de: {},
    en: {},
    es: {},
    fr: {},
    it: {},
    ja: {},
    ko: {},
    zh: {},
  };

  trainerDB.entries.forEach((entry) => {
    let { trainerId, trainerBaseId, monsterId, type, rarity, role } = entry;

    // Check if there is an evolved form. If so use the final evolved form's monsterId
    let thirdEvolvedFormMonsterId =
      monsterId.toString().substring(0, monsterId.toString().length - 1) + '3'; // some pokemon eg. Beedrill's last digit is 3
    let secondEvolvedFormMonsterId =
      monsterId.toString().substring(0, monsterId.toString().length - 1) + '2';
    let firstEvolvedFormMonsterId =
      monsterId.toString().substring(0, monsterId.toString().length - 1) + '1';
    if (
      monsterDB.entries.find(
        (monster) => monster.monsterId.toString() === thirdEvolvedFormMonsterId
      )
    ) {
      monsterId = thirdEvolvedFormMonsterId;
    } else if (
      monsterDB.entries.find(
        (monster) => monster.monsterId.toString() === secondEvolvedFormMonsterId
      )
    ) {
      monsterId = secondEvolvedFormMonsterId;
    } else if (
      monsterDB.entries.find(
        (monster) => monster.monsterId.toString() === firstEvolvedFormMonsterId
      )
    ) {
      monsterId = firstEvolvedFormMonsterId;
    }

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
    trainerBase = trainerBaseDB.entries.find(
      (trainerBase) => trainerBase.trainerBaseId === trainerBaseId.toString()
    );
    // let trainerNameId = trainerBase.trainerNameId; // name changed on 9/28/2020
    let trainerNameId = trainerBase.trainerNameIdShort;

    let grided = false;
    if (gridedTrainerList.includes(trainerBase.trainerBaseId)) {
      if (
        // MC (10700000)  Pikachu(20002500)
        trainerBase.trainerBaseId !== '10700000' ||
        monsterBase.monsterBaseId === 20002500
      ) {
        grided = true;
      }
    }

    // Identify alts and give them a modified TrainerNameId to help link to their images
    // let trainerActorId = trainerNameId + '_' + trainerId.slice(5, 7);
    // let trainerActorId = trainerBase.actorId;// name changed on 9/28/2020
    let trainerActorId = trainerBase.trainerNameId;

    // Use Ids to find names
    let pokemonName = '';
    let trainerName = '';
    let syncPairName = '';
    languages.forEach((language) => {
      let updatedMonsterBaseId = monsterBaseId;
      // 20003901 is Jigglypuff. Its monsterBaseId is off by 1 in monster_name for some reason. Same for 20003501 Clefairy, 20033601 Seviper, 20007601 Golem, 20007101 Victreebel, 20005301 Persian, 20004901 Venomoth, 20011901 Seaking, 20011501 Kangaskhan
      if (monsterBaseId) {
        if (
          monsterBaseId === 20003901 ||
          monsterBaseId === 20033601 ||
          monsterBaseId === 20007601 ||
          monsterBaseId === 20007101 ||
          monsterBaseId === 20005301 ||
          monsterBaseId === 20004901 ||
          monsterBaseId === 20011901 ||
          monsterBaseId === 20003501 ||
          monsterBaseId === 20011501
        ) {
          updatedMonsterBaseId = Number(
            monsterBaseId.toString().slice(0, -1) + '0'
          );
        }

        pokemonName = pokemonNameDB[language][updatedMonsterBaseId];
        trainerName =
          trainerNameId === 'ch8000'
            ? 'Hero'
            : trainerNameDB[language][trainerNameId];
        syncPairName = `${trainerName} & ${pokemonName}`;
      }

      syncPairNames[language][syncPairName] = {
        trainerId: trainerId,
        trainerBaseId: trainerBaseId.toString(),
        trainerNameId: trainerNameId,
        trainerActorId: trainerActorId,
        monsterBaseId: monsterBaseId.toString(),
        monsterActorId: monsterActorId,
        pokemonName: pokemonName,
        trainerName: trainerName,
        type: type,
        rarity: rarity,
        role: role,
        grided: grided,
      };

      if (newTrainerBaseIdArray.includes(entry.trainerBaseId.toString())) {
        // prints out export statements for trainers in console.
        // if (language === 'en') {
        //   if (trainerName !== 'Hero') {
        //     console.log(
        //       `export { default as ${trainerActorId}_256 } from './256px/${trainerActorId}_256.ktx.png'; // ${trainerName}`
        //     );
        //   }
        // }

        // prints out export statements for pokemon in console.
        if (language === 'en') {
          if (trainerName !== 'Hero') {
            console.log(
              `export { default as ${monsterActorId}_128 } from './128px/${monsterActorId}_128.ktx.png'; // ${pokemonName}`
            );
          }
        }
      }
    });
  });
  // prints out export statements in console.
  // console.log(
  //   `export { default as ch8000_00_hero_256 } from './256px/hero.png';`
  // );
  // console.log(
  //   `export { default as ch8001_00_heroine_256 } from './256px/heroine.png';`
  // );

  fs.writeFile(
    `${__dirname}/../../src/data/syncPairNamesAndIds.json`,
    JSON.stringify(syncPairNames),
    (err) => {
      if (err) throw err;
      console.log('Successfully written to file');
    }
  );

  return syncPairNames;
};

extractAllSyncPairNamesAndIds();
