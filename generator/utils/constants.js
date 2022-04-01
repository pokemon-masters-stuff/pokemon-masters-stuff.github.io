const allGridedSyncPairs = require('../data/allGridedSyncPairs.json');
const dynamaxSyncPairs = require('../data/dynamaxSyncPairs.json');

const languages = ['de', 'en', 'es', 'fr', 'it', 'ja', 'ko', 'zh'];

const gridedTrainerList = Object.keys(allGridedSyncPairs);

const dynamaxTrainerList = Object.keys(dynamaxSyncPairs);

const trainersToBeExcluded = [
  '18000020601', // Hero & Snorlax
  '19999000015', // Lillie & Prinplup
  '19999000009', // Lillie & Squirtle
  '19999000012', // Lillie & Totodile
  '19999000016', // Hero & Grotle
  '19999000017', // Hero & Serperior
  '19999000018', // Hero & Serperior
  '19999000020', // Hero & Delphox
  '19999000021', // Hero & Tyranitar
  '19999000022', // Lillie & Kommo-o
  '19999000023', // Rosa & Hydreigon
  '19999000010', // Rosa & Bulbasaur
  '19999000013', // Rosa & Cyndaquil
  '10074000000', // Youngster & Cottonee
  '10066000001', // Rival Lear & Hoopa
  '10066000002', // Rival Lear & Hoopa
  '10067000001', // Rival Rachel & Umbreon
  '10068000001', // Rival Sawyer & Honchkrow
];

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
  trainersToBeExcluded,
};
