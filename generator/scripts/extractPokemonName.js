const fs = require('fs');

const pokemonNameDBde = require('../rawdata/de/monster_name_de.lsd.json');
const pokemonNameDBen = require('../rawdata/en/monster_name_en.lsd.json');
const pokemonNameDBes = require('../rawdata/es/monster_name_es.lsd.json');
const pokemonNameDBfr = require('../rawdata/fr/monster_name_fr.lsd.json');
const pokemonNameDBit = require('../rawdata/it/monster_name_it.lsd.json');
const pokemonNameDBja = require('../rawdata/ja/monster_name_ja.lsd.json');
const pokemonNameDBko = require('../rawdata/ko/monster_name_ko.lsd.json');
const pokemonNameDBzh = require('../rawdata/zh/monster_name_zh-TW.lsd.json');

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

// On 5/25/2020 the following changes have been made to the .proto files:
// monsterId->monsterBaseId
// trainerId->monsterId
// characterId->trainerId

/*
 * Usage i.e: node extractPokemonName.js
 * */
const languages = ['de', 'en', 'es', 'fr', 'it', 'ja', 'ko', 'zh'];

const extractPokemonName = () => {
  const pokemonNames = {};

  Object.keys(pokemonNameDB['en']).forEach((key) => {
    pokemonNames[key] = {
      de: '',
      en: '',
      es: '',
      fr: '',
      it: '',
      ja: '',
      ko: '',
      zh: '',
    };
  });

  languages.forEach((language) => {
    Object.keys(pokemonNames).forEach((key) => {
      pokemonNames[key][language] = pokemonNameDB[language][key];
    });
  });

  fs.writeFile(
    `${__dirname}/../../src/data/pokemonNameListByMonsterBaseId.json`,
    JSON.stringify(pokemonNames),
    (err) => {
      if (err) throw err;
      console.log('Successfully written to file');
    }
  );

  return pokemonNames;
};

extractPokemonName();
