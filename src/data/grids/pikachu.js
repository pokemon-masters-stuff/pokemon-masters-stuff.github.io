import kingdraGrids from './kingdra';
// green = #73d958
// red = #f24646
// blue = #66B6EC
// purple = #d12deb
// grey = #dedbd3

let pikachuGrids = [
  // Center Grids
  {
    q: 0,
    r: 0,
    data: {
      name: 'Pikachu',
      description:
        'Hidden Ability: MC Plot Armor - Thunderbolt Power + 999 when the user is in a pinch',
      energy: 0
    },
    fill: 'white'
  },
  {
    q: 0,
    r: -1,
    data: {
      name: 'Speed + 5',
      description: 'Speed + 5',
      energy: 0
    },
    fill: '#66B6EC'
  },
  {
    q: 0,
    r: 1,
    data: {
      name: 'Defense + 5',
      description: 'Defense + 5',
      energy: 0
    },
    fill: '#66B6EC'
  },
  {
    q: 1,
    r: -1,
    data: { name: 'HP + 10', description: 'HP + 10', energy: 0 },
    fill: '#66B6EC'
  },
  {
    q: 1,
    r: 0,
    data: {
      name: 'Sp.Atk + 5',
      description: 'Sp.Atk + 5',
      energy: 0
    },
    fill: '#66B6EC'
  },
  {
    q: -1,
    r: 1,
    data: {
      name: 'Sp.Atk + 5',
      description: 'Sp.Atk + 5',
      energy: 0
    },
    fill: '#66B6EC'
  },
  {
    q: -1,
    r: 0,
    data: {
      name: 'Sp.Def + 5',
      description: 'Sp.Def + 5',
      energy: 0
    },
    fill: '#66B6EC'
  },
  {
    q: -2,
    r: 1,
    data: {
      name: 'T.B. + 5',
      description: 'Thunderbolt Power + 5',
      energy: 3
    },
    fill: '#73d958'
  },
  {
    q: 2,
    r: -1,
    data: {
      name: 'T.S.+ 4',
      description: 'Thunder Shock Power + 4',
      energy: 2
    },
    fill: '#73d958'
  },
  {
    q: 0,
    r: 3,
    data: {
      name: 'Sync + 25',
      description: 'Thunder of Newfound Passion Power + 25',
      energy: 5
    },
    fill: '#d12deb'
  },
  {
    q: 0,
    r: -3,
    data: {
      name: 'Sync + 25',
      description: 'Thunder of Newfound Passion Power + 25',
      energy: 5
    },
    fill: '#d12deb'
  },

  // Upper Right Grids
  {
    q: 1,
    r: -2,
    data: {
      name: 'Sp.Atk + 5',
      description: 'Sp.Atk + 5',
      energy: 2
    },
    fill: '#66B6EC'
  },
  {
    q: 1,
    r: -3,
    data: {
      name: 'T.S.+ 3',
      description: 'Thunder Shock Power + 3',
      energy: 2
    },
    fill: '#73d958'
  },
  {
    q: 1,
    r: -4,
    data: {
      name: 'T.S.+ 3',
      description: 'Thunder Shock Power + 3',
      energy: 2
    },
    fill: '#73d958'
  },
  {
    q: 1,
    r: -5,
    data: {
      name: 'T.S.+ 5',
      description: 'Thunder Shock Power + 5',
      energy: 2
    },
    fill: '#73d958'
  },
  {
    q: 2,
    r: -3,
    data: {
      name: 'T.B. + 4',
      description: 'Thunderbolt Power + 4',
      energy: 2
    },
    fill: '#73d958'
  },
  {
    q: 2,
    r: -4,
    data: {
      name: 'Sp.Atk + 10',
      description: 'Sp.Atk + 10',
      energy: 5
    },
    fill: '#66B6EC'
  },
  {
    q: 2,
    r: -5,
    data: {
      name: 'J.S. MPR 3',
      description: 'Jump Start Move Gauge Refresh 3',
      energy: 7
    },
    fill: '#f24646'
  },
  {
    q: 2,
    r: -6,
    data: {
      name: 'T.S. MPR 4',
      description: 'Thunder Shock Move Gauge Refresh 4',
      energy: 6
    },
    fill: '#f24646'
  },
  {
    q: 3,
    r: -4,
    data: {
      name: 'T.B. + 4',
      description: 'Thunderbolt Power + 4',
      energy: 2
    },
    fill: '#73d958'
  },
  {
    q: 3,
    r: -5,
    data: {
      name: 'T.B. + 6',
      description: 'Thunderbolt Power + 6',
      energy: 3
    },
    fill: '#73d958'
  },
  {
    q: 3,
    r: -6,
    data: {
      name: 'T.B. MGR 3',
      description: 'Thunderbolt Move Gauge Refresh 3',
      energy: 6
    },
    fill: '#f24646'
  },

  // Upper Left
  {
    q: -1,
    r: -1,
    data: {
      name: 'T.S.+ 4',
      description: 'Thunder Shock Power + 4',
      energy: 2
    },
    fill: '#73d958'
  },
  {
    q: -1,
    r: -2,
    data: {
      name: 'Unyielding 1',
      description: 'Unyielding 1',
      energy: 11
    },
    fill: 'yellow'
  },
  {
    q: -2,
    r: 0,
    data: {
      name: 'P. MPR 3',
      description: 'Potion MP Refresh 3',
      energy: 7
    },
    fill: '#f24646'
  },
  {
    q: -2,
    r: -1,
    data: {
      name: 'Unyielding 1',
      description: 'Unyielding 1',
      energy: 11
    },
    fill: 'yellow'
  },
  {
    q: -2,
    r: -2,
    data: {
      name: 'P. MH 1',
      description: 'Potion Master Healer 1',
      energy: 10
    },
    fill: '#f24646'
  },
  {
    q: -3,
    r: 0,
    data: { name: 'HP + 20', description: 'HP + 20', energy: 4 },
    fill: '#66B6EC'
  },
  {
    q: -3,
    r: 1,
    data: {
      name: 'Defense + 10',
      description: 'Defense + 10',
      energy: 4
    },
    fill: '#66B6EC'
  },
  {
    q: -3,
    r: -1,
    data: {
      name: 'P. MH 1',
      description: 'Potion Master Healer 1',
      energy: 10
    },
    fill: '#f24646'
  },

  // Lower Left
  {
    q: -3,
    r: 4,
    data: {
      name: 'T.S.+ 5',
      description: 'Thunder Shock Power + 5',
      energy: 2
    },
    fill: '#73d958'
  },
  {
    q: -3,
    r: 5,
    data: {
      name: 'T.S. HE 1',
      description: 'Thunder Shock Hostile Enviornment 1',
      energy: 5
    },
    fill: '#f24646'
  },
  {
    q: -3,
    r: 6,
    data: {
      name: 'T.S. HE 1',
      description: 'Thunder Shock Hostile Enviornment 1',
      energy: 5
    },
    fill: '#f24646'
  },
  {
    q: -2,
    r: 3,
    data: {
      name: 'T.S.+ 4',
      description: 'Thunder Shock Power + 4',
      energy: 2
    },
    fill: '#73d958'
  },
  {
    q: -2,
    r: 4,
    data: {
      name: 'Sp.Atk + 10',
      description: 'Sp.Atk + 10',
      energy: 5
    },
    fill: '#66B6EC'
  },
  {
    q: -2,
    r: 5,
    data: {
      name: 'Sp.Atk + 10',
      description: 'Sp.Atk + 10',
      energy: 5
    },
    fill: '#66B6EC'
  },
  {
    q: -2,
    r: 6,
    data: {
      name: 'T.S. HE 1',
      description: 'Thunder Shock Hostile Enviornment 1',
      energy: 5
    },
    fill: '#f24646'
  },
  {
    q: -1,
    r: 2,
    data: {
      name: 'Speed + 5',
      description: 'Speed + 5',
      energy: 2
    },
    fill: '#66B6EC'
  },
  {
    q: -1,
    r: 3,
    data: {
      name: 'T.B. + 4',
      description: 'Thunderbolt Power + 4',
      energy: 3
    },
    fill: '#73d958'
  },
  {
    q: -1,
    r: 4,
    data: {
      name: 'T.B. + 5',
      description: 'Thunderbolt Power + 5',
      energy: 4
    },
    fill: '#73d958'
  },
  {
    q: -1,
    r: 5,
    data: {
      name: 'T.B. HE 1',
      description: 'Thunderbolt Hostile Enviornment 1',
      energy: 5
    },
    fill: '#f24646'
  },

  // Lower Right
  {
    q: 3,
    r: -1,
    data: {
      name: 'Speed + 10',
      description: 'Speed + 10',
      energy: 4
    },
    fill: '#66B6EC'
  },
  {
    q: 3,
    r: 0,
    data: {
      name: 'Defense + 10',
      description: 'Defense + 10',
      energy: 4
    },
    fill: '#66B6EC'
  },
  {
    q: 3,
    r: 1,
    data: {
      name: 'P.R 9',
      description: 'Power Reserves 9',
      energy: 12
    },
    fill: 'yellow'
  },
  {
    q: 2,
    r: 0,
    data: {
      name: 'P.R 5',
      description: 'Power Reserves 5',
      energy: 10
    },
    fill: 'yellow'
  },
  {
    q: 2,
    r: 1,
    data: {
      name: 'Sp.Def + 10',
      description: 'Sp.Def + 10',
      energy: 4
    },
    fill: '#66B6EC'
  },
  {
    q: 2,
    r: 2,
    data: { name: 'HP + 30', description: 'HP + 30', energy: 6 },
    fill: '#66B6EC'
  },
  {
    q: 1,
    r: 1,
    data: {
      name: 'T.B. + 4',
      description: 'Thunderbolt Power + 4',
      energy: 3
    },
    fill: '#73d958'
  },
  {
    q: 1,
    r: 2,
    data: {
      name: 'P.S. 5',
      description: 'Paralysis Synergy 5',
      energy: 10
    },
    fill: 'yellow'
  }
];

// add cell numbers based on Kingdra's map
export default pikachuGrids.map(obj => {
  let correspondingKingdraGrid = kingdraGrids.find(
    kingdraCell => kingdraCell.q === obj.q && kingdraCell.r === obj.r
  );
  obj.data['cellNum'] = correspondingKingdraGrid.data.cellNum || 0;
  return { ...obj };
});
