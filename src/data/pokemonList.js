const pokemonList = [
  'Pikachu',
  'Torkoal',
  'Infernape',
  'Dewgong',
  'Haxorus',
  'Kingdra',
  'Serperior',
  'Vileplume',
  'Mew',
  'Metagross',
  'Charizard',
  'Palossand',
  'Liepard',
  'Houndoom',
  'Raichu',
  'Rotom',
  'Alakazam',
  'Reuniclus',
  'Meowstic',
  'Masquerain',
  'Salazzle',
  'Golisopod',
  'Heliolisk',
  'Swanna',
  'Lucario',
  'Garchomp',
  'Milotic',
  'Steelix',
  'Gallade',
  'Starmie',
  'Torterra',
  'Leavanny',
  'Empoleon',
  'Sharpedo',
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

  Swanna: {
    en: 'Swanna',
    de: 'Swaroness',
    es: 'Swanna',
    fr: 'Lakmécygne',
    it: 'Swanna',
    ja: 'スワンナ',
    ko: '스완나',
    zh: '舞天鵝',
  },

  Lucario: {
    en: 'Lucario',
    de: 'Lucario',
    es: 'Lucario',
    fr: 'Lucario',
    it: 'Lucario',
    ja: 'ルカリオ',
    ko: '루카리오',
    zh: '路卡利歐',
  },

  Garchomp: {
    en: 'Garchomp',
    de: 'Knakrack',
    es: 'Garchomp',
    fr: 'Carchacrok',
    it: 'Garchomp',
    ja: 'ガブリアス',
    ko: '한카리아스',
    zh: '烈咬陸鯊',
  },

  Steelix: {
    en: 'Steelix',
    de: 'Stahlos',
    es: 'Steelix',
    fr: 'Steelix',
    it: 'Steelix',
    ja: 'ハガネール',
    ko: '강철톤',
    zh: '大鋼蛇',
  },

  Gallade: {
    en: 'Gallade',
    de: 'Galagladi',
    es: 'Gallade',
    fr: 'Gallame',
    it: 'Gallade',
    ja: 'エルレイド',
    ko: '엘레이드',
    zh: '艾路雷朵',
  },

  Milotic: {
    en: 'Milotic',
    de: 'Milotic',
    es: 'Milotic',
    fr: 'Milobellus',
    it: 'Milotic',
    ja: 'ミロカロス',
    ko: '밀로틱',
    zh: '美納斯',
  },

  Starmie: {
    // 20012100
    en: 'Starmie',
    de: 'Starmie',
    es: 'Starmie',
    fr: 'Staross',
    it: 'Starmie',
    ja: 'スターミー',
    ko: '아쿠스타',
    zh: '寶石海星',
  },

  Sharpedo: {
    // 20031900
    en: 'Sharpedo',
    de: 'Tohaido',
    es: 'Sharpedo',
    fr: 'Sharpedo',
    it: 'Sharpedo',
    ja: 'サメハダー',
    ko: '샤크니아',
    zh: '巨牙鯊',
  },

  Torterra: {
    // 20038900
    en: 'Torterra',
    de: 'Chelterrar',
    es: 'Torterra',
    fr: 'Torterra',
    it: 'Torterra',
    ja: 'ドダイトス',
    ko: '토대부기',
    zh: '土台龜',
  },

  Empoleon: {
    // 20039500
    en: 'Empoleon',
    de: 'Impoleon',
    es: 'Empoleon',
    fr: 'Pingoléon',
    it: 'Empoleon',
    ja: 'エンペルト',
    ko: '엠페르트',
    zh: '帝王拿波',
  },

  Leavanny: {
    // 20054200
    en: 'Leavanny',
    de: 'Matrifol',
    es: 'Leavanny',
    fr: 'Manternel',
    it: 'Leavanny',
    ja: 'ハハコモリ',
    ko: '모아머',
    zh: '保母蟲',
  },
  // Pokemon: {
  //   en: '',
  //   de: '',
  //   es: '',
  //   fr: '',
  //   it: '',
  //   ja: '',
  //   ko: '',
  //   zh: '',
  // },
};

const getPokemonNameList = (language) =>
  pokemonList
    .map((pokemonName, index) => {
      return {
        key: index,
        name: pokemonName,
        value: namesByLanguage[pokemonName][language], // value changes as language changes. name stays the same so old links and saves are compatible
      };
    })
    .sort((a, b) => {
      let x = a.value;
      let y = b.value;
      return x < y ? -1 : x > y ? 1 : 0;
    });

export default getPokemonNameList;
