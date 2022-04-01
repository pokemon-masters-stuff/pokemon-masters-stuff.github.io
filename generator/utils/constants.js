const allGridedSyncPairs = require('../data/allGridedSyncPairs.json');
const dynamaxSyncPairs = require('../data/dynamaxSyncPairs.json');

const languages = ['de', 'en', 'es', 'fr', 'it', 'ja', 'ko', 'zh'];

const gridedTrainerList = Object.keys(allGridedSyncPairs);

const dynamaxTrainerList = Object.keys(dynamaxSyncPairs);

const modifiedMonsterBaseId = {
  // when monsterBaseId doesn't link to a pokemon name in monster_name_xx.json, manually change their monsterBaseId here
  21038400: 20038400, // Steven & Rayquaza
  2008551200: 2008551100, // Lillie & Polteageist
  21081401: 20081401, // Sonia & Tsareena
};

const modifiedMonsterVariationFormBaseId = {
  // Non-Mega, Non-Dynamax variations which don't follow the id change convention
  2008771101: 2008771201, // Morpeko
  20086512: 20086514, // Lusamine & Necrozma
  2008751100: 2008751200, // Nessa & Eiscue
  20077000: 20077015, // Zygarde
  // 20015000: 20140000001, // Mewtwo -> to double check
  // add Marnie & Mawile
};

module.exports = {
  allGridedSyncPairs,
  languages,
  gridedTrainerList,
  dynamaxTrainerList,
  modifiedMonsterBaseId,
  modifiedMonsterVariationFormBaseId,
};
