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

/*
 * Usage i.e: node extractAllSyncPairNames.js
 * */
let pokemonImageLookUp = {};
const extractAllSyncPairNames = () => {
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
    let trainerNameId = trainerBase.trainerNameId;

    // Identify alts and give them a modified TrainerNameId to help link to their images
    // let trainerActorId = trainerNameId + '_' + trainerId.slice(5, 7);
    let trainerActorId = trainerBase.actorId;

    // Use Ids to find names
    let pokemonName = '';
    let trainerName = '';
    let syncPairName = '';
    languages.forEach((language) => {
      let updatedMonsterBaseId = monsterBaseId;
      // 20003901 is Jigglypuff. Its monsterBaseId is off by 1 in monster_name for some reason. Same for 20003501 Clefairy, 20033601 Seviper, 20007601 Golem, 20007101 Victreebel, 20005301 Persian, 20004901 Venomoth, 20011901 Seaking
      if (monsterBaseId) {
        if (
          monsterBaseId === 20003901 ||
          monsterBaseId === 20033601 ||
          monsterBaseId === 20007601 ||
          monsterBaseId === 20007101 ||
          monsterBaseId === 20005301 ||
          monsterBaseId === 20004901 ||
          monsterBaseId === 20011901 ||
          monsterBaseId === 20003501
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
      };

      // prints out export statements for trainers in console.
      // if (language === 'en') {
      //   if (trainerName !== 'Hero') {
      //     console.log(
      //       `export { default as ${trainerActorId} } from './${trainerActorId}_256.ktx.png'; // ${trainerName}`
      //     );
      //   }
      // }

      // prints out export statements for pokemon in console.
      // if (language === 'en') {
      //   if (trainerName !== 'Hero') {
      //     console.log(
      //       `export { default as ${monsterActorId} } from './${monsterActorId}_128.ktx.png'; // ${pokemonName}`
      //     );
      //   }
      // }

      // prints out key value pairs for pokemon and its actorId in console.
      if (language === 'en') {
        pokemonImageLookUp[
          pokemonName.toLowerCase().replace(/-/g, '')
        ] = monsterActorId;
      }
    });
  });
  // prints out export statements in console.
  console.log(`export { default as ch8000_00_hero } from './hero.png';`);
  console.log(`export { default as ch8001_00_heroine } from './heroine.png';`);
  console.log(pokemonImageLookUp);
  fs.writeFile(
    `${__dirname}/../../src/data/allSyncPairNames.json`,
    JSON.stringify(syncPairNames),
    (err) => {
      if (err) throw err;
      console.log('Successfully written to file');
    }
  );

  return syncPairNames;
};

extractAllSyncPairNames();
