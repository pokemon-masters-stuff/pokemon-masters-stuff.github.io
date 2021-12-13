const allGridedSyncPairs = require('../data/allGridedSyncPairs.json');
const dynamaxSyncPairs = require('../data/dynamaxSyncPairs.json');

const languages = ['de', 'en', 'es', 'fr', 'it', 'ja', 'ko', 'zh'];

const gridedTrainerList = Object.keys(allGridedSyncPairs);

const dynamaxTrainerList = Object.keys(dynamaxSyncPairs);

module.exports = {
  allGridedSyncPairs,
  languages,
  gridedTrainerList,
  dynamaxTrainerList,
};
