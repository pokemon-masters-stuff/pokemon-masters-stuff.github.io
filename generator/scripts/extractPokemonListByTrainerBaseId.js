const fs = require('fs');

const monsterDB = require('../rawdata/Monster.json');
const trainerDB = require('../rawdata/Trainer.json');
const trainerBaseDB = require('../rawdata/TrainerBase.json');
const trainerNameDBen = require('../rawdata/en/trainer_name_en.lsd.json');
const pokemonNameDBen = require('../rawdata/en/monster_name_en.lsd.json');

// Update this list (of trainerBaseId) based on new datamine
const newGridedTrainerList = [
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
];

// On 5/25/2020 the following changes have been made to the .proto files:
// monsterId->monsterBaseId
// trainerId->monsterId
// characterId->trainerId

/*
 * Usage i.e: node extractPokemonListByTrainerBaseId.js
 * */

const extractPokemonListByTrainerBaseId = () => {
  const monsterAndTrainerList = [];
  let monsterId = '';
  let monsterBaseId = '';
  let trainerNameId = '';
  newGridedTrainerList.forEach((trainerBaseIdFromList) => {
    // Find entry in Trainer.json
    let trainer = trainerDB.entries.find(
      (trainer) => trainer.trainerBaseId.toString() === trainerBaseIdFromList
    );

    if (trainer) {
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

      // Use monsterId to find monsterBaseId in Monster.json
      let monster = monsterDB.entries.find(
        (monster) => monster.monsterId.toString() === monsterId.toString()
      );

      monsterBaseId = monster.monsterBaseId;

      // Use trainerBaseId to find trainerNameId in TrainerBase.json
      trainerBase = trainerBaseDB.entries.find(
        (trainerBase) =>
          trainerBase.trainerBaseId.toString() === trainerBaseIdFromList
      );

      trainerNameId = trainerBase.trainerNameId;

      // Push to monsterAndTrainerList
      monsterAndTrainerList.push({
        monsterBaseId: monsterBaseId.toString(),
        monsterId: monsterId.toString(),
        trainerBaseId: trainerBaseIdFromList,
        trainerNameId,
      });
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
        trainerBase = trainerBaseDB.entries.find(
          (trainerBase) => trainerBase.trainerBaseId === trainerBaseId
        );

        trainerNameId = trainerBase.trainerNameId;
        // Push to monsterAndTrainerList
        monsterAndTrainerList.push({
          monsterBaseId: monsterBaseId.toString(),
          monsterId: monsterId.toString(),
          trainerBaseId: trainerBaseIdFromList,
          trainerNameId,
        });
      } else {
        monsterAndTrainerList.push({
          monsterBaseId: monsterBaseId.toString(),
          monsterId: monsterId.toString(),
          trainerBaseId: trainerBaseIdFromList,
          trainerNameId: 'No trainer',
        });
      }
    }
  });

  monsterAndTrainerList.forEach((entry) => {
    if (entry.monsterBaseId) {
      entry.monsterEnglishName = pokemonNameDBen[entry.monsterBaseId];
    }
    if (entry.trainerNameId) {
      entry.trainerEnglishName = trainerNameDBen[entry.trainerNameId];
    }
    if (entry.trainerNameId === 'ch8000') {
      entry.trainerEnglishName = 'Hero';
    }
  });
  fs.writeFile(
    `${__dirname}/../../src/data/allGridedPokemon.json`,
    JSON.stringify(monsterAndTrainerList),
    (err) => {
      if (err) throw err;
      console.log('Successfully written to file');
    }
  );

  return monsterAndTrainerList;
};

extractPokemonListByTrainerBaseId();
