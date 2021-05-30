const fs = require('fs');

const monsterDB = require('../rawdata/protodump/Monster.json');
const monsterBaseDB = require('../rawdata/protodump/MonsterBase.json');
const trainerDB = require('../rawdata/protodump/Trainer.json');
const trainerBaseDB = require('../rawdata/protodump/TrainerBase.json');

const pokemonNameDBde = require('../rawdata/lsddump/monster_name_de.json');
const pokemonNameDBen = require('../rawdata/lsddump/monster_name_en.json');
const pokemonNameDBes = require('../rawdata/lsddump/monster_name_es.json');
const pokemonNameDBfr = require('../rawdata/lsddump/monster_name_fr.json');
const pokemonNameDBit = require('../rawdata/lsddump/monster_name_it.json');
const pokemonNameDBja = require('../rawdata/lsddump/monster_name_ja.json');
const pokemonNameDBko = require('../rawdata/lsddump/monster_name_ko.json');
const pokemonNameDBzh = require('../rawdata/lsddump/monster_name_zh-TW.json');

const trainerNameDBde = require('../rawdata/lsddump/trainer_name_de.json');
const trainerNameDBen = require('../rawdata/lsddump/trainer_name_en.json');
const trainerNameDBes = require('../rawdata/lsddump/trainer_name_es.json');
const trainerNameDBfr = require('../rawdata/lsddump/trainer_name_fr.json');
const trainerNameDBit = require('../rawdata/lsddump/trainer_name_it.json');
const trainerNameDBja = require('../rawdata/lsddump/trainer_name_ja.json');
const trainerNameDBko = require('../rawdata/lsddump/trainer_name_ko.json');
const trainerNameDBzh = require('../rawdata/lsddump/trainer_name_zh-TW.json');

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

const languages = ['de', 'en', 'es', 'fr', 'it', 'ja', 'ko', 'zh'];

const allGridedTrainers = [
  // for reference
  { trainerBaseId: 10000000, trainerId: 10000000000, monsterBaseId: 20000600 }, // Red & Charizard
  { trainerBaseId: 10000100, trainerId: 10001000000, monsterBaseId: 20082911 }, // Kukui & Lycanroc
  { trainerBaseId: 10000200, trainerId: 10002000000, monsterBaseId: 20015401 }, // Lyra & Meganium
  { trainerBaseId: 10000240, trainerId: 10002400000, monsterBaseId: 20003900 }, // Lyra & Jigglypuff
  { trainerBaseId: 10000300, trainerId: 10003000000, monsterBaseId: 20073400 }, // Calem & Meowstic
  { trainerBaseId: 10000400, trainerId: 10004000000, monsterBaseId: 20050001 }, // Hilda & Emboar
  { trainerBaseId: 10000600, trainerId: 10006000000, monsterBaseId: 20039200 }, // Flint & Infernape
  { trainerBaseId: 10000700, trainerId: 10007000000, monsterBaseId: 20082301 }, // Acerola & Palossand
  { trainerBaseId: 10000740, trainerId: 10007400000, monsterBaseId: 20081911 }, // Acerola & Mimikyu
  { trainerBaseId: 10000800, trainerId: 10008000000, monsterBaseId: 20004501 }, // Erika & Vileplume
  { trainerBaseId: 10000840, trainerId: 10008400000, monsterBaseId: 20086300 }, // Erika & Comfey
  { trainerBaseId: 10001200, trainerId: 10012000000, monsterBaseId: 20044800 }, // Korrina & Lucario
  { trainerBaseId: 10001500, trainerId: 10015000000, monsterBaseId: 20009500 }, // Brock & Onix
  { trainerBaseId: 10001600, trainerId: 10016000000, monsterBaseId: 20058101 }, // Skyla & Swanna
  { trainerBaseId: 10001640, trainerId: 10016400000, monsterBaseId: 20046800 }, // Skyla & Togekiss
  { trainerBaseId: 10001700, trainerId: 10017000000, monsterBaseId: 20013300 }, // Leaf & Eevee
  { trainerBaseId: 10001710, trainerId: 10017100000, monsterBaseId: 20000301 }, // Leaf & Venusaur
  { trainerBaseId: 10001800, trainerId: 10018000000, monsterBaseId: 20016001 }, // Kris & Feraligatr
  { trainerBaseId: 10001900, trainerId: 10019000000, monsterBaseId: 20025400 }, // Brendan & Sceptile
  { trainerBaseId: 10002000, trainerId: 10020000000, monsterBaseId: 20050300 }, // Hilbert & Samurott
  { trainerBaseId: 10002040, trainerId: 10020400000, monsterBaseId: 20026200 }, // Hilbert & Mightyena
  { trainerBaseId: 10002100, trainerId: 10021000000, monsterBaseId: 20001800 }, // Blue & Pidgeot
  { trainerBaseId: 10002101, trainerId: 10021010000, monsterBaseId: 20000900 }, // Blue & Blastoise
  { trainerBaseId: 10002800, trainerId: 10028000000, monsterBaseId: 20023001 }, // Clair & Kingdra
  { trainerBaseId: 10002900, trainerId: 10029000000, monsterBaseId: 20032401 }, // Flannery & Torkoal
  { trainerBaseId: 10003200, trainerId: 10032000000, monsterBaseId: 20008700 }, // Pryce & Dewgong
  { trainerBaseId: 10003900, trainerId: 10039000000, monsterBaseId: 20028401 }, // Viola & Masquerain
  { trainerBaseId: 10004800, trainerId: 10048000000, monsterBaseId: 20051001 }, // Grimsley & Liepard
  { trainerBaseId: 10004810, trainerId: 10048100000, monsterBaseId: 20031900 }, // Grimsley & Sharpedo
  { trainerBaseId: 10004900, trainerId: 10049000000, monsterBaseId: 20047701 }, // Phoebe & Dusknoir
  { trainerBaseId: 10005100, trainerId: 10051000000, monsterBaseId: 20082912 }, // Olivia & Lycanroc
  { trainerBaseId: 10005400, trainerId: 10054000000, monsterBaseId: 20016900 }, // Koga & Crobat
  { trainerBaseId: 10006200, trainerId: 10062000000, monsterBaseId: 20053400 }, // Karen & Houndoom
  { trainerBaseId: 10008900, trainerId: 10089000000, monsterBaseId: 20064400 }, // N & Zekrom
  { trainerBaseId: 10009000, trainerId: 10090000000, monsterBaseId: 20037600 }, // Steven & Metagross
  { trainerBaseId: 10009040, trainerId: 10090400000, monsterBaseId: 20002861 }, // Steven & Sandslash
  { trainerBaseId: 10009100, trainerId: 10091000000, monsterBaseId: 20044501 }, // Cynthia & Garchomp
  { trainerBaseId: 10009101, trainerId: 10091010000, monsterBaseId: 20081800 }, // Cynthia & Kommo-o
  { trainerBaseId: 10009200, trainerId: 10092000000, monsterBaseId: 20061201 }, // Iris & Haxorus
  { trainerBaseId: 10009280, trainerId: 10092800000, monsterBaseId: 20063500 }, // Iris & Hydreigon
  { trainerBaseId: 10009500, trainerId: 10095000000, monsterBaseId: 20057901 }, // Caitlin & Reuniclus
  { trainerBaseId: 10009610, trainerId: 10096100000, monsterBaseId: 20022400 }, // Siebold & Octillery
  { trainerBaseId: 10009800, trainerId: 10098000000, monsterBaseId: 20002661 }, // Hau & Raichu
  { trainerBaseId: 10009900, trainerId: 10099000000, monsterBaseId: 20039500 }, // Barry & Empoleon
  { trainerBaseId: 10010000, trainerId: 10100000000, monsterBaseId: 20062800 }, // Nate & Braviary
  { trainerBaseId: 10010100, trainerId: 10101000000, monsterBaseId: 20049701 }, // Rosa & Serperior
  { trainerBaseId: 10010110, trainerId: 10101100000, monsterBaseId: 20022501 }, // Rosa & Delibird
  { trainerBaseId: 10010200, trainerId: 10102000000, monsterBaseId: 20051800 }, // Bianca & Musharna
  { trainerBaseId: 10010600, trainerId: 10106000000, monsterBaseId: 20052301 }, // Elesa & Zebstrika
  { trainerBaseId: 10010610, trainerId: 10106100000, monsterBaseId: 20047911 }, // Elesa & Rotom
  { trainerBaseId: 10011001, trainerId: 10110000000, monsterBaseId: 20012100 }, // Misty & Starmie
  { trainerBaseId: 10011100, trainerId: 10111000000, monsterBaseId: 20014900 }, // Lance & Dragonite
  { trainerBaseId: 10011140, trainerId: 10111400000, monsterBaseId: 20013000 }, // Lance & Gyarados
  { trainerBaseId: 10011200, trainerId: 10112000000, monsterBaseId: 20015700 }, // Ethan & Typhlosion
  { trainerBaseId: 10011300, trainerId: 10113000000, monsterBaseId: 20020801 }, // Jasmine & Steelix
  { trainerBaseId: 10011400, trainerId: 10114000000, monsterBaseId: 20006500 }, // Sabrina & Alakazam
  { trainerBaseId: 10011500, trainerId: 10115000000, monsterBaseId: 20040500 }, // Volkner & Luxray
  { trainerBaseId: 10011600, trainerId: 10116000000, monsterBaseId: 20038901 }, // Dawn & Torterra
  {
    trainerBaseId: 10011640,
    trainerId: 10116400000,
    monsterBaseId: 2008691111,
  }, // Dawn & Alcremie
  { trainerBaseId: 10011700, trainerId: 10117000000, monsterBaseId: 20084600 }, // Kukui & Incineroar
  { trainerBaseId: 10011800, trainerId: 10118000000, monsterBaseId: 20003500 }, // Lillie & Clefairy
  { trainerBaseId: 10011840, trainerId: 10118400000, monsterBaseId: 20083500 }, // Lillie & Ribombee
  { trainerBaseId: 10011900, trainerId: 10119000000, monsterBaseId: 20086211 }, // Gladion & Silvally
  { trainerBaseId: 10012000, trainerId: 10120000000, monsterBaseId: 20087900 }, // Lusamine & Pheromosa
  { trainerBaseId: 10012100, trainerId: 10121000000, monsterBaseId: 20080601 }, // Plumeria & Salazzle
  { trainerBaseId: 10012200, trainerId: 10122000000, monsterBaseId: 20084900 }, // Elio & Primarina
  { trainerBaseId: 10012300, trainerId: 10123000000, monsterBaseId: 20084300 }, // Selene & Decidueye
  { trainerBaseId: 10012400, trainerId: 10124000000, monsterBaseId: 20081400 }, // Mallow & Tsareena
  { trainerBaseId: 10012500, trainerId: 10125000000, monsterBaseId: 20086700 }, // Guzma & Golisopod
  { trainerBaseId: 10012600, trainerId: 10126000000, monsterBaseId: 20026000 }, // May & Swampert
  { trainerBaseId: 10012640, trainerId: 10126400000, monsterBaseId: 20042800 }, // May & Lopunny
  { trainerBaseId: 10012700, trainerId: 10127000000, monsterBaseId: 20035001 }, // Wallace & Milotic
  { trainerBaseId: 10012800, trainerId: 10128000000, monsterBaseId: 20047500 }, // Wally & Gallade
  { trainerBaseId: 10012900, trainerId: 10129000000, monsterBaseId: 20038400 }, // Zinnia & Rayquaza
  { trainerBaseId: 10013000, trainerId: 10130000000, monsterBaseId: 20071900 }, // Serena & Delphox
  { trainerBaseId: 10013040, trainerId: 10130400000, monsterBaseId: 20054700 }, // Serena & Whimsicott
  { trainerBaseId: 10013100, trainerId: 10131000000, monsterBaseId: 20073200 }, // Clemont & Heliolisk
  { trainerBaseId: 10013200, trainerId: 10132000000, monsterBaseId: 20063700 }, // Alder & Volcarona
  { trainerBaseId: 10013300, trainerId: 10133000000, monsterBaseId: 20025000 }, // Silver & Ho-Oh
  { trainerBaseId: 10013600, trainerId: 10136000000, monsterBaseId: 20076800 }, // Professor Sycamore & Xerneas
  { trainerBaseId: 10013700, trainerId: 10137000000, monsterBaseId: 20015111 }, // Professor Oak & Mew
  { trainerBaseId: 10014800, trainerId: 10148000000, monsterBaseId: 20042600 }, // Morty & Drifblim
  { trainerBaseId: 10015100, trainerId: 10151000000, monsterBaseId: 20042901 }, // Fantina & Mismagius
  { trainerBaseId: 10015300, trainerId: 10153000000, monsterBaseId: 20036200 }, // Glacia & Glalie
  { trainerBaseId: 10015800, trainerId: 10158000000, monsterBaseId: 20028200 }, // Diantha & Gardevoir
  { trainerBaseId: 10017000, trainerId: 10170000000, monsterBaseId: 20054200 }, // Burgh & Leavanny
  { trainerBaseId: 10017040, trainerId: 10170400000, monsterBaseId: 20017500 }, // Burgh & Togepi
  { trainerBaseId: 10019400, trainerId: 10194000000, monsterBaseId: 20048400 }, // Cyrus & Palkia
  { trainerBaseId: 10019500, trainerId: 10195000000, monsterBaseId: 20064611 }, // Ghetsis & Kyurem
  { trainerBaseId: 10019600, trainerId: 10196000000, monsterBaseId: 20076900 }, // Lysandre & Yveltal
  { trainerBaseId: 10021500, trainerId: 10215000000, monsterBaseId: 20033400 }, // Lisia & Altaria
  {
    trainerBaseId: 10024300,
    trainerId: 10243000000,
    monsterBaseId: 2008881200,
  }, // Gloria & Zacian
  {
    trainerBaseId: 10024500,
    trainerId: 10245000000,
    monsterBaseId: 2008771100,
  }, // Marnie & Morpeko
  { trainerBaseId: 10024700, trainerId: 10247000000, monsterBaseId: 20000600 }, // Leon & Charizard
  {
    trainerBaseId: 10024900,
    trainerId: 10249000000,
    monsterBaseId: 2008340000,
  }, // Nessa & Drednaw
  {
    trainerBaseId: 10025000,
    trainerId: 10250000000,
    monsterBaseId: 2008650031,
  }, // Bea & Sirfetch’d
  {
    trainerBaseId: 10025600,
    trainerId: 10256000000,
    monsterBaseId: 2008620031,
  }, // Piers & Obstagoon
  {
    trainerBaseId: 10025700,
    trainerId: 10257000000,
    monsterBaseId: 2008840000,
  }, // Raihan & Duraludon
  { trainerBaseId: 10700000, trainerId: 18000000000, monsterBaseId: 20002500 }, // Hero & Pikachu
  // Newly grided:
  { trainerBaseId: 10016000, trainerId: 10160000000, monsterBaseId: 20085100 }, // Lana & Araquanid
  { trainerBaseId: 10016100, trainerId: 10161000000, monsterBaseId: 20086000 }, // Hala & Crabominable
  { trainerBaseId: 10019200, trainerId: 10192000000, monsterBaseId: 20038300 }, // Maxie & Groudon
  { trainerBaseId: 10019300, trainerId: 10193000000, monsterBaseId: 20038200 }, // Archie & Kyogre
  { trainerBaseId: 10014900, trainerId: 10149000000, monsterBaseId: 20010561 }, // Kiawe & Marowak
  { trainerBaseId: 10700000, trainerId: 18000120000, monsterBaseId: 20087300 }, // Hero & Solgaleo
  { trainerBaseId: 10700000, trainerId: 18000020521, monsterBaseId: 20037700 }, // Hero & Regirock
  { trainerBaseId: 10700000, trainerId: 18000020531, monsterBaseId: 20063800 }, // Hero & Cobalion
  { trainerBaseId: 10003500, trainerId: 10035000001, monsterBaseId: 20002600 }, // Lt. Surge & Raichu
  { trainerBaseId: 10014800, trainerId: 10148000001, monsterBaseId: 20042901 }, // Morty & Mismagius
  { trainerBaseId: 10012900, trainerId: 10129000001, monsterBaseId: 20037300 }, // Zinnia & Salamence
  { trainerBaseId: 10000800, trainerId: 10008000001, monsterBaseId: 20011400 }, // Erika & Tangela
  { trainerBaseId: 10006200, trainerId: 10062000001, monsterBaseId: 20019700 }, // Karen & Umbreon
];

// Update this list (of trainerBaseId) based on new datamine
const gridedTrainerList = [
  // trainerId
  10000000000, // Red & Charizard
  10001000000, // Kukui & Lycanroc
  10002000000, // Lyra & Meganium
  10002400000, // Lyra & Jigglypuff
  10003000000, // Calem & Meowstic
  10004000000, // Hilda & Emboar
  10006000000, // Flint & Infernape
  10007000000, // Acerola & Palossand
  10007400000, // Acerola & Mimikyu
  10008000000, // Erika & Vileplume
  10008400000, // Erika & Comfey
  10012000000, // Korrina & Lucario
  10015000000, // Brock & Onix
  10016000000, // Skyla & Swanna
  10016400000, // Skyla & Togekiss
  10017000000, // Leaf & Eevee
  10017100000, // Leaf & Venusaur
  10018000000, // Kris & Feraligatr
  10019000000, // Brendan & Sceptile
  10020000000, // Hilbert & Samurott
  10020400000, // Hilbert & Mightyena
  10021000000, // Blue & Pidgeot
  10021010000, // Blue & Blastoise
  10028000000, // Clair & Kingdra
  10029000000, // Flannery & Torkoal
  10032000000, // Pryce & Dewgong
  10039000000, // Viola & Masquerain
  10048000000, // Grimsley & Liepard
  10048100000, // Grimsley & Sharpedo
  10049000000, // Phoebe & Dusknoir
  10051000000, // Olivia & Lycanroc
  10054000000, // Koga & Crobat
  10062000000, // Karen & Houndoom
  10089000000, // N & Zekrom
  10090000000, // Steven & Metagross
  10090400000, // Steven & Sandslash
  10091000000, // Cynthia & Garchomp
  10091010000, // Cynthia & Kommo-o
  10092000000, // Iris & Haxorus
  10092800000, // Iris & Hydreigon
  10095000000, // Caitlin & Reuniclus
  10096100000, // Siebold & Octillery
  10098000000, // Hau & Raichu
  10099000000, // Barry & Empoleon
  10100000000, // Nate & Braviary
  10101000000, // Rosa & Serperior
  10101100000, // Rosa & Delibird
  10102000000, // Bianca & Musharna
  10106000000, // Elesa & Zebstrika
  10106100000, // Elesa & Rotom
  10110000000, // Misty & Starmie
  10111000000, // Lance & Dragonite
  10111400000, // Lance & Gyarados
  10112000000, // Ethan & Typhlosion
  10113000000, // Jasmine & Steelix
  10114000000, // Sabrina & Alakazam
  10115000000, // Volkner & Luxray
  10116000000, // Dawn & Torterra
  10116400000, // Dawn & Alcremie
  10118000000, // Lillie & Clefairy
  10118400000, // Lillie & Ribombee
  10119000000, // Gladion & Silvally
  10120000000, // Lusamine & Pheromosa
  10121000000, // Plumeria & Salazzle
  10122000000, // Elio & Primarina
  10123000000, // Selene & Decidueye
  10124000000, // Mallow & Tsareena
  10125000000, // Guzma & Golisopod
  10126000000, // May & Swampert
  10126400000, // May & Lopunny
  10127000000, // Wallace & Milotic
  10128000000, // Wally & Gallade
  10129000000, // Zinnia & Rayquaza
  10130000000, // Serena & Delphox
  10130400000, // Serena & Whimsicott
  10131000000, // Clemont & Heliolisk
  10132000000, // Alder & Volcarona
  10133000000, // Silver & Ho-Oh
  10136000000, // Professor Sycamore & Xerneas
  10137000000, // Professor Oak & Mew
  10148000000, // Morty & Drifblim
  10151000000, // Fantina & Mismagius
  10153000000, // Glacia & Glalie
  10158000000, // Diantha & Gardevoir
  10170000000, // Burgh & Leavanny
  10170400000, // Burgh & Togepi
  10194000000, // Cyrus & Palkia
  10195000000, // Ghetsis & Kyurem
  10196000000, // Lysandre & Yveltal
  10215000000, // Lisia & Altaria
  10243000000, // Gloria & Zacian
  10245000000, // Marnie & Morpeko
  10247000000, // Leon & Charizard
  10249000000, // Nessa & Drednaw
  10250000000, // Bea & Sirfetch’d
  10256000000, // Piers & Obstagoon
  10257000000, // Raihan & Duraludon
  18000000000, // Hero & Pikachu
  // Newly grided 5.27.2021:
  10160000000, // Lana & Araquanid
  10161000000, // Hala & Crabominable
  10192000000, // Maxie & Groudon
  10193000000, // Archie & Kyogre
  10149000000, // Kiawe & Marowak
  18000120000, // Hero & Solgaleo
  18000020521, // Hero & Regirock
  18000020531, // Hero & Cobalion
  10035000001, // Lt. Surge & Raichu
  10148000001, // Morty & Mismagius
  10129000001, // Zinnia & Salamence
  10008000001, // Erika & Tangela
  10062000001, // Karen & Umbreon
  10117000000, // Kukui & Incineroar
];

const newTrainerIdArray = [
  // Newly grided 5.27.2021:
  10160000000, // Lana & Araquanid
  10161000000, // Hala & Crabominable
  10192000000, // Maxie & Groudon
  10193000000, // Archie & Kyogre
  10149000000, // Kiawe & Marowak
  18000120000, // Hero & Solgaleo
  18000020521, // Hero & Regirock
  18000020531, // Hero & Cobalion
  10035000001, // Lt. Surge & Raichu
  10148000001, // Morty & Mismagius
  10129000001, // Zinnia & Salamence
  10008000001, // Erika & Tangela
  10062000001, // Karen & Umbreon
  10117000000, // Kukui & Incineroar
];

/*
 * Usage i.e: node extractAllSyncPairNamesAndIds.js
 * */

const extractAllSyncPairNamesAndIds = () => {
  let syncPairNames = {
    de: {},
    en: {},
    es: {},
    fr: {},
    it: {},
    ja: {},
    ko: {},
    zh: {},
  };

  trainerDB.entries.forEach((entry) => {
    let { trainerId, trainerBaseId, monsterId, type, rarity, role } = entry;

    let thirdEvolvedFormMonsterId = monsterId.toString();
    let secondEvolvedFormMonsterId = monsterId.toString();
    let firstEvolvedFormMonsterId = monsterId.toString();
    // Check if there is an evolved form. If so use the final evolved form's monsterId
    if (
      // BP pairs seem to end in "1":
      // 10035000001, // Lt. Surge & Raichu
      // 10148000001, // Morty & Mismagius
      // 10129000001, // Zinnia & Salamence
      // 10008000001, // Erika & Tangela
      // 10062000001, // Karen & Umbreon
      trainerId !== '10035000000' &&
      trainerId !== '10148000000' &&
      trainerId !== '10129000000' &&
      trainerId !== '10008000000' &&
      trainerId !== '10062000000'
    ) {
      thirdEvolvedFormMonsterId =
        monsterId.toString().substring(0, monsterId.toString().length - 1) +
        '3'; // some pokemon eg. Beedrill's last digit is 3
      secondEvolvedFormMonsterId =
        monsterId.toString().substring(0, monsterId.toString().length - 1) +
        '2';
      firstEvolvedFormMonsterId =
        monsterId.toString().substring(0, monsterId.toString().length - 1) +
        '1';
    }
    if (
      monsterDB.entries.find(
        (monster) => monster.monsterId.toString() === thirdEvolvedFormMonsterId
      )
    ) {
      monsterId = thirdEvolvedFormMonsterId;
    } else if (
      monsterDB.entries.find(
        (monster) => monster.monsterId.toString() === secondEvolvedFormMonsterId
      )
    ) {
      monsterId = secondEvolvedFormMonsterId;
    } else if (
      monsterDB.entries.find(
        (monster) => monster.monsterId.toString() === firstEvolvedFormMonsterId
      )
    ) {
      monsterId = firstEvolvedFormMonsterId;
    }

    // Use monsterId to find monsterBaseId in Monster.json
    let monster = monsterDB.entries.find(
      (monster) => monster.monsterId.toString() === monsterId.toString()
    );
    let monsterBaseId = monster.monsterBaseId;

    // Use monsterBaseId to find actorId in MonsterBase.json
    let monsterBase = monsterBaseDB.entries.find(
      (monsterBase) =>
        monsterBase.monsterBaseId.toString() === monsterBaseId.toString()
    );
    let monsterActorId = monsterBase.actorId;

    // Use trainerBaseId to find trainerNameId in TrainerBase.json
    trainerBase = trainerBaseDB.entries.find(
      (trainerBase) => trainerBase.trainerBaseId === trainerBaseId.toString()
    );
    // let trainerNameId = trainerBase.trainerNameId; // name changed on 9/28/2020
    let trainerNameId = trainerBase.trainerNameIdShort;

    let grided = false;
    if (gridedTrainerList.includes(Number(trainerId))) {
      if (
        trainerBase.trainerBaseId !== '10700000' || // Hero (10700000)
        trainerId === '18000000000' || // Hero & Pikachu
        trainerId === '18000120000' || // Hero & Solgaleo
        trainerId === '18000020521' || // Hero & Regirock
        trainerId === '18000020531' // Hero & Cobalion
      ) {
        grided = true;
      }
    }

    // Identify alts and give them a modified TrainerNameId to help link to their images
    // let trainerActorId = trainerNameId + '_' + trainerId.slice(5, 7);
    // let trainerActorId = trainerBase.actorId;// name changed on 9/28/2020
    let trainerActorId = trainerBase.trainerNameId;

    // Use Ids to find names
    let pokemonName = '';
    let trainerName = '';
    let syncPairName = '';
    languages.forEach((language) => {
      let updatedMonsterBaseId = monsterBaseId;
      // 20003901 is Jigglypuff. Its monsterBaseId is off by 1 in monster_name for some reason. Same for 20003501 Clefairy, 20033601 Seviper, 20007601 Golem, 20007101 Victreebel, 20005301 Persian, 20004901 Venomoth, 20011901 Seaking, 20011501 Kangaskhan, 20051801 Musharna, 20086301 Comfey, 20063501 Hydreigon, 2008771101 Morpeko, 20028201 Gardevoir
      if (monsterBaseId) {
        if (
          monsterBaseId === 20003901 ||
          monsterBaseId === 20033601 ||
          monsterBaseId === 20007601 ||
          monsterBaseId === 20007101 ||
          monsterBaseId === 20005301 ||
          monsterBaseId === 20004901 ||
          monsterBaseId === 20011901 ||
          monsterBaseId === 20003501 ||
          monsterBaseId === 20011501 ||
          monsterBaseId === 20051801 ||
          monsterBaseId === 20086301 ||
          monsterBaseId === 20063501 ||
          monsterBaseId === 2008771101 ||
          monsterBaseId === 20028201 ||
          monsterBaseId === 20011401
        ) {
          updatedMonsterBaseId = Number(
            monsterBaseId.toString().slice(0, -1) + '0'
          );
        }

        pokemonName = pokemonNameDB[language][updatedMonsterBaseId];
        trainerName =
          trainerNameId === 'ch8000'
            ? 'Hero'
            : trainerNameDB[language][trainerNameId];
        syncPairName = `${trainerName} & ${pokemonName}`;
      }

      let pokemonEnglishName = pokemonNameDB['en'][updatedMonsterBaseId];
      let trainerEnglishName =
        trainerNameId === 'ch8000'
          ? 'Hero'
          : trainerNameDB['en'][trainerNameId];
      let syncPairEnglishName = `${trainerEnglishName} & ${pokemonEnglishName}`;

      if (language === 'en') {
        let syncPairNameByLanguage = {
          de: {},
          en: {},
          es: {},
          fr: {},
          it: {},
          ja: {},
          ko: {},
          zh: {},
        };

        let pokemonNameByLanguage = {
          de: {},
          en: {},
          es: {},
          fr: {},
          it: {},
          ja: {},
          ko: {},
          zh: {},
        };

        let trainerNameByLanguage = {
          de: {},
          en: {},
          es: {},
          fr: {},
          it: {},
          ja: {},
          ko: {},
          zh: {},
        };

        languages.forEach((language) => {
          pokemonNameByLanguage[language] =
            pokemonNameDB[language][updatedMonsterBaseId];
          trainerNameByLanguage[language] =
            trainerNameId === 'ch8000'
              ? 'Hero'
              : trainerNameDB[language][trainerNameId];
          syncPairNameByLanguage[
            language
          ] = `${trainerNameByLanguage[language]} & ${pokemonNameByLanguage[language]}`;
        });

        if (trainerBase.trainerBaseId === '10002101') {
          // New Blastoise
          syncPairNames[language][syncPairName] = {
            trainerId: trainerId,
            trainerBaseId: trainerBaseId.toString(),
            trainerNameId: trainerNameId,
            trainerActorId: trainerActorId,
            monsterBaseId: monsterBaseId.toString(),
            monsterActorId: monsterActorId,
            pokemonName: pokemonName,
            trainerName: trainerName,
            type: type,
            rarity: rarity,
            role: role,
            grided: grided,
            pokemonEnglishName: pokemonEnglishName + '_new',
            trainerEnglishName: trainerEnglishName,
            syncPairEnglishName: syncPairEnglishName,
            pokemonNameByLanguage: pokemonNameByLanguage,
            trainerNameByLanguage: trainerNameByLanguage,
            syncPairNameByLanguage: syncPairNameByLanguage,
          };
        } else {
          syncPairNames[language][syncPairName] = {
            trainerId: trainerId,
            trainerBaseId: trainerBaseId.toString(),
            trainerNameId: trainerNameId,
            trainerActorId: trainerActorId,
            monsterBaseId: monsterBaseId.toString(),
            monsterActorId: monsterActorId,
            pokemonName: pokemonName,
            trainerName: trainerName,
            type: type,
            rarity: rarity,
            role: role,
            grided: grided,
            pokemonEnglishName: pokemonEnglishName,
            trainerEnglishName: trainerEnglishName,
            syncPairEnglishName: syncPairEnglishName,
            pokemonNameByLanguage: pokemonNameByLanguage,
            trainerNameByLanguage: trainerNameByLanguage,
            syncPairNameByLanguage: syncPairNameByLanguage,
          };
        }
      } else {
        if (trainerBase.trainerBaseId === '10002101') {
          // New Blastoise
          syncPairNames[language][syncPairName] = {
            trainerId: trainerId,
            trainerBaseId: trainerBaseId.toString(),
            trainerNameId: trainerNameId,
            trainerActorId: trainerActorId,
            monsterBaseId: monsterBaseId.toString(),
            monsterActorId: monsterActorId,
            pokemonName: pokemonName,
            trainerName: trainerName,
            type: type,
            rarity: rarity,
            role: role,
            grided: grided,
            pokemonEnglishName: pokemonEnglishName + '_new',
            trainerEnglishName: trainerEnglishName,
            syncPairEnglishName: syncPairEnglishName,
          };
        } else {
          syncPairNames[language][syncPairName] = {
            trainerId: trainerId,
            trainerBaseId: trainerBaseId.toString(),
            trainerNameId: trainerNameId,
            trainerActorId: trainerActorId,
            monsterBaseId: monsterBaseId.toString(),
            monsterActorId: monsterActorId,
            pokemonName: pokemonName,
            trainerName: trainerName,
            type: type,
            rarity: rarity,
            role: role,
            grided: grided,
            pokemonEnglishName: pokemonEnglishName,
            trainerEnglishName: trainerEnglishName,
            syncPairEnglishName: syncPairEnglishName,
          };
        }

        // if (trainerId === '10008000000') {
        //   console.log('vileplume', syncPairNames[language][syncPairName]);
        // }
      }

      if (newTrainerIdArray.includes(Number(entry.trainerId))) {
        // prints out export statements for trainers in console.
        // if (language === 'en') {
        //   if (trainerName !== 'Hero') {
        //     console.log(
        //       `export { default as ${trainerActorId}_256 } from './256px/${trainerActorId}_256.ktx.png'; // ${trainerName}`
        //     );
        //   }
        // }
        // prints out export statements for pokemon in console.
        if (language === 'en') {
          if (
            trainerName !== 'Hero' ||
            trainerId === '18000120000' || // Hero & Solgaleo
            trainerId === '18000020521' || // Hero & Regirock
            trainerId === '18000020531' // Hero & Cobalion
          ) {
            console.log(
              `export { default as ${monsterActorId}_128 } from './128px/${monsterActorId}_128.ktx.png'; // ${pokemonName}`
            );
          }
        }
      }
      // Prints out monsterBaseId
      if (
        newTrainerIdArray.includes(Number(entry.trainerId)) &&
        language === 'en'
      ) {
        console.log(pokemonEnglishName, updatedMonsterBaseId);
      }
    });
  });
  // prints out export statements in console.
  // console.log(
  //   `export { default as ch8000_00_hero_256 } from './256px/hero.png';`
  // );
  // console.log(
  //   `export { default as ch8001_00_heroine_256 } from './256px/heroine.png';`
  // );

  fs.writeFile(
    `${__dirname}/../../src/data/syncPairNamesAndIds.json`,
    JSON.stringify(syncPairNames),
    (err) => {
      if (err) throw err;
      console.log('Successfully written to file');
    }
  );

  return syncPairNames;
};

extractAllSyncPairNamesAndIds();
