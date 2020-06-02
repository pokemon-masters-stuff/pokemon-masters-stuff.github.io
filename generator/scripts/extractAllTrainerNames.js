const fs = require('fs');

const trainerNameDBde = require('../rawdata/de/trainer_name_de.lsd.json');
const trainerNameDBen = require('../rawdata/en/trainer_name_en.lsd.json');
const trainerNameDBes = require('../rawdata/es/trainer_name_es.lsd.json');
const trainerNameDBfr = require('../rawdata/fr/trainer_name_fr.lsd.json');
const trainerNameDBit = require('../rawdata/it/trainer_name_it.lsd.json');
const trainerNameDBja = require('../rawdata/ja/trainer_name_ja.lsd.json');
const trainerNameDBko = require('../rawdata/ko/trainer_name_ko.lsd.json');
const trainerNameDBzh = require('../rawdata/zh/trainer_name_zh-TW.lsd.json');

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
    `${__dirname}/../../src/data/trainerNameListBytrainerNameId.json`,
    JSON.stringify(trainerNames),
    (err) => {
      if (err) throw err;
      console.log('Successfully written to file');
    }
  );

  return trainerNames;
};

extractAllTrainerNames();
