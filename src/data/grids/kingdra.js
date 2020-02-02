// green = #73d958
// red = #f24646
// blue = #66B6EC
// purple = #d12deb
// grey = #dedbd3

let kingdraGridDataNoColor = [
  // Center Grids
  { q: 0, r: 0, data: { name: 'Kingdra' }, fill: 'white' },
  {
    q: 0,
    r: -1,
    data: { name: 'Speed + 5', description: 'Speed + 5', energy: 0, cell: 6 }
  },
  {
    q: 0,
    r: 1,
    data: {
      name: 'Defense + 5',
      description: 'Defense + 5',
      energy: 0,
      cell: 3
    }
  },
  {
    q: 1,
    r: -1,
    data: { name: 'HP + 10', description: 'HP + 10', energy: 0, cell: 1 }
  },
  {
    q: 1,
    r: 0,
    data: { name: 'Sp.Atk + 5', description: 'Sp.Atk + 5', energy: 0, cell: 2 }
  },
  {
    q: -1,
    r: 1,
    data: { name: 'Sp.Atk + 5', description: 'Sp.Atk + 5', energy: 0, cell: 4 }
  },
  {
    q: -1,
    r: 0,
    data: { name: 'Sp.Def + 5', description: 'Sp.Def + 5', energy: 0, cell: 5 }
  },
  {
    q: -2,
    r: 1,
    data: {
      name: 'Dragon Guard',
      description:
        'Dragon Guard - Reduces damage when the Pokemon is attacked by Dragon-type moves',
      energy: 5,
      cell: 38
    }
  },

  {
    q: 2,
    r: -1,
    data: { name: 'Speed + 5', description: 'Speed + 5', energy: 2, cell: 29 }
  },
  {
    q: 0,
    r: 3,
    data: {
      name: 'Sync + 25',
      description: 'No Mercy Dragon Pulse Power + 25 [Req. Lv3 Sync]',
      energy: 5,
      cell: 48
    },
    fill: '#dedbd3'
  },
  {
    q: 0,
    r: -3,
    data: {
      name: 'Sync + 25',
      description: 'No Mercy Dragon Pulse Power + 25 [Req. Lv3 Sync]',
      energy: 5,
      cell: 47
    },
    fill: '#dedbd3'
  },

  // Upper Right Grids
  {
    q: 1,
    r: -2,
    data: { name: 'Sp.Atk + 5', description: 'Sp.Atk + 5', energy: 2, cell: 7 }
  },
  {
    q: 1,
    r: -3,
    data: {
      name: 'D.B. + 4',
      description: 'Dragon Breath Power + 4',
      energy: 2,
      cell: 10
    }
  },
  {
    q: 1,
    r: -4,
    data: {
      name: 'D.B. + 4',
      description: 'Dragon Breath Power + 4',
      energy: 3,
      cell: 13
    }
  },
  {
    q: 1,
    r: -5,
    data: {
      name: 'D.B. + 5',
      description: 'Dragon Breath Power + 5 [Req. Lv3 Sync]',
      energy: 5,
      cell: 16
    },
    fill: '#dedbd3'
  },
  {
    q: 2,
    r: -3,
    data: { name: 'Sp.Atk + 5', description: 'Sp.Atk + 5', energy: 2, cell: 8 }
  },
  {
    q: 2,
    r: -4,
    data: {
      name: 'Sp.Def + 5',
      description: 'Sp.Def + 5',
      energy: 2,
      cell: 11
    }
  },
  {
    q: 2,
    r: -5,
    data: {
      name: 'D.B. MGR 3',
      description: 'Dragon Breath Move Gauge Refresh 3',
      energy: 6,
      cell: 14
    }
  },
  {
    q: 2,
    r: -6,
    data: {
      name: 'D.B. H.E. 1',
      description: 'Dragon Breath Hostile Environment 1 [Req. Lv3 Sync]',
      energy: 10,
      cell: 17
    },
    fill: '#dedbd3'
  },
  {
    q: 3,
    r: -4,
    data: {
      name: 'D.B. + 4',
      description: 'Dragon Breath Power + 4',
      energy: 2,
      cell: 9
    }
  },
  {
    q: 3,
    r: -5,
    data: {
      name: 'D.B. + 4',
      description: 'Dragon Breath Power + 4',
      energy: 3,
      cell: 12
    }
  },
  {
    q: 3,
    r: -6,
    data: {
      name: 'D.B. + 5',
      description: 'Dragon Breath Power + 5',
      energy: 5,
      cell: 15
    }
  },

  // Upper Left
  {
    q: -1,
    r: -1,
    data: {
      name: 'X Sp.Atk MPR 3',
      description: 'X Sp.Atk MP Refresh 3',
      energy: 7,
      cell: 41
    }
  },
  {
    q: -1,
    r: -2,
    data: {
      name: 'S.R. 6',
      description:
        "Special Reserves 6 - Once per battle, radically raises the user's Sp.Atk when in a pinch",
      energy: 7,
      cell: 44
    }
  },
  {
    q: -2,
    r: 0,
    data: {
      name: 'Sp.Def + 5',
      description: 'Sp.Def + 5',
      energy: 2,
      cell: 40
    }
  },
  {
    q: -2,
    r: -1,
    data: { name: 'HP + 30', description: 'HP + 30', energy: 10, cell: 43 }
  },
  {
    q: -2,
    r: -2,
    data: {
      name: 'D.M. P.S. 5',
      description: 'Draco Meteor Paralysis Synergy 5 [Req. Lv3 Sync]',
      energy: 10,
      cell: 46
    },
    fill: '#dedbd3'
  },
  {
    q: -3,
    r: 1,
    data: {
      name: 'Defense + 10',
      description: 'Defense + 10',
      energy: 4,
      cell: 39
    }
  },
  {
    q: -3,
    r: 0,
    data: {
      name: 'Y.I.M MPR 3',
      description: 'Victory Is Mine MP Refresh 3',
      energy: 7,
      cell: 42
    }
  },
  {
    q: -3,
    r: -1,
    data: {
      name: 'S.R. 6',
      description:
        "Stamina Reserves 6 - Once per battle, increases the user's move gauge by six when the user is in a pinch [Req. Lv3 Sync]",
      energy: 7,
      cell: 45
    },
    fill: '#dedbd3'
  },

  // Lower Left
  {
    q: -3,
    r: 4,
    data: { name: 'Sp.Atk + 5', description: 'Sp.Atk + 5', energy: 2, cell: 20 }
  },
  {
    q: -3,
    r: 5,
    data: {
      name: 'Rain Gear 3',
      description:
        'Rain Gear 3 - Reduces damage when the Pokemon is hit by an attack move when the weather is rainy',
      energy: 7,
      cell: 23
    }
  },
  {
    q: -3,
    r: 6,
    data: {
      name: 'Sp.Def + 10',
      description: 'Sp.Def + 10',
      energy: 4,
      cell: 26
    }
  },
  {
    q: -2,
    r: 3,
    data: {
      name: 'Defense + 5',
      description: 'Defense + 5',
      energy: 2,
      cell: 19
    }
  },
  {
    q: -2,
    r: 4,
    data: { name: 'Speed + 10', description: 'Speed + 10', energy: 4, cell: 22 }
  },
  {
    q: -2,
    r: 5,
    data: { name: 'Speed + 10', description: 'Speed + 10', energy: 4, cell: 25 }
  },
  {
    q: -2,
    r: 6,
    data: {
      name: 'Dire Rain 1',
      description:
        'Dire Rain 1 - Critical hits land more easily when an attack move is used while the weather is rainy [Req. Lv3 Sync]',
      energy: 10,
      cell: 28
    },
    fill: '#dedbd3'
  },
  {
    q: -1,
    r: 2,
    data: { name: 'HP + 10', description: 'HP + 10', energy: 2, cell: 18 }
  },
  {
    q: -1,
    r: 3,
    data: { name: 'Sp.Atk + 5', description: 'Sp.Atk + 5', energy: 3, cell: 21 }
  },
  {
    q: -1,
    r: 4,
    data: {
      name: 'Raging Rain 5',
      description: 'Raging Rain 5 - Power up moves when the weather is rainy',
      energy: 9,
      cell: 24
    }
  },
  {
    q: -1,
    r: 5,
    data: {
      name: 'Defense + 10',
      description: 'Defense + 10 [Req. Lv3 Sync]',
      energy: 4,
      cell: 27
    },
    fill: '#dedbd3'
  },

  // Lower Right
  {
    q: 3,
    r: -1,
    data: {
      name: 'D.M. + 4',
      description: 'Draco Meteor Power + 4',
      energy: 5,
      cell: 30
    }
  },
  {
    q: 3,
    r: 0,
    data: {
      name: 'D.M. + 4',
      description: 'Draco Meteor Power + 4',
      energy: 5,
      cell: 33
    }
  },
  {
    q: 3,
    r: 1,
    data: {
      name: 'D.M. S.Q. 4',
      description:
        "Draco Meteor Status Quo 4 - Has a good chance of returning the user's lowered stats to normal when a move is successful [Req. Lv3 Sync]",
      energy: 10,
      cell: 36
    },
    fill: '#dedbd3'
  },
  {
    q: 2,
    r: 0,
    data: {
      name: 'Sp.Atk + 10',
      description: 'Sp.Atk + 10',
      energy: 5,
      cell: 31
    }
  },
  {
    q: 2,
    r: 1,
    data: {
      name: 'D.M. Acc + 10',
      description: 'Draco Meteor Accuracy + 10',
      energy: 8,
      cell: 34
    }
  },
  {
    q: 2,
    r: 2,
    data: {
      name: 'D.M. MGR 4',
      description: 'Draco Meteor Move Gauge Refresh 4 [Req. Lv3 Sync]',
      energy: 6,
      cell: 37
    },
    fill: '#dedbd3'
  },
  {
    q: 1,
    r: 1,
    data: {
      name: 'D.M. + 4',
      description: 'Draco Meteor Power + 4',
      energy: 5,
      cell: 32
    }
  },
  {
    q: 1,
    r: 2,
    data: {
      name: 'D.M. + 4',
      description: 'Draco Meteor Power + 4',
      energy: 5,
      cell: 35
    }
  }
];

export default kingdraGridDataNoColor.map((obj, index) => {
  if (!('fill' in obj)) {
    let blueGrids = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      11,
      18,
      19,
      20,
      21,
      22,
      25,
      26,
      27,
      29,
      31,
      39,
      40,
      43
    ];
    let greenGrids = [9, 10, 12, 13, 15, 16, 30, 32, 33, 34, 35];
    let yellowGrids = [23, 24, 28, 38, 44, 45];
    let redGrids = [14, 17, 36, 37, 41, 42, 46];
    let purpleGrids = [47, 48];
    if (blueGrids.indexOf(obj.data.cell) > -1) {
      // 66B6EC - blue
      obj['fill'] = '#66B6EC';
      return obj;
    }
    // green = #73d958
    if (greenGrids.indexOf(obj.data.cell) > -1) {
      obj['fill'] = '#73d958';
      return obj;
    }
    if (yellowGrids.indexOf(obj.data.cell) > -1) {
      obj['fill'] = 'yellow';
      return obj;
    }
    // red = #f24646
    if (redGrids.indexOf(obj.data.cell) > -1) {
      obj['fill'] = '#f24646';
      return obj;
    }
    if (purpleGrids.indexOf(obj.data.cell) > -1) {
      obj['fill'] = 'purple';
      return obj;
    }
  } else {
    return obj;
  }
});
