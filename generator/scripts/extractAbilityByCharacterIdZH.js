const args = require('yargs').argv;
const fs = require('fs');

const abilityPanelDB = require('../rawdata/AbilityPanel.json');
const abilityDB = require('../rawdata/Ability.json');
const abilityDescriptionDB = require('../rawdata/zh/ability_description_zh-TW.lsd.json');
const moveDB = require('../rawdata/Move.json');
const moveNameDB = require('../rawdata/zh/move_name_zh-TW.lsd.json');
const moveDescriptionDB = require('../rawdata/zh/move_description_zh-TW.lsd.json');
const passiveAbilityDescriptionDB = require('../rawdata/zh/passive_skill_name_zh-TW.lsd.json');
const passiveSkillDescriptionDB = require('../rawdata/zh/passive_skill_description_zh-TW.lsd.json');
const triangularCoordsToCollumns = require('../utils/triangularCoordsToCollumns');

/*
 * Usage i.e: node extractAbilityByCharacterIdZH.js --characterId=18000000000 --filename=pikachu
 * */

const extractAbilityByCharacterId = () => {
  const abilities = [];
  let ability = {};

  if (!args.characterId) return null;

  abilityPanelDB.entries.forEach((entry) => {
    if (entry.characterId === args.characterId) {
      const { cellId, energyCost, orbCost, x, y, z, abilityId } = entry;
      const coords = triangularCoordsToCollumns({ x, y, z });
      let move = {};

      ability = abilityDB.entries.find(
        (ability) => ability.abilityId === abilityId
      );

      move.name = abilityDescriptionDB[ability.type];

      if (ability.moveId) {
        moveDB.entries.forEach((moveEntry) => {
          if (moveEntry.moveId === ability.moveId) {
            let updatedMove = { ...moveEntry };
            let moveName = moveNameDB[moveEntry.moveId]
              ? moveNameDB[moveEntry.moveId]
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
            passiveAbilityDescriptionDB[ability.passiveId]
          ),
          description: passiveSkillDescriptionDB[ability.passiveId],
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
          name: move.name.replace(/\[Digit:5digits \]/gi, `+${ability.value}`),
          energyCost,
          orbCost,
        },
      });
    }
  });

  if (args.filename) {
    fs.writeFile(
      `${__dirname}/../../src/data/grids/zh/${args.filename}.json`,
      JSON.stringify(abilities),
      (err) => {
        if (err) throw err;
        console.log('Successfully written to file');
      }
    );
  }

  return abilities;
};

extractAbilityByCharacterId();
