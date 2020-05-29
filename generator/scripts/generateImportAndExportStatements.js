const fs = require('fs');

const pokemonNameDBen = require('../rawdata/en/monster_name_en.lsd.json');

// On 5/25/2020 the following changes have been made to the .proto files:
// monsterId->monsterBaseId
// trainerId->monsterId
// characterId->trainerId

/*
 * Usage i.e: node generateImportAndExportStatements.js
 * */
const languages = ['de', 'en', 'es', 'fr', 'it', 'ja', 'ko', 'zh'];

// Change this list based on new datamine
const newGridedPokemonList = [
  '20002500',
  '20032400',
  '20039200',
  '20008700',
  '20061200',
  '20023000',
  '20049700',
  '20004501',
  '20015100',
  '20037600',
  '20000600',
  '20082300',
  '20051000',
  '20022900',
  '20002600',
  '20047911',
  '20006500',
  '20057900',
  '20073400',
  '20028400',
  '20080601',
  '20086700',
  '20073200',
  '20058100',
  '20044800',
  '20044501',
  '20035001',
  '20020801',
  '20047500',
  '20012100',
  '20038900',
  '20054200',
  '20039500',
  '20031900',
];

const generateImportAndExportStatements = () => {
  const importAndExportStatements = {
    imports: { names: [], gridData: [] },
    exports: { gridIndex: '', thumbnailIndex: '' },
  };
  const namesArray = [];
  let namesImportArray = [];
  const gridDataImportArray = [];

  const gridIndexExportArray = [];
  const thumbnailIndexExportArray = [];
  let gridIndexExportStatements = '';
  let thumbnailIndexExportStatements = '';

  languages.forEach((language) => {
    newGridedPokemonList.forEach((monsterBaseId) => {
      // Import statements for pokemon names in utils/constants.js, used for thumbnails
      namesArray.push(pokemonNameDBen[monsterBaseId].toLowerCase());
      namesImportArray = [...new Set(namesArray)];
      importAndExportStatements['imports']['names'] = namesImportArray;

      // Import statements for grid data in utils/constants.js, used for grids
      gridDataImportArray.push(
        `${pokemonNameDBen[
          monsterBaseId
        ].toLowerCase()}GridData${language.toUpperCase()}`
      );
      importAndExportStatements['imports']['gridData'] = gridDataImportArray;

      // Export statements for data\index.js
      gridIndexExportArray.push(
        `export { default as ${pokemonNameDBen[
          monsterBaseId
        ].toLowerCase()}GridData${language.toUpperCase()} } from './grids/de/leavanny.json';`
      );
      gridIndexExportStatements = gridIndexExportArray.join('');
      importAndExportStatements['exports'][
        'gridIndex'
      ] = gridIndexExportStatements;

      // Export statements for images\PokemonThumbnails\index.js
      thumbnailIndexExportArray.push(
        `export { default as ${pokemonNameDBen[
          monsterBaseId
        ].toLowerCase()} } from './pm${monsterBaseId.slice(2, 6)}.png';`
      );
      thumbnailIndexExportStatements = [
        ...new Set(thumbnailIndexExportArray),
      ].join('');
      importAndExportStatements['exports'][
        'thumbnailIndex'
      ] = thumbnailIndexExportStatements;
    });
  });

  console.log(importAndExportStatements);

  fs.writeFile(
    `${__dirname}/../utils/importAndExportStatements.json`,
    JSON.stringify(importAndExportStatements),
    (err) => {
      if (err) throw err;
      console.log('Successfully written to file');
    }
  );

  return importAndExportStatements;
};

generateImportAndExportStatements();
