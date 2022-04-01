const fs = require('fs');

const potentialDB = require('../rawdata/protodump/Potential.json');

const passiveNameDBde = require('../rawdata/lsddump/dl/passive_skill_name_de.json');
const passiveNameDBen = require('../rawdata/lsddump/dl/passive_skill_name_en.json');
const passiveNameDBes = require('../rawdata/lsddump/dl/passive_skill_name_es.json');
const passiveNameDBfr = require('../rawdata/lsddump/dl/passive_skill_name_fr.json');
const passiveNameDBit = require('../rawdata/lsddump/dl/passive_skill_name_it.json');
const passiveNameDBja = require('../rawdata/lsddump/dl/passive_skill_name_ja.json');
const passiveNameDBko = require('../rawdata/lsddump/dl/passive_skill_name_ko.json');
const passiveNameDBzh = require('../rawdata/lsddump/dl/passive_skill_name_zh-TW.json');

// const passiveDescriptionDBde = require('../rawdata/lsddump/dl/passive_skill_description_de.json');
// const passiveDescriptionDBen = require('../rawdata/lsddump/dl/passive_skill_description_en.json');
// const passiveDescriptionDBes = require('../rawdata/lsddump/dl/passive_skill_description_es.json');
// const passiveDescriptionDBfr = require('../rawdata/lsddump/dl/passive_skill_description_fr.json');
// const passiveDescriptionDBit = require('../rawdata/lsddump/dl/passive_skill_description_it.json');
// const passiveDescriptionDBja = require('../rawdata/lsddump/dl/passive_skill_description_ja.json');
// const passiveDescriptionDBko = require('../rawdata/lsddump/dl/passive_skill_description_ko.json');
// const passiveDescriptionDBzh = require('../rawdata/lsddump/dl/passive_skill_description_zh-TW.json');

const passiveNameDB = {
  de: passiveNameDBde,
  en: passiveNameDBen,
  es: passiveNameDBes,
  fr: passiveNameDBfr,
  it: passiveNameDBit,
  ja: passiveNameDBja,
  ko: passiveNameDBko,
  zh: passiveNameDBzh,
};

// const passiveDescriptionDB = {
//   de: passiveDescriptionDBde,
//   en: passiveDescriptionDBen,
//   es: passiveDescriptionDBes,
//   fr: passiveDescriptionDBfr,
//   it: passiveDescriptionDBit,
//   ja: passiveDescriptionDBja,
//   ko: passiveDescriptionDBko,
//   zh: passiveDescriptionDBzh,
// };

const { getUpdatedPassiveSkillName } = require('../utils/functions');

const languages = ['de', 'en', 'es', 'fr', 'it', 'ja', 'ko', 'zh'];

/*
 * Usage i.e: node extractLuckySkills.js
 * */

const extractLuckySkills = () => {
  let luckySkills = {};

  potentialDB.entries.forEach((entry) => {
    luckySkills[entry.potentialId] = {
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
    Object.keys(luckySkills).forEach((key) => {
      if (!passiveNameDB[language][key].includes('Idx')) {
        luckySkills[key][language] = passiveNameDB[language][key];
      } else {
        luckySkills[key][language] = getUpdatedPassiveSkillName(
          language,
          0, // moveId
          key
        );
      }
    });
  });

  fs.writeFile(
    `${__dirname}/../../src/data/luckySkills.json`,
    JSON.stringify(luckySkills),
    (err) => {
      if (err) throw err;
      console.log('Successfully written to file');
    }
  );

  return luckySkills;
};

extractLuckySkills();
