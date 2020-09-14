// To be used when need all trainer names to form teams.
const fs = require('fs');

const trainerNameDBde = require('../rawdata/lsddump/trainer_name_de.json');
const trainerNameDBen = require('../rawdata/lsddump/trainer_name_en.json');
const trainerNameDBes = require('../rawdata/lsddump/trainer_name_es.json');
const trainerNameDBfr = require('../rawdata/lsddump/trainer_name_fr.json');
const trainerNameDBit = require('../rawdata/lsddump/trainer_name_it.json');
const trainerNameDBja = require('../rawdata/lsddump/trainer_name_ja.json');
const trainerNameDBko = require('../rawdata/lsddump/trainer_name_ko.json');
const trainerNameDBzh = require('../rawdata/lsddump/trainer_name_zh-TW.json');

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

/*
 * Usage i.e: node extractAllTrainerNames.js
 * */
const languages = ['de', 'en', 'es', 'fr', 'it', 'ja', 'ko', 'zh'];

const extractAllTrainerNames = () => {
  const trainerNames = {};

  Object.keys(trainerNameDB['en']).forEach((key) => {
    trainerNames[key] = {
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
    Object.keys(trainerNames).forEach((key) => {
      trainerNames[key][language] = trainerNameDB[language][key];
    });
  });

  fs.writeFile(
    `${__dirname}/../../src/data/trainerNamesBytrainerNameId.json`,
    JSON.stringify(trainerNames),
    (err) => {
      if (err) throw err;
      console.log('Successfully written to file');
    }
  );

  return trainerNames;
};

extractAllTrainerNames();
