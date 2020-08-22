const fs = require("fs");

const pokemonNameDBen = require("../rawdata/en/monster_name_en.json");

// On 5/25/2020 the following changes have been made to the .proto files:
// monsterId->monsterBaseId
// trainerId->monsterId
// characterId->trainerId

/*
 * Usage i.e: node generateImportAndExportStatements.js
 * */
const languages = ["de", "en", "es", "fr", "it", "ja", "ko", "zh"];

// Change this list based on new datamine
const newGridedPokemonList = [
  "20082911", // lycanroc
  "20009500", // onix
  "20002861", // alolan sandslash
  "20081800", // kommo-o
  // "20003901", // jigglypuff
  "20003900", // jigglypuff
  "20014900", // dragonite

  // test
  // "20082912", // Lycanroc midnight
];

const generateImportAndExportStatements = () => {
  const importAndExportStatements = {
    imports: { names: [], gridData: [] },
    exports: { gridIndex: "", thumbnailIndex: "" },
  };
  const namesArray = [];
  let namesImportArray = [];
  const gridDataImportArray = [];

  const gridIndexExportArray = [];
  const thumbnailIndexExportArray = [];
  let gridIndexExportStatements = "";
  let thumbnailIndexExportStatements = "";

  languages.forEach((language) => {
    newGridedPokemonList.forEach((monsterBaseId) => {
      // Import statements for pokemon names in utils/constants.js, used for thumbnails
      namesArray.push(pokemonNameDBen[monsterBaseId].toLowerCase());
      namesImportArray = [...new Set(namesArray)];
      importAndExportStatements["imports"]["names"] = namesImportArray;

      // Import statements for grid data in utils/constants.js, used for grids
      gridDataImportArray.push(
        `${pokemonNameDBen[
          monsterBaseId
        ].toLowerCase()}GridData${language.toUpperCase()}`
      );
      importAndExportStatements["imports"]["gridData"] = gridDataImportArray;

      // Export statements for data/index.js
      gridIndexExportArray.push(
        `export { default as ${pokemonNameDBen[
          monsterBaseId
        ].toLowerCase()}GridData${language.toUpperCase()} } from './grids/${language}/${pokemonNameDBen[
          monsterBaseId
        ].toLowerCase()}.json';`
      );
      gridIndexExportStatements = gridIndexExportArray.join("");
      importAndExportStatements["exports"][
        "gridIndex"
      ] = gridIndexExportStatements;

      // Export statements for images\PokemonThumbnails\index.js
      thumbnailIndexExportArray.push(
        `export { default as ${pokemonNameDBen[
          monsterBaseId
        ].toLowerCase()} } from './pm${monsterBaseId.slice(2, 6)}.png';`
      );
      thumbnailIndexExportStatements = [
        ...new Set(thumbnailIndexExportArray),
      ].join("");
      importAndExportStatements["exports"][
        "thumbnailIndex"
      ] = thumbnailIndexExportStatements;
    });
  });

  console.log(importAndExportStatements);

  fs.writeFile(
    `${__dirname}/../utils/importAndExportStatements.json`,
    JSON.stringify(importAndExportStatements),
    (err) => {
      if (err) throw err;
      console.log("Successfully written to file");
    }
  );

  return importAndExportStatements;
};

generateImportAndExportStatements();
