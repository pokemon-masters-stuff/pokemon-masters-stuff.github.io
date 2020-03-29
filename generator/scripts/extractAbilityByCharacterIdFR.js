const args = require('yargs').argv;
const fs = require('fs');

const abilityPanelDB = require('../rawdata/AbilityPanel.json');
const abilityDB = require('../rawdata/Ability.json');
const abilityDescriptionDB = require('../rawdata/fr/AbilityDescription.json');
const moveDB = require('../rawdata/Move.json');
const moveNameDB = require('../rawdata/fr/MoveName.json');
const moveDescriptionDB = require('../rawdata/fr/MoveDescription.json');
const passiveAbilityDescriptionDB = require('../rawdata/fr/PassiveSkillName.json');
const passiveSkillDescriptionDB = require('../rawdata/fr/PassiveSkillDescription.json');
const triangularCoordsToCollumns = require('../utils/triangularCoordsToCollumns');

/*
 * Usage i.e: node extractAbilityByCharacterIdFR.js --characterId=18000000000 --filename=pikachu
 * */

const extractAbilityByCharacterId = () => {
  const abilities = [];
  let ability = {};

  if (!args.characterId) return null;

  abilityPanelDB.entries.forEach(entry => {
    if (entry.characterId === args.characterId) {
      const { cellId, energyCost, orbCost, x, y, z, abilityId } = entry;
      const coords = triangularCoordsToCollumns({ x, y, z });
      let move = {};

      ability = abilityDB.entries.find(
        ability => ability.abilityId === abilityId
      );

      move.name = abilityDescriptionDB[ability.type];

      if (ability.moveId) {
        moveDB.entries.forEach(moveEntry => {
          if (moveEntry.moveId === ability.moveId) {
            let updatedMove = { ...moveEntry };
            let moveName = moveNameDB[moveEntry.moveId]
              ? moveNameDB[moveEntry.moveId]
              : null;

            if (moveName) {
              updatedMove = {
                ...updatedMove,
                name: move.name.replace('[Name:Move ]', moveName)
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
          description: passiveSkillDescriptionDB[ability.passiveId]
        };
      }

      abilities.push({
        cellId,
        coords: {
          q: coords.col,
          r: coords.row
        },
        ability,
        move: {
          ...move,
          name: move.name.replace(/\[Digit:5digits \]/gi, `+${ability.value}`),
          energyCost,
          orbCost
        }
      });
    }
  });

  if (args.filename) {
    fs.writeFile(
      `${__dirname}/../../src/data/grids/fr/${args.filename}.json`,
      JSON.stringify(abilities),
      err => {
        if (err) throw err;
        console.log('Successfully written to file');
      }
    );
  }

  return abilities;
};

extractAbilityByCharacterId();
