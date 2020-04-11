const listOfPokemonsWithId = [
  { name: 'Pikachu', id: 20002500, characterId: 18000000000 },
  { name: 'Torkoal', id: 20032401, characterId: 10029000000 },
  { name: 'Infernape', id: 20039200, characterId: 10006000000 },
  { name: 'Dewgong', id: 20008700, characterId: 10032000000 },
  { name: 'Haxorus', id: 20061201, characterId: 10092000000 },
  { name: 'Kingdra', id: 20023000, characterId: 10028000000 },
  { name: 'Serperior', id: 20049701, characterId: 10101000000 },
  { name: 'Vileplume', id: 20004501, characterId: 10008000000 },
  { name: 'Mew', id: 20015100, characterId: 10137000000 },
  { name: 'Metagross', id: 20037600, characterId: 10090000000 },
  { name: 'Charizard', id: 20000600, characterId: 10000000000 },
  { name: 'Palossand', id: 20082301, characterId: 10007000000 },
  { name: 'Liepard', id: 20051001, characterId: 10048000000 },
  { name: 'Houndoom', id: 20022901, characterId: 10062000000 },
  { name: 'Raichu', id: 20002661, characterId: 10098000000 },
  { name: 'Rotom', id: 20047911, characterId: 10106100000 },
  { name: 'Alakazam', id: 20006500, characterId: 10114000000 },
  { name: 'Reuniclus', id: 20057901, characterId: 10095000000 },
  { name: 'Meowstic', id: 20073300, characterId: 10003000000 },
  { name: 'Masquerain', id: 20028301, characterId: 10039000000 },
  { name: 'Salazzle', id: 20080601, characterId: 10121000000 },
  { name: 'Golisopod', id: 20086700, characterId: 10125000000 },
  { name: 'Heliolisk', id: 20073200, characterId: 10131000000 },
];

const namesByLanguage = {
  Pikachu: {
    en: 'Pikachu',
    de: 'Pikachu',
    es: 'Pikachu',
    fr: 'Pikachu',
    it: 'Pikachu',
    ja: 'ピカチュウ',
    ko: '피카츄',
    zh: '皮卡丘',
  },

  Torkoal: {
    en: 'Torkoal',
    de: 'Qurtel',
    es: 'Torkoal',
    fr: 'Chartor',
    it: 'Torkoal',
    ja: 'コータス',
    ko: '코터스',
    zh: '煤炭龜',
  },

  Infernape: {
    en: 'Infernape',
    de: 'Panferno',
    es: 'Infernape',
    fr: 'Simiabraz',
    it: 'Infernape',
    ja: 'ゴウカザル',
    ko: '초염몽',
    zh: '烈焰猴',
  },

  Dewgong: {
    en: 'Dewgong',
    de: 'Jugong',
    es: 'Dewgong',
    fr: 'Lamantine',
    it: 'Dewgong',
    ja: 'ジュゴン',
    ko: '쥬레곤',
    zh: '白海獅',
  },

  Haxorus: {
    en: 'Haxorus',
    de: 'Maxax',
    es: 'Haxorus',
    fr: 'Tranchodon',
    it: 'Haxorus',
    ja: 'オノノクス',
    ko: '액스라이즈',
    zh: '雙斧戰龍',
  },

  Kingdra: {
    en: 'Kingdra',
    de: 'Seedraking',
    es: 'Kingdra',
    fr: 'Hyporoi',
    it: 'Kingdra',
    ja: 'キングドラ',
    ko: '킹드라',
    zh: '刺龍王',
  },

  Serperior: {
    en: 'Serperior',
    de: 'Serpiroyal',
    es: 'Serperior',
    fr: 'Majaspic',
    it: 'Serperior',
    ja: 'ジャローダ',
    ko: '샤로다',
    zh: '君主蛇',
  },

  Vileplume: {
    en: 'Vileplume',
    de: 'Giflor',
    es: 'Vileplume',
    fr: 'Rafflesia',
    it: 'Vileplume',
    ja: 'ラフレシア',
    ko: '라플레시아',
    zh: '霸王花',
  },

  Mew: {
    en: 'Mew',
    de: 'Mew',
    es: 'Mew',
    fr: 'Mew',
    it: 'Mew',
    ja: 'ミュウ',
    ko: '뮤',
    zh: '夢幻',
  },

  Metagross: {
    en: 'Metagross',
    de: 'Metagross',
    es: 'Metagross',
    fr: 'Métalosse',
    it: 'Metagross',
    ja: 'メタグロス',
    ko: '메타그로스',
    zh: '巨金怪',
  },

  Charizard: {
    en: 'Charizard',
    de: 'Glurak',
    es: 'Charizard',
    fr: 'Dracaufeu',
    it: 'Charizard',
    ja: 'リザードン',
    ko: '리자몽',
    zh: '噴火龍',
  },

  Palossand: {
    en: 'Palossand',
    de: 'Colossand',
    es: 'Palossand',
    fr: 'Trépassable',
    it: 'Palossand',
    ja: 'シロデスナ',
    ko: '모래성이당',
    zh: '噬沙堡爺',
  },

  Liepard: {
    en: 'Liepard',
    de: 'Kleoparda',
    es: 'Liepard',
    fr: 'Léopardus',
    it: 'Liepard',
    ja: 'レパルダス',
    ko: '레파르다스',
    zh: '酷豹',
  },

  Houndoom: {
    en: 'Houndoom',
    de: 'Hundemon',
    es: 'Houndoom',
    fr: 'Démolosse',
    it: 'Houndoom',
    ja: 'ヘルガー',
    ko: '헬가',
    zh: '黑魯加',
  },

  Raichu: {
    en: 'Raichu',
    de: 'Raichu',
    es: 'Raichu',
    fr: 'Raichu',
    it: 'Raichu',
    ja: 'ライチュウ',
    ko: '라이츄',
    zh: '雷丘',
  },

  Rotom: {
    en: 'Rotom',
    de: 'Rotom',
    es: 'Rotom',
    fr: 'Motisma',
    it: 'Rotom',
    ja: 'ロトム',
    ko: '로토무',
    zh: '洛托姆',
  },

  Alakazam: {
    en: 'Alakazam',
    de: 'Simsala',
    es: 'Alakazam',
    fr: 'Alakazam',
    it: 'Alakazam',
    ja: 'フーディン',
    ko: '후딘',
    zh: '胡地',
  },

  Reuniclus: {
    en: 'Reuniclus',
    de: 'Zytomega',
    es: 'Reuniclus',
    fr: 'Symbios',
    it: 'Reuniclus',
    ja: 'ランクルス',
    ko: '란쿨루스',
    zh: '人造細胞卵',
  },

  Meowstic: {
    en: 'Meowstic',
    de: 'Psiaugon',
    es: 'Meowstic',
    fr: 'Mistigrix',
    it: 'Meowstic',
    ja: 'ニャオニクス',
    ko: '냐오닉스',
    zh: '超能妙喵',
  },

  Masquerain: {
    en: 'Masquerain',
    de: 'Maskeregen',
    es: 'Masquerain',
    fr: 'Maskadra',
    it: 'Masquerain',
    ja: 'アメモース',
    ko: '비나방',
    zh: '雨翅蛾',
  },

  Salazzle: {
    en: 'Salazzle',
    de: 'Amfira',
    es: 'Salazzle',
    fr: 'Malamandre',
    it: 'Salazzle',
    ja: 'エンニュート',
    ko: '염뉴트',
    zh: '焰后蜥',
  },

  Golisopod: {
    en: 'Golisopod',
    de: 'Tectass',
    es: 'Golisopod',
    fr: 'Sarmuraï',
    it: 'Golisopod',
    ja: 'グソクムシャ',
    ko: '갑주무사',
    zh: '具甲武者',
  },

  Heliolisk: {
    en: 'Heliolisk',
    de: 'Elezard',
    es: 'Heliolisk',
    fr: 'Iguolta',
    it: 'Heliolisk',
    ja: 'エレザード',
    ko: '일레도리자드',
    zh: '光電傘蜥',
  },
};

const getPokemonNameList = (language) =>
  listOfPokemonsWithId
    .map((obj, index) => {
      return {
        ...obj,
        key: index,
        value: namesByLanguage[obj.name][language], // value changes as language changes. name stays the same so old links and saves are compatible
      };
    })
    .sort((a, b) => {
      let x = a.value;
      let y = b.value;
      return x < y ? -1 : x > y ? 1 : 0;
    });

export { listOfPokemonsWithId, getPokemonNameList };
