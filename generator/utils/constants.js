const allGridedSyncPairs = require('../data/allGridedSyncPairs.json');

const languages = ['de', 'en', 'es', 'fr', 'it', 'ja', 'ko', 'zh'];

const gridedTrainerList = Object.keys(allGridedSyncPairs);

module.exports = {
  allGridedSyncPairs,
  languages,
  gridedTrainerList,
};
