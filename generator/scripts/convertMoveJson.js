const fs = require("fs");
const moveDB = require("../rawdata/Move.json");

// convert certain strings to number codes to accomodate old scripts
const category = {
  NoCategory: 0,
  Physical: 1,
  Special: 2,
  Status: 3,
  UnityMove: 4,
};

const user = {
  Pokemon: 0,
  Trainer: 1,
};

const group = {
  None: 0,
  Unknown1: 1,
  Regular: 2,
  Sync: 3,
  Unity: 4,
};

const target = {
  AllySingle: 0,
  AllyAll: 1,
  OpponentSingle: 2,
  OpponentAll: 3,
  Self: 4,
  AllyRandom: 5,
  OpponentRandom: 6,
  AllyField: 7,
  OpponentField: 8,
  EntireField: 9,
};

const tags = {
  none: 0,
  ForcedSwitch: 1,
  SuddenSwitch: 2,
  QuickMove: 4,
  SureHit: 8,
  na: 16,
  OkWhileFrozen: 32,
  OkWhileSleep: 64,
  OnlyWhileAsleep: 128,
  Heals: 256,
  Absorbs: 512,
  Continues: 1024,
  Recoil: 2048,
};

/*
 * Usage i.e: node convertMoveJson.js
 * */

const convertMoveJson = () => {
  let modifiedMoveData = moveDB;

  modifiedMoveData.entries.forEach((entry) => {
    entry["category"] = category[entry["category"]];
    entry["user"] = user[entry["user"]];
    entry["group"] = group[entry["group"]];
    entry["target"] = target[entry["target"]];
    entry["maxUses"] = entry["uses"];
    entry["tags"] = tags[entry["tags"]];
    delete entry.uses;
  });

  fs.writeFile(
    `${__dirname}/../rawdata/ModifiedMove.json`,
    JSON.stringify(modifiedMoveData),
    (err) => {
      if (err) throw err;
      console.log("Successfully written to file");
    }
  );

  return modifiedMoveData;
};

convertMoveJson();
